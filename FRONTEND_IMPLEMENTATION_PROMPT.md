# VC Intelligence - Advanced Frontend Implementation Prompt

## EXECUTIVE SUMMARY

You are tasked with redesigning and implementing an **advanced, production-grade frontend** for the VC Intelligence platform. The goal is to create a sophisticated SaaS dashboard that combines enterprise-grade UI/UX with cutting-edge design patterns.

**Key Objectives:**
- Implement a comprehensive design system with Tailwind CSS
- Create reusable, accessible component library
- Design premium visual hierarchy and transitions
- Build responsive, mobile-first interfaces
- Ensure WCAG 2.1 AA accessibility compliance
- Optimize for performance and user experience

---

## DETAILED IMPLEMENTATION REQUIREMENTS

### 1. DESIGN SYSTEM & CONFIGURATION

#### Tailwind CSS Configuration
```
Extend the tailwind.config.js with:

1. Custom Color Palette (as per design spec)
   - Primary: #0F172A, #3B82F6, #06B6D4, #8B5CF6
   - Extended neutral scale (50-900)
   - Semantic colors (success, warning, error, info)
   - Gradient definitions

2. Typography Scale
   - 4 font families (Inter, Plus Jakarta Sans, JetBrains Mono)
   - 8 font sizes (sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl)
   - 5 font weights (300, 400, 500, 600, 700, 800)
   - Custom line-height scale

3. Spacing Scale
   - Extend spacing: xs (4px), sm (8px), md (12px), lg (16px), xl (24px), etc.
   - Container queries for responsive spacing

4. Border Radius
   - Standard radius values (xs, sm, md, lg, xl, 2xl, full)
   - Predefined radius combinations

5. Shadow System
   - 7 elevation levels (xs, sm, md, lg, xl, 2xl, inner, none)
   - Blur and offset variations
   - Inner shadow for insets

6. Animation System
   - Predefined transitions (fast: 150ms, base: 200ms, slow: 300ms)
   - Transform keyframes (slideUp, slideDown, fadeIn, etc.)
   - Easing functions (ease-out, cubic-bezier, etc.)
   - Shimmer/skeleton loader animation
   - Rotating gradient loader

7. Plugins
   - Custom @apply utilities for common patterns
   - Animation extensions
   - Gradient utilities
   - Container queries support
```

#### CSS Variables (globals.css)
```
Create root CSS variables for:
- All colors from design spec
- Typography scales
- Spacing values
- Shadows
- Transitions
- Z-index stacking context
- Breakpoints

Include dark mode variables (future-proofing)
Support prefers-reduced-motion for accessibility
```

### 2. COMPONENT LIBRARY

#### Atomic Components (Buttons, Inputs)

**Button Component** (`Button.tsx`)
```typescript
Props:
- variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- state: 'default' | 'loading' | 'disabled'
- icon?: ReactNode (left or right)
- fullWidth?: boolean
- rounded?: 'sm' | 'md' | 'lg' | 'full'
- onClick, type, disabled, etc.

Features:
- Loading spinner animation
- Icon support with proper alignment
- Ripple effect on click (optional)
- Keyboard focus indicator
- Smooth transitions (150ms)
- Touch-friendly minimum 44×44px
```

**Input Component** (`Input.tsx`)
```typescript
Props:
- type: 'text' | 'email' | 'password' | 'number' | 'date'
- placeholder, value, onChange, disabled
- error: string (error message)
- label: string
- helperText: string
- icon: ReactNode
- maxLength, required, etc.

Features:
- Animated label (floats on focus)
- Error state styling
- Character counter (if maxLength)
- Icon left/right positioning
- Clear button (conditional)
- Accessibility labels
- Custom input styles matching design
```

**Select Component** (`Select.tsx`)
```typescript
Props:
- options: { value, label }[]
- value, onChange
- placeholder, disabled
- searchable: boolean
- clearable: boolean
- multi: boolean
- label, error

Features:
- Dropdown with smooth animation
- Search/filter functionality
- Custom option rendering
- Keyboard navigation (arrow keys)
- Accessibility ARIA attributes
- Custom styling per design spec
```

**Badge Component** (`Badge.tsx`)
```typescript
Props:
- variant: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
- size: 'sm' | 'md' | 'lg'
- icon?: ReactNode
- closeable?: boolean
- onClose?: () => void

Features:
- Predefined color schemes
- Gradient backgrounds
- Icon support
- Removable badges
- Smooth transitions
```

#### Form Components

**Form Container** (`Form.tsx`)
```typescript
Features:
- Two-column layout on desktop, 1 on mobile
- Automatic spacing between fields
- Error accumulation and display
- Submit handling
- Reset functionality
- Loading state
- Success/error message display
```

**FormField** (`FormField.tsx`)
```typescript
Props:
- label, error, helperText
- required: boolean
- layout: 'horizontal' | 'vertical'
- children (input components)

Features:
- Automatic label/error association
- Accessibility labels
- Consistent spacing
- Validation indicator
```

#### Card Components

**Card** (`Card.tsx`)
```typescript
Props:
- variant: 'default' | 'elevated' | 'outlined' | 'interactive'
- padding: 'sm' | 'md' | 'lg' | 'xl'
- rounded: 'sm' | 'md' | 'lg' | 'xl'
- hover: boolean (enable hover effect)
- onClick?: () => void
- children

Features:
- Smooth shadow transitions
- Border on hover option
- Transform on hover
- Keyboard accessible if clickable
- Responsive padding
```

**CompanyCard** (`CompanyCard.tsx`)
```typescript
Props:
- company: Company
- selected?: boolean
- onSelect?: () => void
- onAdd?: () => void
- onView?: () => void

Features:
- Company avatar, name, industry
- Hover effects with elevation
- Action buttons smooth reveal
- Selection checkbox
- Responsive layout
- Skeleton loader while loading
```

#### Table Components

**Table** (`Table.tsx`)
```typescript
Features:
- Sticky header on scroll
- Sortable columns
- Selectable rows with checkbox
- Hover row highlighting
- Responsive (horizontal scroll on mobile)
- Pagination integration
- Empty state rendering
```

**TableHeader** (`TableHeader.tsx`)
```typescript
Props:
- columns: { id, label, sortable, width }[]
- sortBy, sortOrder, onSort

Features:
- Column headers with sort indicators
- Resize handles (optional)
- Sticky positioning
- Proper contrast
```

**TableRow** (`TableRow.tsx`)
```typescript
Props:
- data: { id, values[] }
- columns: ColumnConfig[]
- selected: boolean
- onSelect: () => void
- onClick?: () => void

Features:
- Consistent cell sizing
- Hover state
- Selection state
- Action menu on hover
- Responsive cell content
```

#### Navigation Components

**Sidebar** (`Sidebar.tsx`)
```typescript
Props:
- open: boolean
- onClose: () => void
- isCollapsed?: boolean

Features:
- Smooth slide-in animation on mobile
- Logo section with brand
- Navigation items with active state
- Collapse/expand toggle
- Tooltip on hover
- Scrollable content area
- Z-index management
- Backdrop overlay on mobile
```

**NavItem** (`NavItem.tsx`)
```typescript
Props:
- icon: ReactNode
- label: string
- href: string
- active: boolean
- badge?: ReactNode
- onClick?: () => void

Features:
- Icon + label layout
- Active state styling
- Hover effects
- Badge for notifications
- Smooth transitions
- Keyboard focus indicators
```

**Header** (`Header.tsx`)
```typescript
Props:
- showSearch: boolean
- onMenuClick: () => void

Features:
- Logo on mobile
- Search input (main desktop search)
- Right-side actions (user menu, notifications, settings)
- Sticky positioning
- Responsive layout (hamburger on mobile)
- Box shadow on scroll (detect via IntersectionObserver)
```

**SearchBar** (`SearchBar.tsx`)
```typescript
Props:
- value, onChange, onSearch
- placeholder
- onClear?: () => void

Features:
- Search icon left, clear icon right
- Debounced search (300ms)
- Recent searches dropdown
- Recent searches persistence (localStorage)
- Keyboard shortcuts (Cmd+K to focus)
- Search results preview on typing
```

#### Modal/Dialog Components

**Modal** (`Modal.tsx`)
```typescript
Props:
- open: boolean
- onClose: () => void
- title: string
- size: 'sm' | 'md' | 'lg' | 'xl'
- closeOnBackdrop: boolean
- closeButton: boolean
- children

Features:
- Backdrop blur effect
- Smooth fade-in animation
- Slide from bottom on mobile
- Center on desktop
- Focus trap (keyboard tab cycling)
- Escape key to close
- Prevent scroll on body
- Backdrop click handling
```

**Dialog** (`Dialog.tsx`)
```typescript
Subset of Modal with:
- Simpler styling
- Default action buttons
- Confirm/Cancel pattern
- Returns a promise-like pattern
```

**BottomSheet** (`BottomSheet.tsx`)
```typescript
Mobile-specific:
- Slides up from bottom
- Gesture support (drag down to close)
- Safe area consideration
- Rounded top corners
- Smooth momentum scroll
```

#### Notification Components

**Toast** (`Toast.tsx`)
```typescript
Props:
- type: 'success' | 'error' | 'warning' | 'info'
- title: string
- message?: string
- action?: { label, onClick }
- duration: number (auto-dismiss)
- onClose: () => void

Features:
- Icons for each type
- Auto-dismiss after duration
- Slide in from bottom-right (desktop)
- Slide in from top (mobile)
- Action button support
- Close button
- Progress bar for auto-dismiss
- Sound notification (optional)
```

**NotificationCenter** (`NotificationCenter.tsx`)
```typescript
Features:
- Stack multiple toasts
- Maximum 3 toasts visible
- Queue management
- Smooth animations
- Accessibility announcements
```

#### Loading States

**Skeleton** (`Skeleton.tsx`)
```typescript
Props:
- width, height
- variant: 'text' | 'circular' | 'rect'
- animation: 'pulse' | 'shimmer' | 'wave'

Features:
- Shimmer animation (wave effect)
- Matches component shape
- Customizable speed
- Wave direction (RTL support)
```

**Spinner** (`Spinner.tsx`)
```typescript
Props:
- size: 'sm' | 'md' | 'lg'
- color: 'primary' | 'inherit'

Features:
- Rotating gradient spinner
- Smooth infinite animation
- Color variants
- Size variants
```

**ProgressBar** (`ProgressBar.tsx`)
```typescript
Props:
- value: number (0-100)
- variant: 'determinate' | 'indeterminate'
- label?: string
- animated: boolean

Features:
- Linear gradient fill
- Smooth value transitions
- Color coding (warning at 80%, error at 90%)
- Label optional
```

### 3. LAYOUT COMPONENTS

#### MainLayout
```typescript
Props:
- children: ReactNode
- hideSidebar?: boolean

Structure:
- Sidebar (fixed left)
- Header (sticky top)
- Main content area
- Footer (sticky bottom)

Responsive:
- Sidebar hidden on mobile
- Hamburger menu in header
- Full-width content on mobile
```

#### PageHeader
```typescript
Props:
- title: string
- description?: string
- breadcrumbs?: BreadcrumbItem[]
- actions?: ReactNode[]

Features:
- Sticky on scroll
- Shadow on scroll detection
- Breadcrumb navigation
- Action buttons right-aligned
- Responsive title sizing
```

#### ContentSections
```typescript
FilterSection, StatsSection, etc.
- Consistent spacing
- Responsive grid
- Clear visual hierarchy
```

### 4. PAGE-SPECIFIC IMPLEMENTATIONS

#### Home Page
```
Components needed:
- HeroSection with gradient background
- FeaturesGrid (3 cards with icons)
- CTASection (gradient background, centered)
- StatsSection (numerics with icons)
- TestimonialCarousel (optional)
- FAQAccordion
- FooterCTA

Animations:
- Hero fade-in with stagger
- Feature cards slide-up on scroll
- Stats count-up animation
- CTA buttons with hover effects
- Scroll-triggered animations
```

#### Companies List Page
```
Components needed:
- PageHeader with title/count
- FilterSection (search, industry select, sort)
- CompanyTable with:
  - Sticky header
  - Sortable columns
  - Row selection
  - Hover actions
  - Responsive scroll
- Pagination component
- Empty state (if no companies)
- Loading skeleton (while loading)

Features:
- Client-side search debounce
- Column sorting
- Multi-select with bulk actions
- Persist sort/filter in URL params
- Smooth transitions
```

#### Company Profile Page
```
Components needed:
- ProfileHeader (sticky, with gradient)
- TabsNavigation (Overview, Enrichment, Notes, Activity)
- TabContent sections:
  - About section
  - Key information grid
  - EnrichmentSection (with loading states)
  - NotesEditor (with save button)
  - RelatedCompanies slider
- Sidebar actions
  - Add to List modal
  - Share button
  - More actions menu

Features:
- Image gallery with lightbox
- Sticky header on scroll
- Smooth tab switching
- Enrichment fallback states
- Notes auto-save (with unsaved indicator)
- Share functionality
- Related companies carousel
```

#### Lists Page
```
Components needed:
- PageHeader with "+ Create List" button
- CreateListForm (modal or inline)
- ListsGrid showing:
  - List name, count, preview companies
  - Edit, delete, export buttons
- Empty state
- ExpandedListView when clicking list
  - Companies in list table
  - Bulk actions
  - Export options
- List edit modal

Features:
- Create inline or modal
- Drag-drop to reorder (optional)
- Bulk operations
- Export with formatting
- Confirmation on delete
- Recent lists on top
```

#### Saved Searches Page
```
Components needed:
- PageHeader
- SaveSearchModal
- SearchesGrid cards showing:
  - Search name, date, results count
  - Query/filters preview
  - Actions: Apply, Edit, Delete
- Empty state
- Filter searches (by date, type)

Features:
- Save current search from Companies page
- Preset searches (Popular, Recent)
- Search suggestions
- Delete with confirmation
```

### 5. STYLING STRATEGY

#### CSS Approach
```
Use Tailwind CSS with:
1. Utility-first for most styling
2. @apply for component classes (when needed)
3. CSS variables for dynamic values
4. CSS modules for scoped styles (if needed)

File structure:
- globals.css: Tailwind imports, root CSS vars, base styles
- components.css: @apply-based component classes
- animations.css: Custom animations
- utilities.css: Custom utility classes
```

#### Responsive Design
```
Mobile-first approach:
- Write mobile styles first
- Use md:, lg:, xl: prefixes for larger screens
- Test at: 375px, 768px, 1024px, 1440px

Responsive utilities:
- hidden md:hidden lg:block (progressive enhancement)
- grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- text-sm md:text-base lg:text-lg
- p-4 md:p-6 lg:p-8
```

#### Dark Mode (Optional Future Implementation)
```
Strategy:
- Use color-scheme CSS var
- Separate dark palette
- Toggle in user settings
- Persist in localStorage
- Smooth transition on toggle (150ms)
```

### 6. INTERACTIONS & ANIMATIONS

#### Smooth Transitions
```
All interactive elements should have:
- transition: all 200ms ease-out (default)
- Focus indicator: 2px solid #3B82F6
- Hover states: color, background, shadow, transform

Specific animations:
- Button press: scale(0.95) on click
- Card hover: translate(-4px) shadow-lg
- Input focus: border-color, box-shadow
- Page navigation: fade + slide-up (300ms)
- Modal entrance: fade + scale-in (300ms)
```

#### Loading States
```
- Skeleton loaders with shimmer effect
- Spinner during data fetch
- Progress bar for multi-step forms
- Disable buttons while loading
- Show "Loading..." text with spinner
- Placeholder content for tables/cards
```

### 7. ACCESSIBILITY REQUIREMENTS

#### ARIA Attributes
```
- All buttons with aria-label if icon-only
- Form fields with associated labels
- aria-invalid for error states
- aria-live="polite" for dynamic content
- aria-expanded for collapsible sections
- aria-current="page" for active nav items
- role="presentation" for decorative elements
```

#### Keyboard Navigation
```
- All interactive elements focusable (tabindex)
- Focus order should be logical (top-left to bottom-right)
- Escape to close modals
- Enter to submit forms
- Arrow keys in dropdowns/lists
- Spacebar to toggle checkboxes
- Visual focus indicator (2px outline)
```

#### Screen Reader Support
```
- Semantic HTML (button, a, nav, etc.)
- Skip to main content link
- Headings hierarchy (h1 → h6)
- Alt text for images
- Form error messages linked to inputs
- ARIA live regions for updates
- Landmarks structure (nav, main, aside)
```

#### Color & Contrast
```
- Minimum 4.5:1 contrast for regular text
- Minimum 7:1 contrast for large text
- Minimum 3:1 for graphics
- Don't rely on color alone (use icons, patterns)
- Test with WAVE, Axe, or similar tools
```

#### Motion & Seizure Safety
```
- No animations longer than 3 seconds
- No flashing content (more than 3 times per second)
- Respect prefers-reduced-motion:
  * Remove animations
  * Disable parallax
  * Simplify transitions (fade only)
```

### 8. PERFORMANCE OPTIMIZATIONS

#### Code Splitting
```
- Lazy load pages with React.lazy()
- Suspense boundaries with loading fallback
- Dynamic imports for heavy components
- Split vendor bundles
```

#### Image Optimization
```
- Use next/image for all images
- WebP format with PNG fallback
- Responsive srcset
- Lazy load below-fold images
- Optimize size for device
```

#### State Management
```
- Minimize re-renders with memo, useMemo
- Debounce expensive operations
- Pagination to limit DOM size
- Virtual scrolling for long lists
- Avoid prop drilling (Context API)
```

#### Bundle Size
```
- Monitor bundle with next/bundle-analyzer
- Tree-shake unused CSS
- Reduce icon library size (use only needed)
- Compress assets with gzip/brotli
- Target: < 100KB main bundle (gzipped)
```

### 9. TESTING REQUIREMENTS

#### Unit Tests
```
- Test utility functions
- Test component prop variations
- Test error boundaries
- Accessibility checks

Tools:
- Jest + React Testing Library
- axe-core for accessibility
- Visual regression with Percy
```

#### Component Tests
```
- Test user interactions
- Test API integration
- Test error states
- Test loading states

Example:
- Click button → action triggered
- Type in search → results filtered
- Submit form → validation shown
```

#### E2E Tests
```
- Full user flows
- Multiple page navigation
- Form submissions
- List operations

Tools:
- Playwright or Cypress
- Test on Chrome, Firefox, Safari
```

#### Accessibility Testing
```
- Keyboard navigation audit
- Screen reader testing
- Color contrast verification
- Focus indicator visibility
- ARIA attribute correctness
```

### 10. BROWSER & DEVICE SUPPORT

#### Browsers
```
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
```

#### Devices
```
- iPhone SE / 12 / 14 (iOS 14+)
- Samsung Galaxy S21 (Android 11+)
- iPad (12.9")
- Desktop 1440p
- High-DPI displays (2x, 3x)
```

---

## DELIVERABLES

1. **Component Library**
   - ✅ 40+ reusable components
   - ✅ Storybook documentation
   - ✅ Usage examples
   - ✅ TypeScript types

2. **Styling System**
   - ✅ Tailwind config with design tokens
   - ✅ CSS variables for dynamic theming
   - ✅ Animation definitions
   - ✅ Responsive utilities

3. **Page Implementations**
   - ✅ 6 fully designed pages
   - ✅ Responsive layouts
   - ✅ Loading states
   - ✅ Error states

4. **Documentation**
   - ✅ Component API docs
   - ✅ Design system guide
   - ✅ Usage examples
   - ✅ Accessibility checklist

5. **Quality Metrics**
   - ✅ Lighthouse score 90+
   - ✅ WCAG 2.1 AA compliance
   - ✅ Bundle size < 150KB (gzipped)
   - ✅ Core Web Vitals excellent

---

## SUCCESS CRITERIA

✅ **Design Fidelity**
- Components match design spec (95%+ accuracy)
- Colors, typography, spacing exact
- Animations smooth and purposeful

✅ **Functionality**
- All interactions work as intended
- Forms validate and submit correctly
- Data displays and updates properly

✅ **Performance**
- First paint < 2 seconds
- Interactive < 3.5 seconds
- No layout shifts (CLS < 0.1)

✅ **Accessibility**
- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader compatible
- Color contrast verified

✅ **Maintainability**
- Clean, well-documented code
- Reusable components
- Consistent patterns
- Easy for team to extend

---

## TIME ESTIMATION

- **Component Library**: 40-50 hours
- **Page Implementation**: 30-40 hours
- **Styling & Polish**: 20-30 hours
- **Accessibility Audit**: 10-15 hours
- **Testing & QA**: 15-20 hours
- **Documentation**: 10-15 hours

**Total**: 135-170 hours (3-4 weeks with 1 developer)

---

## NEXT STEPS

1. Finalize design system tokens
2. Set up project with Tailwind CSS
3. Create component library folder structure
4. Build atomic components first
5. Build complex components
6. Implement page layouts
7. Test responsive design
8. Audit accessibility
9. Optimize performance
10. Document and deploy

---

**Ready to build the future of VC Intelligence!** 🚀
