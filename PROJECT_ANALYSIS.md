# Adiban Aviation - Project Analysis

## Project Overview
**Adiban Aviation Private Limited** - Official website for an Indian Aerospace & Defense technology company specializing in UAV systems, hardware, and engineering services.

## Technology Stack

### Core Technologies
- **Build Tool**: Vite 5.4.19
- **Framework**: React 18.3.1 with TypeScript 5.8.3
- **Routing**: React Router DOM 6.30.1
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Animations**: Framer Motion 12.23.24
- **State Management**: TanStack React Query 5.83.0

### Key Dependencies
- **Form Handling**: React Hook Form 7.61.1 + Zod 3.25.76
- **Icons**: Lucide React 0.462.0
- **Notifications**: Sonner 1.7.4
- **Date Handling**: date-fns 3.6.0
- **Charts**: Recharts 2.15.4

## Project Structure

```
src/
├── assets/              # Images and static assets
│   ├── hero_section/    # Hero section images
│   ├── services/        # Service showcase images (19 files)
│   └── *.png, *.jpg     # Product and company images
├── components/
│   ├── ui/              # shadcn-ui components (49 files)
│   ├── Footer.tsx       # Site footer component
│   ├── Navbar.tsx       # Navigation bar
│   ├── NavLink.tsx      # Navigation link component
│   └── ScrollToTop.tsx  # Scroll to top functionality
├── hooks/
│   ├── use-mobile.tsx   # Mobile detection hook
│   ├── use-toast.ts     # Toast notification hook
│   └── useSEO.tsx       # SEO optimization hook
├── lib/
│   └── utils.ts         # Utility functions
├── pages/
│   ├── Index.tsx        # Home page
│   ├── About.tsx        # About us page
│   ├── Products.tsx     # Products overview
│   ├── Services.tsx     # Services page
│   ├── Software.tsx     # Software page
│   ├── Careers.tsx      # Careers page
│   ├── Contact.tsx      # Contact page
│   ├── NotFound.tsx     # 404 page
│   └── products/
│       ├── UAVProducts.tsx      # UAV systems
│       ├── TestrixProducts.tsx  # Test rigs
│       └── HardwareProducts.tsx  # Hardware systems
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and theme
```

## Routing Structure

### Main Routes
- `/` - Home page (Index)
- `/about` - About Us
- `/products` - Products overview
- `/products/uav` - UAV Systems
- `/products/testrix` - Test Rigs
- `/products/hardware` - Hardware Systems
- `/services` - Services
- `/software` - Software
- `/careers` - Careers
- `/contact` - Contact
- `*` - 404 Not Found

## Design System

### Color Scheme
- **Primary**: Blue (`hsl(221 83% 53%)`)
- **Accent**: Cyan (`hsl(189 95% 45%)`)
- **Background**: Light (`hsl(210 40% 98%)`)
- **Foreground**: Dark (`hsl(222 47% 11%)`)

### Typography
- **Display Font**: Rajdhani (for headings)
- **Body Font**: Inter (for body text)

### Key Design Features
- Futuristic gradient meshes
- Grid patterns and diagonal lines
- Smooth animations with Framer Motion
- 3D transform effects
- Glassmorphism (backdrop blur)
- Responsive design

## Product Categories

### 1. UAV Systems (`/products/uav`)
- **FPV Drones**: Racing, reconnaissance, surveillance
- **Agricultural UAVs**: Crop monitoring, spraying, field analysis
- **Logistics Drones**: Cargo delivery, heavy-lift operations

### 2. Test Rigs (`/products/testrix`)
- Drone Gimbal Rig
- Flight Test Systems
- Quality Assurance Tools

### 3. Hardware Systems (`/products/hardware`)
- BEC (Battery Eliminator Circuit)
- Power Modules
- PDB (Power Distribution Board)
- Servo Testers
- Strobe Lights
- GPS Test Modules
- Power Monitors
- Battery Health Checkers

## Services Offered

1. **TC Documentation & Compliance Assistance**
   - UAV type certification
   - Regulatory compliance (DGCA)
   - Documentation support

2. **Custom Drone Design & Development**
   - End-to-end UAV design
   - System integration
   - Production-ready engineering

3. **Hardware Design & Development**
   - Aerospace-grade electronics
   - PCB development
   - Testing & validation

4. **Computer-Aided Design (CAD)**
   - 3D modeling
   - Structural analysis
   - Design optimization

5. **Computer-Aided Manufacturing (CAM)**
   - Production planning
   - CNC programming
   - Quality control

6. **FEA/CFD Analysis**
   - Structural FEA
   - Computational Fluid Dynamics
   - Thermal analysis
   - Performance validation

## Page Details

### Contact Page (`/contact`)
- Contact form with validation
- Multiple contact methods (Phone, Email, Address)
- Business hours information
- Social media links
- Form submission handling (ready for API integration)

### Careers Page (`/careers`)
- Job listings with filtering
- Application form with resume upload
- Job details modal
- Department-based organization
- Work mode options (Onsite, Hybrid, Remote)
- Job types (Full Time, Part Time, Intern, Contract)

### Software Page (`/software`)
- Software product showcase
- Flight Control System
- Ground Control Station
- Data Analysis Suite
- Feature highlights
- Screenshot galleries

## Key Features

### SEO Optimization
- Custom `useSEO` hook for dynamic meta tags
- Structured data (JSON-LD) for rich snippets
- Open Graph tags
- Twitter Card support
- Canonical URLs
- Per-page SEO optimization

### Animations
- Scroll-triggered animations
- Mouse interaction effects
- Parallax scrolling
- 3D transforms
- Smooth page transitions
- Image carousels with auto-play

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Mobile menu navigation
- Responsive image galleries

## Company Information

### Contact Details
- **Address**: 65/65, Trichy Main Road, Nathamedu, Pidagam, Villupuram, Tamil Nadu, 605401
- **Phone**: +91 8903501042
- **Email**: contact@adibanaviation.in
- **LinkedIn**: https://www.linkedin.com/company/adiban-aviation
- **Instagram**: https://www.instagram.com/adiban_aviation/

### Company Stats
- **Founded**: 2014
- **Projects Delivered**: 500+
- **Years of Experience**: 10+
- **Team Size**: 50+
- **States Covered**: 15+

## Development Scripts

```bash
npm run dev        # Start development server (port 8080)
npm run build      # Build for production
npm run build:dev  # Build in development mode
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Build Configuration

### Vite Config
- **Port**: 8080
- **Host**: `::` (all interfaces)
- **Path Alias**: `@` → `./src`
- **Plugin**: React SWC (fast refresh)

### TypeScript Config
- **Base URL**: `.`
- **Path Mapping**: `@/*` → `./src/*`
- **Strict Mode**: Disabled (for flexibility)
- **Allow JS**: Enabled

## Assets Organization

### Images
- Hero section images in `assets/hero_section/`
- Service showcase: 19 images in `assets/services/`
- Product images: UAV, Hardware, Test Rigs
- Company logo: `assets/logo.png`

### Public Assets
- Duplicate assets in `public/assests/` (note: typo in folder name)
- Favicon, robots.txt, sitemap.xml

## Styling Approach

### Tailwind Configuration
- Custom color system with CSS variables
- Extended theme with custom fonts
- Custom animations (accordion, gradient)
- Grid pattern utilities
- Mesh gradient backgrounds

### CSS Custom Properties
- HSL color system
- Gradient definitions
- Shadow variables
- Border radius variables

## Component Patterns

### Page Components
- Hero sections with scroll animations
- Section-based layouts
- Motion animations on scroll
- SEO optimization per page
- Structured data for search engines

### Reusable Components
- Navbar with mobile menu
- Footer with company info
- ScrollToTop button
- UI components from shadcn-ui

## Performance Considerations

- Lazy loading images
- Code splitting via React Router
- Optimized animations
- Efficient re-renders with React Query
- Image optimization

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for all screen sizes
- Touch gestures support
- Accessibility considerations

## Future Enhancements (Potential)

- Dark mode support (theme system in place)
- Multi-language support
- Blog/news section
- Product catalog with filtering
- Online quote request system
- Customer portal

## Development Team Credits

- **Design & Development**: Enyard (https://enyard.in) | JezX (https://jezx.in)

---

**Last Updated**: 2025
**Project Status**: Active Development
**License**: © 2025 Adiban Aviation Private Limited. All rights reserved.
