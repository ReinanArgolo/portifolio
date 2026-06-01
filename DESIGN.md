---
name: Synthetic Intelligence Portfolio
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#dcb8ff'
  on-secondary: '#480081'
  secondary-container: '#7701d0'
  on-secondary-container: '#dcb7ff'
  tertiary: '#f9f5ff'
  on-tertiary: '#2f2f40'
  tertiary-container: '#dbd8f0'
  on-tertiary-container: '#5e5e71'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dcb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6700b5'
  tertiary-fixed: '#e3e0f8'
  tertiary-fixed-dim: '#c6c4db'
  on-tertiary-fixed: '#1a1a2b'
  on-tertiary-fixed-variant: '#464558'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a Computer Vision and AI researcher, balancing academic rigor with high-fidelity creative execution. The brand personality is precise, avant-garde, and deeply technical, aiming to evoke a sense of "the digital frontier."

The visual style is a fusion of **Glassmorphism** and **Modern Corporate**, utilizing technical patterns and data-visualization aesthetics. It prioritizes clarity and information density, using thin strokes and subtle luminosity to define space rather than heavy shadows or solid blocks. The interface should feel like a high-end research instrument: functional, sophisticated, and immersive.

## Colors

This design system utilizes a sophisticated dark-mode palette rooted in high-contrast technical accents.

- **Primary (Electric Cyan):** Used for interactive elements, data nodes, and critical highlights. It represents the "vision" and "clarity" of AI.
- **Secondary (Tech Purple):** Used for secondary accents, gradients, and to distinguish complex AI layers or deep-learning categories.
- **Background (Deep Space Navy):** A solid #0a0a1a base that provides maximum contrast for neon accents and glass effects.
- **Surface Tiers:** Surfaces are generated through opacity layers of white or primary colors over the navy background, creating a sense of depth without straying from the dark theme.

## Typography

The typography strategy leverages a hierarchy of three distinct typefaces to communicate different tiers of information.

- **Headlines (Space Grotesk):** Provides a geometric, futuristic character to the portfolio. Large display sizes should use tighter letter-spacing to emphasize the technical construction of the letterforms.
- **Body (Inter):** Ensures maximum legibility for research abstracts, publications, and long-form project descriptions.
- **Labels & Data (JetBrains Mono):** Used for metadata, tags, code snippets, and technical captions. This font signals the "builder" aspect of the researcher's profile.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain the precision of a research paper, transitioning to a fluid model on smaller viewports.

- **Grid:** A 12-column grid is used for desktop. Components should align to a strict 8px baseline rhythm.
- **Breakpoints:** Mobile (<768px), Tablet (768px - 1024px), Desktop (>1024px).
- **Special Layout Elements:** Use subtle 1px grid-line backgrounds (opacity 0.05 primary color) to reinforce the "canvas" feel. Sections are separated by generous vertical whitespace to allow the complex imagery (neural nets, CV renders) room to breathe.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

- **Surface Levels:** 
  - Level 0: Background (#0a0a1a).
  - Level 1: Surface (Background + 4% White overlay).
  - Level 2: Interactive/Floating (Background + 8% White overlay + 20px Backdrop Blur).
- **Outlines:** All glass cards must feature a 1px solid border at 15% opacity of the primary or neutral color to define the edge against the dark background.
- **Glows:** Interactive elements (buttons, active nodes) utilize a soft outer glow (0px 0px 15px) using the Primary Electric Cyan at 30% opacity to simulate a light-emitting screen.

## Shapes

The design uses a **Rounded** (0.5rem / 8px) language for most UI elements to maintain a modern, approachable feel, while specific "Card" containers use a larger 12px (`rounded-lg`) radius for a more sophisticated, "tablet-like" appearance.

- **Small elements (Buttons, Inputs):** 8px radius.
- **Large elements (Project Cards, Modals):** 12px radius.
- **Data Points:** Nodes in neural network visualizations should be perfect circles.

## Components

- **Buttons:** Primary buttons feature a solid Electric Cyan fill with black text. Secondary buttons are "ghost" style with a 1px Cyan border and a subtle hover glow.
- **Cards:** Project cards utilize the glassmorphism style: 1px border, backdrop blur, and a very subtle gradient from Top-Left (Primary at 5% opacity) to Bottom-Right (Transparent).
- **Chips/Tags:** Used for "Tech Stack" or "Research Keywords." Use `label-caps` typography, 4px border radius, and a Tech Purple subtle background (10% opacity).
- **Input Fields:** Minimalist design with only a bottom-border in Neutral/40. Upon focus, the border animates to Primary Electric Cyan with a subtle 2px glow.
- **Neural Network Visualizer:** A custom component representing data flow. Nodes should be Primary Cyan; connecting lines should be 1px wide at 10% opacity, pulsing when "active."
- **Data Tables:** High-density, using `code-md` typography. Zebra striping should be avoided in favor of 1px horizontal dividers.