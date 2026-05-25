export type ProjectSection = {
  label: string;
  value: string;
};

export type Project = {
  sequence: string;
  title: string;
  subtitle: string;
  stack: string[];
  sections: ProjectSection[];
  githubLink: string;
  status?: string;
};

export type ExperienceDetail = {
  title: string;
  description: string;
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  duration: string;
  details: ExperienceDetail[];
  logo?: string;
  credentials?: string;
};

export type SkillEntry = {
  name: string;
  level: string;
  proficiency: number;
};

export type SkillCategory = {
  category: string;
  items: SkillEntry[];
};

export const profile = {
  name: "Kushank Aggarwal",
  role: "Mechanical Engineering with specialization in Automotive Engineering",
  institute: "Delhi Technological University (Formerly DCE)",
  availability: "Open to Internships",
  headline: "Design - Analysis - Fabrication",
  summary:
    "Mechanical engineering portfolio focused on vehicle aerodynamics, precision engineering, FEA-driven structural validation, compliant mechanisms, and manufacturable product design.",
  location: "Delhi, India",
  email: "kushank2005@gmail.com",
  phone: "+91 8130745430",
  linkedin: "https://linkedin.com/in/kushaggar",
  github: "https://github.com/Kushaggar",
  portraitPng: "/assets/kushank.png",
  portraitJpeg: "/assets/kushank.jpeg",
  resumePath: "/assets/Kushank_Aggarwal_Resume.pdf",
};

export const aboutNarrative = [
  "I’m a Mechanical Engineering student at DTU working somewhere between CAD screens, fabrication shops, research labs, and “this might actually work” ideas. I’ve worked on precision sensing systems at IIT Delhi, solar race vehicles, EV components, and enough failed iterations to know that real engineering starts where textbooks stop.",
  "Most of my learning has come from solving problems mid-build, adapting under constraints, and occasionally using a slightly jugaadu approach when reality refuses to cooperate. I’m naturally curious, love learning fast, and enjoy environments that feel a little uncomfortable, chaotic, and challenging because that’s usually where the interesting stuff happens.",
];

export const aboutSpecs = [
  { label: "Institution", value: "DTU" },
  { label: "Program", value: "B.Tech Mechanical Engineering" },
  { label: "CGPA", value: "8.23 / 10.0" },
  { label: "Graduation", value: "May 2027" },
  { label: "Focus", value: "Vehicle Dynamics, CAD, FEA, and Manufacturing" },
  { label: "Location", value: "Delhi, India" },
];

export const projects: Project[] = [
  {
    sequence: "PROJECT 01 / Team DTU SMV",
    title: "Arka - Solar Vehicle",
    subtitle: "Bharat Solar Vehicle Challenge | Coimbatore | 2025",
    stack: ["SolidWorks", "FEA", "Composites", "CFD"],
    sections: [
      {
        label: "Origin",
        value: "Arka originates from the sanskrit language and primarily means the sun.",
      },
      {
        label: "Concept & Ideation",
        value: "The obvious question - is solar the future? Maybe. Right now an average sedan tips the scales at 1000 kg, but at 250 kg, it wasn't just a dream anymore. The entire car was inspired by the World Solar Challenge — a 3000 km endurance race across Australia where teams cover every inch of the car's roof in solar cells.",
      },
      {
        label: "Challenge",
        value: "Designing an aerodynamic body that cuts through air like a knife, while keeping the top surface as large as possible and then just hope the sun shows up.",
      },
      {
        label: "Results",
        value: "Built a solar vehicle in three weeks. Any sane person would flinch, but this isn't just my story. The entire team at DTU Supermileage didn't blink either. Maybe we were all a little delusional. But the late nights, the impossible decisions, the \"we'll figure it out\" moments, that's what made the way.",
      },
    ],
    githubLink: "mailto:kushank2005@gmail.com?subject=Request%20GitHub%20Repo%20-%20Project%20Arka",
  },
  {
    sequence: "PROJECT 02 / IIT DELHI",
    title: "Precision Displacement Sensor",
    subtitle: "Summer Research Internship | 2025",
    stack: ["Strain Analysis", "Materials", "MATLAB"],
    sections: [
      {
        label: "Problem",
        value: "Develop a displacement sensing system capable of micron-level accuracy (10⁻⁶ m) for precision mechanical measurement.",
      },
      {
        label: "Approach",
        value: "Mapped strain-displacement behavior under controlled loading and built MATLAB analysis pipelines for high-fidelity interpretation.",
      },
      {
        label: "Analysis",
        value: "Derived theoretical formulations to validate experimentally observed deformation trends at micron-scale resolution.",
      },
      {
        label: "Status",
        value: "Ongoing work with a target of sub-micron calibration reliability through model refinement and testing loops.",
      },
    ],
    githubLink: "mailto:kushank2005@gmail.com?subject=Request%20GitHub%20Repo%20-%20Displacement%20Sensor",
    status: "IN PROGRESS",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "CAD & Design",
    items: [
      { name: "SolidWorks", level: "Advanced", proficiency: 96 },
      { name: "Autodesk Fusion 360", level: "Advanced", proficiency: 90 },
      { name: "GD&T", level: "Proficient", proficiency: 83 },
      { name: "Chassis and Mechanism Design", level: "Advanced", proficiency: 91 },
    ],
  },
  {
    category: "Simulation",
    items: [
      { name: "Ansys Workbench", level: "Proficient", proficiency: 86 },
      { name: "Structural FEA", level: "Advanced", proficiency: 95 },
      { name: "CFD Analysis", level: "Proficient", proficiency: 81 },
      { name: "Stress and Fatigue", level: "Advanced", proficiency: 92 },
    ],
  },
  {
    category: "Manufacturing",
    items: [
      { name: "Composite Layup", level: "Hands-on", proficiency: 92 },
      { name: "Welding and Fabrication", level: "Hands-on", proficiency: 82 },
      { name: "Laser Cutting", level: "Familiar", proficiency: 60 },
      { name: "Rapid Prototyping", level: "Familiar", proficiency: 65 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "MATLAB", level: "Proficient", proficiency: 82 },
      { name: "Python", level: "Proficient", proficiency: 78 },
      { name: "C", level: "Familiar", proficiency: 50 },
      { name: "Data Visualization", level: "Proficient", proficiency: 80 },
    ],
  },
  {
    category: "Coursework & Concepts",
    items: [
      { name: "Compliant Mechanisms", level: "Familiar", proficiency: 70 },
      { name: "Design of precision machines", level: "Proficient", proficiency: 78 },
      { name: "DFM", level: "Proficient", proficiency: 82 },
      { name: "Vehicle Aerodynamics", level: "Proficient", proficiency: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Simscale", level: "Familiar", proficiency: 78 },
      { name: "Microsoft Office", level: "Advanced", proficiency: 95 },
      { name: "Engineering Documentation", level: "Advanced", proficiency: 90 },
      { name: "Git and GitHub", level: "Familiar", proficiency: 70 },
    ],
  },
];

export const experienceTimeline: ExperienceEntry[] = [
  {
    organization: "Indian Institute of Technology, Delhi",
    role: "Summer Research Intern",
    duration: "May 2025 - July 2025",
    logo: "/assets/IIT Delhi.png",
    details: [
      {
        title: "Research & Fundamentals",
        description: "Studied about compliant mechanisms and precision engineering fundamentals, completing the NPTEL coursework Design of Precision Machines by Prof. J.P. Khatait (IIT Delhi) to build the theoretical foundation required for the research.",
      },
      {
        title: "Development",
        description: "Developed a precision displacement sensor targeting micron-level (10⁻⁶ m) accuracy by systematically analyzing mechanical strain patterns and material deformation characteristics under controlled displacement.",
      },
      {
        title: "Analysis & Validation",
        description: "Implemented MATLAB-based data visualization to map strain–displacement behaviour, derived theoretical formulations from first principles, and validated them against experimentally observed correlations — closing the loop between analytical models and physical results.",
      },
      {
        title: "Impact",
        description: "Successfully built a functional Precision Displacement Sensor, and continuing to refine it post-internship, actively working to further reduce noise and improve repeatability.",
      },
    ],
  },
  {
    organization: "Mecrox Tech Pvt. Ltd.",
    role: "Mechanical Trainee",
    duration: "Dec 2024 - Jan 2025",
    logo: "/assets/Mecrox Tech Pvt Ltd.jfif",
    credentials: "/assets/Internship Letter Mecrox.JPG",
    details: [
      {
        title: "Manufacturing Drawings",
        description: "Worked on the prototype development of the brake pedal assembly for Surge 32 - a convertible 2-in-1 electric vehicle project by Hero MotoCorp. My primary contribution was generating production-ready manufacturing drawings for the assembly components, specifying dimensions, tolerances, and surface finish requirements so operators could accurately produce parts on the lathe and laser cutting machine before welding them into the final assembly.",
      },
      {
        title: "Shop Floor Exposure",
        description: "Beyond drawing work, I also got hands-on time on the shop floor where I personally performed operations including grinding, buffing, rolling, and drilling. Combined with observing the full fabrication sequence i.e. laser cutting, lathe turning, and welding, this gave me a practical understanding of how drawing decisions translate to real manufacturing challenges, and what machinists need from a drawing to work efficiently and accurately.",
      },
      {
        title: "Takeaways",
        description: "This internship taught me the importance of the design-to-manufacturing handoff. I learned that a good drawing isn't just geometrically correct, but also unambiguous, manufacturable, and anticipates the questions an operator might have on the shop floor.",
      },]
  },
  {
    organization: "Innovante Engineering Solutions",
    role: "Mechanical Design Intern",
    duration: "May 2024 - Jul 2024",
    logo: "/assets/Innovante Engineering Solutions.jfif",
    credentials: "/assets/Internship Letter Innovante.pdf",
    details: [
      {
        title: "Design",
        description: "During the internship I worked on multiple mechanical assemblies and product designs across different client requirements, with one of the primary deliverables being a water-resistant PCB enclosure with an O-ring groove sealing system targeting IP67 compliance i.e. 1m immersion and dust protection. The O-ring compression was held between 20–25% by carefully sizing the groove depth relative to the O-ring cross-section diameter. Below 20% compression the contact force is insufficient to block water ingress, and above 30% the rubber permanently deforms and loses its sealing ability over time. Getting this range right required tolerance stack-up analysis across all mating dimensions to ensure every manufactured unit, not just the ideal design, stayed within the functional window.",
      },
      {
        title: "Benchmarking",
        description: "Benchmarked 10+ existing tracking and IoT devices to identify gaps which led to identifying 3 distinct user segments that modular attachment extensions could serve.",
      },
      {
        title: "Product Design",
        description: "Translated conceptual briefs from wearenotice.com into 5+ manufacturable designs for aesthetic home decor products.",
      },
      {
        title: "Learning",
        description: "Gained hands-on experience with the full mechanical design process, from customer requirements and competitive benchmarking, through tolerance analysis and DFM, to production-ready drawings and design reviews. This internship built my understanding of how small dimensional decisions at the design stage directly impact whether a product functions reliably in the real world.",
      },
    ],
  },
  {
    organization: "Team DTU Supermileage",
    role: "Head of Aerodynamics and Chassis",
    duration: "Sep 2023 - Present",
    logo: "/assets/Team DTU Supermileage.jfif",
    details: [
      {
        title: "Ownership & Leadership",
        description: "I led a 7-member chassis sub-team within a 50+ member vehicle team, holding full ownership of the department. Every design call, fabrication decision, and procurement choice ran through me.",
      },
      {
        title: "Work & Actions",
        description: "Modeled the complete spaceframe in CAD, supervised the chassis fabrication and composite body manufacturing, while overseeing complete vehicle assembly of Arka.",
      },
      {
        title: "Results",
        description: "Delivered a competition-ready vehicle for BSVC 2025, Coimbatore, achieving a 35% reduction in drag coefficient (Cd) validated through iterative CFD, while managing procurement, two parallel fabrication workstreams, and a 7-member sub-team within a 50+ member team.",
      },
      {
        title: "Learning",
        description: "I walked into this project without having fabricated anything beyond a college lab assignment. I walked out having managed a full engineering sub-system end-to-end from material spec to vehicle on track. Every constraint (budget, time, tools) forced creative problem-solving. Leading a team through months of ambiguity, while staying hands-on myself, is the part of this experience I'm most proud of.",
      },
    ],
  },
];

export const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: "tel:+918130745430",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kushaggar",
    href: profile.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Kushaggar",
    href: profile.github,
  },
];
