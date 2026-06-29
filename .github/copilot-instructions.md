# RatioTech SPA - AI Coding Agent Instructions

## Architecture Overview
This is a Next.js 15 App Router project with internationalization (i18n) support for English, Russian, and Kazakh. The app uses middleware-based locale routing where all routes must include a locale prefix (`/en/`, `/ru/`, `/kz/`).

**Critical:** Never create a root `src/app/page.tsx` - all pages must be under `src/app/[locale]/`. The middleware redirects root requests to localized routes.

## Key Components & Data Flow

### Internationalization Pattern
- **Config:** `src/config.ts` defines supported locales and default
- **Middleware:** `middleware.ts` handles locale detection and redirects
- **Translation Loading:** `src/app/i18n.ts` loads JSON messages dynamically
- **Message Files:** `messages/{locale}.json` contain all translations
- **Types:** `src/app/types.d.ts` defines the `Translations` interface

### Layout & Routing Structure
```
src/app/
├── layout.tsx          # Root layout (expects Promise<{locale}> params in Next.js 15)
├── [locale]/
│   └── page.tsx        # Main page for each locale
├── components/
│   └── LanguageSwitcher.tsx  # Client-side locale switching
└── HomeClient.tsx      # Main client component
```

### Translation Usage Pattern
```tsx
// Server components
const t = await getTranslations(locale);

// Client components  
const t = useTranslations();
const locale = useLocale();
```

## Development Workflows

### Build Process
- **Command:** `npm run build`
- **Dev Server:** `npm run dev --turbopack` (uses Turbopack for faster dev builds)
- **Common Issue:** If build fails with layout params error, ensure `params: Promise<{locale: string}>` in Next.js 15

### Translation Management
1. Update `src/app/types.d.ts` when adding new translation keys
2. Add corresponding keys to all `messages/{locale}.json` files
3. Dynamic service translations use pattern: `service1Title`, `service1Desc`, etc.

### Component Patterns
- **Client Components:** Use `"use client"` directive, access locale via `useLocale()`
- **Server Components:** Receive locale from params, use `getTranslations(locale)`
- **Language Switching:** Updates URL programmatically via router.push() to trigger middleware

## Technology Stack
- **Framework:** Next.js 15 (App Router)
- **Internationalization:** next-intl v4.3.4
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (available but not extensively used)
- **TypeScript:** v5 with strict configuration

## File Naming & Structure Conventions
- Locale-specific pages: `[locale]/page.tsx` pattern
- Client components: End with `Client.tsx` (e.g., `HomeClient.tsx`)
- Translation utilities: Keep in `src/app/utils/`
- Component directory: `src/app/components/` for shared UI components

## Critical Dependencies
- Route structure depends on middleware for locale handling
- All translation keys must match the `Translations` interface exactly
- Client-side locale changes require both state update and URL navigation
- Build process validates TypeScript types and runs ESLint checks

## Common Pitfalls
- Don't use `useLocale()` in server components - use params instead
- Always await `params` destructuring in Next.js 15 layouts
- Ensure all translation files have identical key structure
- Remember to handle undefined locale in i18n configuration
