# REMWaste Skip Selection Redesign – React Coding Challenge

This is my submission for the We Want Waste front-end coding challenge. I have redesigned the "Choose Your Skip Size" page in Figam and then coded with a modern, responsive, and animated user interface using React + Vite, TailwindCSS, and Framer Motion.

---

## Objective

> Redesign the "Choose Your Skip Size" page from https://wewantwaste.co.uk and Fetch Data from API while keeping its core functionality.

---

## Features & Improvements

### UI/UX Enhancements

- Completely redesigned layout with a modern, clean look.
- Beautiful **card-based design** for each skip option.
- Responsive grid: adapts for mobile, tablet, and desktop.
- Skip size cards now stand out when selected, with bold ring outlines.
- Each skip has:
  - Title (`X Yard Skip`)
  - Price
  - Hire period
  - Interactive select/deselect button with icons.

### Visual Improvements

- **Hover animation on image**: Scales up using Framer Motion.
- **Selected card highlight**: Green ring + animated check icon.
- Skip images are used to visually differentiate skip sizes.
- Smooth animations when cards mount, hover, or toggle selection.
- Subtle shadows, gradients, and motion effects for professional polish.

### Functionality

- Fully preserves the original logic:
  - Fetches skip data from:  
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
  - Allows selecting and deselecting skip sizes.

### Code Quality

- Clean, modular React code.
- Separated `SkipCard` component for scalability.
- Maintainable TailwindCSS classes.
- Fully responsive with utility-first CSS.

---

## Technologies Used

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [Vite](https://https://vite.dev/) Vite a blazing fast frontend build tool

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/we-want-wast-ui.git
   cd remwaste-skip-ui I want to add figma design as png I created
   ```
