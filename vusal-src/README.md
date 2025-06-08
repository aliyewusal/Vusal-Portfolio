# Vusal Aliyev - Personal Website

This repository contains the source code for Vusal Aliyev's personal website, a professional portfolio showcasing skills and projects as a Software Test Automation Engineer.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

If you don't have pnpm installed, you can install it using:

```bash
npm install -g pnpm
```

### Installation

1. Extract the zip file to your desired location
2. Navigate to the project directory:

```bash
cd vusal-src
```

3. Install dependencies:

```bash
pnpm install
```

### Development

To start the development server:

```bash
pnpm run dev
```

This will start the development server at `http://localhost:5173/`.

### Building for Production

To build the website for production:

```bash
pnpm run build
```

This will create a `dist` directory with the production-ready files.

### Previewing the Production Build

To preview the production build locally:

```bash
pnpm run preview
```

## Project Structure

- `src/` - Source code
  - `assets/` - Static assets like images
  - `components/` - React components
    - `ui/` - UI components from shadcn/ui
    - `layout/` - Layout components (Navbar, Footer, etc.)
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions and libraries
  - `pages/` - Page components
  - `App.jsx` - Main App component
  - `main.jsx` - Entry point

## Customization

### Changing Content

To update the content of the website, you can modify the following files:

- `src/pages/Home.jsx` - Home page content
- `src/pages/About.jsx` - About page content
- `src/pages/Projects.jsx` - Projects page content
- `src/pages/Skills.jsx` - Skills page content
- `src/pages/Contact.jsx` - Contact page content

### Changing Styles

The website uses Tailwind CSS for styling. You can modify the styles in the respective component files.

### Changing Theme

The theme configuration is in `src/lib/theme.js`. You can modify the colors and other theme variables there.

## Deployment

1. Build the website for production:

```bash
pnpm run build
```

2. Deploy the contents of the `dist` directory to your web hosting provider.

3. Configure your domain as described in the domain setup guide.

## Technologies Used

- React
- Tailwind CSS
- Framer Motion
- React Router
- shadcn/ui

## License

This project is for personal use only. All rights reserved.

## Contact

For any questions or inquiries, please contact:

- Email: wusalizade@gmail.com
- GitHub: https://github.com/aliyewusal

