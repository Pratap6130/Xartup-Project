# VC Intelligence Interface - Advanced Frontend Design Specification

## PROJECT VISION
Design a premium, enterprise-grade SaaS dashboard for VC Intelligence that combines data visualization, advanced search capabilities, and AI-powered insights into a seamless, professional experience.

---

## DESIGN SYSTEM

### 1. COLOR PALETTE

#### Primary Colors (Brand Identity)
- **Primary Blue**: `#0F172A` (Deep Navy) - Primary brand color
- **Primary Accent**: `#3B82F6` (Vibrant Blue) - CTAs, active states, highlights
- **Secondary Accent**: `#06B6D4` (Cyan) - Secondary actions, hover states
- **Tertiary Accent**: `#8B5CF6` (Purple) - Notifications, premium features

#### Semantic Colors
- **Success**: `#10B981` (Emerald) - Positive actions, confirmations
- **Warning**: `#F59E0B` (Amber) - Caution, warnings
- **Error**: `#EF4444` (Red) - Errors, dangers
- **Info**: `#3B82F6` (Blue) - Information, tips

#### Neutral Colors (Grayscale)
- **50**: `#F9FAFB` (Snow) - Lightest background
- **100**: `#F3F4F6` (Geyser) - Light backgrounds
- **200**: `#E5E7EB` (Concrete) - Borders, dividers
- **300**: `#D1D5DB` (Silver) - Secondary borders
- **400**: `#9CA3AF` (Gray) - Placeholder text
- **500**: `#6B7280` (Stone) - Secondary text
- **600**: `#4B5563` (Charcoal) - Primary text
- **700**: `#374151` (Dark Gray) - Headings
- **800**: `#1F2937` (Dark Slate) - Strong text
- **900**: `#111827` (Almost Black) - Darkest elements

#### Gradients
- **Primary Gradient**: Linear from `#0F172A` to `#3B82F6` (left to right)
- **Accent Gradient**: Linear from `#3B82F6` to `#06B6D4` (top to bottom)
- **Success Gradient**: Linear from `#10B981` to `#34D399` (top-right)
- **Warning Gradient**: Linear from `#F59E0B` to `#FBBF24` (top-right)

### 2. TYPOGRAPHY

#### Type Scale (Responsive)

**Display Heading (xl)**
- Desktop: `48px` weight `700` line-height `1.2`
- Tablet: `40px` weight `700` line-height `1.2`
- Mobile: `32px` weight `700` line-height `1.25`

**Heading 1 (lg)**
- Desktop: `36px` weight `700` line-height `1.3`
- Tablet: `28px` weight `700` line-height `1.3`
- Mobile: `24px` weight `700` line-height `1.35`

**Heading 2 (md)**
- Desktop: `28px` weight `600` line-height `1.3`
- Tablet: `24px` weight `600` line-height `1.3`
- Mobile: `20px` weight `600` line-height `1.4`

**Heading 3 (sm)**
- Desktop: `20px` weight `600` line-height `1.4`
- Tablet: `18px` weight `600` line-height `1.4`
- Mobile: `16px` weight `600` line-height `1.5`

**Body Text (Regular)**
- Desktop: `16px` weight `400` line-height `1.6`
- Tablet: `15px` weight `400` line-height `1.6`
- Mobile: `14px` weight `400` line-height `1.6`

**Body Text (Small)**
- All: `14px` weight `400` line-height `1.5`

**Caption**
- All: `12px` weight `500` line-height `1.4`

**Code/Monospace**
- Font: `JetBrains Mono` or `Fira Code`
- Size: `13px` weight `400` line-height `1.5`

#### Font Families
- **Primary**: `Inter` (sans-serif) - All body and most headings
- **Display**: `Plus Jakarta Sans` (sans-serif) - Hero titles, display text
- **Monospace**: `JetBrains Mono` - Code, technical data, API responses

#### Font Weights
- `300` Light - Subtle, secondary information
- `400` Regular - Default body text, most content
- `500` Medium - Labels, badges, slight emphasis
- `600` SemiBold - Subheadings, emphasis
- `700` Bold - Main headings, CTA text
- `800` ExtraBold - Display headings, highlights

### 3. SPACING & GRID

#### Spacing Scale (8px base unit)
```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
4xl: 64px
5xl: 80px
```

#### Grid System
- Desktop: 12-column grid, 24px gap, 80px margins
- Tablet: 8-column grid, 16px gap, 20px margins
- Mobile: 4-column grid, 12px gap, 16px margins

#### Container Max Width
- Desktop: 1440px
- Tablet: 768px
- Mobile: 100% with padding

### 4. BORDER RADIUS

- `xs`: 2px - Subtle rounded (inputs, small elements)
- `sm`: 4px - Light rounded (cards, buttons)
- `md`: 8px - Standard rounded (modals, cards)
- `lg`: 12px - Prominent rounded (large sections)
- `xl`: 16px - Generous rounded (hero sections)
- `2xl`: 24px - Very rounded (floating elements)
- `full`: 9999px - Fully rounded (pills, badges, avatars)

### 5. SHADOWS & DEPTH

#### Shadow Elevation System
```
Shadow-xs: 
  0 1px 2px 0 rgba(0,0,0,0.05)

Shadow-sm: 
  0 1px 3px 0 rgba(0,0,0,0.1),
  0 1px 2px -1px rgba(0,0,0,0.1)

Shadow-md: 
  0 4px 6px -1px rgba(0,0,0,0.1),
  0 2px 4px -2px rgba(0,0,0,0.1)

Shadow-lg: 
  0 10px 15px -3px rgba(0,0,0,0.1),
  0 4px 6px -4px rgba(0,0,0,0.1)

Shadow-xl: 
  0 20px 25px -5px rgba(0,0,0,0.1),
  0 8px 10px -6px rgba(0,0,0,0.1)

Shadow-2xl: 
  0 25px 50px -12px rgba(0,0,0,0.25)

Shadow-inner: 
  inset 0 2px 4px 0 rgba(0,0,0,0.05)

Shadow-none: none
```

---

## COMPONENT LIBRARY

### BUTTONS

#### Primary Button (CTA)
- **State: Default**
  - Background: Linear gradient `#3B82F6` to `#1E40AF`
  - Text: White `#FFFFFF`
  - Padding: `12px 24px`
  - Border Radius: `8px`
  - Font: `16px` weight `600`
  - Shadow: `shadow-md`
  - Letter Spacing: `-0.5px`

- **State: Hover**
  - Background: Linear gradient `#2563EB` to `#1E3A8A`
  - Box Shadow: `shadow-lg` + inner glow `inset 0 0 20px rgba(255,255,255,0.1)`
  - Transform: `scale(1.02)`
  - Transition: `all 200ms ease-out`

- **State: Active/Pressed**
  - Background: `#1E40AF`
  - Transform: `scale(0.98)`
  - Transition: `all 100ms ease-out`

- **State: Disabled**
  - Background: `#D1D5DB`
  - Text: `#9CA3AF`
  - Cursor: `not-allowed`
  - Opacity: `0.6`

#### Secondary Button
- **State: Default**
  - Background: `#F3F4F6`
  - Border: `1.5px solid #E5E7EB`
  - Text: `#1F2937`
  - Padding: `12px 24px`
  - Border Radius: `8px`
  - Font: `16px` weight `600`
  - Shadow: `shadow-sm`

- **State: Hover**
  - Background: `#E5E7EB`
  - Border: `1.5px solid #D1D5DB`
  - Shadow: `shadow-md`
  - Transform: `translateY(-1px)`

#### Tertiary Button
- **State: Default**
  - Background: Transparent
  - Text: `#3B82F6`
  - Padding: `12px 16px`
  - Border: None
  - Font: `16px` weight `600`

- **State: Hover**
  - Background: `#EFF6FF`
  - Text: `#1E40AF`

#### Icon Button
- Size: `40px × 40px` or `44px × 44px` (for mobile touch)
- Border Radius: `8px` or `full` for circular
- Icon Size: `20px` or `24px`
- Background: Transparent → Hover: `#F3F4F6`
- Color: `#6B7280` → Hover: `#3B82F6`

#### Button Sizes
- **Large**: `16px` font, `14px 32px` padding, `8px` radius
- **Medium**: `16px` font, `12px 24px` padding, `8px` radius (default)
- **Small**: `14px` font, `8px 18px` padding, `6px` radius
- **XSmall**: `12px` font, `6px 12px` padding, `4px` radius

### INPUT FIELDS

#### Text Input
- **Container**: `height 44px` (touch-friendly), flex centered
- **Border**: `1.5px solid #E5E7EB`
- **Border Radius**: `8px`
- **Padding**: `12px 16px`
- **Font**: `16px` weight `400` color `#1F2937`
- **Placeholder**: `14px` color `#9CA3AF`

- **State: Focus**
  - Border: `2px solid #3B82F6`
  - Box Shadow: `0 0 0 3px rgba(59, 130, 246, 0.1)`
  - Outline: None
  - Transition: `all 150ms ease-out`

- **State: Error**
  - Border: `2px solid #EF4444`
  - Box Shadow: `0 0 0 3px rgba(239, 68, 68, 0.1)`

- **State: Disabled**
  - Background: `#F3F4F6`
  - Color: `#9CA3AF`
  - Cursor: `not-allowed`

#### Label
- Font: `14px` weight `500` color `#374151`
- Margin Bottom: `8px`
- Letter Spacing: `-0.2px`

#### Helper Text / Error Message
- Font: `12px` weight `400` color `#6B7280` (helper) or `#EF4444` (error)
- Margin Top: `6px`

#### Search Input
- Height: `44px`
- Icon (left): `20px` color `#9CA3AF`
- Padding: `12px 16px 12px 40px`
- Border Radius: `8px`
- Border: `1.5px solid #D1D5DB`
- Placeholder: "Search companies, keywords..."
- Font: `16px` weight `400`
- **On Focus**: Border `#3B82F6`, background `#F9FAFB`

#### Select Dropdown
- Same styling as text input
- Arrow Icon: `16px` on right, color `#6B7280`
- Dropdown Background: `#FFFFFF`
- Dropdown Border: `1.5px solid #E5E7EB`
- Option Hover: Background `#EFF6FF`
- Option Selected: Background `#DBEAFE` with checkmark icon

### CARDS

#### Standard Card
- Background: `#FFFFFF`
- Border: `1px solid #F3F4F6`
- Border Radius: `12px`
- Padding: `24px`
- Shadow: `shadow-sm`
- Transition: `all 300ms ease-out`

- **State: Hover**
  - Shadow: `shadow-md`
  - Border: `1px solid #E5E7EB`
  - Transform: `translateY(-2px)`

#### Elevated Card
- Shadow: `shadow-lg`
- Border: `1px solid #E5E7EB`

#### Interactive Card (Clickable)
- Cursor: `pointer`
- Hover: Transform `translateY(-4px)`, shadow `shadow-xl`
- Active: Transform `scale(0.98)`

#### Company Card (List Item)
```
Layout:
├── Left: Company Avatar (48×48, rounded full)
├── Center: Company Details
│  ├── H3: Company Name (20px, weight 600)
│  ├── P: Industry Tag (12px, weight 500, color #06B6D4)
│  └── P: Description (14px, weight 400, color #6B7280)
└── Right: Action Button (View →)

Background: #FFFFFF
Border: 1px solid #F3F4F6
Border Radius: 8px
Padding: 16px
Height: 80px
Transition: All 200ms ease-out

Hover State:
- Background: #F9FAFB
- Border: 1px solid #E5E7EB
- Shadow: shadow-md
- Transform: translateX(4px)
```

### BADGES / TAGS

#### Industry Badge
- Font: `12px` weight `500`
- Padding: `4px 12px`
- Border Radius: `full`
- Background: Color-coded gradient (e.g., `#DBEAFE` to `#EFF6FF` for SaaS)
- Color: Brand color (e.g., `#1E40AF`)
- Letter Spacing: `-0.3px`

#### Status Badge
- **Active**: Background `#ECFDF5`, text `#065F46`, icon `✓`
- **Pending**: Background `#FFFBEB`, text `#78350F`, icon `○`
- **Completed**: Background `#DBEAFE`, text `#1E40AF`, icon `✓`
- **Error**: Background `#FEE2E2`, text `#991B1B`, icon `✗`

### MODALS / DIALOGS

#### Overlay
- Background: `rgba(0, 0, 0, 0.5)` with backdrop blur `blur(4px)`
- Z-index: `50`
- Animation: Fade in `300ms ease-out`

#### Modal Container
- Background: `#FFFFFF`
- Border Radius: `16px`
- Shadow: `shadow-2xl`
- Width: `90vw` max `600px` (responsive)
- Max Height: `90vh`
- Overflow: `auto`
- Position: Centered

#### Modal Header
- Padding: `24px`
- Border Bottom: `1px solid #F3F4F6`
- Display: Flex between title and close button
- Title: `24px` weight `700` color `#0F172A`
- Close Button: Icon `20px`, hover background `#F3F4F6`

#### Modal Body
- Padding: `24px`
- Font: `16px` weight `400` color `#1F2937`

#### Modal Footer
- Padding: `16px 24px`
- Border Top: `1px solid #F3F4F6`
- Display: Flex right-aligned
- Button Gap: `12px`

### TABLES

#### Table Header
- Background: `#F9FAFB`
- Border Bottom: `2px solid #E5E7EB`
- Font: `14px` weight `600` color `#374151`
- Padding: `12px 16px`
- Letter Spacing: `-0.3px`

#### Table Row
- Border Bottom: `1px solid #F3F4F6`
- Padding: `16px`
- Font: `14px` weight `400` color `#1F2937`
- Height: `56px`

- **State: Hover**
  - Background: `#F9FAFB`
  - Cursor: `pointer`
  - Transition: `background 150ms ease-out`

- **State: Selected**
  - Background: `#EFF6FF`
  - Border Left: `3px solid #3B82F6`

#### Table Actions
- Button Style: Icon buttons with text
- Spacing: `8px` between actions
- Hover: Icon color `#3B82F6`

### SIDEBAR / NAVIGATION

#### Sidebar Container
- Width: `280px` (desktop), `0` (mobile)
- Height: `100vh`
- Background: Linear gradient from `#0F172A` to `#1F2937`
- Box Shadow: `shadow-lg` on right edge
- Position: `fixed` or `sticky`
- Z-index: `40`
- Transition: Transform `300ms ease-out`

#### Logo Section
- Padding: `24px`
- Display: Flex centered items, gap `12px`
- Logo: `32×32px` with gradient background
- Company Name: `18px` weight `700` color `#FFFFFF`
- Subtitle: `12px` weight `400` color `#D1D5DB`

#### Navigation Items
- Padding: `12px 16px` (vertical inside)
- Margin: `4px 8px` (external)
- Border Radius: `8px`
- Font: `15px` weight `500` color `#D1D5DB`
- Icon: `20px` left-side, color `#9CA3AF`
- Cursor: `pointer`

- **State: Hover**
  - Background: `rgba(255, 255, 255, 0.1)`
  - Color: `#FFFFFF`
  - Icon Color: `#E5E7EB`
  - Transition: `all 150ms ease-out`

- **State: Active**
  - Background: Linear gradient `#3B82F6` to `#06B6D4`
  - Color: `#FFFFFF`
  - Icon Color: `#FFFFFF`
  - Box Shadow: `shadow-md` inset

#### Collapse Arrow
- Icon: `16px`
- Rotation: `0deg` (default) → `180deg` (open)
- Transition: `transform 200ms ease-out`

### TOP BAR / HEADER

#### Header Container
- Height: `64px`
- Background: `#FFFFFF`
- Border Bottom: `1px solid #E5E7EB`
- Box Shadow: `shadow-sm`
- Padding: `0 24px`
- Display: Flex between items
- Z-index: `30`

#### Left Section (Search)
- Flex: `1`
- Max Width: `500px`
- Search Input: (See Input Fields section)

#### Right Section (Actions)
- Display: Flex
- Gap: `16px`
- Align Items: Center

#### User Menu
- Avatar: `40×40px`, border radius `full`, background gradient
- Initials: `16px` weight `600` color `#FFFFFF`
- Dropdown: (See dropdown section)
- When clicked: Slide down from top, animation `slideDown 200ms ease-out`

---

## PAGE LAYOUTS

### HOME PAGE (Landing)

#### Hero Section
```
Container: Full viewport height
Background: Gradient from #0F172A to #1F2937
Padding: 120px 24px

Layout:
├── Content (center, max-width 800px)
│  ├── Badge: "Welcome to VC Intelligence"
│  │   Style: Gradient background, outlined
│  ├── H1: Main Heading (48px, weight 700)
│  │   Text: "AI-Powered Company Intelligence for Smart Investors"
│  │   Color: #FFFFFF
│  │   Line Height: 1.2
│  ├── P: Subheading (20px, weight 400, #D1D5DB)
│  │   Max Width: 600px
│  └── Buttons: CTA + Secondary
│      Gap: 16px
│      Primary: "Explore Companies" (Large)
│      Secondary: "Learn More" (Large)
└── Decorative Elements
    ├── Floating cards with mock data
    ├── Animated gradient orbs
    └── Grid pattern background
```

#### Features Section
```
Container: 1200px max
Padding: 80px 24px

Layout: Grid 1-3 columns (responsive)
├── Feature Card 1
│  ├── Icon: 48×48px, gradient background
│  ├── H3: Feature Title (20px, weight 600)
│  └── P: Description (16px, weight 400, #6B7280)
├── Feature Card 2
└── Feature Card 3

Card Style:
- Background: Gradient overlay on white
- Border: 1px solid rgba(59, 130, 246, 0.2)
- Padding: 32px
- Border Radius: 16px
- Hover: Transform translateY(-8px), shadow-lg
```

#### CTA Section
```
Background: Linear gradient #3B82F6 to #1E40AF
Padding: 60px 24px
Border Radius: 16px
Text Align: Center

Layout:
├── H2: "Ready to Get Started?" (32px, weight 700, #FFFFFF)
├── P: Description (18px, weight 400, #D1D5DB)
└── Button: Primary CTA (Large)
```

### COMPANIES PAGE (List View)

#### Page Header
```
Padding: 32px 24px
Background: #F9FAFB
Border Bottom: 1px solid #E5E7EB

Layout:
├── H1: "Companies" (32px, weight 700, #0F172A)
├── P: Count (14px, weight 400, #6B7280, e.g., "Found 15 companies")
└── Buttons: Filter, Sort, Export
    Alignment: Right-side, gap 8px
```

#### Filter Section
```
Background: #FFFFFF
Padding: 20px 24px
Border Bottom: 1px solid #F3F4F6
Border Radius: 12px (top)

Layout: Grid responsive
├── Search Input (full width)
├── Industry Dropdown
├── Sort Dropdown
└── Filter Button (Icon, shows active filters count)

Spacing: 16px between elements
```

#### Companies Table
```
Structure:
├── Header Row (sticky top)
│  ├── Checkbox (select all)
│  ├── Company (searchable, sortable)
│  ├── Industry (badge)
│  ├── Employees (numeric)
│  ├── Founded (date)
│  └── Actions (view, enrich, add to list)
│
├── Table Rows (interactive)
│  └── Same columns as header
│  └── Hover: Row highlights, shadow
│  └── Selected: Checkbox checked, row background #EFF6FF
│
└── Pagination
   ├── Previous/Next buttons
   ├── Page info "Showing X to Y of Z"
   └── Items per page dropdown (10, 25, 50, 100)
```

#### Pagination Component
```
Layout (bottom right):
├── Dropdown: "10 per page" (left)
├── Info text: "Showing 1-10 of 156" (center)
├── Navigation buttons (right)
   ├── Previous button (disabled if page 1)
   ├── "Page X of Y"
   └── Next button (disabled if last page)

Styling:
- Buttons: Secondary style
- Text: 14px, weight 400, #6B7280
- Padding: 16px 24px
- Background: #F9FAFB
- Border Top: 1px solid #F3F4F6
```

### COMPANY PROFILE PAGE

#### Profile Header
```
Background: Linear gradient from #3B82F6 (60%) to #06B6D4 (100%)
Padding: 48px 24px
Position: Sticky on scroll (with shadow on scroll)

Layout (Grid):
├── Left (flex 1)
│  ├── Avatar: 96×96px, border 4px white, shadow-lg
│  ├── H1: Company Name (40px, weight 700, #FFFFFF)
│  ├── P: Industry Badge (see badge style)
│  └── Meta: Founded year, employees (14px, #D1D5DB)
│
└── Right
   ├── Stats Grid (3 columns)
   │  ├── Stat: "Growth"
   │  ├── Stat: "Market Size"
   │  └── Stat: "Funding"
   │
   └── Buttons (gap 12px)
      ├── Primary: "Get Enrichment"
      ├── Secondary: "Add to List"
      └── Icon: "Share"
```

#### Tabs Navigation
```
Position: Below header, sticky on scroll
Background: #FFFFFF
Border Bottom: 2px solid #E5E7EB

Layout:
├── Overview (active)
├── Enrichment
├── Notes
├── Activity
└── Related

Tab Style:
- Font: 14px weight 600, color #6B7280
- Padding: 16px 24px
- Border Bottom: 2px solid transparent
- Active: Color #3B82F6, border #3B82F6
- Hover: Color #3B82F6
- Transition: all 200ms ease-out
```

#### Overview Tab Content
```
Layout: 3-column grid on desktop, 1 column on mobile

Column 1 (Main)
├── Description Card
│  ├── H3: "About" (20px, weight 600)
│  ├── P: Description text (16px, weight 400, #1F2937)
│  └── Link: "Visit Website" (blue, underline on hover)
│
├── Key Information Card
│  ├── Row: "Industry" | Value
│  ├── Row: "Founded" | Date
│  ├── Row: "Employees" | Count
│  └── Row: "Website" | Link
│
└── Social Links
   ├── LinkedIn → Icon button
   ├── Twitter → Icon button
   └── Crunchbase → Icon button

Column 2 & 3 (Sidebar)
├── Enrichment Section (collapsible/expandable)
│  ├── Header: "AI Enrichment" + badge "Last updated X days ago"
│  ├── Loading state: Skeleton loaders
│  ├── Content:
│  │  ├── Summary (italic #6B7280)
│  │  ├── What They Do (bullet list)
│  │  ├── Keywords (horizontal tags)
│  │  ├── Signals (bullet list with icons)
│  │  └── Sources (gray links)
│  └── Refresh button (icon, hover effect)
│
└── Quick Actions
   ├── Add/Remove from lists
   ├── Add note button
   └── Share button
```

#### Enrichment Section (Detailed)
```
Container: 
- Background: Gradient from #EFF6FF to #F9FAFB
- Border: 1px solid #DBEAFE
- Border Radius: 12px
- Padding: 24px

Header:
├── Icon: Sparkles (✨) in gradient color
├── H3: "AI-Powered Insights" (18px, weight 600, #0F172A)
└── Button: "Refresh" (Icon button with spinner on loading)

Content Areas:
1. Summary
   └── P: 1-2 sentences, italic, #374151

2. What They Do
   └── UL with custom bullet style:
      - Bullet color: #3B82F6
      - Bullet style: Modern square (■)
      - Item padding: 8px 0

3. Keywords
   └── Flex wrap with gap 8px
   └── Badges (see tech stack tags)

4. Signals
   └── Cards grid 2 columns:
      ├── Signal name (14px weight 600)
      ├── Value/description (12px weight 400)
      └── Icon indicator (left side)

5. Sources
   └── Links list:
      ├── Text: source URL or "Company Website"
      ├── Color: #3B82F6
      ├── Hover: underline + icon arrow
      └── Icon: external link (↗)

Loading State:
- Skeleton loader matching layout
- Animation: shimmer effect (left to right)
- Duration: 2 seconds per loop
- Color: gradient transparency

Error State:
- Background: #FEE2E2
- Border: 1px solid #FCA5A5
- Icon: Alert triangle (⚠)
- Text: "Failed to fetch insights. Try again?"
- Button: Retry (prominent)
```

#### Notes Section
```
Container: White background, border 1px #F3F4F6, radius 12px
Padding: 24px

Layout:
├── H3: "Personal Notes" (18px, weight 600)
├── Textarea:
│  ├── Placeholder: "Add your research notes here..."
│  ├── Min height: 200px
│  ├── Font: 14px weight 400, #1F2937
│  ├── Border: 1px solid #E5E7EB on focus → #3B82F6
│  ├── Padding: 12px
│  ├── Character count (bottom right): "0/500"
│  └── Max length: 500 characters
│
├── Actions:
│  ├── Save button (Primary, right-aligned)
│  └── Cancel button (Secondary, if unsaved changes)
│
└── Last edited (timestamp, gray, 12px)
```

### LISTS PAGE

#### Lists Section Header
```
Layout: Between
├── H1: "My Lists" (32px, weight 700)
└── Button: "+ Create New List" (Primary)

Padding: 32px 24px
Background: #F9FAFB
```

#### Create List Form
```
Container: #FFFFFF, border 1px #E5E7EB, radius 12px
Padding: 24px
Margin bottom: 24px

Layout:
├── H2: "Create New List" (20px, weight 600)
├── Form Grid:
│  ├── Input: List name
│  │  ├── Placeholder: "Enter list name..."
│  │  ├── Max length: 50 characters
│  │  └── Character counter
│  ├── Textarea: Description (optional)
│  │  ├── Placeholder: "Add a description..."
│  │  ├── Max length: 200 characters
│  │  └── Height: 80px
│  ├── Dropdown: Category (optional)
│  │  └── Options: Portfolio, Research, Watchlist, Other
│  └── Buttons:
│     ├── Create button (Primary, disabled if name empty)
│     └── Cancel button (Secondary)
│
└── Validation:
   ├── Icon + message for name required
   └── Icon + message for duplicate name
```

#### Lists Grid
```
Layout: Grid 1-2 columns (responsive to 1 on tablet, 1 on mobile)
Gap: 24px
Padding: 24px

Each List Card:
├── Header
│  ├── Flex between
│  ├── Left: H3 list name (18px, weight 600)
│  └── Right: Menu button (⋯)
│     └── Dropdown:
│        ├── Edit List
│        ├── Export as CSV
│        ├── Export as JSON
│        ├── Divider
│        └── Delete List (red text)
│
├── Meta
│  └── "X companies" (14px, #6B7280)
│  └── Last modified (12px, #9CA3AF)
│
├── Companies Preview
│  ├── Show first 3 companies
│  ├── Each: Avatar + name
│  ├── If more: "+X more"
│  └── Alignment: horizontal, overlapping avatars
│
└── Actions
   ├── View List button (Secondary)
   ├── Export CSV button (Icon only)
   └── Export JSON button (Icon only)

Card Background: #FFFFFF
Card Border: 1px solid #F3F4F6
Card Radius: 12px
Card Padding: 20px
Card Hover: shadow-md, border-color #E5E7EB
Card Active: border-color #3B82F6, background #F0F9FF
```

#### Expanded List View
```
Container: Similar to card but expanded
Layout:
├── Header (sticky top section)
│  ├── Back button (← List Name)
│  ├── Action buttons: Export, Edit, Delete
│  └── Border bottom

├── Companies in List
│  ├── If empty:
│  │  ├── Icon: Empty state illustration
│  │  ├── Text: "No companies added yet"
│  │  └── Button: "Add Companies"
│  │
│  └── If populated:
│     └── Table style list:
│        ├── Company Avatar (32×32)
│        ├── Company Name (16px, weight 600)
│        ├── Industry Badge
│        ├── Employees
│        └── Remove button (trash icon, red on hover)

├── Bulk Actions (if items selected)
│  ├── Checkbox: Select all
│  ├── Info: "X selected"
│  └── Actions: Export, Delete, Move to List
│
└── Pagination (if many companies)
```

### SAVED SEARCHES PAGE

#### Page Header
```
Styling: Same as Companies page
├── H1: "Saved Searches" (32px, weight 700)
├── P: "X searches saved" (14px, #6B7280)
└── Button: "+ Save New Search" (Primary)
```

#### Searches Grid
```
Layout: Grid 1-3 columns (responsive)
Gap: 24px
Padding: 24px

Each Search Card:
├── Header
│  ├── H3: Search name (18px, weight 600)
│  ├── Badge: Date created (12px, gray background)
│  └── Menu button (⋯)
│     └── Dropdown:
│        ├── Edit Name
│        ├── Duplicate
│        ├── Divider
│        └── Delete (red)
│
├── Query Display
│  ├── Section: "Query"
│  └── Code block (monospace, gray background)
│     └── Text (truncated, selectable)
│
├── Filters Display (if any)
│  ├── Section: "Filters Applied"
│  └── Grid of filter tags
│
└── Actions
   ├── Apply Search button (Primary)
   └── View Results button (Secondary)

Card: White background, border 1px #F3F4F6, radius 12px
Card Hover: shadow-md, transform translateY(-2px)
```

#### Save Search Modal
```
Modal Header: "Save Search"
Modal Body:
├── Input: Search name
│  ├── Label: "Name this search"
│  ├── Placeholder: "My important search"
│  └── Max: 50 characters
│
├── Textarea: Description
│  ├── Label: "Description (optional)"
│  ├── Placeholder: "Why am I saving this search?"
│  ├── Max: 200 characters
│  └── Height: 80px
│
├── Dropdown: Category
│  ├── Label: "Category"
│  └── Options: Portfolio, Watchlist, Research, Other
│
└── Checkbox: "Make as default search"

Modal Footer:
├── Save button (Primary)
└── Cancel button (Secondary)
```

---

## ANIMATIONS & INTERACTIONS

### Micro-interactions

#### Button Press
```
Duration: 150ms
Keyframes:
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
```

#### Input Focus
```
Duration: 200ms
Properties: border-color, box-shadow, background
Easing: ease-out
Target:
  Border: transparent → #3B82F6
  Shadow: 0 0 0 3px rgba(59, 130, 246, 0.1)
```

#### Card Hover
```
Duration: 300ms
Properties: transform, shadow
Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
Target:
  Transform: translateY(0) → translateY(-4px)
  Shadow: shadow-sm → shadow-lg
```

#### Page Transition
```
Duration: 300ms
Type: Fade + Slide up
Initial state:
  Opacity: 0
  Transform: translateY(20px)
Final state:
  Opacity: 1
  Transform: translateY(0)
Easing: ease-out
```

#### Loading Spinner
```
Animation: Rotating gradient
Duration: 2s
Rotation: 0deg → 360deg
Easing: linear
Color: Gradient #3B82F6 → #06B6D4
```

#### Shimmer Loader (Skeletons)
```
Duration: 2s
Type: Sliding gradient overlay
Direction: Left to right
Colors:
  0%: rgba(255, 255, 255, 0)
  50%: rgba(255, 255, 255, 0.3)
  100%: rgba(255, 255, 255, 0)
Easing: ease-in-out
```

### Page Transitions
```
Current Page → Next Page
1. Current page fades out + slides up (150ms)
2. New page loads
3. New page fades in + slides up from bottom (300ms)
Total: ~450ms
```

### Notification/Toast Animations
```
Enter:
  Duration: 300ms
  Transform: translateX(400px) → translateX(0)
  Opacity: 0 → 1

Exit:
  Duration: 300ms
  Transform: translateX(0) → translateX(400px)
  Opacity: 1 → 0

Position: Bottom right, 24px from edge
```

---

## RESPONSIVE DESIGN

### Breakpoints
- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

### Responsive Behavior

#### Mobile (< 640px)
- Sidebar: Overlay drawer (hamburger menu)
- Top bar: Full width, adjusted spacing
- Tables: Horizontal scroll or card view
- Grids: 1 column
- Modals: Full height, bottom sheet slide-in
- Typography: -2px base size
- Padding: 16px global

#### Tablet (641px - 1024px)
- Sidebar: Visible but narrower (240px)
- Columns: 2 columns for lists/tables
- Grids: 2 columns
- Typography: -1px base size
- Padding: 20px global

#### Desktop (> 1024px)
- Sidebar: Full width (280px)
- Columns: 3+ columns
- Grids: 3+ columns
- Typography: Full size
- Padding: 24px global

---

## ACCESSIBILITY & INCLUSIVE DESIGN

### Color Contrast
- **AA Compliance**: Minimum 4.5:1 for text
- **AAA Compliance**: Minimum 7:1 for critical text
- All interactive elements: At least 4.5:1 contrast

### Focus States
- All interactive elements have visible focus (2px outline)
- Focus outline color: `#3B82F6`
- Focus outline offset: `2px`

### Semantic HTML
- Use `<button>` for buttons (not `<div>`)
- Use `<a>` for links (not `<button>`)
- Use `<label>` for form fields
- Use `aria-label` for icon-only buttons
- Use `aria-describedby` for error messages

### ARIA Attributes
- `role="navigation"` for nav elements
- `aria-current="page"` for active nav item
- `aria-invalid="true"` for error inputs
- `aria-live="polite"` for notifications
- `aria-expanded` for expanding elements

### Keyboard Navigation
- Tab through all interactive elements
- Spacebar to activate buttons
- Enter to submit forms
- Escape to close modals
- Arrow keys in dropdowns/lists

### Motion
- Respect `prefers-reduced-motion`
- Fade-only animations for reduced motion
- No auto-playing animations

### Text Sizing
- Allow text zoom up to 200%
- Don't use fixed font sizes only
- Line height: minimum 1.5 for body text

---

## VISUAL HIERARCHY & COMPOSITION

### Primary Entry Points (Visual Weight)
1. **Main CTA Button** - Highest contrast, largest
2. **Page Headings** - Bold, large, distinct color
3. **Search/Filter Controls** - Prominent placement
4. **Key Metrics** - Highlighted, prominent

### Secondary Elements
- Labels, helper text (smaller, muted)
- Non-critical actions (secondary buttons)
- Supporting information (gray text)
- Metadata (12px, #6B7280)

### Visual Density
- **Desktop**: Standard (comfortable spacing)
- **Tablet**: Comfortable (medium spacing)
- **Mobile**: Compact (minimal but readable)

---

## DARK MODE (Future Optional)

### Dark Palette
- Background: `#0F172A`
- Surface: `#1F2937`
- Surface-Secondary: `#374151`
- Text Primary: `#F3F4F6`
- Text Secondary: `#D1D5DB`
- Border: `#4B5563`

### Implementation
- CSS Variables for colors
- Media query: `prefers-color-scheme: dark`
- Toggle in user menu
- LocalStorage for preference

---

## DESIGN TOKENS (CSS VARIABLES)

```css
:root {
  /* Colors */
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-900: #1E40AF;
  
  --color-gray-50: #F9FAFB;
  --color-gray-200: #E5E7EB;
  --color-gray-600: #4B5563;
  --color-gray-900: #111827;
  
  /* Typography */
  --font-family-primary: 'Inter', sans-serif;
  --font-family-display: 'Plus Jakarta Sans', sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px 0 rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
  
  /* Z-index Scale */
  --z-dropdown: 20;
  --z-sticky: 30;
  --z-header: 30;
  --z-sidebar: 40;
  --z-modal: 50;
  --z-toast: 60;
}
```

---

## IMPLEMENTATION GUIDELINES

### Frontend Architecture
- **Component Structure**: Atomic design (atoms, molecules, organisms)
- **State Management**: React Context or Zustand
- **Styling**: Tailwind CSS with component classes
- **Icons**: Heroicons for consistency
- **Form Validation**: Real-time with clear error states
- **API Integration**: Optimistic updates with loading states

### File Organization
```
components/
├── atoms/           # Basic building blocks (Button, Input, Badge)
├── molecules/       # Simple components (Card, SearchBox)
├── organisms/       # Complex components (Header, Sidebar, Table)
├── layouts/         # Page layouts (MainLayout, AuthLayout)
└── hooks/           # Custom React hooks
```

### Performance
- **Lazy load** images and modals
- **Code split** pages automatically
- **Memoize** expensive computations
- **Debounce** search/filter inputs
- **Skeleton screens** for loading states
- **Optimize** images (WebP, responsive)

### Testing
- Unit tests for utilities
- Component tests with React Testing Library
- E2E tests with Playwright
- Visual regression testing for consistency
- Accessibility testing with axe-core

---

## DESIGN SYSTEM USAGE RULES

1. **Always use design tokens** - Never hardcode colors/spacing
2. **Maintain contrast ratios** - Minimum 4.5:1 for text
3. **Use consistent spacing** - Only multiples of 4px
4. **Follow typography scale** - Predefined sizes only
5. **Keep it responsive** - Test at all breakpoints
6. **Animate purposefully** - Only meaningful motion
7. **Test accessibility** - Keyboard & screen reader
8. **Document components** - Include usage examples
9. **Version the system** - Track changes over time
10. **Get feedback early** - Iterate with users

---

## SUMMARY

This design system creates a **premium, professional SaaS experience** that is:
- ✅ **Visually cohesive** - Consistent tokens across all pages
- ✅ **Highly responsive** - Perfect on all devices
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Performance-optimized** - Fast, smooth, efficient
- ✅ **User-centric** - Clear, intuitive, delightful
- ✅ **Enterprise-grade** - Professional, trustworthy, scalable

**Ready to implement!** 🎉
