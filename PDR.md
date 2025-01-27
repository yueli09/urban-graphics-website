1. Objective

Build a modern, responsive landing page for a signage business using:

Next.js (App Router)
Shadcn (UI components)
21st Dev components (Hero, Features, Testimonials, Clients, Footer)
Tailwind CSS
2. Technical Stack

Component	Source
Hero Section	npx shadcn@latest add "https://21st.dev/r/aceternity/aurora-background"
Feature Section	npx shadcn@latest add "https://21st.dev/r/tommyjepsen/feature-section-with-grid"
Testimonials	npx shadcn@latest add "https://21st.dev/r/tommyjepsen/testimonials"
Clients	npx shadcn@latest add "https://21st.dev/r/tommyjepsen/cases-with-infinite-scroll"
Footer	npx shadcn@latest add "https://21st.dev/r/arihantcodes/footer-section"
3. Implementation Steps

Instructions structured for an AI agent to execute sequentially.

Step 1: Project Setup

Initialize Next.js App
bash
Copy
npx create-next-app@latest signage-landing-page --typescript --eslint --tailwind --app  
Select default options for all prompts.
Navigate to Project Directory
bash
Copy
cd signage-landing-page  
Step 2: Configure Shadcn

Install Shadcn
bash
Copy
npx shadcn-ui@latest init  
Configure as follows:
Use Tailwind CSS for styling.
Use CSS Variables for theming.
Do not customize import aliases.
Install Radix UI Primitives (if prompted by Shadcn):
bash
Copy
npm install @radix-ui/react-dropdown-menu @radix-ui/react-slot  
Step 3: Add 21st Dev Components

Install Hero Section (Aurora Background)
bash
Copy
npx shadcn@latest add "https://21st.dev/r/aceternity/aurora-background"  
Install Feature Section
bash
Copy
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/feature-section-with-grid"  
Install Testimonials
bash
Copy
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/testimonials"  
Install Clients Section
bash
Copy
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/cases-with-infinite-scroll"  
Install Footer
bash
Copy
npx shadcn@latest add "https://21st.dev/r/arihantcodes/footer-section"  
Step 4: Build the Landing Page

Create File Structure
bash
Copy
mkdir -p app/components && touch app/page.tsx app/globals.css  
Hero Section (app/page.tsx)
typescript
Copy
import { AuroraBackground } from "@/components/aurora-background";  

export default function Home() {  
  return (  
    <AuroraBackground>  
      <div className="text-center">  
        <h1 className="text-4xl font-bold text-white">Premium Signage Solutions</h1>  
        <p className="mt-4 text-gray-300">Custom signage for businesses</p>  
      </div>  
    </AuroraBackground>  
  );  
}  
Feature Section
typescript
Copy
import { FeatureGrid } from "@/components/feature-section-with-grid";  

// Add below Hero section  
<FeatureGrid  
  title="Our Services"  
  features={[  
    { title: "Billboards", description: "High-impact outdoor advertising" },  
    { title: "Digital Displays", description: "Dynamic LED solutions" },  
  ]}  
/>  
Testimonials
typescript
Copy
import { TestimonialsSection } from "@/components/testimonials";  

// Add below Features  
<TestimonialsSection  
  testimonials={[  
    { author: "Client A", text: "Excellent service!" },  
  ]}  
/>  
Clients Section
typescript
Copy
import { InfiniteScrollCases } from "@/components/cases-with-infinite-scroll";  

// Add below Testimonials  
<InfiniteScrollCases  
  cases={[  
    { title: "Client 1", imageUrl: "/client1.jpg" },  
  ]}  
/>  
Footer
typescript
Copy
import { Footer } from "@/components/footer-section";  

// Add at the bottom  
<Footer  
  companyName="Signage Co."  
  links={[{ label: "Contact", href: "#contact" }]}  
/>  
Step 5: Styling & Theming

Add Brand Colors (tailwind.config.js)
javascript
Copy
module.exports = {  
  theme: {  
    extend: {  
      colors: {  
        primary: "#1E3A8A", // Brand blue  
        secondary: "#F59E0B", // Accent orange  
      },  
    },  
  },  
};  
Style Aurora Background (app/globals.css)
css
Copy
@layer utilities {  
  .animate-aurora {  
    animation: aurora 10s infinite linear;  
  }  
}  
Step 6: Testing

Run Development Server
bash
Copy
npm run dev  
Validate Components
Check responsiveness at breakpoints (320px, 768px, 1024px).
Ensure infinite scroll for Clients section works.
 
4. AI-Agent-Friendly Workflow

Execute commands in exact order from Steps 1–6.
Replace placeholder content (e.g., testimonials, images) with actual data.
Use npm run dev to test after each component addition.
5. Expected Output

A fully functional landing page with:

Animated Hero section
Responsive feature grid
Infinite-scrolling client portfolio
SEO-optimized metadata
---
