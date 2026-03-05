export const STATES = [
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    cities: [
      { slug: "bronx", name: "Bronx", county: "Bronx County" },
      { slug: "manhattan", name: "Manhattan", county: "New York County" },
      { slug: "brooklyn", name: "Brooklyn", county: "Kings County" },
      { slug: "queens", name: "Queens", county: "Queens County" },
      { slug: "staten-island", name: "Staten Island", county: "Richmond County" },
      { slug: "yonkers", name: "Yonkers", county: "Westchester County" },
      { slug: "new-rochelle", name: "New Rochelle", county: "Westchester County" },
      { slug: "mount-vernon", name: "Mount Vernon", county: "Westchester County" },
      { slug: "white-plains", name: "White Plains", county: "Westchester County" },
      { slug: "westchester", name: "Westchester", county: "Westchester County" },
      { slug: "hempstead", name: "Hempstead", county: "Nassau County" },
      { slug: "freeport", name: "Freeport", county: "Nassau County" },
      { slug: "long-beach", name: "Long Beach", county: "Nassau County" },
      { slug: "buffalo", name: "Buffalo", county: "Erie County" },
      { slug: "syracuse", name: "Syracuse", county: "Onondaga County" },
      { slug: "albany", name: "Albany", county: "Albany County" },
      { slug: "poughkeepsie", name: "Poughkeepsie", county: "Dutchess County" },
      { slug: "spring-valley", name: "Spring Valley", county: "Rockland County" },
    ],
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    cities: [
      { slug: "newark", name: "Newark", county: "Essex County" },
      { slug: "jersey-city", name: "Jersey City", county: "Hudson County" },
      { slug: "paterson", name: "Paterson", county: "Passaic County" },
      { slug: "elizabeth", name: "Elizabeth", county: "Union County" },
      { slug: "hackensack", name: "Hackensack", county: "Bergen County" },
      { slug: "fort-lee", name: "Fort Lee", county: "Bergen County" },
      { slug: "hoboken", name: "Hoboken", county: "Hudson County" },
      { slug: "clifton", name: "Clifton", county: "Passaic County" },
      { slug: "passaic", name: "Passaic", county: "Passaic County" },
      { slug: "east-orange", name: "East Orange", county: "Essex County" },
      { slug: "trenton", name: "Trenton", county: "Mercer County" },
      { slug: "camden", name: "Camden", county: "Camden County" },
      { slug: "edison", name: "Edison", county: "Middlesex County" },
      { slug: "woodbridge", name: "Woodbridge", county: "Middlesex County" },
      { slug: "toms-river", name: "Toms River", county: "Ocean County" },
      { slug: "union-city", name: "Union City", county: "Hudson County" },
      { slug: "bayonne", name: "Bayonne", county: "Hudson County" },
      { slug: "north-bergen", name: "North Bergen", county: "Hudson County" },
    ],
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbr: "CT",
    cities: [
      { slug: "stamford", name: "Stamford", county: "Fairfield County" },
      { slug: "bridgeport", name: "Bridgeport", county: "Fairfield County" },
      { slug: "new-haven", name: "New Haven", county: "New Haven County" },
      { slug: "hartford", name: "Hartford", county: "Hartford County" },
      { slug: "norwalk", name: "Norwalk", county: "Fairfield County" },
      { slug: "danbury", name: "Danbury", county: "Fairfield County" },
      { slug: "waterbury", name: "Waterbury", county: "New Haven County" },
      { slug: "greenwich", name: "Greenwich", county: "Fairfield County" },
      { slug: "new-london", name: "New London", county: "New London County" },
      { slug: "middletown", name: "Middletown", county: "Middlesex County" },
      { slug: "west-hartford", name: "West Hartford", county: "Hartford County" },
      { slug: "milford", name: "Milford", county: "New Haven County" },
      { slug: "shelton", name: "Shelton", county: "Fairfield County" },
      { slug: "manchester", name: "Manchester", county: "Hartford County" },
    ],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    cities: [
      { slug: "philadelphia", name: "Philadelphia", county: "Philadelphia County" },
      { slug: "allentown", name: "Allentown", county: "Lehigh County" },
      { slug: "scranton", name: "Scranton", county: "Lackawanna County" },
      { slug: "bethlehem", name: "Bethlehem", county: "Northampton County" },
      { slug: "reading", name: "Reading", county: "Berks County" },
      { slug: "king-of-prussia", name: "King of Prussia", county: "Montgomery County" },
      { slug: "norristown", name: "Norristown", county: "Montgomery County" },
      { slug: "chester", name: "Chester", county: "Delaware County" },
      { slug: "pittsburgh", name: "Pittsburgh", county: "Allegheny County" },
      { slug: "harrisburg", name: "Harrisburg", county: "Dauphin County" },
      { slug: "lancaster", name: "Lancaster", county: "Lancaster County" },
      { slug: "erie", name: "Erie", county: "Erie County" },
      { slug: "wilkes-barre", name: "Wilkes-Barre", county: "Luzerne County" },
      { slug: "york", name: "York", county: "York County" },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    cities: [
      { slug: "orlando", name: "Orlando", county: "Orange County" },
      { slug: "miami", name: "Miami", county: "Miami-Dade County" },
      { slug: "fort-lauderdale", name: "Fort Lauderdale", county: "Broward County" },
      { slug: "kissimmee", name: "Kissimmee", county: "Osceola County" },
      { slug: "miami-beach", name: "Miami Beach", county: "Miami-Dade County" },
      { slug: "coral-gables", name: "Coral Gables", county: "Miami-Dade County" },
      { slug: "hialeah", name: "Hialeah", county: "Miami-Dade County" },
      { slug: "pembroke-pines", name: "Pembroke Pines", county: "Broward County" },
      { slug: "tampa", name: "Tampa", county: "Hillsborough County" },
      { slug: "jacksonville", name: "Jacksonville", county: "Duval County" },
      { slug: "west-palm-beach", name: "West Palm Beach", county: "Palm Beach County" },
      { slug: "boca-raton", name: "Boca Raton", county: "Palm Beach County" },
      { slug: "clearwater", name: "Clearwater", county: "Pinellas County" },
      { slug: "st-petersburg", name: "St. Petersburg", county: "Pinellas County" },
      { slug: "davie", name: "Davie", county: "Broward County" },
      { slug: "doral", name: "Doral", county: "Miami-Dade County" },
    ],
  },
];

export const INDUSTRIES = [
  {
    slug: "school-cleaning",
    name: "Schools & Educational Facilities",
    shortName: "School Cleaning",
    icon: "school",
    description: "CDC-compliant cleaning for K-12 schools, charter schools, private academies, and universities. Green Seal certified products safe for students and staff.",
    features: [
      "CDC-compliant classroom sanitization protocols",
      "Cafeteria and gymnasium deep cleaning",
      "Non-toxic, allergy-safe products for children",
      "Flexible after-hours and summer scheduling",
      "Locker room and restroom rotation programs",
      "Athletic facility and playground maintenance",
    ],
    compliance: ["CDC Guidelines", "EPA N-List Disinfectants", "Green Seal Certified", "OSHA Compliant"],
    painPoints: [
      "Student health and allergy concerns from chemical exposure",
      "Inconsistent cleaning during school year vs summer",
      "High-traffic restrooms requiring multiple daily turnovers",
      "Cafeteria sanitation and food safety compliance",
    ],
  },
  {
    slug: "church-cleaning",
    name: "Churches & Houses of Worship",
    shortName: "Church Cleaning",
    icon: "church",
    description: "Respectful, meticulous cleaning for sanctuaries, fellowship halls, nurseries, and administrative offices for congregations of all sizes.",
    features: [
      "Sanctuary and pew/chair care",
      "Fellowship hall event turnaround cleaning",
      "Nursery and childcare room sanitization",
      "Vestibule and lobby presentation",
      "Restroom deep cleaning after services",
      "Kitchen and food preparation area care",
    ],
    compliance: ["ADA Accessible Cleaning", "Child-Safe Products", "Green Seal Certified"],
    painPoints: [
      "Heavy foot traffic on worship days requiring rapid turnaround",
      "Nursery sanitization for infant and toddler safety",
      "Maintaining sacred spaces with appropriate care and respect",
      "Event-driven cleaning schedules that change weekly",
    ],
  },
  {
    slug: "medical-office-cleaning",
    name: "Healthcare & Medical Offices",
    shortName: "Medical Office Cleaning",
    icon: "medical",
    description: "OSHA-compliant terminal cleaning for medical offices, dental practices, outpatient clinics, urgent care centers, and long-term care facilities.",
    features: [
      "OSHA and HIPAA-aware cleaning protocols",
      "Exam room terminal sanitization",
      "Waiting area and reception deep cleaning",
      "Biohazard-safe waste handling procedures",
      "ATP bioluminescence testing verification",
      "High-touch surface disinfection rotations",
    ],
    compliance: ["OSHA Standards", "HIPAA Aware", "EPA Hospital-Grade Disinfectants", "ATP Testing"],
    painPoints: [
      "Cross-contamination risk between exam rooms",
      "Meeting regulatory inspection standards consistently",
      "Patient-facing areas requiring pristine presentation",
      "Proper handling of medical waste and biohazards",
    ],
  },
  {
    slug: "daycare-cleaning",
    name: "Daycare & Childcare Centers",
    shortName: "Daycare Cleaning",
    icon: "baby",
    description: "Specialized cleaning for infant rooms, toddler areas, and play spaces using exclusively non-toxic, eco-friendly products approved for environments with children.",
    features: [
      "Non-toxic, child-safe products exclusively",
      "Toy and play surface sanitization",
      "Nap room and changing station protocols",
      "Health department compliance cleaning",
      "Indoor play area deep sanitization",
      "Staff break room and kitchen cleaning",
    ],
    compliance: ["Health Department Standards", "EPA Safer Choice Products", "Child-Safe Certification", "Green Seal"],
    painPoints: [
      "Infants and toddlers putting everything in their mouths",
      "Changing station sanitation and diaper area hygiene",
      "Health department surprise inspections",
      "Parents demanding visible cleanliness proof",
    ],
  },
  {
    slug: "government-building-cleaning",
    name: "Government & Municipal Buildings",
    shortName: "Government Cleaning",
    icon: "landmark",
    description: "Secure, reliable cleaning for government offices, courthouses, community centers, and public facilities. MBE-certified for diversity procurement compliance.",
    features: [
      "MBE/MWBE certification for procurement",
      "Background-checked and cleared staff",
      "Secure facility cleaning protocols",
      "ADA-compliant service delivery",
      "Public restroom high-frequency programs",
      "After-hours and weekend availability",
    ],
    compliance: ["SAM.gov Registered", "MBE/MWBE Certified", "Background Checked", "ADA Compliant"],
    painPoints: [
      "Meeting diversity procurement requirements",
      "Security clearance and background check requirements",
      "High-traffic public spaces needing constant upkeep",
      "Budget constraints with quality expectations",
    ],
  },
  {
    slug: "office-cleaning",
    name: "Commercial Office Buildings",
    shortName: "Office Cleaning",
    icon: "building",
    description: "Comprehensive cleaning programs for single-tenant offices to multi-floor commercial properties including conference rooms, reception areas, and shared spaces.",
    features: [
      "Customized cleaning checklists per floor",
      "After-hours and weekend service options",
      "Conference room ready-service programs",
      "Tenant satisfaction and retention programs",
      "Lobby and reception area presentation",
      "Kitchen, breakroom, and restroom care",
    ],
    compliance: ["LEED Compliant Products", "Green Seal Certified", "OSHA Standards"],
    painPoints: [
      "Inconsistent cleaning quality across floors",
      "Conference rooms not ready for morning meetings",
      "Restroom complaints from tenants and visitors",
      "Cleaning schedules conflicting with business hours",
    ],
  },
];

export const SERVICES_LIST = [
  {
    slug: "commercial-janitorial",
    name: "Commercial Janitorial Services",
    shortName: "Janitorial",
    icon: "building",
    description: "Daily, weekly, and monthly cleaning programs for lobbies, restrooms, common areas, offices, and workspaces. Customized schedules that work around your operations.",
    includes: ["Trash removal and recycling", "Restroom sanitization", "Floor sweeping, mopping, and vacuuming", "High-touch surface disinfection", "Kitchen and breakroom cleaning", "Lobby and reception maintenance"],
  },
  {
    slug: "disinfection-sanitization",
    name: "Disinfection & Sanitization",
    shortName: "Disinfection",
    icon: "sparkles",
    description: "CDC-compliant electrostatic disinfection, hospital-grade sanitizers, and ATP bioluminescence testing for verifiable pathogen elimination.",
    includes: ["Electrostatic sprayer application", "EPA N-List disinfectant protocols", "ATP bioluminescence surface testing", "High-touch point targeted treatment", "Air quality monitoring", "Verification reporting"],
  },
  {
    slug: "floor-care",
    name: "Floor Care & Restoration",
    shortName: "Floor Care",
    icon: "sparkles",
    description: "Strip, seal, and refinish hard floors. Carpet extraction and encapsulation. Marble and stone restoration. VCT maintenance programs.",
    includes: ["VCT strip and wax", "Carpet shampooing and extraction", "Marble and stone polishing", "Concrete sealing", "Auto-scrubber programs", "Anti-slip treatment"],
  },
  {
    slug: "day-porter",
    name: "Day Porter Services",
    shortName: "Day Porter",
    icon: "sparkles",
    description: "On-site daytime staff for continuous upkeep of high-traffic areas, restroom monitoring, supply replenishment, and lobby presentation.",
    includes: ["Continuous restroom monitoring", "Spill and incident response", "Supply replenishment", "Lobby and reception upkeep", "Conference room turnovers", "Visitor area presentation"],
  },
  {
    slug: "facility-maintenance",
    name: "Facility Maintenance",
    shortName: "Maintenance",
    icon: "wrench",
    description: "Light plumbing, electrical, HVAC filter changes, painting touch-ups, and general handyman services — one vendor for everything.",
    includes: ["Light plumbing repairs", "Electrical fixture maintenance", "HVAC filter replacement", "Painting and touch-ups", "Furniture assembly", "General handyman services"],
  },
  {
    slug: "post-construction-cleanup",
    name: "Post-Construction Cleanup",
    shortName: "Post-Construction",
    icon: "hardhat",
    description: "Three-stage professional cleanup: rough clean, light clean, and final touch. Debris removal, dust elimination, and move-in ready preparation.",
    includes: ["Phase 1: Rough debris removal", "Phase 2: Detailed dust elimination", "Phase 3: Final polish and inspection", "Window and glass cleaning", "Fixture and surface detailing", "Move-in ready certification"],
  },
];

// Helper functions
export function getState(stateSlug) {
  return STATES.find(s => s.slug === stateSlug);
}

export function getCity(stateSlug, citySlug) {
  const state = getState(stateSlug);
  if (!state) return null;
  return state.cities.find(c => c.slug === citySlug);
}

export function getIndustry(industrySlug) {
  return INDUSTRIES.find(i => i.slug === industrySlug);
}

export function getService(serviceSlug) {
  return SERVICES_LIST.find(s => s.slug === serviceSlug);
}

export function getAllLocationIndustryParams() {
  const params = [];
  for (const state of STATES) {
    for (const city of state.cities) {
      for (const industry of INDUSTRIES) {
        params.push({
          stateSlug: state.slug,
          citySlug: city.slug,
          industrySlug: industry.slug,
        });
      }
    }
  }
  return params;
}

export function getAllLocationParams() {
  const params = [];
  for (const state of STATES) {
    for (const city of state.cities) {
      params.push({ stateSlug: state.slug, citySlug: city.slug });
    }
  }
  return params;
}

export function getAllStateParams() {
  return STATES.map(s => ({ stateSlug: s.slug }));
}

export function getAllIndustryParams() {
  return INDUSTRIES.map(i => ({ industrySlug: i.slug }));
}

export function getAllServiceParams() {
  return SERVICES_LIST.map(s => ({ serviceSlug: s.slug }));
}

export function getAllLocationServiceParams() {
  const params = [];
  for (const state of STATES) {
    for (const city of state.cities) {
      for (const service of SERVICES_LIST) {
        params.push({
          stateSlug: state.slug,
          citySlug: city.slug,
          industrySlug: service.slug,
        });
      }
    }
  }
  return params;
}

export function getIndustryOrService(slug) {
  return getIndustry(slug) || getService(slug);
}
