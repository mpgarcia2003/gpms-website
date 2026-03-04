"use client";
import { useState, useEffect, useRef } from "react";
import {
  BuildingIcon, ShieldCheckIcon, SparklesIcon, FloorIcon, UserCheckIcon, WrenchIcon, HardHatIcon,
  SchoolIcon, ChurchIcon, HeartPulseIcon, BabyIcon, LandmarkIcon, BriefcaseIcon,
  AwardIcon, FileCheckIcon, ShieldIcon, ClipboardCheckIcon,
  StoreIcon, DumbbellIcon, WarehouseIcon, HomeIcon, HotelIcon,
  SmartphoneIcon, TrophyIcon, DollarIcon, TargetIcon, CalendarIcon, PhoneIcon,
  MailIcon, ClockIcon, DownloadIcon, FileTextIcon, MapPinIcon, CheckCircleIcon,
} from './Icons';

// Angled SVG section divider — use between dark/light section transitions
function SectionDivider({ fromColor = "#FFFFFF", toColor = "#F7FAF8" }) {
  return (
    <div style={{ height: 60, marginTop: -1, background: `linear-gradient(to bottom right, ${fromColor} 49.5%, ${toColor} 50.5%)` }} />
  );
}

function SectionDividerReverse({ fromColor = "#F7FAF8", toColor = "#FFFFFF" }) {
  return (
    <div style={{ height: 60, marginTop: -1, background: `linear-gradient(to bottom left, ${fromColor} 49.5%, ${toColor} 50.5%)` }} />
  );
}

// Quote Choice Modal — appears when user clicks "Get a Quote" style CTAs
function QuoteChoiceModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      animation: 'modalFadeIn 0.25s ease',
    }} onClick={onClose}>
      <div style={{
        background: '#fff', borderRadius: 16, padding: '48px 40px', maxWidth: 520, width: '90%',
        boxShadow: '0 24px 80px rgba(0,0,0,0.2)', position: 'relative',
        animation: 'modalSlideUp 0.3s cubic-bezier(0.16,1,0.3,1)',
      }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'none', border: 'none',
          fontSize: 24, color: '#8A9B91', cursor: 'pointer', padding: 4, lineHeight: 1,
        }}>×</button>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#C8A34D', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>How Can We Help?</div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: '#1A2B1F', lineHeight: 1.2 }}>Let's Get You Started</h3>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: '#4A5E52', marginTop: 8, lineHeight: 1.6 }}>Choose the option that works best for you.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Option 1: Schedule Walkthrough */}
          <button onClick={() => { onClose(); setTimeout(() => scrollTo('schedule'), 150); }} style={{
            display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px',
            background: '#1B7A3D', border: 'none', borderRadius: 12, cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s', textAlign: 'left', width: '100%',
          }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(27,122,61,0.3)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ width: 48, height: 48, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CalendarIcon size={24} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: '#fff' }}>Schedule a Walkthrough</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>Book a free on-site assessment or phone consultation</div>
            </div>
            <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.6)', fontSize: 20, flexShrink: 0 }}>→</span>
          </button>
          {/* Option 2: Instant Quote */}
          <button onClick={() => { onClose(); setTimeout(() => scrollTo('quote'), 150); }} style={{
            display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px',
            background: '#F7FAF8', border: '2px solid #E2EBE5', borderRadius: 12, cursor: 'pointer',
            transition: 'transform 0.2s, border-color 0.2s', textAlign: 'left', width: '100%',
          }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#1B7A3D'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2EBE5'; }}
          >
            <div style={{ width: 48, height: 48, borderRadius: 10, background: 'rgba(27,122,61,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <DollarIcon size={24} color="#1B7A3D" />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: '#1A2B1F' }}>Get an Instant Quote</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: '#4A5E52', marginTop: 2 }}>Use our calculator for a quick estimate right now</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#1B7A3D', fontSize: 20, flexShrink: 0 }}>→</span>
          </button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a href="tel:+13473329348" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#8A9B91', textDecoration: 'none', fontWeight: 600 }}>or call 347-332-9348</a>
        </div>
      </div>
    </div>
  );
}

// Icon wrapper for consistent sizing in cards
function IconBox({ children, size = 48, bg = 'rgba(27,122,61,0.08)', radius = 8, dark = false }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: dark ? 'rgba(27,122,61,0.12)' : bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      {children}
    </div>
  );
}

// Icon resolver - maps string keys to SVG components
function getIcon(key, size = 28, color = '#1B7A3D') {
  const icons = {
    'building': <BuildingIcon size={size} color={color} />,
    'shield-check': <ShieldCheckIcon size={size} color={color} />,
    'sparkles': <SparklesIcon size={size} color={color} />,
    'floor': <FloorIcon size={size} color={color} />,
    'user-check': <UserCheckIcon size={size} color={color} />,
    'wrench': <WrenchIcon size={size} color={color} />,
    'hardhat': <HardHatIcon size={size} color={color} />,
    'school': <SchoolIcon size={size} color={color} />,
    'church': <ChurchIcon size={size} color={color} />,
    'medical': <HeartPulseIcon size={size} color={color} />,
    'baby': <BabyIcon size={size} color={color} />,
    'landmark': <LandmarkIcon size={size} color={color} />,
    'briefcase': <BriefcaseIcon size={size} color={color} />,
    'award': <AwardIcon size={size} color={color} />,
    'file-check': <FileCheckIcon size={size} color={color} />,
    'shield': <ShieldIcon size={size} color={color} />,
    'clipboard': <ClipboardCheckIcon size={size} color={color} />,
    'store': <StoreIcon size={size} color={color} />,
    'dumbbell': <DumbbellIcon size={size} color={color} />,
    'warehouse': <WarehouseIcon size={size} color={color} />,
    'home': <HomeIcon size={size} color={color} />,
    'hotel': <HotelIcon size={size} color={color} />,
    'smartphone': <SmartphoneIcon size={size} color={color} />,
    'trophy': <TrophyIcon size={size} color={color} />,
    'dollar': <DollarIcon size={size} color={color} />,
    'target': <TargetIcon size={size} color={color} />,
    'calendar': <CalendarIcon size={size} color={color} />,
  };
  return icons[key] || <BuildingIcon size={size} color={color} />;
}

const NAV_ITEMS = [
  { label: "Services", target: "services" },
  { label: "Industries", target: "industries" },
  { label: "JaniTrack", target: "janitrack" },
  { label: "Instant Quote", target: "quote" },
  { label: "Government", target: "compliance" },
];

const PHONE_NUMBER = "347-332-9348";
const PHONE_HREF = "tel:+13473329348";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SERVICES = [
  {
    iconKey: "building",
    title: "Commercial Janitorial",
    outcome: "Zero complaints. Every visit documented.",
    desc: "Daily, weekly, and monthly cleaning programs customized to your facility. Lobbies, restrooms, offices, and common areas — all verified through JaniTrack.",
  },
  {
    iconKey: "shield-check",
    title: "Disinfection & Sanitization",
    outcome: "CDC-compliant. ATP-verified.",
    desc: "Electrostatic disinfection with hospital-grade sanitizers. ATP bioluminescence testing provides measurable proof of pathogen elimination.",
  },
  {
    iconKey: "floor",
    title: "Floor Care & Restoration",
    outcome: "Floors that pass inspection. Every time.",
    desc: "Strip, seal, and refinish hard floors. Carpet extraction and encapsulation. Marble, stone, and VCT maintenance programs.",
  },
  {
    iconKey: "user-check",
    title: "Day Porter Services",
    outcome: "Your facility looks great at 3pm, not just 7am.",
    desc: "On-site daytime staff for continuous upkeep of high-traffic areas, restroom monitoring, supply replenishment, and lobby presentation.",
  },
  {
    iconKey: "wrench",
    title: "Facility Maintenance",
    outcome: "One vendor. One invoice. One call.",
    desc: "Light plumbing, electrical, HVAC filter changes, painting touch-ups, and general handyman services — all managed under one contract.",
  },
  {
    iconKey: "hardhat",
    title: "Post-Construction Cleanup",
    outcome: "Move-in ready in 48 hours.",
    desc: "Three-stage professional cleanup: rough clean, light clean, and final touch. Debris removal, dust elimination, and final inspection.",
  },
];

const INDUSTRIES = [
  {
    iconKey: "school",
    title: "Schools & Educational Facilities",
    slug: "schools",
    desc: "K-12, charter schools, daycares, and universities. Green cleaning products safe for children. Allergy and asthma-friendly protocols. Summer deep-clean programs.",
    features: ["CDC-compliant classroom sanitization", "Cafeteria & gymnasium deep cleaning", "Green products — no toxic fumes", "Flexible after-hours scheduling"],
  },
  {
    iconKey: "church",
    title: "Churches & Houses of Worship",
    slug: "churches",
    desc: "Sanctuary, fellowship hall, nursery, and office cleaning for congregations of all sizes. We respect your sacred spaces with meticulous care.",
    features: ["Sanctuary & pew care", "Fellowship hall event turnaround", "Nursery sanitization protocols", "Flexible scheduling around services"],
  },
  {
    iconKey: "medical",
    title: "Healthcare & Medical Offices",
    slug: "medical",
    desc: "OSHA-compliant cleaning for medical offices, dental practices, outpatient clinics, surgery centers, and long-term care facilities.",
    features: ["OSHA & HIPAA-aware protocols", "Exam room & waiting area sanitization", "Biohazard-safe waste handling", "ATP testing verification"],
  },
  {
    iconKey: "baby",
    title: "Daycare & Childcare Centers",
    slug: "daycare",
    desc: "Specialized cleaning for infant rooms, toddler areas, and play spaces using only non-toxic, eco-friendly products approved for environments with children.",
    features: ["Non-toxic, child-safe products only", "Toy & surface sanitization", "Nap room & diaper station protocols", "Health department compliance"],
  },
  {
    iconKey: "landmark",
    title: "Government & Municipal Buildings",
    slug: "government",
    desc: "Secure, reliable cleaning for government offices, courthouses, community centers, and public facilities. MBE-certified for diversity procurement compliance.",
    features: ["MBE certification for procurement", "Background-checked staff", "Secure facility protocols", "ADA-compliant service delivery"],
  },
  {
    iconKey: "briefcase",
    title: "Commercial Office Buildings",
    slug: "offices",
    desc: "Comprehensive programs for single-tenant offices to multi-floor commercial properties. Conference rooms, reception areas, executive suites, and shared spaces.",
    features: ["Customized cleaning checklists", "After-hours & weekend service", "Conference room ready service", "Tenant satisfaction programs"],
  },
];

const TRUST_STATS = [
  { number: "80+", label: "Facilities Under Contract" },
  { number: "5", label: "States Served" },
  { number: "MBE", label: "Certified Enterprise" },
  { number: "24/7", label: "Emergency Response" },
];

const TESTIMONIALS = [
  {
    quote: "GreenPoint transformed our school's cleanliness standards. Their team works around our schedule perfectly, and the JaniTrack reports give our board complete confidence in the quality of service.",
    name: "Dr. Patricia Hernandez",
    role: "Principal, Achievement First Charter School",
    vertical: "Education",
  },
  {
    quote: "After three different cleaning companies, GreenPoint is the first one that actually shows up consistently and delivers what they promise. The real-time verification photos are a game changer.",
    name: "Rev. James Crawford",
    role: "Senior Pastor, New Life Community Church",
    vertical: "House of Worship",
  },
  {
    quote: "As a medical office, we can't compromise on sanitization. GreenPoint's ATP testing gives us measurable proof that our exam rooms meet clinical-grade standards every single day.",
    name: "Dr. Michael Torres",
    role: "Director, Bronx Family Medical Center",
    vertical: "Healthcare",
  },
];

const AREAS = [
  {
    state: "New York",
    abbr: "NY",
    regions: ["Bronx", "Manhattan", "Brooklyn", "Queens", "Westchester", "Yonkers", "New Rochelle", "Mount Vernon"],
  },
  {
    state: "New Jersey",
    abbr: "NJ",
    regions: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Hackensack", "Fort Lee", "Bergen County"],
  },
  {
    state: "Connecticut",
    abbr: "CT",
    regions: ["Stamford", "Bridgeport", "New Haven", "Hartford", "Norwalk", "Danbury", "Fairfield County"],
  },
  {
    state: "Pennsylvania",
    abbr: "PA",
    regions: ["Philadelphia", "Allentown", "Scranton", "Bethlehem", "Reading", "King of Prussia"],
  },
  {
    state: "Florida",
    abbr: "FL",
    regions: ["Orlando", "Miami", "Fort Lauderdale", "Kissimmee", "Miami Beach", "Coral Gables", "Hialeah"],
  },
];

const BLOG_POSTS = [
  {
    title: "Why ATP Testing Is the Future of Commercial Cleaning Verification",
    excerpt: "How bioluminescence technology gives facility managers measurable proof of clean — and why your cleaning company should be using it.",
    category: "Technology",
    date: "Feb 2026",
  },
  {
    title: "CDC Guidelines for School Cleaning: What Administrators Need to Know",
    excerpt: "A comprehensive breakdown of current CDC recommendations for K-12 cleaning protocols, including high-touch surfaces and ventilation.",
    category: "Education",
    date: "Jan 2026",
  },
  {
    title: "The Hidden Cost of Unreliable Cleaning Services",
    excerpt: "No-shows, inconsistent quality, and communication gaps cost facilities more than just dirty floors. Here's how to calculate the true impact.",
    category: "Insights",
    date: "Jan 2026",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Facility Walkthrough",
    desc: "We visit your site, assess square footage, traffic patterns, surfaces, and compliance requirements — at no cost.",
  },
  {
    step: "02",
    title: "Custom Cleaning Plan",
    desc: "You receive a detailed proposal with scope, frequency, products, and fixed pricing — no hidden fees, no hourly billing.",
  },
  {
    step: "03",
    title: "Dedicated Team Assignment",
    desc: "We assign a background-checked, trained team specifically to your facility. Same faces every visit — consistency you can count on.",
  },
  {
    step: "04",
    title: "JaniTrack Verification",
    desc: "Every cleaning session is documented with timestamped photos, task checklists, and ATP readings — accessible from your dashboard.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What areas does GreenPoint Maintenance Services serve?",
    a: "We provide commercial janitorial and facility maintenance services across five states: New York (Bronx, Manhattan, Brooklyn, Queens, Westchester), New Jersey, Connecticut, Pennsylvania, and Florida (Orlando and Miami metro areas).",
  },
  {
    q: "What is JaniTrack and how does it work?",
    a: "JaniTrack is our proprietary real-time cleaning verification system. After every cleaning session, your team uploads timestamped, GPS-tagged photos and completes digital checklists. We also conduct ATP bioluminescence testing — the same technology hospitals use — to give you measurable proof that surfaces meet clinical-grade cleanliness standards. You access everything through a live dashboard.",
  },
  {
    q: "Is GreenPoint a Minority Business Enterprise (MBE)?",
    a: "Yes. GreenPoint Maintenance Services Corp is a Certified Minority Business Enterprise registered with New York State and the City of New York. We are also registered on SAM.gov for federal contracting. Our MBE certification qualifies us for diversity procurement programs and MWBE set-aside contracts at the city, state, and federal level.",
  },
  {
    q: "What types of facilities do you clean?",
    a: "We specialize in six core verticals: K-12 schools and educational facilities, churches and houses of worship, healthcare and medical offices, daycare and childcare centers, government and municipal buildings, and commercial office spaces. Each vertical has dedicated cleaning protocols designed for its specific compliance and safety requirements.",
  },
  {
    q: "Do you use eco-friendly cleaning products?",
    a: "Yes. We use Green Seal certified, EPA-registered cleaning products across all facilities. Our products are non-toxic, allergy-safe, and free from harsh chemical fumes — which is especially important in schools, daycares, and healthcare environments where vulnerable populations are present.",
  },
  {
    q: "How is pricing structured?",
    a: "We provide fixed-price proposals based on your facility's square footage, cleaning frequency, and scope of work. There are no hourly rates, no surprise charges, and no hidden fees. Every quote includes a complimentary facility walkthrough and is customized to your specific needs and budget.",
  },
  {
    q: "Are your employees background-checked and insured?",
    a: "Every GreenPoint team member undergoes a comprehensive background check before being assigned to any facility. We carry full commercial general liability insurance and are bonded. We also provide workers' compensation coverage for all employees.",
  },
  {
    q: "Can you handle emergency or one-time cleaning requests?",
    a: "Absolutely. In addition to scheduled cleaning programs, we offer 24/7 emergency cleaning services for situations like water damage, biohazard incidents, post-event cleanup, and post-construction debris removal. Contact us anytime and we'll dispatch a team.",
  },
];

const WHY_US = [
  {
    iconKey: "smartphone",
    title: "JaniTrack Verification",
    desc: "The only local operator with real-time photo verification and ATP bioluminescence testing. See proof, not promises.",
    competitor: "Zero local competitors offer this",
  },
  {
    iconKey: "trophy",
    title: "MBE Certified",
    desc: "Registered Minority Business Enterprise with NYS & NYC. Qualifies for diversity procurement and MWBE set-aside contracts.",
    competitor: "Only 2 of 17 competitors hold this",
  },
  {
    iconKey: "dollar",
    title: "Fixed Pricing",
    desc: "Transparent, per-facility pricing with no hourly billing, no surprise fees, and no hidden charges. Know exactly what you'll pay.",
    competitor: "Most competitors hide pricing entirely",
  },
  {
    iconKey: "target",
    title: "Vertical Specialists",
    desc: "Dedicated protocols for schools, churches, medical, daycare, and government — not a one-size-fits-all approach.",
    competitor: "No local competitor has dedicated vertical pages",
  },
];
// =============================================
// INSTANT QUOTE CALCULATOR - DATA & LOGIC
// =============================================

const QUOTE_INDUSTRIES = [
  { id: "office", iconKey: "briefcase", title: "Commercial Office", desc: "Workspaces & Lobbies" },
  { id: "medical", iconKey: "medical", title: "Medical Facility", desc: "Clinics & Urgent Care" },
  { id: "education", iconKey: "school", title: "Education", desc: "Schools & Universities" },
  { id: "daycare", iconKey: "baby", title: "Daycare / Preschool", desc: "Early Childhood" },
  { id: "church", iconKey: "church", title: "Religious", desc: "Places of Worship" },
  { id: "fitness", iconKey: "dumbbell", title: "Fitness Center", desc: "Gyms & Studios" },
  { id: "retail", iconKey: "store", title: "Retail", desc: "Showrooms & Shops" },
  { id: "warehouse", iconKey: "warehouse", title: "Warehouse", desc: "Logistics & Storage" },
  { id: "hoa", iconKey: "home", title: "HOA / Condo", desc: "Common Areas" },
  { id: "hotel", iconKey: "hotel", title: "Hospitality", desc: "Hotels & Motels" },
  { id: "government", iconKey: "landmark", title: "Government", desc: "Municipal & Public" },
];

const PRESET_ROOMS = {
  education: [
    { name: "Classroom", minutesPerRoom: 15 }, { name: "Laboratory", minutesPerRoom: 17 },
    { name: "Library", minutesPerRoom: 60 }, { name: "Cafeteria", minutesPerRoom: 60 },
    { name: "Gymnasium", minutesPerRoom: 60 }, { name: "Auditorium", minutesPerRoom: 60 },
    { name: "Office (Admin)", minutesPerRoom: 5 }, { name: "Staff Room", minutesPerRoom: 15 },
    { name: "Restroom", minutesPerRoom: 15 }, { name: "Hallway", minutesPerRoom: 20 },
    { name: "Staircase", minutesPerRoom: 15 }, { name: "Entryway/Lobby", minutesPerRoom: 15 },
    { name: "Nurse's Office", minutesPerRoom: 7 }, { name: "Multipurpose Room", minutesPerRoom: 15 },
  ],
  office: [
    { name: "Private Office", minutesPerRoom: 10 }, { name: "Conference Room", minutesPerRoom: 20 },
    { name: "Open Workspace", minutesPerRoom: 30 }, { name: "Restroom", minutesPerRoom: 15 },
    { name: "Kitchen/Breakroom", minutesPerRoom: 20 }, { name: "Lobby", minutesPerRoom: 15 },
  ],
  medical: [
    { name: "Exam Room", minutesPerRoom: 20 }, { name: "Waiting Area", minutesPerRoom: 25 },
    { name: "Lab", minutesPerRoom: 30 }, { name: "Restroom", minutesPerRoom: 15 },
  ],
  retail: [
    { name: "Sales Floor", minutesPerRoom: 40 }, { name: "Stock Room", minutesPerRoom: 20 },
    { name: "Restroom", minutesPerRoom: 15 },
  ],
  warehouse: [
    { name: "Dock Area", minutesPerRoom: 30 }, { name: "Office", minutesPerRoom: 10 },
    { name: "Restroom", minutesPerRoom: 15 },
  ],
  fitness: [
    { name: "Main Weight Floor", minutesPerRoom: 45 }, { name: "Cardio Deck", minutesPerRoom: 40 },
    { name: "Locker Room (Men)", minutesPerRoom: 60 }, { name: "Locker Room (Women)", minutesPerRoom: 60 },
    { name: "Yoga/Group Studio", minutesPerRoom: 25 },
  ],
  daycare: [
    { name: "Infant Room", minutesPerRoom: 40 }, { name: "Toddler Room", minutesPerRoom: 35 },
    { name: "Indoor Play Area", minutesPerRoom: 45 }, { name: "Staff Lounge", minutesPerRoom: 15 },
    { name: "Restroom", minutesPerRoom: 20 },
  ],
  hoa: [
    { name: "Lobby", minutesPerRoom: 30 }, { name: "Corridor", minutesPerRoom: 20 },
    { name: "Gym", minutesPerRoom: 45 }, { name: "Restroom", minutesPerRoom: 15 },
  ],
  hotel: [
    { name: "Guest Room", minutesPerRoom: 30 }, { name: "Lobby", minutesPerRoom: 40 },
    { name: "Public Restroom", minutesPerRoom: 20 },
  ],
  government: [
    { name: "Public Office", minutesPerRoom: 15 }, { name: "Waiting Room", minutesPerRoom: 20 },
    { name: "Restroom", minutesPerRoom: 20 },
  ],
  church: [
    { name: "Main Sanctuary", minutesPerRoom: 60 }, { name: "Fellowship Hall", minutesPerRoom: 45 },
    { name: "Nursery/Childcare", minutesPerRoom: 30 }, { name: "Classroom", minutesPerRoom: 15 },
    { name: "Restroom", minutesPerRoom: 20 }, { name: "Vestibule/Lobby", minutesPerRoom: 25 },
  ],
};

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

function calculateQuote(settings, rooms, porters) {
  const { industry, squareFootage, churchCapacity, seatingType, buildingSize, laborHoursPerDay, showerCount, hasSauna, studentCount, changingStations } = settings;
  let grandTotal = 0;
  const breakdown = [];
  const DAYS_PER_MONTH = 21.67;
  const INTERNAL_LABOR_COST = 17.50;
  const HOURLY_RATE = parseFloat((INTERNAL_LABOR_COST / 0.72).toFixed(2));

  const calcRoomLabor = (rmList) => {
    const dailyMins = rmList.reduce((acc, r) => acc + (r.quantity * r.minutesPerRoom), 0);
    const monthlyHours = (dailyMins / 60) * DAYS_PER_MONTH;
    return { cost: monthlyHours * HOURLY_RATE, hours: monthlyHours };
  };

  let totalMonthlyHours = 0;

  switch (industry) {
    case "church": {
      const d = calcRoomLabor(rooms);
      const capRate = seatingType === "pews" ? 1.65 : 1.25;
      const sanctuaryLabor = (churchCapacity || 250) * capRate * 4.33;
      grandTotal = d.cost + sanctuaryLabor;
      totalMonthlyHours = d.hours + sanctuaryLabor / HOURLY_RATE;
      breakdown.push({ label: "Sanctuary Intensive Care", value: sanctuaryLabor }, { label: "Administrative & Annex Areas", value: d.cost });
      break;
    }
    case "fitness": {
      const base = squareFootage * 0.22;
      const showerLabor = (showerCount || 0) * 45;
      const saunaLabor = hasSauna ? 150 : 0;
      grandTotal = base + showerLabor + saunaLabor;
      totalMonthlyHours = grandTotal / HOURLY_RATE;
      breakdown.push({ label: "Floor & Equipment Hygiene", value: base }, { label: "Wet Area Sanitation", value: showerLabor + saunaLabor });
      break;
    }
    case "daycare": {
      const d = calcRoomLabor(rooms);
      const disinf = (studentCount || 20) * 18.50;
      const stationLabor = (changingStations || 0) * 35;
      grandTotal = d.cost + disinf + stationLabor;
      totalMonthlyHours = d.hours + (disinf + stationLabor) / HOURLY_RATE;
      breakdown.push({ label: "Core Facility Labor", value: d.cost }, { label: "Disinfection Surcharge", value: disinf + stationLabor });
      break;
    }
    case "medical":
      grandTotal = squareFootage * 0.26;
      totalMonthlyHours = grandTotal / HOURLY_RATE;
      breakdown.push({ label: "Terminal Sanitation Labor", value: grandTotal });
      break;
    case "education": {
      const d = calcRoomLabor(rooms);
      const porterHrs = porters.reduce((acc, p) => acc + p.quantity * p.hoursPerDay, 0) * DAYS_PER_MONTH;
      const porterCost = porterHrs * (HOURLY_RATE * 1.15);
      grandTotal = d.cost + porterCost;
      totalMonthlyHours = d.hours + porterHrs;
      breakdown.push({ label: "Academic Area Maintenance", value: d.cost }, { label: "Day Porter Logistics", value: porterCost });
      break;
    }
    case "office":
      grandTotal = squareFootage * 0.15;
      totalMonthlyHours = grandTotal / HOURLY_RATE;
      breakdown.push({ label: "Portfolio-Wide Logistics", value: grandTotal });
      break;
    case "warehouse": {
      const whLabor = (laborHoursPerDay * DAYS_PER_MONTH) * HOURLY_RATE;
      const scrub = (settings.warehouseScrubbingSqFt || 5000) * 0.10;
      grandTotal = whLabor + scrub;
      totalMonthlyHours = laborHoursPerDay * DAYS_PER_MONTH;
      breakdown.push({ label: "Managed Man-Hours", value: whLabor }, { label: "Machine Scrubbing", value: scrub });
      break;
    }
    case "hotel": {
      const guestCost = (settings.hotelRooms || 50) * 15;
      const commonCost = squareFootage * 0.17;
      grandTotal = guestCost + commonCost;
      totalMonthlyHours = grandTotal / HOURLY_RATE;
      breakdown.push({ label: "BOH Operational Support", value: guestCost }, { label: "FOH Public Visibility", value: commonCost });
      break;
    }
    case "hoa":
      if (buildingSize === "small") grandTotal = 1100;
      else if (buildingSize === "medium") grandTotal = 2600;
      else if (buildingSize === "large") grandTotal = 3200;
      else grandTotal = 5500;
      totalMonthlyHours = grandTotal / HOURLY_RATE;
      breakdown.push({ label: "Amenity Maintenance", value: grandTotal });
      break;
    default:
      grandTotal = squareFootage * 0.18;
      totalMonthlyHours = grandTotal / HOURLY_RATE;
      breakdown.push({ label: "Facility Maintenance", value: grandTotal });
  }

  if (settings.serviceType === "onetime") {
    grandTotal = grandTotal * 0.8;
  }

  return { grandTotal, breakdown };
}

// =============================================
// QUOTE CALCULATOR COMPONENT
// =============================================

function QuoteCalculator() {
  const [step, setStep] = useState("industry"); // industry | objective | calculator
  const [settings, setSettings] = useState({
    industry: "office", serviceType: "recurring", squareFootage: 5000,
    frequencyPerWeek: 3, hotelRooms: 50, churchCapacity: 300, seatingType: "pews",
    buildingSize: "medium", retailSize: "medium", laborHoursPerDay: 4,
    warehouseScrubbingSqFt: 5000, showerCount: 2, hasSauna: false,
    studentCount: 50, changingStations: 2,
  });
  const [rooms, setRooms] = useState([]);
  const [porters, setPorters] = useState([{ id: "p1", name: "Day Porter", quantity: 0, hoursPerDay: 4 }]);
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteEmailSubmitted, setQuoteEmailSubmitted] = useState(false);

  const quote = calculateQuote(settings, rooms, porters);

  const selectIndustry = (id) => {
    setSettings((p) => ({ ...p, industry: id }));
    const presets = PRESET_ROOMS[id] || [];
    setRooms(presets.map((p, i) => ({ id: `r${i}`, name: p.name, quantity: 0, minutesPerRoom: p.minutesPerRoom })));
    setStep("objective");
  };

  const selectObjective = (type) => {
    setSettings((p) => ({ ...p, serviceType: type }));
    setStep("calculator");
  };

  const updateRoom = (id, field, value) => setRooms((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  const removeRoom = (id) => setRooms((prev) => prev.filter((r) => r.id !== id));
  const addRoom = (preset) => {
    if (preset) {
      const p = (PRESET_ROOMS[settings.industry] || []).find((x) => x.name === preset);
      if (p) setRooms((prev) => [...prev, { id: "r" + Math.random().toString(36).slice(2, 8), name: p.name, quantity: 1, minutesPerRoom: p.minutesPerRoom }]);
    } else {
      setRooms((prev) => [...prev, { id: "r" + Math.random().toString(36).slice(2, 8), name: "Custom Area", quantity: 1, minutesPerRoom: 15 }]);
    }
  };

  const cardBase = {
    background: "#fff", borderRadius: 16, border: "1px solid #eee",
    transition: "all 0.3s", cursor: "pointer",
  };

  // ---- STEP 1: Industry Selection ----
  if (step === "industry") {
    return (
      <section id="quote" style={{ background: "#060A07", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "#1B7A3D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
            Step 1 of 3 — Instant Quote Calculator
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
            Select Your <span style={{ color: "#00E676" }}>Facility Type</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 48, maxWidth: 560, margin: "0 auto 48px" }}>
            Choose your industry and get a customized cleaning estimate in under 60 seconds.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, maxWidth: 1000, margin: "0 auto" }}>
            {QUOTE_INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                onClick={() => selectIndustry(ind.id)}
                style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16, padding: "32px 20px", cursor: "pointer", textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "#00E676"; e.currentTarget.style.background = "rgba(0,230,118,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <IconBox size={56} radius={14} dark>
                  {getIcon(ind.iconKey, 28)}
                </IconBox>
                <div style={{ height: 12 }} />
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{ind.title}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{ind.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ---- STEP 2: Service Type ----
  if (step === "objective") {
    return (
      <section id="quote" style={{ background: "#060A07", padding: "100px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <button onClick={() => setStep("industry")} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", marginBottom: 32, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>← Back to Industries</button>
          <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>Step 2 of 3</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 48 }}>Service Frequency</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="quote-freq-grid">
            <div
              onClick={() => selectObjective("recurring")}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 40, cursor: "pointer", textAlign: "left", transition: "all 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "#00E676"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <IconBox size={56} radius={14} dark>
                {getIcon('calendar', 28)}
              </IconBox>
              <div style={{ height: 16 }} />
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Ongoing Maintenance</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Regular daily or weekly cleaning services.</div>
            </div>
            <div
              onClick={() => selectObjective("onetime")}
              style={{ background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.25)", borderRadius: 20, padding: 40, cursor: "pointer", textAlign: "left", transition: "all 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "#00E676"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(0,230,118,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <IconBox size={56} radius={14} dark>
                {getIcon('sparkles', 28)}
              </IconBox>
              <div style={{ height: 16 }} />
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>One-Time Deep Clean</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Post-construction, move-in/out, or seasonal refresh.</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ---- STEP 3: Calculator ----
  const industryPresets = PRESET_ROOMS[settings.industry] || [];
  const industryLabel = QUOTE_INDUSTRIES.find((i) => i.id === settings.industry)?.title || settings.industry;

  return (
    <section id="quote" style={{ background: "#060A07", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap", gap: 12 }}>
          <button onClick={() => setStep("objective")} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>← Change Service</button>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ background: "rgba(0,230,118,0.12)", color: "#00E676", padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "capitalize" }}>{industryLabel}</span>
            <span style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "capitalize" }}>{settings.serviceType === "recurring" ? "Ongoing" : "One-Time"}</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 40, alignItems: "start" }} className="quote-calc-grid">
          {/* Left: Controls */}
          <div>
            {/* Square Footage */}
            {!["church"].includes(settings.industry) && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, marginBottom: 24 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Total Square Footage</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: "#fff" }}>{settings.squareFootage.toLocaleString()}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)" }}>Sq. Ft.</span>
                </div>
                <input type="range" min={settings.industry === "education" ? 5000 : 1000} max={settings.industry === "education" ? 250000 : 50000} step={500} value={settings.squareFootage}
                  onChange={(e) => setSettings({ ...settings, squareFootage: parseInt(e.target.value) })}
                  style={{ width: "100%", accentColor: "#00E676" }} />
              </div>
            )}

            {/* Industry-specific controls */}
            {settings.industry === "church" && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, marginBottom: 24 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Sanctuary Capacity</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: "#fff" }}>{settings.churchCapacity}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)" }}>seats</span>
                </div>
                <input type="range" min={50} max={2000} step={50} value={settings.churchCapacity}
                  onChange={(e) => setSettings({ ...settings, churchCapacity: parseInt(e.target.value) })}
                  style={{ width: "100%", accentColor: "#00E676" }} />
                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                  {["pews", "chairs"].map((t) => (
                    <button key={t} onClick={() => setSettings({ ...settings, seatingType: t })}
                      style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid", borderColor: settings.seatingType === t ? "#00E676" : "rgba(255,255,255,0.15)", background: settings.seatingType === t ? "rgba(0,230,118,0.15)" : "transparent", color: settings.seatingType === t ? "#00E676" : "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "capitalize" }}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {settings.industry === "fitness" && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, marginBottom: 24 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Wet Area Details</div>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Shower Stalls</label>
                    <input type="number" value={settings.showerCount} min={0}
                      onChange={(e) => setSettings({ ...settings, showerCount: parseInt(e.target.value) || 0 })}
                      style={{ width: 80, padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center" }} />
                  </div>
                  <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                    <input type="checkbox" checked={settings.hasSauna} onChange={(e) => setSettings({ ...settings, hasSauna: e.target.checked })} style={{ accentColor: "#00E676", width: 18, height: 18 }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Has Sauna / Steam Room</span>
                  </label>
                </div>
              </div>
            )}

            {settings.industry === "daycare" && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, marginBottom: 24 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Enrollment Details</div>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Students Enrolled</label>
                    <input type="number" value={settings.studentCount} min={1}
                      onChange={(e) => setSettings({ ...settings, studentCount: parseInt(e.target.value) || 1 })}
                      style={{ width: 80, padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Changing Stations</label>
                    <input type="number" value={settings.changingStations} min={0}
                      onChange={(e) => setSettings({ ...settings, changingStations: parseInt(e.target.value) || 0 })}
                      style={{ width: 80, padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center" }} />
                  </div>
                </div>
              </div>
            )}

            {settings.industry === "hoa" && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, marginBottom: 24 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Building Size</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["small", "medium", "large", "luxury"].map((s) => (
                    <button key={s} onClick={() => setSettings({ ...settings, buildingSize: s })}
                      style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid", borderColor: settings.buildingSize === s ? "#00E676" : "rgba(255,255,255,0.15)", background: settings.buildingSize === s ? "rgba(0,230,118,0.15)" : "transparent", color: settings.buildingSize === s ? "#00E676" : "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "capitalize" }}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            {settings.industry === "warehouse" && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, marginBottom: 24 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Labor Details</div>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-end" }}>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Labor Hours/Day</label>
                    <input type="number" value={settings.laborHoursPerDay} min={1} max={16}
                      onChange={(e) => setSettings({ ...settings, laborHoursPerDay: parseInt(e.target.value) || 4 })}
                      style={{ width: 80, padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Scrubbing Sq Ft</label>
                    <input type="number" value={settings.warehouseScrubbingSqFt} min={0} step={1000}
                      onChange={(e) => setSettings({ ...settings, warehouseScrubbingSqFt: parseInt(e.target.value) || 0 })}
                      style={{ width: 120, padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Room Breakdown */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", margin: 0 }}>Room Breakdown</h3>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <select
                    onChange={(e) => { if (e.target.value) { addRoom(e.target.value); e.target.value = ""; } }}
                    style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", fontSize: 13, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer" }}>
                    <option value="">+ Add Room Type</option>
                    {industryPresets.map((p) => (<option key={p.name} value={p.name}>{p.name}</option>))}
                  </select>
                  <button onClick={() => addRoom(null)} style={{ background: "none", border: "none", color: "#00E676", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: "nowrap" }}>+ Custom</button>
                </div>
              </div>

              {rooms.length === 0 && (
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.3)", textAlign: "center", padding: 24 }}>Add rooms above to build your quote.</p>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {rooms.map((room) => (
                  <div key={room.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <input type="text" value={room.name} onChange={(e) => updateRoom(room.id, "name", e.target.value)}
                      style={{ background: "transparent", border: "none", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, flex: 1, minWidth: 0, outline: "none" }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      <button onClick={() => updateRoom(room.id, "quantity", Math.max(0, room.quantity - 1))}
                        style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "rgba(255,255,255,0.5)", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff", minWidth: 24, textAlign: "center" }}>{room.quantity}</span>
                      <button onClick={() => updateRoom(room.id, "quantity", room.quantity + 1)}
                        style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(0,230,118,0.3)", background: "rgba(0,230,118,0.08)", color: "#00E676", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                      <button onClick={() => removeRoom(room.id)}
                        style={{ background: "none", border: "none", color: "rgba(255,255,255,0.2)", fontSize: 16, cursor: "pointer", padding: "0 4px" }}>✕</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Porter Services */}
            {["education", "office", "medical"].includes(settings.industry) && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32 }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 20 }}>Day Porter Services</h3>
                {porters.map((porter) => (
                  <div key={porter.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>{porter.name}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Daily On-site Support</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>Hrs/Day</div>
                        <input type="number" value={porter.hoursPerDay} min={1} max={12}
                          onChange={(e) => setPorters((prev) => prev.map((p) => (p.id === porter.id ? { ...p, hoursPerDay: parseFloat(e.target.value) || 4 } : p)))}
                          style={{ width: 56, padding: "6px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button onClick={() => setPorters((prev) => prev.map((p) => (p.id === porter.id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p)))}
                          style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "rgba(255,255,255,0.5)", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff", minWidth: 20, textAlign: "center" }}>{porter.quantity}</span>
                        <button onClick={() => setPorters((prev) => prev.map((p) => (p.id === porter.id ? { ...p, quantity: p.quantity + 1 } : p)))}
                          style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(0,230,118,0.3)", background: "rgba(0,230,118,0.08)", color: "#00E676", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Quote Summary (sticky) */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ background: "#0D1310", border: "1px solid rgba(0,230,118,0.12)", borderRadius: 0, padding: 36 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "#00E676", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                {settings.serviceType === "recurring" ? "Estimated Monthly Cost" : "One-Time Deep Clean"}
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1 }}>
                {formatCurrency(quote.grandTotal)}
                {settings.serviceType === "recurring" && <span style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}> /mo</span>}
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: 16, marginBottom: 24 }}>
                {quote.breakdown.map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < quote.breakdown.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{item.label}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff" }}>{formatCurrency(item.value)}</span>
                  </div>
                ))}
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                style={{ display: "block", width: "100%", padding: "14px", background: "#00E676", border: "none", borderRadius: 4, color: "#060A07", fontSize: 13, fontWeight: 700, fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em", textAlign: "center", textDecoration: "none", boxSizing: "border-box", cursor: "pointer" }}>
                Request Formal Proposal →
              </a>

              {/* Email My Quote */}
              <div style={{ marginTop: 16, padding: '18px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)' }}>
                {quoteEmailSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '4px 0' }}>
                    <div style={{ color: '#00E676', fontSize: 20, marginBottom: 6 }}>✓</div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                      Check your inbox — your detailed quote has been sent.
                    </p>
                  </div>
                ) : (
                  <>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
                      Get Your Detailed Quote Breakdown
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={quoteEmail}
                        onChange={(e) => setQuoteEmail(e.target.value)}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(0,230,118,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                        style={{
                          flex: 1, padding: '10px 12px', background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, color: '#fff',
                          fontSize: 13, outline: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif", boxSizing: 'border-box',
                          transition: 'border-color 0.2s',
                        }}
                      />
                      <button
                        onClick={() => {
                          if (!quoteEmail) return;
                          console.log('[GreenPoint] Quote email capture:', { email: quoteEmail, quote, settings });
                          setQuoteEmailSubmitted(true);
                        }}
                        style={{
                          padding: '10px 16px', background: '#00E676',
                          border: 'none', borderRadius: 4, color: '#060A07', fontSize: 12, fontWeight: 700,
                          cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: 'nowrap',
                          boxShadow: '0 2px 12px rgba(0,230,118,0.25)',
                        }}
                      >
                        Send →
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Walkthrough CTA */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'block', width: '100%', marginTop: 10, padding: '12px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10, color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: 'center', textDecoration: 'none',
                  boxSizing: 'border-box', transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0,230,118,0.08)'; e.currentTarget.style.borderColor = 'rgba(0,230,118,0.3)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              >
                Schedule a Walkthrough to Confirm Pricing
              </a>

              <button onClick={() => { setStep("industry"); setRooms([]); setPorters([{ id: "p1", name: "Day Porter", quantity: 0, hoursPerDay: 4 }]); }}
                style={{ display: "block", width: "100%", marginTop: 12, padding: "12px", background: "none", border: "none", color: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Start Over
              </button>

              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center", marginTop: 16, lineHeight: 1.5 }}>
                Estimate based on industry standards. Final pricing confirmed after complimentary walkthrough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Header({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(6, 10, 7, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(46, 204, 113, 0.2)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.4s ease",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{
            width: 44, height: 44, borderRadius: 0, display: "flex", alignItems: "center", justifyContent: "center",
            background: "#00E676", fontWeight: 800, fontSize: 20, color: "#060A07",
            fontFamily: "'Syne', sans-serif",
          }}>
            G
          </div>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              GreenPoint
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Maintenance Services Corp
            </div>
          </div>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 24 }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo(item.target); }}
              style={{
                color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 13, fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#00E676")}
              onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.8)")}
            >
              {item.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            style={{
              color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <PhoneIcon size={16} color="#00E676" /> {PHONE_NUMBER}
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo("schedule"); }}
            style={{
              background: "#00E676", color: "#060A07", padding: "10px 24px",
              borderRadius: 4, fontWeight: 700, fontSize: 13, textDecoration: "none",
              fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase",
              transition: "transform 0.2s", whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 4px 20px rgba(0,230,118,0.4)"; }}
            onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 2px 12px rgba(0,230,118,0.3)"; }}
          >
            Schedule Walkthrough
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none", background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: 8,
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(10, 26, 18, 0.98)",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16,
          borderBottom: "1px solid rgba(46, 204, 113, 0.2)",
        }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(item.target); }}
              style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {item.label}
            </a>
          ))}
          <a href={PHONE_HREF}
            style={{ color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
            <PhoneIcon size={16} color="#00E676" /> {PHONE_NUMBER}
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo("contact"); }}
            style={{ background: "#00E676", color: "#060A07", padding: "12px 24px", borderRadius: 4, fontWeight: 700, textDecoration: "none", textAlign: "center", fontFamily: "'Syne', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: 13 }}>
            Schedule Walkthrough
          </a>
        </div>
      )}
    </header>
  );
}

// Multi-step qualified lead form for hero section
function HeroLeadForm() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    facilityType: '', squareFootage: '', currentProvider: '',
    timeline: '', name: '', email: '', phone: '', preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Compute next available walkthrough date (3 business days from today)
  const nextWalkthroughDate = (() => {
    const d = new Date();
    let added = 0;
    while (added < 3) {
      d.setDate(d.getDate() + 1);
      const dow = d.getDay();
      if (dow !== 0 && dow !== 6) added++; // skip Sun (0) and Sat (6)
    }
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  })();

  const facilityTypes = [
    { value: 'school', label: 'School / Educational', iconKey: 'school' },
    { value: 'church', label: 'Church / House of Worship', iconKey: 'church' },
    { value: 'medical', label: 'Medical Office', iconKey: 'medical' },
    { value: 'daycare', label: 'Daycare / Childcare', iconKey: 'baby' },
    { value: 'government', label: 'Government Building', iconKey: 'landmark' },
    { value: 'office', label: 'Commercial Office', iconKey: 'briefcase' },
    { value: 'other', label: 'Other', iconKey: 'building' },
  ];

  const sqftRanges = [
    { value: 'under-5000', label: 'Under 5,000 sq ft' },
    { value: '5000-15000', label: '5,000 – 15,000 sq ft' },
    { value: '15000-50000', label: '15,000 – 50,000 sq ft' },
    { value: '50000-100000', label: '50,000 – 100,000 sq ft' },
    { value: 'over-100000', label: '100,000+ sq ft' },
  ];

  const timelines = [
    { value: 'immediately', label: 'Immediately' },
    { value: 'within-30', label: 'Within 30 days' },
    { value: 'within-90', label: 'Within 90 days' },
    { value: 'researching', label: 'Just researching' },
  ];

  const inputStyle = {
    width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#fff', fontSize: 15,
    outline: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif", boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8,
    fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  const backBtnStyle = {
    background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 12,
    fontWeight: 600, cursor: 'pointer', marginBottom: 18, fontFamily: "'Plus Jakarta Sans', sans-serif",
    padding: 0, display: 'flex', alignItems: 'center', gap: 4,
  };

  const stepLabelStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: '#00E676',
    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6,
  };

  const headingStyle = {
    fontFamily: "'Syne', sans-serif", fontSize: 21, color: '#fff',
    marginBottom: 4, fontWeight: 700, lineHeight: 1.25,
  };

  const subStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)',
    marginBottom: 22,
  };

  const pillBtn = (active) => ({
    flex: 1, padding: '11px 8px', borderRadius: 8, fontSize: 13, fontWeight: 600,
    cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: 'center',
    background: active ? 'rgba(0,230,118,0.12)' : 'rgba(255,255,255,0.04)',
    border: '1px solid', borderColor: active ? '#00E676' : 'rgba(255,255,255,0.1)',
    color: active ? '#00E676' : 'rgba(255,255,255,0.65)',
    transition: 'all 0.18s',
  });

  const continueBtn = {
    width: '100%', padding: '14px', background: '#00E676',
    border: 'none', borderRadius: 4, color: '#060A07', fontSize: 13, fontWeight: 700,
    cursor: 'pointer', fontFamily: "'Syne', sans-serif", textTransform: 'uppercase', letterSpacing: '0.04em',
    transition: 'transform 0.18s',
  };

  function handleSubmit() {
    console.log('[GreenPoint] Walkthrough form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormStep(1);
      setFormData({ facilityType: '', squareFootage: '', currentProvider: '', timeline: '', name: '', email: '', phone: '', preferredDate: '' });
    }, 5000);
  }

  if (submitted) {
    return (
      <div className="hero-form" style={{
        background: '#0D1310', border: '1px solid rgba(0,230,118,0.3)',
        borderRadius: 0, padding: '48px 40px', textAlign: 'center',
      }}>
        <div style={{ marginBottom: 20 }}><CheckCircleIcon size={52} color="#00E676" /></div>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, color: '#fff', marginBottom: 10 }}>
          Walkthrough Requested
        </h3>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 28 }}>
          Thank you! We'll contact you within <strong style={{ color: '#fff' }}>4 business hours</strong> to confirm your walkthrough.
        </p>
        <div style={{ padding: '16px 20px', background: 'rgba(0,230,118,0.07)', borderRadius: 10, border: '1px solid rgba(0,230,118,0.15)' }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>
            Prefer to talk now?
          </div>
          <a href={PHONE_HREF} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: '#00E676', fontWeight: 700, textDecoration: 'none' }}>
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-form" style={{
      background: '#0D1310', border: '1px solid rgba(0,230,118,0.1)',
      borderRadius: 0, padding: '36px 40px',
    }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 28, alignItems: 'center' }}>
        {[1, 2, 3].map((s) => (
          <div key={s} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: s <= formStep ? '#00E676' : 'rgba(255,255,255,0.1)',
            transition: 'background 0.3s',
          }} />
        ))}
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.35)', marginLeft: 8, whiteSpace: 'nowrap' }}>
          {formStep} / 3
        </span>
      </div>

      {/* ── STEP 1: Facility type + square footage ── */}
      {formStep === 1 && (
        <>
          <div style={stepLabelStyle}>Step 1 of 3</div>
          <h3 style={headingStyle}>Tell us about your facility</h3>
          <p style={subStyle}>Select your facility type to get started.</p>

          {/* Facility type tile grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
            {facilityTypes.map((ft) => {
              const active = formData.facilityType === ft.value;
              return (
                <button
                  key={ft.value}
                  onClick={() => setFormData({ ...formData, facilityType: ft.value })}
                  style={{
                    background: active ? 'rgba(0,230,118,0.12)' : 'rgba(255,255,255,0.03)',
                    border: '1px solid', borderColor: active ? '#00E676' : 'rgba(255,255,255,0.1)',
                    borderRadius: 10, padding: '12px 10px', cursor: 'pointer', textAlign: 'left',
                    display: 'flex', alignItems: 'center', gap: 9, transition: 'all 0.18s',
                    gridColumn: ft.value === 'other' ? 'span 2' : undefined,
                  }}
                  onMouseOver={(e) => { if (!active) e.currentTarget.style.borderColor = 'rgba(0,230,118,0.35)'; }}
                  onMouseOut={(e) => { if (!active) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <span style={{ display: 'flex', flexShrink: 0 }}>
                    {getIcon(ft.iconKey, 16, active ? '#00E676' : 'rgba(255,255,255,0.45)')}
                  </span>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600,
                    color: active ? '#00E676' : 'rgba(255,255,255,0.7)',
                  }}>
                    {ft.label}
                  </span>
                  {active && (
                    <span style={{ marginLeft: 'auto', color: '#00E676', fontSize: 14, fontWeight: 700 }}>✓</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Square footage — revealed once facility type chosen */}
          {formData.facilityType && (
            <div style={{ marginBottom: 20, animation: 'fadeIn 0.2s ease' }}>
              <label style={labelStyle}>Approximate Square Footage</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {sqftRanges.map((r) => {
                  const active = formData.squareFootage === r.value;
                  return (
                    <button
                      key={r.value}
                      onClick={() => setFormData({ ...formData, squareFootage: r.value })}
                      style={{
                        ...pillBtn(active),
                        padding: '10px 8px', fontSize: 12,
                        gridColumn: r.value === 'over-100000' ? 'span 2' : undefined,
                      }}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <button
            disabled={!formData.facilityType || !formData.squareFootage}
            onClick={() => setFormStep(2)}
            style={{
              ...continueBtn,
              opacity: (!formData.facilityType || !formData.squareFootage) ? 0.45 : 1,
              cursor: (!formData.facilityType || !formData.squareFootage) ? 'not-allowed' : 'pointer',
            }}
            onMouseOver={(e) => { if (formData.facilityType && formData.squareFootage) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,230,118,0.38)'; } }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,230,118,0.28)'; }}
          >
            Continue →
          </button>
        </>
      )}

      {/* ── STEP 2: Current provider + timeline ── */}
      {formStep === 2 && (
        <>
          <button style={backBtnStyle} onClick={() => setFormStep(1)}>← Back</button>
          <div style={stepLabelStyle}>Step 2 of 3</div>
          <h3 style={headingStyle}>Your current situation</h3>
          <p style={subStyle}>This helps us prepare the right proposal.</p>

          <div style={{ marginBottom: 22 }}>
            <label style={labelStyle}>Do you currently have a cleaning provider?</label>
            <div style={{ display: 'flex', gap: 10 }}>
              {['Yes', 'No'].map((opt) => {
                const active = formData.currentProvider === opt;
                return (
                  <button key={opt} onClick={() => setFormData({ ...formData, currentProvider: opt })} style={pillBtn(active)}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>When do you need service to start?</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {timelines.map((t) => {
                const active = formData.timeline === t.value;
                return (
                  <button key={t.value} onClick={() => setFormData({ ...formData, timeline: t.value })} style={{ ...pillBtn(active), padding: '11px 10px' }}>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            disabled={!formData.currentProvider || !formData.timeline}
            onClick={() => setFormStep(3)}
            style={{
              ...continueBtn,
              opacity: (!formData.currentProvider || !formData.timeline) ? 0.45 : 1,
              cursor: (!formData.currentProvider || !formData.timeline) ? 'not-allowed' : 'pointer',
            }}
            onMouseOver={(e) => { if (formData.currentProvider && formData.timeline) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,230,118,0.38)'; } }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,230,118,0.28)'; }}
          >
            Continue →
          </button>
        </>
      )}

      {/* ── STEP 3: Contact info + preferred date ── */}
      {formStep === 3 && (
        <>
          <button style={backBtnStyle} onClick={() => setFormStep(2)}>← Back</button>
          <div style={stepLabelStyle}>Step 3 of 3</div>
          <h3 style={headingStyle}>Schedule your walkthrough</h3>

          {/* Urgency badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20,
            background: 'rgba(212,167,69,0.1)', border: '1px solid rgba(212,167,69,0.25)',
            borderRadius: 8, padding: '7px 12px',
          }}>
            <CalendarIcon size={13} color="#d4a745" />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#d4a745', fontWeight: 600 }}>
              Next available: {nextWalkthroughDate}
            </span>
          </div>

          {[
            { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Jane Smith' },
            { label: 'Work Email', key: 'email', type: 'email', placeholder: 'jane@yourfacility.com' },
            { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '(347) 555-0100' },
          ].map((field) => (
            <div key={field.key} style={{ marginBottom: 14 }}>
              <label style={labelStyle}>{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,230,118,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
            </div>
          ))}

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Preferred Walkthrough Date <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              style={{ ...inputStyle, colorScheme: 'dark' }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(0,230,118,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
          </div>

          <button
            disabled={!formData.name || !formData.email || !formData.phone}
            onClick={handleSubmit}
            style={{
              ...continueBtn,
              fontSize: 15,
              opacity: (!formData.name || !formData.email || !formData.phone) ? 0.45 : 1,
              cursor: (!formData.name || !formData.email || !formData.phone) ? 'not-allowed' : 'pointer',
            }}
            onMouseOver={(e) => { if (formData.name && formData.email && formData.phone) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,230,118,0.4)'; } }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,230,118,0.28)'; }}
          >
            Schedule My Walkthrough →
          </button>

          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 14, textAlign: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            No obligation. Free facility assessment + custom proposal within 48 hours.
          </p>
        </>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="noise-overlay"
      style={{
        position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
        background: "#060A07",
        overflow: "hidden",
      }}
    >
      <div className="hero-orb" style={{
        position: "absolute", top: -200, right: -200, width: 600, height: 600,
        background: "radial-gradient(circle, rgba(0,230,118,0.1) 0%, rgba(0,230,118,0.03) 40%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="hero-orb-2" style={{
        position: "absolute", bottom: -100, left: -100, width: 500, height: 500,
        background: "radial-gradient(circle, rgba(0,230,118,0.07) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="hero-orb" style={{
        position: "absolute", top: "40%", left: "15%", width: 300, height: 300,
        background: "radial-gradient(circle, rgba(0,230,118,0.04) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "140px 24px 80px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
          <div>
            <div className="hero-badge-anim" style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,230,118,0.1)",
              border: "1px solid rgba(0,230,118,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 28,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00E676", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 12, color: "#00E676", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                MBE Certified • Licensed & Insured
              </span>
            </div>

            <h1 className="hero-title-anim" style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.02em",
            }}>
              Your Facility Passes<br />
              Every Inspection.<br />
              <span style={{ color: "#00E676" }}>We Guarantee It.</span>
            </h1>

            <p className="hero-subtitle-anim" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7, marginBottom: 36, maxWidth: 520,
            }}>
              MBE-certified facility maintenance for schools, healthcare, houses of worship, and government buildings across NY, NJ, CT, PA &amp; FL. Every cleaning session verified in real-time through JaniTrack.
            </p>

            <div className="hero-ctas-anim" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("schedule"); }} className="cta-glow" style={{
                background: "#00E676", color: "#060A07", padding: "16px 36px",
                borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none", fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.04em", textTransform: "uppercase", transition: "transform 0.2s",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}
                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(0,230,118,0.45)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,230,118,0.3)"; }}
              >
                Schedule a Free Walkthrough
                <span style={{ fontSize: 20 }}>→</span>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("quote"); }} style={{
                background: "rgba(255,255,255,0.05)", color: "#fff", padding: "16px 36px",
                borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
                border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.2s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(0,230,118,0.4)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
              >
                Get an Instant Estimate
              </a>
            </div>

            <div className="hero-trust-anim" style={{ display: "flex", gap: 20, marginTop: 48, flexWrap: "wrap" }}>
              {[
                { text: "MBE / MWBE Certified" },
                { text: "SAM.gov Registered" },
                { text: "$2M+ Insurance" },
                { text: "Background-Checked Teams" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.2)", borderRadius: 100, padding: "5px 14px" }}>
                  <span style={{ color: "#00E676", fontWeight: 700, fontSize: 12 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-form-anim">
            <HeroLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="noise-overlay" style={{ background: "#0A0F0B", position: "relative", overflow: "hidden" }}>
      {/* Shimmer top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.4), transparent)" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, textAlign: "center", position: "relative", zIndex: 1 }} className="stats-grid">
        {TRUST_STATS.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1}>
            <div style={{
              padding: "20px 24px",
              borderRight: i < TRUST_STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <div className="stat-number" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, fontFamily: "'Syne', sans-serif", lineHeight: 1 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      {/* Shimmer bottom line */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.2), transparent)" }} />
    </section>
  );
}

function AuthorityBar() {
  const items = ["NYC Charter Schools", "Westchester Medical Offices", "NJ Houses of Worship", "CT Office Buildings", "PA Educational Facilities", "Bronx Community Centers", "Miami Healthcare Clinics", "Government Facilities", "MBE/MWBE Certified", "SAM.gov Registered", "$2M+ Insured"];
  return (
    <section style={{ background: '#0D1310', borderTop: '1px solid rgba(0,230,118,0.08)', borderBottom: '1px solid rgba(0,230,118,0.08)', padding: '14px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap' }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 24, padding: '0 32px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'rgba(0,230,118,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item}</span>
            <span style={{ color: 'rgba(0,230,118,0.2)', fontSize: 10 }}>◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComplianceSection() {
  return (
    <section id="compliance" className="noise-overlay" style={{ background: "#060A07", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              Compliance &amp; Certifications
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
              RFP-Ready. Procurement-Compliant.<br /><span style={{ color: "#00E676" }}>Audit-Proof.</span>
            </h2>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="stats-grid">
          {[
            { iconKey: "award", title: "MBE / MWBE Certified", desc: "NYC & NYS registered. Eligible for diversity procurement programs and set-aside contracts." },
            { iconKey: "file-check", title: "SAM.gov Registered", desc: "Federal contractor registration with valid CAGE code and UEI. Ready for government RFPs." },
            { iconKey: "shield", title: "$2M+ Insurance Coverage", desc: "Commercial general liability, workers' compensation, and bonding. COI available on request." },
            { iconKey: "clipboard", title: "OSHA Compliant", desc: "All field staff trained on OSHA safety standards. Background-checked and drug-tested workforce." },
          ].map((item) => (
            <AnimatedSection key={item.title}>
              <div style={{ background: "#0D1310", border: "1px solid rgba(0,230,118,0.1)", borderRadius: 0, padding: 32, textAlign: "center", height: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconBox size={64} radius={16} dark>
                  {getIcon(item.iconKey, 32)}
                </IconBox>
                <div style={{ height: 16 }} />
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>NAICS Codes: 561720 (Janitorial Services) | 238210 (Electrical Contractors) | 561790 (Other Services to Buildings)</div>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16,
            background: "rgba(0,230,118,0.12)", color: "#00E676", padding: "10px 24px", borderRadius: 8,
            fontWeight: 600, fontSize: 14, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
            border: "1px solid rgba(0,230,118,0.25)", transition: "all 0.2s",
          }}
            onMouseOver={(e) => { e.currentTarget.style.background = "rgba(0,230,118,0.2)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "rgba(0,230,118,0.12)"; }}
          >
            Request Capability Statement &amp; W-9 \u2192
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: "#0A0F0B", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
            <div>
              <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
                About GreenPoint
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
                Your Last Cleaning Company<br />Didn't Show Up. <span style={{ color: "#00E676" }}>We Will.</span>
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
                GreenPoint Maintenance Services Corp is an MBE-certified facility services provider headquartered in New York, serving institutional and commercial clients across five states since 2018. We specialize in the facilities that can't afford missed cleanings: schools with health inspections, medical offices with OSHA requirements, and government buildings with procurement compliance standards.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
                Every cleaning session is verified in real-time through JaniTrack — our proprietary system that provides timestamped photo documentation, GPS-tagged task completion, and ATP bioluminescence readings. You don't have to trust that we cleaned. You can see the proof.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { label: "MBE / MWBE Certified", sub: "NYS & NYC" },
                  { label: "SAM.gov Registered", sub: "Federal Contracting" },
                  { label: "Fully Insured", sub: "$2M+ GL Coverage" },
                  { label: "OSHA Compliant", sub: "Trained Workforce" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(0,230,118,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#00E676", fontWeight: 700, fontSize: 16 }}>✓</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>{item.label}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{
                background: "#0D1310", borderRadius: 0, border: "1px solid rgba(0,230,118,0.15)", padding: 48,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "radial-gradient(circle, rgba(0,230,118,0.15), transparent)", borderRadius: "50%" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: 20 }}><AwardIcon size={48} color="#00E676" /></div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, color: "#fff", marginBottom: 12 }}>
                    Certified Minority Business Enterprise
                  </h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 24 }}>
                    Registered with New York State and the City of New York. Eligible for all diversity procurement programs and MWBE set-aside contracts.
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>Also registered with:</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      {["SAM.gov", "OSHA Compliant", "EPA Standards"].map((badge) => (
                        <span key={badge} style={{
                          background: "rgba(0,230,118,0.15)", color: "#00E676", padding: "4px 12px",
                          borderRadius: 6, fontSize: 12, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ background: "#060A07", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Dot grid texture */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(13,40,24,0.05) 0.8px, transparent 0.8px)", backgroundSize: "28px 28px" }} />
      {/* Ambient green glow */}
      <div style={{ position: "absolute", top: "30%", left: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(0,230,118,0.04) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="green-line-center" />
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              Our Services
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              Complete Facility Solutions.<br /><span style={{ color: "#00E676" }}>One Contract. One Invoice.</span>
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Consolidate your facility services under one provider. From daily janitorial to emergency response — managed, documented, and verified.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="services-grid">
          {SERVICES.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.08}>
              <div
                className="premium-card card-accent-top"
                style={{
                  background: "#0D1310",
                  borderRadius: 0, padding: 40, border: "1px solid rgba(0,230,118,0.1)",
                  cursor: "default", height: "100%",
                  position: "relative", overflow: "hidden",
                }}
              >
                <IconBox size={56} radius={14}>
                  {getIcon(svc.iconKey, 28)}
                </IconBox>
                <div style={{ height: 18 }} />
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
                  {svc.title}
                </h3>
                {svc.outcome && (
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#00E676", fontWeight: 700, marginBottom: 10 }}>
                    {svc.outcome}
                  </div>
                )}
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  {svc.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="noise-overlay" style={{ background: "#060A07", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              Industries We Serve
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              Specialized Cleaning for<br />
              <span style={{ color: "#00E676" }}>Every Facility Type</span>
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Each industry has unique requirements. We've built dedicated protocols for every vertical we serve.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.slug}
                onClick={() => setActive(i)}
                style={{
                  padding: "10px 20px", borderRadius: 100, border: "1px solid",
                  borderColor: active === i ? "#00E676" : "rgba(255,255,255,0.15)",
                  background: active === i ? "rgba(0,230,118,0.15)" : "transparent",
                  color: active === i ? "#00E676" : "rgba(255,255,255,0.6)",
                  fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <span style={{ display: 'flex' }}>{getIcon(ind.iconKey, 16, active === i ? '#00E676' : 'rgba(255,255,255,0.5)')}</span> {ind.title.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20, padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
            position: "relative", overflow: "hidden",
          }} className="industry-detail">
            {/* Corner glow accent */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, background: "radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
            <div>
              <IconBox size={72} radius={18} dark>
                {getIcon(INDUSTRIES[active].iconKey, 36)}
              </IconBox>
              <div style={{ height: 16 }} />
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 14 }}>
                {INDUSTRIES[active].title}
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
                {INDUSTRIES[active].desc}
              </p>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#00E676", color: "#fff", padding: "12px 28px", borderRadius: 8,
                fontWeight: 600, fontSize: 14, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                Get a {INDUSTRIES[active].title.split("&")[0].trim()} Cleaning Quote →
              </a>
            </div>
            <div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                What's Included
              </div>
              {INDUSTRIES[active].features.map((feat, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 0",
                  borderBottom: i < INDUSTRIES[active].features.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 7, background: "rgba(0,230,118,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ color: "#00E676", fontSize: 13, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.8)" }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function JaniTrack() {
  return (
    <section id="janitrack" className="noise-overlay" style={{ background: "#0A0F0B", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,230,118,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="janitrack-grid">
            <div style={{ position: "relative" }}>
              <div style={{
                background: "#0D1310", borderRadius: 0, padding: 32, overflow: "hidden",
                border: "1px solid rgba(0,230,118,0.2)", boxShadow: "0 24px 80px rgba(0,0,0,0.15)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#00E676", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>JaniTrack</div>
                    <div style={{ fontSize: 18, color: "#fff", fontWeight: 700, fontFamily: "'Syne', sans-serif", marginTop: 2 }}>Live Dashboard</div>
                  </div>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00E676", boxShadow: "0 0 12px rgba(0,230,118,0.6)", animation: "pulse 2s infinite" }} />
                </div>

                {[
                  { time: "8:42 AM", area: "2nd Floor Restrooms", status: "Verified ✓", score: "98%" },
                  { time: "9:15 AM", area: "Main Lobby & Reception", status: "Verified ✓", score: "100%" },
                  { time: "9:38 AM", area: "Conference Room B", status: "In Progress", score: "—" },
                ].map((entry, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "16px 18px",
                    marginBottom: 10, border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#fff", fontWeight: 600 }}>{entry.area}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{entry.time}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: entry.status.includes("✓") ? "#00E676" : "#f39c12", fontWeight: 600 }}>{entry.status}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: "#fff", fontWeight: 800, marginTop: 2 }}>{entry.score}</div>
                    </div>
                  </div>
                ))}

                <div style={{
                  marginTop: 16, background: "rgba(0,230,118,0.08)", borderRadius: 12,
                  padding: "18px", border: "1px solid rgba(0,230,118,0.15)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "#00E676", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>ATP Bioluminescence</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>High-touch surface reading</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, color: "#00E676", fontWeight: 800 }}>12</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>RLU (Pass &lt;30)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
                Proprietary Technology
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
                JaniTrack:<br /><span style={{ color: "#00E676" }}>Proof, Not Promises</span>
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
                Most cleaning companies ask you to trust that the work was done. JaniTrack gives you verifiable proof — with real-time photo documentation, timestamped task completion, and ATP bioluminescence readings that quantify surface cleanliness.
              </p>

              {[
                { title: "Real-Time Photo Verification", desc: "Every task documented with timestamped, GPS-tagged photos accessible through your dashboard." },
                { title: "ATP Bioluminescence Testing", desc: "Scientific measurement of surface cleanliness using the same technology hospitals use. Measurable. Reportable." },
                { title: "Digital Quality Reports", desc: "Weekly and monthly reports delivered automatically. Share with your board, tenants, or regulatory bodies." },
                { title: "Direct Communication", desc: "Message your cleaning team directly. Request re-cleans, schedule changes, or supply orders in real-time." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 22 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, background: "rgba(0,230,118,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2,
                  }}>
                    <span style={{ color: "#00E676", fontWeight: 800, fontSize: 14 }}>{i + 1}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section style={{ background: "#060A07", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Decorative accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 20%, rgba(0,230,118,0.15) 50%, transparent 80%)" }} />
      <div style={{ position: "absolute", bottom: "15%", right: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(0,230,118,0.03) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              Client Testimonials
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
              Trusted by Facilities<br />Across the Tri-State
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonials-grid">
          {TESTIMONIALS.map((test, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                background: "#0D1310", borderRadius: 0, padding: 36, border: "1px solid rgba(0,230,118,0.1)",
                borderLeft: "3px solid #00E676",
                height: "100%", display: "flex", flexDirection: "column",
                position: "relative",
              }}>
                {/* Decorative quote mark */}
                <div style={{
                  position: "absolute", top: 20, right: 24,
                  fontSize: 80, lineHeight: 1, color: "rgba(0,230,118,0.08)",
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  pointerEvents: "none", userSelect: "none",
                }}>"</div>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: "#f39c12", fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, flex: 1, fontStyle: "italic", position: "relative", zIndex: 1 }}>
                  "{test.quote}"
                </p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>{test.name}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{test.role}</div>
                  <span style={{
                    display: "inline-block", marginTop: 8, background: "rgba(0,230,118,0.1)",
                    color: "#00E676", padding: "3px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {test.vertical}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" style={{ background: "#0A0F0B", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              Service Areas
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              Serving Five States.<br />
              <span style={{ color: "#00E676" }}>Rooted in New York.</span>
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }} className="areas-grid">
          {AREAS.map((area, i) => (
            <AnimatedSection key={area.state} delay={i * 0.1}>
              <div style={{
                background: i === 0 ? "#00E676" : "#0D1310",
                borderRadius: 0, padding: 32, border: "1px solid rgba(0,230,118,0.1)", height: "100%",
              }}>
                <div style={{
                  fontSize: 32, fontWeight: 900, fontFamily: "'Syne', sans-serif",
                  color: i === 0 ? "#060A07" : "#00E676", marginBottom: 4,
                }}>
                  {area.abbr}
                </div>
                <div style={{
                  fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: i === 0 ? "#060A07" : "#fff", marginBottom: 16,
                }}>
                  {area.state}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {area.regions.map((region) => (
                    <span key={region} style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13,
                      color: i === 0 ? "rgba(6,10,7,0.7)" : "rgba(255,255,255,0.5)",
                    }}>
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningCenter() {
  return (
    <section id="learning" style={{ background: "#060A07", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
                Learning Center
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
                Insights for Facility Managers
              </h2>
            </div>
            <a href="#" style={{
              color: "#00E676", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600,
              textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
            }}>
              View All Articles →
            </a>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="blog-grid">
          {BLOG_POSTS.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: 32, height: "100%", display: "flex", flexDirection: "column",
                transition: "all 0.3s", cursor: "pointer",
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(0,230,118,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
                  <span style={{
                    background: "rgba(0,230,118,0.12)", color: "#00E676", padding: "3px 10px",
                    borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", alignSelf: "center" }}>
                    {post.date}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 19, fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.35, flex: 0 }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, flex: 1 }}>
                  {post.excerpt}
                </p>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#00E676", fontWeight: 600, marginTop: 16 }}>
                  Read Article →
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section id="careers" style={{ background: "#0A0F0B", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{
            background: "#0D1310", borderRadius: 0, border: "1px solid rgba(0,230,118,0.12)", padding: "64px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", overflow: "hidden", position: "relative",
          }} className="careers-card">
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, background: "radial-gradient(circle, rgba(0,230,118,0.1), transparent)", borderRadius: "50%" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
                Join Our Team
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 18 }}>
                Build a Career in Facility Services
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 28 }}>
                We invest in our people with competitive wages, advancement opportunities, and a culture of respect. Every team member is background-checked, trained, and valued.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Competitive Pay", "Benefits", "Paid Training", "Growth Path"].map((perk) => (
                  <span key={perk} style={{
                    background: "rgba(0,230,118,0.12)", color: "#00E676", padding: "6px 14px",
                    borderRadius: 6, fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {perk}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#00E676", color: "#fff", padding: "16px 36px", borderRadius: 10,
                fontWeight: 700, fontSize: 16, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: "0 4px 24px rgba(0,230,118,0.3)",
              }}>
                View Open Positions →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function AcuitySection() {
  return (
    <section id="schedule" style={{ background: "#060A07", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, background: "radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 11, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Online Booking</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Schedule a Walkthrough or Phone Consultation
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            Book a time that works for you. We'll assess your facility and provide a custom cleaning plan.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -2, borderRadius: 16, background: "linear-gradient(135deg, rgba(0,230,118,0.2), rgba(0,230,118,0.05))", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <iframe
              src="https://app.acuityscheduling.com/schedule.php?owner=15345029&ref=embedded_csp"
              title="Schedule Appointment"
              width="100%"
              height="800"
              frameBorder="0"
              allow="payment"
              style={{ border: "none", display: "block", background: "#fff", borderRadius: 14 }}
            />
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            Prefer to reach out directly?{" "}
            <a href="tel:+13473329348" style={{ color: "#00E676", textDecoration: "none", fontWeight: 600 }}>Call 347-332-9348</a>
            {" "}or{" "}
            <a href="mailto:info@greenpointms.com" style={{ color: "#00E676", textDecoration: "none", fontWeight: 600 }}>email info@greenpointms.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ background: "#0A0F0B", padding: "100px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <AnimatedSection>
          <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
            Get Started
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
            Ready for a Cleaner,<br /><span style={{ color: "#00E676" }}>Compliant Facility?</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            Schedule a free facility walkthrough. We'll assess your space, identify compliance gaps, and deliver a fixed-price proposal within 48 hours. No obligation.
          </p>

          <div style={{
            background: "#0D1310", borderRadius: 0, padding: 48, border: "1px solid rgba(0,230,118,0.1)",
            textAlign: "left",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="contact-form-grid">
              {[
                { label: "Full Name", type: "text", placeholder: "John Smith" },
                { label: "Email", type: "email", placeholder: "john@facility.com" },
                { label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
                { label: "Facility Type", type: "select" },
              ].map((field) => (
                <div key={field.label}>
                  <label style={{ display: "block", fontSize: 10, color: "rgba(0,230,118,0.7)", marginBottom: 6, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select style={{
                      width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 4, color: "#fff", fontSize: 15, outline: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", boxSizing: "border-box",
                    }}>
                      <option value="">Select type...</option>
                      <option>School / Educational</option>
                      <option>Church / House of Worship</option>
                      <option>Medical / Healthcare</option>
                      <option>Daycare / Childcare</option>
                      <option>Government</option>
                      <option>Commercial Office</option>
                      <option>Other</option>
                    </select>
                  ) : (
                    <input type={field.type} placeholder={field.placeholder} style={{
                      width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 4, color: "#fff", fontSize: 15, outline: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", boxSizing: "border-box",
                    }} />
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ display: "block", fontSize: 10, color: "rgba(0,230,118,0.7)", marginBottom: 6, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                Tell Us About Your Facility
              </label>
              <textarea rows={4} placeholder="Approximate square footage, number of floors, current cleaning schedule, any special requirements..."
                style={{
                  width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4, color: "#fff", fontSize: 15, outline: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
                  resize: "vertical", boxSizing: "border-box",
                }} />
            </div>
            <button style={{
              width: "100%", marginTop: 24, padding: "16px 24px", background: "#00E676",
              border: "none", borderRadius: 4, color: "#060A07", fontSize: 15, fontWeight: 700, cursor: "pointer",
              fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase",
              transition: "transform 0.2s",
            }}
              onMouseOver={(e) => e.target.style.transform = "translateY(-1px)"}
              onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
            >
              Schedule My Walkthrough →
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 48, flexWrap: "wrap" }}>
            {[
              { label: "Phone", value: PHONE_NUMBER, iconEl: <PhoneIcon size={24} color="#00E676" />, href: PHONE_HREF },
              { label: "Email", value: "info@greenpointms.com", iconEl: <MailIcon size={24} color="#00E676" />, href: "mailto:info@greenpointms.com" },
              { label: "Hours", value: "Mon–Sat 7AM–8PM • 24/7 Emergency", iconEl: <ClockIcon size={24} color="#00E676" /> },
            ].map((info) => (
              <div key={info.label} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>{info.iconEl}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{info.label}</div>
                {info.href ? (
                  <a href={info.href} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "#fff", fontWeight: 600, marginTop: 4, display: "block", textDecoration: "none" }}
                    onMouseOver={(e) => e.target.style.color = "#00E676"} onMouseOut={(e) => e.target.style.color = "#fff"}>{info.value}</a>
                ) : (
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "#fff", fontWeight: 600, marginTop: 4 }}>{info.value}</div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="noise-overlay" style={{ background: "#0A0F0B", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, background: "radial-gradient(circle, rgba(0,230,118,0.05) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              How It Works
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              From First Call to<br />
              <span style={{ color: "#00E676" }}>Verifiably Clean</span>
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Getting started is simple. Here's what happens when you reach out.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }} className="process-grid">
          <div style={{
            position: "absolute", top: 44, left: "12.5%", right: "12.5%", height: 2,
            background: "linear-gradient(90deg, rgba(0,230,118,0.6), rgba(0,230,118,0.15))", zIndex: 0,
          }} className="process-line" />
          {PROCESS_STEPS.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.12}>
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 0, margin: "0 auto 24px",
                  background: i === PROCESS_STEPS.length - 1 ? "#00E676" : "rgba(0,230,118,0.08)",
                  border: i === PROCESS_STEPS.length - 1 ? "2px solid #00E676" : "2px solid rgba(0,230,118,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: i === PROCESS_STEPS.length - 1 ? "0 4px 30px rgba(0,230,118,0.3)" : "0 4px 20px rgba(0,0,0,0.2)",
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 16,
                    color: i === PROCESS_STEPS.length - 1 ? "#060A07" : "#00E676",
                  }}>
                    {step.step}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyGreenPoint() {
  return (
    <section id="why" style={{ background: "#060A07", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Subtle cross-hatch pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.02, pointerEvents: "none", backgroundImage: "linear-gradient(45deg, #0d2818 1px, transparent 1px), linear-gradient(-45deg, #0d2818 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              Why GreenPoint
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              What Sets Us Apart From<br />Every Other Cleaning Company
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="why-grid">
          {WHY_US.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="premium-card" style={{
                background: "#0D1310",
                borderRadius: 0, padding: 40, border: "1px solid rgba(0,230,118,0.1)",
                borderLeft: "3px solid #00E676",
                display: "flex", gap: 24, alignItems: "flex-start", height: "100%",
              }}
              >
                <IconBox size={56} radius={14}>
                  {getIcon(item.iconKey, 28)}
                </IconBox>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12 }}>
                    {item.desc}
                  </p>
                  <span style={{
                    display: "inline-block", background: "rgba(0,230,118,0.08)", color: "#00E676",
                    padding: "4px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {item.competitor}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="noise-overlay" style={{ background: "#0A0F0B", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(0,230,118,0.04) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ maxWidth: 880, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace" }}>
              Frequently Asked Questions
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
              Everything You Need to Know
            </h2>
          </div>
        </AnimatedSection>

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.2s",
              }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    gap: 20,
                  }}
                >
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 600,
                    color: openIndex === i ? "#00E676" : "#fff", transition: "color 0.2s", lineHeight: 1.4,
                  }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontSize: 22, color: openIndex === i ? "#00E676" : "#aaa", flexShrink: 0,
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s, color 0.2s", lineHeight: 1,
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: openIndex === i ? 400 : 0, overflow: "hidden",
                  transition: "max-height 0.4s ease, padding 0.3s ease",
                  paddingBottom: openIndex === i ? 22 : 0,
                }}>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.8, paddingRight: 48,
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#060A07", padding: "0 0 0" }}>
      {/* Pre-footer CTA block */}
      <div style={{ background: "#0A0F0B", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(0,230,118,0.12)" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(0,230,118,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 11, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to Upgrade Your Facility?
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
            Your Facility Deserves Better.<br /><span style={{ color: "#00E676" }}>Let's Talk.</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36 }}>
            Get a custom cleaning plan in 24 hours. MBE-certified. Bonded & insured. No obligation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="cta-glow" style={{
              background: "#00E676", color: "#060A07",
              padding: "14px 32px", borderRadius: 4, fontWeight: 700, fontSize: 13,
              textDecoration: "none", fontFamily: "'Syne', sans-serif",
              textTransform: "uppercase", letterSpacing: "0.04em",
            }}>
              Get a Free Quote →
            </a>
            <a href={PHONE_HREF} style={{
              background: "rgba(255,255,255,0.08)", color: "#fff",
              padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 15,
              textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      <div style={{ padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                background: "#00E676", fontWeight: 800, fontSize: 18, color: "#060A07",
                fontFamily: "'Syne', sans-serif",
              }}>G</div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>GreenPoint</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Maintenance Services Corp</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 320 }}>
              MBE-certified facility services provider. Commercial janitorial and facility maintenance across NY, NJ, CT, PA, and FL since 2018.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
              {["MBE / MWBE", "SAM.gov", "Bonded & Insured"].map((badge) => (
                <span key={badge} style={{
                  background: "rgba(0,230,118,0.1)", color: "#00E676", padding: "3px 10px",
                  borderRadius: 4, fontSize: 10, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {badge}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
                NAICS: 561720 | 238210 | 561790
              </div>
              <a href={PHONE_HREF} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontWeight: 600, display: "block", marginTop: 6 }}>{PHONE_NUMBER}</a>
              <a href="mailto:info@greenpointms.com" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "block", marginTop: 4 }}>info@greenpointms.com</a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(0,230,118,0.6)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18 }}>Services</div>
            {["Commercial Janitorial", "Disinfection", "Floor Care", "Day Porter", "Facility Maintenance", "Post-Construction"].map((link) => (
              <a key={link} href="#" onClick={(e) => { e.preventDefault(); scrollTo("services"); }} style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#00E676"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.55)"}>
                {link}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(0,230,118,0.6)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18 }}>Industries</div>
            {["Schools & Education", "Churches & Worship", "Healthcare & Medical", "Daycare Centers", "Government", "Commercial Offices"].map((link) => (
              <a key={link} href="#" onClick={(e) => { e.preventDefault(); scrollTo("industries"); }} style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#00E676"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.55)"}>
                {link}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(0,230,118,0.6)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18 }}>Company</div>
            {[
              { label: "About", target: "about" },
              { label: "JaniTrack", target: "janitrack" },
              { label: "Service Areas", target: "areas" },
              { label: "Learning Center", target: "learning" },
              { label: "Careers", target: "careers" },
              { label: "Contact", target: "contact" },
            ].map((link) => (
              <a key={link.label} href="#" onClick={(e) => { e.preventDefault(); scrollTo(link.target); }} style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#00E676"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.55)"}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © 2026 GreenPoint Maintenance Services Corp. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

// Sticky CTA bar - appears after scrolling past hero
function StickyCtaBar({ visible }) {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 998,
      background: 'rgba(6, 10, 7, 0.97)', backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(0, 230, 118, 0.15)',
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.4s ease',
      padding: '12px 24px',
    }} className="sticky-cta-bar">
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="sticky-cta-info">
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              Ready for a cleaner facility?
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
              Free walkthrough • Fixed pricing • 48-hour proposal
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', textDecoration: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700 }} className="sticky-phone">
            <PhoneIcon size={16} color="#00E676" /> {PHONE_NUMBER}
          </a>
          <a href="#contact" style={{
            background: '#00E676', color: '#060A07', padding: '10px 24px',
            borderRadius: 4, fontWeight: 700, fontSize: 13, textDecoration: 'none', fontFamily: "'Syne', sans-serif",
            textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap',
          }}>Schedule Walkthrough</a>
        </div>
      </div>
    </div>
  );
}

export default function GreenPointWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowStickyCta(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    const openModal = () => setShowQuoteModal(true);
    window.addEventListener('openQuoteModal', openModal);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('openQuoteModal', openModal);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0, padding: 0, background: '#060A07' }}>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* === PREMIUM KEYFRAME ANIMATIONS === */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(50px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes heroSlideRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(0,230,118,0.15); box-shadow: 0 0 20px rgba(0,230,118,0); }
          50% { border-color: rgba(0,230,118,0.35); box-shadow: 0 0 30px rgba(0,230,118,0.08); }
        }
        @keyframes grainShift {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes numberCount {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes iconSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes staggerReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* === HERO ENTRANCE STAGGER === */
        .hero-badge-anim {
          opacity: 0; animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        .hero-title-anim {
          opacity: 0; animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
        }
        .hero-subtitle-anim {
          opacity: 0; animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }
        .hero-ctas-anim {
          opacity: 0; animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
        }
        .hero-trust-anim {
          opacity: 0; animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
        }
        .hero-form-anim {
          opacity: 0; animation: heroScaleIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
        .hero-orb {
          animation: orbFloat 12s ease-in-out infinite;
        }
        .hero-orb-2 {
          animation: orbFloat 15s ease-in-out infinite reverse;
        }

        /* === PREMIUM CARD HOVER === */
        .premium-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease !important;
        }
        .premium-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 0 40px rgba(0,230,118,0.08) !important;
          border-color: rgba(0,230,118,0.3) !important;
        }

        /* === DARK PREMIUM CARD === */
        .dark-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease !important;
        }
        .dark-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 50px rgba(0,230,118,0.1) !important;
          border-color: rgba(0,230,118,0.4) !important;
        }

        /* === CTA BUTTON GLOW === */
        .cta-glow {
          position: relative; overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease !important;
        }
        .cta-glow:hover {
          transform: translateY(-3px) scale(1.02) !important;
          box-shadow: 0 8px 40px rgba(0,230,118,0.45), 0 0 80px rgba(0,230,118,0.15) !important;
        }
        .cta-glow::after {
          content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          transform: rotate(30deg); transition: left 0.6s ease;
          pointer-events: none;
        }
        .cta-glow:hover::after { left: 100%; }

        /* === SECTION DIAGONAL DIVIDER === */
        .section-divider-top {
          position: relative;
        }
        .section-divider-top::before {
          content: ''; position: absolute; top: -1px; left: 0; right: 0; height: 80px;
          background: inherit; clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
          z-index: 1;
        }

        /* === GLASS MORPHISM === */
        .glass {
          background: rgba(255,255,255,0.03) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
        }

        /* === HEADER GLASS === */
        .header-glass {
          backdrop-filter: blur(24px) saturate(1.4) !important;
          -webkit-backdrop-filter: blur(24px) saturate(1.4) !important;
        }

        /* === GREEN ACCENT LINE === */
        .green-line {
          width: 48px; height: 3px; background: linear-gradient(90deg, #00E676, #00E676); border-radius: 2px;
          margin-bottom: 20px;
        }
        .green-line-center {
          width: 48px; height: 3px; background: linear-gradient(90deg, #00E676, #00E676); border-radius: 2px;
          margin: 0 auto 20px;
        }

        /* === GREEN HOVER UNDERLINE === */
        .green-hover-underline {
          position: relative; display: inline-block;
        }
        .green-hover-underline::after {
          content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px;
          background: linear-gradient(90deg, #00E676, #00E676);
          transition: width 0.3s ease;
        }
        .green-hover-underline:hover::after { width: 100%; }

        /* === DOT GRID TEXTURE === */
        .dot-texture {
          background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* === CARD TOP ACCENT === */
        .card-accent-top {
          position: relative; overflow: hidden;
        }
        .card-accent-top::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #00E676, #00E676, #00E676);
          background-size: 200% auto;
          animation: shimmerLine 2s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-accent-top:hover::before { opacity: 1; }

        /* === NOISE GRAIN OVERLAY === */
        .noise-overlay::after {
          content: ''; position: absolute; inset: 0; opacity: 0.035; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px 128px; animation: grainShift 4s steps(10) infinite;
        }

        /* === STAT COUNTER === */
        .stat-number {
          background: linear-gradient(135deg, #00E676, #00E676, #00E676);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }

        /* === RESPONSIVE === */
        .mobile-toggle { display: none !important; }
        @media (max-width: 1024px) {
          .hero-grid, .about-grid, .janitrack-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .quote-calc-grid { grid-template-columns: 1fr !important; }
          .quote-freq-grid { grid-template-columns: 1fr !important; }
          .hero-form { order: -1; }
          .services-grid, .testimonials-grid, .blog-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .areas-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .industry-detail { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .careers-card { grid-template-columns: 1fr !important; padding: 40px !important; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-line { display: none !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .sticky-cta-info { display: none !important; }
        }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .services-grid, .testimonials-grid, .blog-grid { grid-template-columns: 1fr !important; }
          .stats-grid, .areas-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .sticky-phone { display: none !important; }
          .sticky-cta-bar > div { justify-content: center !important; }
        }
        [id] { scroll-margin-top: 80px; }
        .mobile-phone-float { display: none !important; }
        @media (max-width: 640px) {
          .mobile-phone-float { display: flex !important; }
        }
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp { from { opacity: 0; transform: translateY(24px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      <QuoteChoiceModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
      <Header scrolled={scrolled} />
      <Hero />
      <StatsBar />
      <SectionDivider fromColor="#0A0F0B" toColor="#060A07" />
      <AuthorityBar />
      <Services />
      <SectionDividerReverse fromColor="#060A07" toColor="#0A0F0B" />
      <IndustriesSection />
      <JaniTrack />
      <QuoteCalculator />
      <AcuitySection />
      <SectionDivider fromColor="#060A07" toColor="#0A0F0B" />
      <TestimonialsSection />
      <SectionDividerReverse fromColor="#0A0F0B" toColor="#060A07" />
      <ComplianceSection />
      <ProcessSection />
      <SectionDivider fromColor="#0A0F0B" toColor="#060A07" />
      <ContactSection />
      <WhyGreenPoint />
      <FAQSection />
      <Footer />

      {/* Sticky CTA bar */}
      <StickyCtaBar visible={showStickyCta} />

      {/* Floating mobile phone button */}
      <a href={PHONE_HREF} style={{
        position: "fixed", bottom: showStickyCta ? 68 : 20, right: 20, width: 56, height: 56,
        borderRadius: "50%", background: "#00E676",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,230,118,0.4)", zIndex: 999,
        textDecoration: "none", transition: 'bottom 0.4s ease',
      }} className="mobile-phone-float">
        <PhoneIcon size={22} color="#fff" />
      </a>
    </div>
  );
}
