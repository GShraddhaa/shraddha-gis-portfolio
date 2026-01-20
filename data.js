export const PROFILE = {
  name: "Shraddha Gourishetty",
  role: "GIS Analyst | Geospatial Data Specialist",
  profileImage: "assets/profile.jpg",
  location: "Kitchener, Ontario",
  email: "shraddhagourishetty@gmail.com",

  resumeUrl: "assets/ShraddhaGourishetty_Resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/shraddha-gourishetty-562397220/",
  githubUrl: "https://github.com/GShraddhaa/",
  blogUrl: "https://uwaterloo.ca/co-operative-education/blog/post/creating-content-with-shraddha-behind-the-scenes",

  // HOME (short + punchy)
  headline: "Enterprise GIS, automation, and environmental analysis with measurable impact.",
  shortOverview:
    "GIS Analyst specializing in enterprise GIS, automation, and decision-driven spatial analysis, with proven impact across public safety, public health, and climate initiatives.",

  highlights: [
    {
      text: "Produced GIS research and mapping that supported $150K–$200K in awarded climate funding",
      target: "climate-funding-gis"
    },
    {
      text: "Built network and spatial models that improve emergency response coverage and infrastructure planning",
      target: "emergency-response-networking"
    },
    {
      text: "Automated enterprise GIS QA workflows with Python, reducing processing time by ~40%",
      target: "enterprise-gis-automation"
    },
    {
      text: "Delivered spatial analyses used in executive policy briefings supporting decisions for 1.5 million residents",
      target: "enterprise-gis-automation"
    }
  ],

  // ABOUT (deeper + structured)
  aboutIntro:
    "I’m a results-driven GIS Analyst with 2+ years of experience across government, climate tech, and environmental work, focused on building geospatial workflows that scale and stay reliable.",

  aboutStory: `
Over the past two years, I’ve worked across government agencies and a climate tech startup, building geospatial solutions that do more than visualize data, they solve operational problems and support real decisions.

I’ve automated enterprise GIS QA workflows with Python, published and maintained ArcGIS services, and supported large imagery workflows where performance and accuracy matter. I also build stakeholder-ready maps and summaries that make complex spatial patterns easy to act on.

I’m especially energized by work where precision matters and impact is measurable, whether that’s supporting climate funding proposals, strengthening public health analysis, or improving infrastructure planning.
  `.trim(),

  whatIBring: [
    "Enterprise GIS experience (ArcGIS Pro/Online/Enterprise) including services and workflows",
    "Python automation (ArcPy/geoprocessing) + spatial databases (PostgreSQL/PostGIS)",
    "Remote sensing + environmental risk assessment (incl. Google Earth Engine)",
    "Clear communication: maps, charts, dashboards/StoryMaps for non-technical stakeholders"
  ],

  endLine:  
    "What sets me apart is not just technical breadth, but how I apply it: I design GIS workflows that scale, validate themselves, and translate cleanly to non-technical stakeholders. Whether it’s optimizing response times, strengthening funding proposals, or supporting long-term environmental planning, I focus on precision, impact, and usability, not just outputs."
};

export const SKILL_CATEGORIES = [
  {
    id: "enterprise",
    title: "Enterprise GIS",
    skills: ["arcgis", "services", "geodatabases", "qgis"]
  },
  {
    id: "analysis",
    title: "Spatial & Network Analysis",
    skills: ["spatial-analysis", "network-analysis", "infrastructure-planning", "geoprocessing-tools", "buffer/overlay-analysis", "raster/vector-workflows"]
  },
  {
    id: "automation",
    title: "Automation & Data",
    skills: ["python", "r-programming", "html", "java-script", "css", "sql", "bigquery", "fme", "etl", "postgis", "git"]
  },
  {
    id: "remote",
    title: "Remote Sensing & Environmental",
    skills: ["remote-sensing", "gee", "risk-assessment"]
  },
  {
    id: "viz",
    title: "Visualization & Communication",
    skills: ["cartography", "dashboards", "tableau", "storymaps", "adobe"]
  }
];

// “id” is the canonical key used by projects. “label” is what you display.
export const SKILLS = [
  { id: "arcgis", label: "ArcGIS Pro/Online/Enterprise" },
  { id: "services", label: "GIS Services & Publishing" },
  { id: "geodatabases", label: "Geodatabase Management" },
  { id: "qgis", label: "QGIS" },

  { id: "spatial-analysis", label: "Spatial Analysis" },
  { id: "network-analysis", label: "Network Analysis" },
  { id: "infrastructure-planning", label: "Infrastructure Planning" },
  { id: "geoprocessing-tools", label: "Geoprocessing Tools" },
  { id: "buffer/overlay-analysis", label: "Buffer/Overlay Analysis" },
  { id: "raster/vector-workflows", label: "Raster/Vector-Workflows" },

  { id: "python", label: "Python (ArcPy)" },
  { id: "r-programming", label: "R Programming" },
  { id: "html", label: "HTML" },
  { id: "java-script", label: "Java Script" },
  { id: "css", label: "CSS" },
  { id: "sql", label: "SQL" },
  { id: "bigquery", label: "BigQuery" },
  { id: "fme", label: "FME" },
  { id: "postgis", label: "PostgreSQL/PostGIS" },
  { id: "etl", label: "ETL Workflows" },
  { id: "git", label: "Git" },

  { id: "remote-sensing", label: "Remote Sensing" },
  { id: "GEE", label: "Google Earth Engine" },
  { id: "risk-assessment", label: "Environmental Risk Assessment" },

  { id: "cartography", label: "Cartographic Design" },
  { id: "dashboards", label: "Dashboards" },
  { id: "tableau", label: "Tableau" },
  { id: "storymaps", label: "StoryMaps / Web Maps" },
  { id: "adobe", label: "Adobe Creative Suite" }
];

export const CERTIFICATIONS = [
  { id: "drone", label: "Basic Drone Pilot License (Canada)" },
  { id: "google-da", label: "Google Data Analytics Certificate" }
];


export const PROJECTS = [
  {
    id: "land-cover-soil-moisture",
    
    title: "Land Cover & Soil Moisture Analysis",
    
    type: "academic",

    context: "Sudan–Sahel Region | Remote Sensing & Environmental Risk",
  
    problem:
      "Decision-makers lacked a clear, data-driven understanding of how land cover change and soil moisture trends were contributing to desertification risk.",
  
    approach: [
      "Analyzed 100+ satellite scenes using the Standardized Soil Moisture Index (SSMI)",
      "Built automated raster processing workflows using Google Earth Engine and Python",
      "Integrated land cover classifications with climatic variables to assess spatial risk patterns",
      "Designed presentation-ready risk assessment maps for environmental interpretation"
    ],
  
    outcome:
      "Produced regional desertification risk maps and demonstrated scalable remote sensing workflows for environmental monitoring.",
  
    impact: [
      "Enabled scalable analysis through automation of raster workflows",
      "Supported environmental risk monitoring and climate adaptation planning"
    ],
  
    status: "Completed",
    reportUrl: "assets/ShraddhaGourishetty_SoilMoistureAnalysis.pdf",
  
    skills: ["gee", "python", "qgis", "remote-sensing", "spatial-analysis", "cartography", "buffer/overlay-analysis", "raster/vector-workflows", "etl"]
  },
  {
    id: "wildfire-risk-model",
    
    title: "Wildfire Risk Classification Model",
    
    type: "academic",

    context: "Mackenzie County, Alberta | Emergency Planning",
  
    problem:
      "Emergency planners needed an objective, data-driven method to classify wildfire risk across a large region.",
  
    approach: [
      "Developed a Random Forest classification model using vegetation, weather, and terrain inputs",
      "Processed and validated geospatial datasets through structured ETL workflows",
      "Engineered spatial features to improve model performance",
      "Translated outputs into intuitive risk zone maps for non-technical stakeholders"
    ],
  
    outcome:
      "Delivered a high-accuracy wildfire risk classification model and stakeholder-ready risk maps.",
  
    impact: [
      "Achieved 96% classification accuracy",
      "Improved wildfire preparedness through clear spatial prioritization"
    ],
  
    status: "Completed",
    reportUrl: "assets/ShraddhaGourishetty_ClassificationModel.pdf",
  
    skills: ["python", "ml", "spatial-analysis", "cartography", "qgis", "risk-assessment", "etl"]
  },
  {
    id: "highway-corridor-impact",
    
    title: "Highway Corridor Impact Assessment",
    
    type: "academic",

    context: "Ontario | Infrastructure Planning",
  
    problem:
      "Planners needed to identify the highway alignment that minimized environmental and community disruption.",
  
    approach: [
      "Executed 10+ spatial SQL queries in PostGIS",
      "Quantified vegetation loss and residential intersections across alignment options",
      "Applied buffer and overlay analysis to support objective comparison"
    ],
  
    outcome:
      "Recommended the corridor alignment that minimized agricultural and residential disruption.",
  
    impact: [
      "Enabled data-driven infrastructure planning using spatial databases"
    ],
  
    status: "Completed",
    reportUrl: "assets/ShraddhaGourishetty_QGISandPostgreSQL.pdf",
  
    skills: ["arcgis", "sql", "spatial-analysis", "geoprocessing-tools", "postgis"]
  },  
  {
    id: "fire-station-network-analysis",
  
    title: "Fire Station Network Analysis & Response Time Optimization",

    type: "academic",
  
    context: "Waterloo Region, Ontario | Emergency Response & Network Analysis",
  
    problem:
      "Emergency response planners needed to evaluate whether existing fire stations in Waterloo Region were sufficient to meet response-time targets and determine where new stations should be located to improve coverage.",
  
    approach: [
      "Built a road network dataset in ArcGIS using travel time as the primary impedance, incorporating speed limits and one-way road restrictions",
      "Created multiple service area and location-allocation scenarios comparing existing stations against proposed stations in Elmira and New Hamburg",
      "Modeled four operational cases to assess system performance under different station configurations",
      "Calculated key performance metrics including average response time, demand allocation per station, and proportion of calls outside 2-, 5-, and 10-minute service areas"
    ],
  
    outcome:
      "Identified that adding proposed fire stations significantly reduced average response times and improved overall service coverage compared to relying on existing stations alone.",
  
    impact: [
      "Demonstrated that the base case with existing stations resulted in the highest average response times",
      "Showed that adding both proposed stations produced the most balanced demand allocation and fastest system-wide response",
      "Provided data-driven evidence to support facility expansion decisions for emergency response planning"
    ],
  
    status: "Completed",
  
    reportUrl: "assets/ShraddhaGourishetty_NetworkAnalysis.pdf",
  
    skills: [
      "arcgis",
      "network-analysis",
      "spatial-analysis",
      "infrastructure-planning",
      "sql"
    ]
  },

  {
    id: "gis-portfolio-platform",
  
    title: "Interactive GIS Portfolio Platform",
  
    type: "academic",
  
    context: "Web Development | Technical Communication | GIS Portfolio",
  
    problem:
      "Traditional GIS portfolios often present skills and projects as static lists, making it difficult for recruiters and hiring managers to connect technical claims with real evidence or understand how individual skills are applied in practice.",
  
    approach: [
      "Designed and built a modular, single-source portfolio website using HTML, CSS, and JavaScript to separate content (data.js) from presentation logic (app.js)",
      "Implemented a structured case-study model for projects, including problem, approach, outcome, and impact sections",
      "Built an interactive Skills page where skills are displayed as categorized, hover-responsive cards and dynamically linked to related projects",
      "Developed deep-linking logic to connect Home page highlights directly to specific professional project cards using URL anchors",
      "Added dynamic rendering and smooth scrolling to improve navigation and user experience without relying on external frameworks",
      "Focused on accessibility, responsiveness, and clarity to ensure the site works across devices and for non-technical users"
    ],
  
    outcome:
      "Created a clean, interactive portfolio that clearly connects skills, experience, and impact, allowing users to move seamlessly from high-level highlights to detailed project evidence.",
  
    impact: [
      "Improved clarity and credibility of professional experience by directly linking claims to supporting case studies",
      "Demonstrated ability to design scalable front-end logic and data-driven UI patterns",
      "Positioned the portfolio itself as evidence of technical problem-solving, not just presentation",
      "Provided a flexible foundation for adding future projects, certifications, and professional experience"
    ],
  
    status: "Completed",
  
    /* reportUrl: "", */
  
    skills: [
      "java-script",
      "html",
      "css"
    ]
  },
  
  {
    id: "climate-funding-gis-analysis",

    anchor: "climate-funding-gis",
  
    title: "Climate Funding GIS Research & Analysis",
  
    type: "professional",
  
    context: "Climate Tech | Environmental Planning",
  
    problem:
      "Climate funding applications required robust spatial evidence to demonstrate need, impact, and feasibility, but existing data lacked spatial synthesis.",
  
    approach: [
      "Performed geospatial analysis of environmental, land use, and risk datasets",
      "Created maps and spatial summaries aligned with grant and funding criteria",
      "Integrated GIS outputs into written proposals and technical documentation",
      "Ensured spatial methods were transparent and defensible for external review"
    ],
  
    outcome:
      "Provided GIS-based evidence that strengthened funding applications and clarified environmental risk and opportunity.",
  
    impact: [
      "Supported $150K–$200K in awarded climate funding",
      "Improved credibility of funding proposals through data-driven spatial analysis",
      "Demonstrated the value of GIS in securing external investment for climate initiatives"
    ],
  
    status: "Completed",
  
    /* reportUrl: "", */
  
    skills: [
      "remote-sensing",
      "spatial-analysis",
      "cartography",
      "environmental-analysis",
      "gee",
      "qgis"
    ]
  },

  {
    id: "emergency-response-network-modeling",

    anchor: "emergency-response-networking",
  
    title: "Emergency Response Network & Infrastructure Modeling",
  
    type: "professional",
  
    context: "Public Safety | Infrastructure & Emergency Planning",
  
    problem:
      "Emergency response agencies needed to evaluate coverage gaps and optimize infrastructure placement to reduce response times and improve service reliability.",
  
    approach: [
      "Built road network datasets using travel time and operational constraints",
      "Performed service area and location-allocation analysis to assess coverage scenarios",
      "Compared multiple infrastructure configurations to evaluate performance trade-offs",
      "Summarized results into planning-ready maps and metrics"
    ],
  
    outcome:
      "Delivered network and spatial models that quantified response coverage and informed infrastructure planning decisions.",
  
    impact: [
      "Identified opportunities to improve emergency response coverage",
      "Supported data-driven infrastructure planning decisions",
      "Reinforced GIS as a critical tool for public safety analysis"
    ],
  
    status: "Completed",
  
    /* reportUrl: "", */
  
    skills: [
      "network-analysis",
      "spatial-analysis",
      "infrastructure-planning",
      "arcgis",
      "public-safety"
    ]
  },

  {
    id: "enterprise-gis-automation-decision-support",
  
    anchor: "enterprise-gis-automation",

    title: "Enterprise GIS Automation & Executive Decision Support",
  
    type: "professional",
  
    context: "Public Sector | Enterprise GIS & Policy Support",
  
    problem:
      "Enterprise GIS operations relied on manual quality assurance processes and ad hoc spatial analysis, resulting in slow turnaround times and inconsistent outputs for both operational teams and executive decision-makers.",
  
    approach: [
      "Designed and implemented Python-based QA automation workflows using ArcPy to validate enterprise GIS datasets prior to publishing",
      "Automated checks for attribute completeness, spatial integrity, schema consistency, and data accuracy",
      "Performed spatial analyses to support planning and policy discussions, including population and service coverage assessments",
      "Translated technical GIS outputs into clear, executive-ready maps and summaries for non-technical stakeholders",
      "Collaborated with GIS administrators and policy teams to align outputs with enterprise standards and decision needs"
    ],
  
    outcome:
      "Established scalable GIS workflows that improved data reliability while delivering clear, decision-ready spatial insights to leadership.",
  
    impact: [
      "Reduced enterprise GIS QA processing time by approximately 40%",
      "Improved consistency and reliability of authoritative GIS datasets",
      "Spatial analyses supported executive policy briefings influencing decisions for approximately 1.5 million residents",
      "Strengthened the role of GIS as both an operational and strategic decision-support system"
    ],
  
    status: "Completed",
  
    /* reportUrl: "", */
  
    skills: [
      "arcgis",
      "python",
      "automation",
      "spatial-analysis",
      "enterprise-gis",
      "cartography",
      "geodatabases",

    ]
  }

]