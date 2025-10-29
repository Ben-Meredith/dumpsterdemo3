# Budget Dumpsters - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (Service Industry Leaders)  
Drawing inspiration from successful service platforms like TaskRabbit, Thumbtack, and Home Depot Services - balancing professional credibility with approachable usability. The design emphasizes trust, clarity, and action-oriented layouts that convert visitors into customers.

**Core Principles:**
1. Trust through visual proof (real dumpster photos, service imagery)
2. Clarity in service offerings and pricing structure
3. Frictionless path to booking/contact
4. Professional yet approachable aesthetic

---

## Typography System

**Font Families:**
- **Primary (Headings):** Inter (Bold/Semibold) - Clean, modern, professional
- **Secondary (Body):** Inter (Regular/Medium) - Excellent readability
- **Accent (CTAs):** Inter (Semibold) - Strong call-to-action presence

**Type Scale:**
- Hero Headline: text-5xl to text-6xl (font-bold)
- Section Headers: text-3xl to text-4xl (font-bold)
- Service Cards: text-xl to text-2xl (font-semibold)
- Body Text: text-base to text-lg (font-normal)
- Small Print: text-sm (font-medium)

**Hierarchy Rules:**
- Hero sections use oversized bold typography for immediate impact
- Service titles are prominent but balanced with descriptive text
- Clear visual distinction between primary actions and secondary information

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Consistent use of these values creates rhythmic, professional spacing
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card/component gaps: gap-6 to gap-8
- Internal component padding: p-6 to p-8

**Grid Strategy:**
- Desktop: 3-column for service cards, 2-4 column for dumpster sizes
- Tablet: 2-column maximum
- Mobile: Single column stack

**Container Widths:**
- Full-width hero: w-full with max-w-7xl inner content
- Content sections: max-w-6xl centered
- Text-heavy sections: max-w-4xl for readability

---

## Component Library

### Navigation
- Sticky header with logo left, navigation links center/right
- Mobile: Hamburger menu with slide-in drawer
- Prominent "Book Now" CTA button in header
- Include phone number in header for immediate contact

### Hero Section
- Full-width image background showing black dumpster with orange lid on residential driveway
- Large, bold headline emphasizing value proposition
- Supporting subheadline highlighting same-day service and local ownership
- Dual CTAs: Primary "Get a Quote" + Secondary "View Sizes"
- Buttons with backdrop-blur-md backgrounds for readability over images
- Trust indicators below CTAs: "Locally Owned • Same-Day Service • Affordable Pricing"

### Service Cards (3-column grid)
- Icon at top (use Heroicons - truck, trash, home, clock)
- Service title (text-xl, font-semibold)
- 2-3 sentence description
- Subtle hover lift effect (minimal animation)
- "Learn More" link at bottom

### Dumpster Sizes Section
- Visual comparison cards showing size illustrations
- Each card includes: size name, dimensions, capacity, ideal uses
- 3-4 column grid on desktop
- Prominent sizing information with visual hierarchy
- "Select This Size" CTA on each card

### Photo Gallery
- Masonry-style grid or 3-column even grid
- High-quality images of dumpsters in various settings
- Lightbox functionality for enlarged viewing
- Categories: Residential, Commercial, Construction

### Testimonial Cards
- 2-3 column grid
- Customer name, location, star rating
- Quote in readable text size
- Optional customer photo placeholder
- Subtle border or shadow for definition

### About Section
- 2-column layout: Image left, content right (or vice versa)
- Emphasize local ownership, community focus
- Include team photo or local business imagery
- Key differentiators in bullet format

### Contact/Booking Form
- Clean, minimal form design
- Fields: Name, Phone, Email, Service Type (dropdown), Dumpster Size, Rental Date, Address, Message
- Large, prominent submit button
- Right sidebar (desktop) with contact info, business hours, service area map
- Alternative contact methods: phone, email clearly displayed

### Footer
- 4-column layout: About, Services, Quick Links, Contact
- Newsletter signup with simple email input
- Social media icons
- Trust badges: "Licensed & Insured", "Same-Day Service"
- Service area information
- Copyright and legal links

---

## Images

**Hero Image:** 
Large, professional photograph of a black dumpster with orange lid positioned on a clean residential driveway. Image should convey professionalism and cleanliness. Use as full-width background with overlay for text readability.

**Service Section Images:**
- Dumpster being delivered by truck
- Clean property after junk removal
- Various dumpster sizes side-by-side
- Before/after property cleanout scenarios

**Gallery Images (8-12 photos):**
- Dumpsters in residential driveways
- Construction site placements
- Different sizes in use
- Clean, well-maintained equipment
- Professional delivery/pickup action shots

**About Section Image:**
Owner/team photo or local business storefront showing community connection.

---

## Animations

Use sparingly and purposefully:
- Subtle fade-in on scroll for section reveals
- Gentle hover lift on service cards (translate-y-1)
- Smooth transitions on form focus states
- No parallax effects or complex scroll animations

---

## Accessibility & UX

- High contrast text throughout
- Form labels clearly associated with inputs
- Focus states on all interactive elements
- Alt text for all images
- Semantic HTML structure
- Minimum touch target size: 44x44px
- Clear error messaging in forms
- Loading states for form submission

This design balances professional service credibility with user-friendly simplicity, creating a conversion-focused website that builds trust and makes booking effortless.