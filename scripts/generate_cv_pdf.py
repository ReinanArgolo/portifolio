#!/usr/bin/env python3
"""Generate the public PDF CV from its canonical HTML content."""

from html import escape
from html.parser import HTMLParser
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "public" / "reinan-lopes-argolo-cv.html"
PDF_PATH = ROOT / "public" / "reinan-lopes-argolo-cv.pdf"


class CVParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []
        self.current_tag = None
        self.current_class = ""
        self.buffer = []

    def handle_starttag(self, tag, attrs):
        if tag in {"h1", "h2", "p", "li"}:
            self.current_tag = tag
            self.current_class = dict(attrs).get("class", "")
            self.buffer = []

    def handle_data(self, data):
        if self.current_tag:
            self.buffer.append(data)

    def handle_endtag(self, tag):
        if tag == self.current_tag:
            text = " ".join("".join(self.buffer).split())
            if text:
                self.items.append((tag, self.current_class, text))
            self.current_tag = None
            self.current_class = ""
            self.buffer = []


def main():
    parser = CVParser()
    parser.feed(HTML_PATH.read_text(encoding="utf-8"))

    font_dir = Path("/usr/share/fonts/liberation-sans-fonts")
    pdfmetrics.registerFont(TTFont("DejaVu", str(font_dir / "LiberationSans-Regular.ttf")))
    pdfmetrics.registerFont(TTFont("DejaVu-Bold", str(font_dir / "LiberationSans-Bold.ttf")))

    styles = {
        "h1": ParagraphStyle(
            "CVTitle",
            fontName="DejaVu-Bold",
            fontSize=22,
            leading=25,
            textColor=HexColor("#00363a"),
            spaceAfter=3 * mm,
        ),
        "h2": ParagraphStyle(
            "CVSection",
            fontName="DejaVu-Bold",
            fontSize=11.5,
            leading=14,
            textColor=HexColor("#006a71"),
            spaceBefore=4.2 * mm,
            spaceAfter=1.4 * mm,
            borderWidth=0,
            borderPadding=0,
        ),
        "p": ParagraphStyle(
            "CVBody",
            fontName="DejaVu",
            fontSize=9.2,
            leading=12.2,
            textColor=HexColor("#182022"),
            spaceAfter=1.6 * mm,
        ),
        "meta": ParagraphStyle(
            "CVMeta",
            fontName="DejaVu",
            fontSize=8.2,
            leading=10.5,
            textColor=HexColor("#4b5a5c"),
            spaceAfter=1.1 * mm,
        ),
        "li": ParagraphStyle(
            "CVListItem",
            fontName="DejaVu",
            fontSize=8.9,
            leading=11.4,
            leftIndent=4 * mm,
            firstLineIndent=-3 * mm,
            bulletIndent=0,
            spaceAfter=1.1 * mm,
        ),
    }

    story = []
    for tag, class_name, text in parser.items:
        style = styles["meta"] if tag == "p" and class_name == "meta" else styles[tag]
        if tag == "li":
            story.append(Paragraph(escape(text), style, bulletText="•"))
        else:
            story.append(Paragraph(escape(text), style))
        if tag == "h2":
            story.append(Spacer(1, 0.3 * mm))

    document = SimpleDocTemplate(
        str(PDF_PATH),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=15 * mm,
        bottomMargin=15 * mm,
        title="CV - Reinan Lopes Argolo",
        author="Reinan Lopes Argolo",
    )
    document.build(story)


if __name__ == "__main__":
    main()
