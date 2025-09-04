# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## Project Architecture

This is a Next.js 15 storefront application for "Backlight" using:
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling with custom Backlight color palette
- **shadcn/ui** components with New York style variant
- **Radix UI** primitives for accessible components
- **next-themes** for dark mode support

### Key Architecture Patterns

**Component Structure:**
- UI components in `src/components/ui/` following shadcn/ui patterns
- Specialized components in subfolders (e.g., `navbar-components/`)
- Custom utilities in `src/lib/utils.ts` using clsx and tailwind-merge

**Styling System:**
- Custom Backlight color palette defined in globals.css with `@theme backlight`
- Consistent dark/light theme support via CSS variables
- Custom fonts: Geist Sans/Mono as primary, Caveat Brush for decorative text
- Animated gradient backgrounds for brand consistency

**Import Aliases:**
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/ui` → `src/components/ui`
- `@/hooks` → `src/hooks`

### Custom Components

**FuzzyText (`src/components/ui/text/FuzzyText.tsx`):**
- Canvas-based animated text effect with configurable distortion
- Used for hero branding elements
- Supports hover interactions and customizable intensities

**Navbar (`src/components/ui/navbar.tsx`):**
- Responsive design with mobile hamburger menu
- Uses Radix NavigationMenu with icon integration
- Centered layout with search and theme toggle

### File Organization

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage with hero section
│   ├── globals.css     # Global styles and Backlight theme
│   └── shop/           # Shop section pages
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── navbar-components/ # Navbar-specific components
│   └── text/           # Text effect components
└── lib/
    └── utils.ts        # Utility functions (cn helper)
```

### Theme System

The project uses a comprehensive custom color system:
- Backlight brand colors (purple, blurple, gray variants)
- Automatic dark/light mode switching
- CSS custom properties for consistent theming
- Integration with Tailwind's design tokens