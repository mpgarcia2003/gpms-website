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
    faqs: [
      { q: "How often should schools be professionally cleaned?", a: "Most schools require daily cleaning of classrooms, restrooms, and cafeterias during the school year, with deep cleaning during breaks and summer. High-touch surfaces should be disinfected multiple times per day." },
      { q: "What cleaning products are safe for use around children?", a: "We exclusively use Green Seal certified and EPA Safer Choice products that are non-toxic, fragrance-free, and allergy-safe. All products meet CDC guidelines for educational facility disinfection." },
      { q: "Do you provide cleaning during school hours?", a: "We offer flexible scheduling including after-hours, overnight, and weekend service. Day porter services are also available for continuous restroom monitoring and cafeteria turnovers during school hours." },
      { q: "Are you approved to clean NYC public schools?", a: "Yes. GreenPoint is an NYC DOE Approved Vendor, authorized to provide cleaning products and services to New York City public schools. We are also MBE/MWBE certified, making contracts count toward diversity procurement goals." },
      { q: "How do you verify cleaning quality in schools?", a: "Our proprietary JaniTrack system provides real-time photo verification and ATP bioluminescence testing, giving administrators measurable proof that every area meets clinical-grade cleanliness standards." },
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
    faqs: [
      { q: "How do you handle cleaning around worship schedules?", a: "We customize our cleaning schedule around your services, events, and meetings. Most churches prefer post-service cleaning with additional mid-week maintenance for high-traffic areas like fellowship halls and nurseries." },
      { q: "Do you clean delicate sanctuary furnishings?", a: "Yes, our teams are trained in the proper care of pews, altars, stained glass surrounds, and other sanctuary elements using appropriate, non-damaging products and techniques." },
      { q: "Can you handle event cleanup for weddings and funerals?", a: "Absolutely. We offer rapid turnaround cleaning for special events including weddings, funerals, banquets, and community gatherings, ensuring the space is ready for the next use." },
      { q: "Is your cleaning staff background-checked?", a: "Yes, every GreenPoint team member undergoes thorough background checks and is trained in respectful conduct appropriate for houses of worship." },
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
    faqs: [
      { q: "Are your medical cleaning protocols OSHA compliant?", a: "Yes, all our medical facility protocols meet OSHA bloodborne pathogen standards, use EPA-registered hospital-grade disinfectants, and follow CDC guidelines for healthcare environmental cleaning." },
      { q: "Do you handle biohazard waste?", a: "We follow strict biohazard-safe waste handling procedures for regulated medical waste. Our staff is trained in proper segregation, containment, and disposal protocols." },
      { q: "How do you prevent cross-contamination between exam rooms?", a: "We use color-coded microfiber systems, dedicated supplies per room, and terminal cleaning protocols between patients. ATP bioluminescence testing verifies disinfection effectiveness." },
      { q: "Can you clean during patient hours?", a: "We offer both during-hours day porter services for waiting areas and restrooms, and after-hours deep cleaning for exam rooms and clinical spaces to avoid disrupting patient care." },
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
    faqs: [
      { q: "What products do you use in daycare facilities?", a: "We exclusively use EPA Safer Choice and Green Seal certified products that are non-toxic, fragrance-free, and specifically approved for environments where infants and toddlers are present." },
      { q: "How do you sanitize toys and play equipment?", a: "Toys, play surfaces, and equipment are sanitized using child-safe disinfectants with appropriate dwell times. We follow health department guidelines for toy rotation and cleaning frequency." },
      { q: "Will you help us pass health department inspections?", a: "Our cleaning protocols are designed specifically to meet and exceed state health department standards for childcare facilities. Many of our daycare clients report improved inspection scores after switching to GreenPoint." },
      { q: "Can parents see proof of cleaning?", a: "Yes, our JaniTrack system provides photo-verified cleaning reports that facility directors can share with parents, providing transparent proof of daily sanitization." },
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
    faqs: [
      { q: "Is GreenPoint certified for government contracts?", a: "Yes, we are MBE/MWBE certified, registered on SAM.gov, and meet all federal, state, and municipal diversity procurement requirements for government cleaning contracts." },
      { q: "Are your employees background-checked for government facilities?", a: "All GreenPoint employees undergo comprehensive background checks, drug screening, and security clearance verification before being assigned to any government facility." },
      { q: "Do you meet ADA compliance requirements?", a: "Yes, our service delivery is fully ADA compliant. We ensure all cleaning processes and equipment usage accommodate accessibility requirements throughout the facility." },
      { q: "Can you handle high-traffic public building cleaning?", a: "Absolutely. We offer day porter services for continuous upkeep of high-traffic areas like lobbies, public restrooms, and courthouses during operating hours, plus comprehensive after-hours deep cleaning." },
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
    faqs: [
      { q: "Can you clean our office without disrupting business hours?", a: "Yes, we offer after-hours, overnight, and weekend cleaning schedules. For daytime needs, our day porter services handle restrooms, lobbies, and conference room turnovers without disrupting your team." },
      { q: "How do you ensure consistent quality across multiple floors?", a: "Each floor receives a customized cleaning checklist, and our JaniTrack system provides real-time photo verification of completed tasks. Supervisors perform regular quality audits." },
      { q: "Do you provide supplies like paper towels and soap?", a: "We offer supply management as part of our service. We monitor inventory levels, restock restroom and kitchen supplies, and manage vendor relationships for consumables." },
      { q: "What does your office cleaning include?", a: "Our standard office cleaning covers trash removal, restroom sanitization, floor care, high-touch disinfection, kitchen and breakroom cleaning, and lobby maintenance. All services are customizable." },
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
    faqs: [
      { q: "How often do you provide janitorial services?", a: "We offer daily, weekly, bi-weekly, and monthly cleaning programs customized to your facility's needs and budget. Most commercial facilities benefit from daily or every-other-day service." },
      { q: "What is included in commercial janitorial service?", a: "Our standard janitorial service includes trash removal, restroom sanitization, floor care, high-touch surface disinfection, kitchen and breakroom cleaning, and lobby maintenance. All programs are fully customizable." },
      { q: "Do you bring your own equipment and supplies?", a: "Yes, GreenPoint provides all equipment, cleaning products, and supplies. We use commercial-grade equipment and Green Seal certified products included in our service pricing." },
      { q: "How quickly can you start service?", a: "We can typically begin service within 5-7 business days of contract signing. Emergency or rush starts are available for urgent facility needs." },
    ],
  },
  {
    slug: "disinfection-sanitization",
    name: "Disinfection & Sanitization",
    shortName: "Disinfection",
    icon: "sparkles",
    description: "CDC-compliant electrostatic disinfection, hospital-grade sanitizers, and ATP bioluminescence testing for verifiable pathogen elimination.",
    includes: ["Electrostatic sprayer application", "EPA N-List disinfectant protocols", "ATP bioluminescence surface testing", "High-touch point targeted treatment", "Air quality monitoring", "Verification reporting"],
    definition: "Commercial disinfection and sanitization refers to the professional application of EPA-registered antimicrobial products to eliminate bacteria, viruses, fungi, and other harmful pathogens from surfaces in commercial environments. Unlike routine cleaning, which removes visible soil and debris, disinfection specifically targets microscopic organisms that cause illness. Professional sanitization reduces microbial contamination to levels deemed safe by public health standards, while disinfection aims to eliminate 99.9% or more of specified pathogens on treated surfaces.",
    whyNeeded: [
      "Compliance with OSHA workplace safety standards and CDC environmental cleaning guidelines that require documented disinfection protocols in commercial environments",
      "Prevention of healthcare-associated infections in medical offices, where contaminated surfaces serve as documented transmission pathways for MRSA, norovirus, C. difficile, and influenza",
      "Reduction of employee absenteeism — the CDC estimates that workplace illness costs U.S. employers over $225 billion annually in lost productivity, with environmental contamination as a contributing factor",
      "Protection of vulnerable populations in schools, daycare centers, and senior care facilities where immunocompromised individuals face elevated risk from environmental pathogens",
      "Satisfaction of tenant and occupant expectations that have permanently increased since the COVID-19 pandemic, with surveys showing 86% of building occupants now consider visible disinfection a baseline expectation",
    ],
    processSteps: [
      { step: "Site Assessment", detail: "A trained technician evaluates the facility to identify high-touch surfaces, traffic patterns, and contamination risk zones. This assessment determines the appropriate disinfection method, product selection, and treatment frequency for each area." },
      { step: "Surface Preparation", detail: "All surfaces are pre-cleaned to remove visible soil, dust, and organic matter. Disinfectants cannot penetrate layers of grime — pre-cleaning ensures the antimicrobial product makes direct contact with the surface for maximum efficacy." },
      { step: "Disinfectant Application", detail: "EPA-registered, hospital-grade disinfectants are applied using electrostatic sprayer technology, which charges droplets to wrap around surfaces for 360-degree coverage. This method achieves 99.7% surface coverage compared to 60-80% with manual spray-and-wipe methods." },
      { step: "Dwell Time Compliance", detail: "The disinfectant remains wet on surfaces for the manufacturer-specified dwell time (typically 1-10 minutes depending on the product and target organism). This is the most critical and most frequently failed step — a surface wiped dry before dwell time completion has not been disinfected." },
      { step: "ATP Verification Testing", detail: "After treatment, ATP bioluminescence testing is performed on representative surfaces to verify that biological contamination has been reduced to acceptable levels (below 25 RLU for commercial environments, below 10 RLU for healthcare settings)." },
      { step: "Documentation and Reporting", detail: "Every disinfection event is documented through our JaniTrack system with timestamped photos, ATP readings, products used, areas treated, and technician identification. Reports are accessible through your facility dashboard for compliance and audit purposes." },
    ],
    benefits: [
      "Eliminates 99.9% of bacteria and viruses on treated surfaces using EPA-registered hospital-grade disinfectants",
      "Reduces workplace illness and absenteeism through systematic pathogen elimination on high-touch surfaces",
      "Provides documented compliance with OSHA, CDC, and state health department environmental cleaning standards",
      "Delivers measurable, quantifiable results through ATP bioluminescence testing — not subjective visual inspection",
      "Protects against liability by creating an auditable record of disinfection frequency, products, and verification results",
      "Meets elevated post-pandemic occupant expectations for visible, verified facility hygiene",
    ],
    industriesServed: [
      { name: "Medical Offices & Healthcare Facilities", detail: "OSHA-compliant terminal disinfection for exam rooms, waiting areas, and clinical spaces using products effective against bloodborne pathogens, MRSA, and C. difficile." },
      { name: "K-12 Schools & Universities", detail: "CDC-recommended classroom and cafeteria disinfection using non-toxic, child-safe products that eliminate pathogens without introducing harmful chemical fumes into learning environments." },
      { name: "Corporate Offices & Coworking Spaces", detail: "High-touch surface disinfection for shared workstations, conference rooms, and common areas that reduce cross-contamination in multi-occupant environments." },
      { name: "Daycare & Childcare Centers", detail: "EPA Safer Choice disinfectants applied to play surfaces, changing stations, and nap areas — meeting health department inspection standards for environments with infants and toddlers." },
      { name: "Government & Municipal Buildings", detail: "Secure, background-checked disinfection teams for courthouses, public offices, and community centers with high foot traffic and public health accountability." },
      { name: "Gyms, Fitness Centers & Athletic Facilities", detail: "Equipment surface and locker room disinfection targeting bacteria and fungi that thrive in warm, moist environments including MRSA, ringworm, and staph infections." },
      { name: "Warehouses & Manufacturing Facilities", detail: "Break room, restroom, and high-traffic area disinfection for industrial environments where shared facilities serve large workforces across multiple shifts." },
    ],
    faqs: [
      { q: "What is commercial disinfection and sanitization?", a: "Commercial disinfection is the professional application of EPA-registered antimicrobial products to eliminate 99.9% of bacteria, viruses, and pathogens from surfaces in commercial environments. It differs from routine cleaning, which removes visible soil but does not kill microorganisms. Professional disinfection uses hospital-grade products with verified dwell times and is documented through objective testing methods like ATP bioluminescence." },
      { q: "What disinfectants are used in commercial cleaning?", a: "Professional commercial disinfection uses EPA-registered, hospital-grade products from the EPA's List N (effective against SARS-CoV-2 and emerging pathogens) and List K (effective against C. difficile spores). Common active ingredients include quaternary ammonium compounds, hydrogen peroxide, and sodium hypochlorite. Products are selected based on target organisms, required dwell time, surface compatibility, and environmental safety requirements." },
      { q: "How often should a commercial building be disinfected?", a: "Disinfection frequency depends on facility type, occupant density, and risk profile. Healthcare facilities require daily or per-patient disinfection of clinical areas. Schools benefit from daily high-touch surface disinfection during the academic year. Standard offices typically need weekly targeted disinfection of shared surfaces. During flu season or outbreak events, all facility types should increase disinfection frequency. High-touch surfaces like door handles, elevator buttons, and restroom fixtures should be disinfected multiple times daily regardless of facility type." },
      { q: "What is ATP bioluminescence testing?", a: "ATP (adenosine triphosphate) bioluminescence testing is an objective method for measuring biological contamination on surfaces. A swab collects a surface sample, which is inserted into a luminometer that measures light produced by a chemical reaction with ATP molecules. Results are reported in RLUs (Relative Light Units) — readings below 25 RLU indicate excellent cleanliness for commercial environments, while readings above 50 RLU indicate inadequate disinfection. ATP testing provides instant, quantifiable verification that visual inspection cannot." },
      { q: "Is professional disinfection required for offices?", a: "While no federal law mandates specific disinfection protocols for standard offices, OSHA's General Duty Clause requires employers to provide workplaces free from recognized hazards. State and local health departments may impose additional requirements. Beyond legal obligations, professional disinfection reduces absenteeism, satisfies occupant expectations, and demonstrates due diligence in the event of illness-related complaints or liability claims." },
      { q: "What is the difference between cleaning, sanitizing, and disinfecting?", a: "Cleaning removes visible soil, dust, and debris from surfaces using soap or detergent and water. Sanitizing reduces bacteria to levels considered safe by public health standards — typically a 99.9% reduction. Disinfecting eliminates virtually all bacteria, viruses, and fungi on surfaces using EPA-registered antimicrobial products with specified dwell times. A proper hygiene protocol requires all three in sequence: clean first, then sanitize or disinfect depending on the environment's risk level." },
      { q: "How does electrostatic disinfection work?", a: "Electrostatic sprayers apply a positive electrical charge to disinfectant droplets as they leave the nozzle. Since most surfaces carry a neutral or negative charge, the positively charged droplets are attracted to surfaces — including backs, undersides, and crevices that manual spraying misses. Studies show electrostatic application achieves 99.7% surface coverage compared to 60-80% for traditional spray-and-wipe methods. The technology is most effective in spaces with complex geometry like classrooms, offices with furniture clusters, and equipment-heavy environments." },
      { q: "Do you provide disinfection verification reports?", a: "Yes. Every disinfection service includes comprehensive documentation through our JaniTrack system: timestamped GPS-tagged photos of treated areas, ATP bioluminescence readings with pass/fail thresholds, products used with EPA registration numbers, technician identification, and date/time records. Reports are accessible through your facility's online dashboard and can be exported for compliance audits, health department inspections, or tenant communications." },
    ],
  },
  {
    slug: "floor-care",
    name: "Floor Care & Restoration",
    shortName: "Floor Care",
    icon: "sparkles",
    description: "Strip, seal, and refinish hard floors. Carpet extraction and encapsulation. Marble and stone restoration. VCT maintenance programs.",
    includes: ["VCT strip and wax", "Carpet shampooing and extraction", "Marble and stone polishing", "Concrete sealing", "Auto-scrubber programs", "Anti-slip treatment"],
    faqs: [
      { q: "How often should commercial floors be stripped and waxed?", a: "Most commercial VCT floors should be stripped and refinished every 6-12 months depending on foot traffic. High-traffic areas like lobbies may need quarterly maintenance coats between full strip and wax cycles." },
      { q: "Do you handle all floor types?", a: "Yes, we service VCT, hardwood, marble, granite, concrete, terrazzo, ceramic tile, and all carpet types. Each floor type receives specialized treatment using appropriate products and equipment." },
      { q: "Can you restore damaged or neglected floors?", a: "In most cases, yes. Our restoration services can bring heavily worn VCT, scratched marble, and stained carpet back to like-new condition, often saving thousands versus replacement." },
      { q: "Do you offer ongoing floor maintenance programs?", a: "Yes, we offer scheduled maintenance programs including daily auto-scrubbing, weekly buffing, monthly burnishing, and quarterly deep cleaning to keep floors looking their best year-round." },
    ],
  },
  {
    slug: "day-porter",
    name: "Day Porter Services",
    shortName: "Day Porter",
    icon: "sparkles",
    description: "On-site daytime staff for continuous upkeep of high-traffic areas, restroom monitoring, supply replenishment, and lobby presentation.",
    includes: ["Continuous restroom monitoring", "Spill and incident response", "Supply replenishment", "Lobby and reception upkeep", "Conference room turnovers", "Visitor area presentation"],
    faqs: [
      { q: "What does a day porter do?", a: "A day porter provides continuous daytime facility upkeep including restroom monitoring, spill response, supply replenishment, lobby maintenance, conference room turnovers, and visitor area presentation." },
      { q: "How is a day porter different from janitorial service?", a: "Janitorial service is typically performed after hours for deep cleaning. Day porters work during business hours to maintain facility appearance, respond to immediate needs, and keep high-traffic areas clean in real time." },
      { q: "How many day porters does my facility need?", a: "This depends on your facility size and traffic patterns. A single day porter typically covers 50,000-75,000 sq ft. We'll assess your facility during a free walkthrough and recommend appropriate staffing." },
      { q: "Are day porters available on weekends?", a: "Yes, we offer day porter services 7 days a week including weekends and holidays. Schedules are fully customizable to match your facility's operating hours." },
    ],
  },
  {
    slug: "facility-maintenance",
    name: "Facility Maintenance",
    shortName: "Maintenance",
    icon: "wrench",
    description: "Light plumbing, electrical, HVAC filter changes, painting touch-ups, and general handyman services — one vendor for everything.",
    includes: ["Light plumbing repairs", "Electrical fixture maintenance", "HVAC filter replacement", "Painting and touch-ups", "Furniture assembly", "General handyman services"],
    faqs: [
      { q: "What maintenance services do you provide?", a: "We handle light plumbing, electrical fixture maintenance, HVAC filter replacement, painting touch-ups, furniture assembly, and general handyman services — one vendor for all your facility needs." },
      { q: "Can you replace our current maintenance vendor?", a: "Yes, many clients consolidate their cleaning and maintenance under GreenPoint for simplified vendor management, single invoicing, and consistent quality across all facility services." },
      { q: "Do you handle emergency maintenance requests?", a: "Yes, we offer 24/7 emergency response for urgent maintenance issues like plumbing leaks, electrical problems, and other situations that can't wait for scheduled service." },
      { q: "Is facility maintenance included in janitorial contracts?", a: "Maintenance can be bundled with janitorial service for a discounted rate, or purchased as a standalone service. Bundled clients receive priority scheduling and response times." },
    ],
  },
  {
    slug: "post-construction-cleanup",
    name: "Post-Construction Cleanup",
    shortName: "Post-Construction",
    icon: "hardhat",
    description: "Three-stage professional cleanup: rough clean, light clean, and final touch. Debris removal, dust elimination, and move-in ready preparation.",
    includes: ["Phase 1: Rough debris removal", "Phase 2: Detailed dust elimination", "Phase 3: Final polish and inspection", "Window and glass cleaning", "Fixture and surface detailing", "Move-in ready certification"],
    faqs: [
      { q: "What are the three phases of post-construction cleanup?", a: "Phase 1 (rough clean) removes bulk debris and construction waste. Phase 2 (light clean) eliminates dust from all surfaces, fixtures, and HVAC systems. Phase 3 (final touch) is a detailed polish to make the space move-in ready." },
      { q: "How long does post-construction cleanup take?", a: "Timeline depends on project size and scope. A typical 10,000 sq ft space takes 2-3 days for all three phases. We provide a detailed timeline estimate after an initial site assessment." },
      { q: "Do you handle debris removal and disposal?", a: "Yes, we handle complete debris removal including construction waste, packaging materials, and dust. We coordinate with waste hauling services and ensure proper disposal of all materials." },
      { q: "Can you work alongside active construction crews?", a: "Yes, we can perform phased cleanup alongside ongoing construction. We coordinate with your general contractor to clean completed sections while work continues in other areas." },
    ],
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
