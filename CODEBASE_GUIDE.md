# Codebase Guide - Segundo Juan Portfolio

## 🏗️ **Project Overview**
- **Framework**: Next.js 14 with App Router
- **CMS**: Outstatic (headless CMS for content management)
- **Styling**: Tailwind CSS with custom CSS variables
- **Design System**: Dark minimal aesthetic, content-focused portfolio
- **Deployment**: Vercel-ready with proper metadata and SEO

## 🎨 **Design Philosophy & Guidelines**

### **Core Principles**
- **Sophisticated, content-focused portfolio** with dark minimal aesthetic
- **Editorial meets developer portfolio** - clean, timeless, highly functional
- **Prioritizes readability, professionalism, and clean hierarchy** over flashy effects

### **What to AVOID**
- ❌ Purple/blue gradients, neon colors, glassmorphism effects
- ❌ Heavy animations, particle systems, floating elements
- ❌ Oversized hero sections, dramatic shadows
- ❌ Multiple accent colors - stick to ONE
- ❌ Typical "AI portfolio" aesthetics

### **Typography Guidelines**
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Inter)
- **Weights**: Light (300), Regular (400), Medium (500), Semi-bold (600)
- **Line Height**: 1.4-1.6 for readability
- **Avoid**: Heavy/black weights, decorative fonts

### **Spacing & Proportions**
- **8px Grid System**: 0.5rem, 1rem, 1.5rem, 2rem, 3rem
- **Main Content Padding**: 2rem
- **Section Spacing**: 2-3rem between major sections
- **Card Grid Gaps**: 1.5rem

### **Interactive Elements**
- **Hover Effects**: Subtle color transitions, no dramatic transforms
- **Transitions**: Quick and smooth (0.2s ease)
- **Focus States**: Maintain accessibility with visible focus indicators
- **No Animations**: Avoid flashy effects, keep interactions minimal

## 🗂️ **Project Structure**

```
blog/
├── src/
│   ├── app/
│   │   ├── (cms)/           # Outstatic admin routes
│   │   │   └── outstatic/
│   │   │       └── [[...ost]]/
│   │   │           └── page.tsx
│   │   ├── (web)/           # Public website routes
│   │   │   ├── career-chat/ # Custom AI chat page
│   │   │   │   └── page.tsx
│   │   │   ├── [...slug]/   # Dynamic routes for posts/pages
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx   # Main layout with dark theme
│   │   │   └── page.tsx     # Homepage with projects grid
│   │   └── api/             # API routes
│   │       └── og/          # Open Graph image generation
│   ├── components/          # React components
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── badge.tsx    # Badge component with variants
│   │   │   ├── button.tsx   # Button component
│   │   │   └── drawer.tsx   # Mobile navigation
│   │   ├── projects-grid.tsx # Projects display component
│   │   ├── content-rows.tsx # Blog posts grid
│   │   ├── doc-hero.tsx     # Post header component
│   │   └── header.tsx       # Navigation header
│   ├── styles/
│   │   └── index.css        # Global styles with CSS variables
│   └── lib/                 # Utility functions
├── outstatic/               # CMS content
│   ├── content/
│   │   ├── posts/           # Blog posts
│   │   │   └── schema.json  # Post schema
│   │   ├── pages/           # Static pages
│   │   │   ├── home.md      # Homepage content
│   │   │   ├── about.md     # About page
│   │   │   ├── career-chat.md # Career chat page
│   │   │   └── curated-finds.md
│   │   └── projects/        # Portfolio projects
│   │       └── plaiatech-healthcare-platform.md
│   └── config.ts            # Outstatic configuration
└── public/                  # Static assets
    └── images/              # Project and blog images
```

## 🎯 **Key Components Deep Dive**

### **1. Projects Grid (`src/components/projects-grid.tsx`)**
- **Purpose**: Displays portfolio projects in card format
- **Data Source**: Fetches from Outstatic CMS `projects` collection
- **Features**: 
  - Two card styles (Classic and Hero)
  - Status indicators (completed, in-progress, planned)
  - Tag system with badges
  - Image support with fallbacks
- **Card Styles**:
  - **Classic**: Image on top, content below, rounded corners
  - **Hero**: Full-height with background image and overlay

### **2. Badge System (`src/components/ui/badge.tsx`)**
- **Variants**: default, secondary, outline, subtle, tag, category
- **Sizes**: sm, md, lg
- **Features**: Subtle hover effects (scale-102, translate-y-0.5)
- **Design**: Rounded corners, consistent shadows, smooth transitions

### **3. Header Navigation (`src/components/header.tsx`)**
- **Features**: Fixed positioning, dark theme, responsive design
- **Navigation**: Auto-populates from CMS pages
- **Styling**: Clean borders, subtle hover effects, proper spacing

### **4. Career Chat Page (`src/app/(web)/career-chat/page.tsx`)**
- **Purpose**: Dedicated page for AI career assistant
- **Features**: Iframe integration with Hugging Face Space
- **Design**: Dark minimal aesthetic, content-focused layout
- **Content**: Information about AI capabilities and contact tools

## 🎨 **CSS Variables & Design System**

### **Color Palette**
```css
:root {
  /* 8px Grid System */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  
  /* Color Palette - Dark Minimal */
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #a3a3a3;
  --text-muted: #737373;
  --accent: #3b82f6;        /* SINGLE accent color */
  --border: #262626;
  --border-light: #404040;
}
```

### **Component Classes**
- **`.content-card`**: Standard card styling with hover effects
- **`.btn-primary`**: Primary button with accent color
- **`.btn-secondary`**: Secondary button with border
- **`.badge`**: Tag/badge styling with hover effects

## 📝 **Content Management (Outstatic)**

### **Collections**
1. **Posts**: Blog posts with tags, metadata, and markdown content
2. **Pages**: Static pages (home, about, career-chat, curated-finds)
3. **Projects**: Portfolio projects with status, tags, and images

### **Project Schema Requirements**
```markdown
---
title: 'Project Title'
status: 'published'           # Must be 'published' to show
description: 'Brief description'
coverImage: '/images/image.png'
publishedAt: '2025-01-27T00:00:00.000Z'
tags:                         # Required for badges
  - value: 'nextjs'
    label: 'Next.js'
  - value: 'typescript'
    label: 'TypeScript'
---
```

### **Page Schema Requirements**
```markdown
---
title: 'Page Title'
status: 'published'           # Must be 'published' to show
author:
  name: 'Segundo Juan'
  picture: 'https://...'
slug: 'page-slug'
description: 'Page description'
coverImage: ''
publishedAt: '2025-01-27T00:00:00.000Z'
---
```

## 🔧 **Technical Implementation Details**

### **Data Fetching Pattern**
```typescript
// Example from projects-grid.tsx
async function getProjects(): Promise<Project[]> {
  const db = await load()
  
  const projects = await db
    .find({ collection: "projects", status: "published" }, [
      "title", "description", "tags", "externalLink", 
      "status", "coverImage", "slug", "featured"
    ])
    .sort({ publishedAt: -1 })
    .toArray()

  return projects
    .filter(project => project.title && project.description)
    .map(project => ({
      // Transform and type-cast for TypeScript compatibility
    }))
}
```

### **Component Architecture**
- **Server Components**: Used for data fetching and static content
- **Client Components**: Minimal, only where interactivity is needed
- **Type Safety**: Full TypeScript implementation with proper interfaces

### **Routing Strategy**
- **App Router**: Next.js 14 App Router with route groups
- **Dynamic Routes**: `[...slug]` for CMS content
- **Custom Routes**: Dedicated pages for special features (career-chat)

## 🚀 **Adding New Features**

### **New Project**
1. Create `.md` file in `outstatic/content/projects/`
2. Follow schema requirements
3. Set status to 'published'
4. Add cover image to `/public/images/`
5. Restart dev server if needed

### **New Page**
1. Create `.md` file in `outstatic/content/pages/`
2. Follow page schema
3. Set status to 'published'
4. Page automatically appears in navigation

### **New Component**
1. Create in `src/components/`
2. Follow existing patterns (CSS variables, minimal effects)
3. Import and use in appropriate pages
4. Maintain dark minimal aesthetic

## 🐛 **Common Issues & Solutions**

### **Projects Not Showing**
- Check `status: 'published'` in markdown frontmatter
- Verify `tags` field exists (even if empty array)
- Ensure `coverImage` has valid path or remove field
- Restart dev server after adding new collections

### **TypeScript Errors**
- Use proper type casting for Outstatic data: `as string | undefined`
- Handle optional fields with proper fallbacks
- Filter out invalid data before mapping

### **Styling Issues**
- Use CSS variables instead of hardcoded values
- Follow 8px grid system for spacing
- Avoid gradients and flashy effects
- Keep transitions to 0.2s ease

## 📱 **Responsive Design**
- **Mobile-first approach** with Tailwind breakpoints
- **Grid layouts** that stack on mobile
- **Consistent spacing** across all screen sizes
- **Touch-friendly** interactive elements

## 🔍 **Performance Considerations**
- **Image optimization** with Next.js Image component
- **Server-side rendering** for CMS content
- **Minimal JavaScript** for smooth interactions
- **Efficient data fetching** with proper filtering

## 🎯 **Future Development Guidelines**
1. **Maintain dark minimal aesthetic** - no gradients or flashy effects
2. **Use CSS variables** for consistent theming
3. **Follow 8px grid system** for spacing
4. **Keep interactions subtle** - 0.2s transitions max
5. **Prioritize content** over visual effects
6. **Use single accent color** (#3b82f6) consistently
7. **Follow established patterns** in existing components

---

**Last Updated**: January 2025
**Version**: 1.0
**Maintainer**: Segundo Juan
