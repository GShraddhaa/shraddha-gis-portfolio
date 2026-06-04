import mapEnterprise from "@/assets/gen-enterprise.jpg";
import mapClimate from "@/assets/gen-climate.jpg";
import mapEpidemiology from "@/assets/gen-epidemiology.jpg";
import mapSoil from "@/assets/gen-soil.jpg";
import mapWildfire from "@/assets/gen-wildfire.jpg";
import mapFireStation from "@/assets/gen-firestation.jpg";
import mapTraffic from "@/assets/gen-traffic.jpg";
import mapWindTurbine from "@/assets/gen-windturbine.jpg";
import mapCrime from "@/assets/gen-crime.jpg";
import mapHighway from "@/assets/gen-highway.jpg";

export const PROFILE = {
  name: "Shraddha Gourishetty",
  role: "GIS Analyst",
  location: "Kitchener, Ontario",
  email: "shraddhagourishetty@gmail.com",
  resumeUrl: `${import.meta.env.BASE_URL}ShraddhaGourishetty_Resume.pdf`, 
  linkedinUrl: "https://www.linkedin.com/in/shraddha-gourishetty-562397220/",
  githubUrl: "https://github.com/GShraddhaa/",
  blogUrl: "https://uwaterloo.ca/co-operative-education/blog/post/creating-content-with-shraddha-behind-the-scenes",

  headline: "Enterprise GIS, automation, and environmental analysis with measurable impact.",
  shortOverview:
    "I build spatial workflows that actually get used, by emergency planners, climate funders, and executive teams making decisions for over a million people. Two years in government and climate tech, working across ArcGIS Enterprise, Python automation, and everything in between.",

  stats: [
    { value: "$150–200K", label: "climate funding supported by my GIS research" },
    { value: "~40%", label: "reduction in enterprise QA processing time" },
    { value: "1.5M", label: "residents affected by analyses I delivered" },
    { value: "96%", label: "accuracy on wildfire risk classification model" },
  ],

  highlights: [
    { text: "Produced GIS research and mapping that supported $150K–$200K in awarded climate funding", target: "climate-funding-gis" },
    { text: "Delivered spatial epidemiology analysis on 10+ years of rabies surveillance data informing public health policy for 1.5M residents", target: "spatial-epidemiology-peel" },
    { text: "Automated enterprise GIS QA workflows with Python, reducing processing time by ~40%", target: "enterprise-gis-automation" },
    { text: "Delivered spatial analyses used in executive policy briefings supporting decisions for 1.5 million residents", target: "enterprise-gis-automation" },
  ],

  exploring:
    "Currently exploring deep-learning land-cover classification, FastAPI for GIS microservices, and integrating ArcGIS Online with public-facing dashboards.",

  aboutIntro:
    "I got into GIS because maps are how you make complex things real. I stayed because there's something satisfying about writing a script that catches errors automatically, or handing a map to a decision-maker who genuinely changes their plan because of it.",

  aboutStory: [
    "Over the past two years, I've worked across government agencies and a climate tech startup, building geospatial solutions that do more than visualize data - they solve operational problems and support real decisions.",
    "I've automated enterprise GIS QA workflows with Python, published and maintained ArcGIS services, and supported large imagery workflows where performance and accuracy matter. I also build stakeholder-ready maps and summaries that make complex spatial patterns easy to act on.",
    "I'm especially energized by work where precision matters and impact is measurable - whether that's supporting climate funding proposals, strengthening public health analysis, or improving infrastructure planning.",
  ],

  whatIBring: [
    "Enterprise GIS experience (ArcGIS Pro/Online/Enterprise) including services and workflows",
    "Python automation (ArcPy/geoprocessing) + spatial databases (PostgreSQL/PostGIS)",
    "Remote sensing + environmental risk assessment (incl. Google Earth Engine)",
    "Clear communication: maps, charts, dashboards/StoryMaps for non-technical stakeholders",
  ],

  endLine:
    "What sets me apart is not just technical breadth, but how I apply it: I design GIS workflows that scale, validate themselves, and translate cleanly to non-technical stakeholders. Whether it's optimizing response times, strengthening funding proposals, or supporting long-term environmental planning, I focus on precision, impact, and usability - not just outputs.",
};

export const SKILL_CATEGORIES = [
  { id: "enterprise", title: "Enterprise GIS", skills: ["arcgis", "services", "geodatabases", "qgis", "2d-3d-mapping"] },
  { id: "analysis", title: "Spatial & Network Analysis", skills: ["spatial-analysis", "network-analysis", "infrastructure-planning", "geoprocessing-tools", "buffer/overlay-analysis", "raster/vector-workflows", "lidar"] },
  { id: "automation", title: "Automation & Data", skills: ["python", "r-programming", "html", "java-script", "css", "sql", "bigquery", "fme", "etl", "postgis", "git", "pandas", "numpy", "matplotlib", "scikit-learn", "geopandas", "gee-api", "dji-terra"] },
  { id: "remote", title: "Remote Sensing & Environmental", skills: ["remote-sensing", "gee", "risk-assessment", "photogrammetry", "lidar", "dji-terra"] },
  { id: "viz", title: "Visualization & Communication", skills: ["cartography", "dashboards", "tableau", "storymaps", "adobe", "arcgis-storymaps", "arcgis-dashboards", "thematic-mapping", "technical-writing", "ms-office"] },
];

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
  { id: "raster/vector-workflows", label: "Raster/Vector Workflows" },
  { id: "python", label: "Python (ArcPy)" },
  { id: "r-programming", label: "R Programming" },
  { id: "html", label: "HTML" },
  { id: "java-script", label: "JavaScript" },
  { id: "css", label: "CSS" },
  { id: "sql", label: "SQL" },
  { id: "bigquery", label: "BigQuery" },
  { id: "fme", label: "FME" },
  { id: "postgis", label: "PostgreSQL/PostGIS" },
  { id: "etl", label: "ETL Workflows" },
  { id: "git", label: "Git" },
  { id: "remote-sensing", label: "Remote Sensing" },
  { id: "gee", label: "Google Earth Engine" },
  { id: "risk-assessment", label: "Environmental Risk Assessment" },
  { id: "cartography", label: "Cartographic Design" },
  { id: "dashboards", label: "Dashboards" },
  { id: "tableau", label: "Tableau" },
  { id: "storymaps", label: "StoryMaps / Web Maps" },
  { id: "adobe", label: "Adobe Creative Suite" },
  { id: "ml", label: "Machine Learning" },
  { id: "automation", label: "Automation" },
  { id: "arcgis-storymaps", label: "ArcGIS StoryMaps" },
  { id: "arcgis-dashboards", label: "ArcGIS Dashboards" },
  { id: "photogrammetry", label: "Photogrammetry" },
  { id: "dji-terra", label: "DJI Terra" },
  { id: "pandas", label: "Pandas" },
  { id: "numpy", label: "NumPy" },
  { id: "matplotlib", label: "Matplotlib" },
  { id: "scikit-learn", label: "Scikit-Learn" },
  { id: "geopandas", label: "GeoPandas" },
  { id: "gee-api", label: "Google Earth Engine API" },
  { id: "ms-office", label: "MS Office Suite" },
  { id: "technical-writing", label: "Technical Report Writing" },
  { id: "thematic-mapping", label: "Thematic Mapping" },
  { id: "lidar", label: "LiDAR Technology" },
  { id: "2d-3d-mapping", label: "2D/3D Mapping" },
];

export const CERTIFICATIONS = [
  { id: "drone", label: "Basic Drone Pilot License (Canada)" },
  { id: "google-da", label: "Google Data Analytics Certificate" },
  { id: "arcgis-pro-assoc", label: "ArcGIS Pro Associate (In Progress)" },
  { id: "fme-basic", label: "FME Form Basic (In Progress)" },
];

export type Project = {
  id: string;
  anchor?: string;
  title: string;
  type: "professional" | "academic";
  context: string;
  problem: string;
  approach: string[];
  outcome: string;
  impact: string[];
  status: string;
  reportUrl?: string;
  skills: string[];
  image?: string;
  imageCaption?: string;
  beforeAfter?: { before: string; after: string };
  codeSnippet?: { language: string; title: string; body: string };
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "enterprise-gis-automation-decision-support",
    anchor: "enterprise-gis-automation",
    title: "Enterprise GIS Automation & Executive Decision Support",
    type: "professional",
    context: "Public Sector | Enterprise GIS & Policy Support",
    image: mapEnterprise,
    imageCaption: "Service-area analysis · ArcGIS Enterprise · ~40% QA time reduction",
    featured: true,
    problem:
      "Enterprise GIS operations relied on manual quality assurance processes and ad hoc spatial analysis, resulting in slow turnaround times and inconsistent outputs for both operational teams and executive decision-makers.",
    approach: [
      "Designed and implemented Python-based QA automation workflows using ArcPy to validate enterprise GIS datasets prior to publishing",
      "Automated checks for attribute completeness, spatial integrity, schema consistency, and data accuracy",
      "Performed spatial analyses to support planning and policy discussions, including population and service coverage assessments",
      "Translated technical GIS outputs into clear, executive-ready maps and summaries for non-technical stakeholders",
    ],
    outcome:
      "Established scalable GIS workflows that improved data reliability while delivering clear, decision-ready spatial insights to leadership.",
    impact: [
      "Reduced enterprise GIS QA processing time by approximately 40%",
      "Improved consistency and reliability of authoritative GIS datasets",
      "Spatial analyses supported executive policy briefings influencing decisions for approximately 1.5 million residents",
      "Strengthened the role of GIS as both an operational and strategic decision-support system",
    ],
    beforeAfter: {
      before: "QA ran manually - a GIS analyst would open each dataset, check attributes and geometry by hand, and log issues in a spreadsheet. A full validation pass took several hours and results varied depending on who ran it.",
      after: "A Python/ArcPy script runs the full check automatically before any dataset gets published: attribute completeness, spatial integrity, schema consistency. It flags issues and logs them in a structured report. The same pass now takes under 30 minutes and catches things humans miss.",
    },
    codeSnippet: {
      language: "python",
      title: "QA validator (excerpt) - arcpy",
      body: `import arcpy, json
from datetime import datetime

REQUIRED_FIELDS = ["asset_id", "status", "last_inspected"]

def validate(fc: str) -> dict:
    report = {"fc": fc, "ts": datetime.utcnow().isoformat(), "issues": []}
    fields = {f.name for f in arcpy.ListFields(fc)}

    for field in REQUIRED_FIELDS:
        if field not in fields:
            report["issues"].append({"type": "missing_field", "field": field})

    with arcpy.da.SearchCursor(fc, ["OID@", "SHAPE@", *REQUIRED_FIELDS]) as cur:
        for oid, geom, *vals in cur:
            if geom is None or geom.area == 0:
                report["issues"].append({"type": "bad_geometry", "oid": oid})
            for k, v in zip(REQUIRED_FIELDS, vals):
                if v in (None, ""):
                    report["issues"].append({"type": "null_attr", "oid": oid, "field": k})
    return report`,
    },
    status: "Completed",
    skills: ["arcgis", "python", "automation", "spatial-analysis", "cartography", "geodatabases", "arcgis-dashboards", "technical-writing", "ms-office", "thematic-mapping", "2d-3d-mapping"],
  },
  {
    id: "climate-funding-gis-analysis",
    anchor: "climate-funding-gis",
    title: "Climate Funding GIS Research & Analysis",
    type: "professional",
    context: "Climate Tech | Environmental Planning",
    image: mapClimate,
    imageCaption: "NDVI + environmental risk overlays · Google Earth Engine",
    featured: true,
    problem:
      "Climate funding applications required robust spatial evidence to demonstrate need, impact, and feasibility, but existing data lacked spatial synthesis.",
    approach: [
      "Performed geospatial analysis of environmental, land use, and risk datasets",
      "Created maps and spatial summaries aligned with grant and funding criteria",
      "Integrated GIS outputs into written proposals and technical documentation",
      "Ensured spatial methods were transparent and defensible for external review",
    ],
    outcome:
      "Provided GIS-based evidence that strengthened funding applications and clarified environmental risk and opportunity.",
    impact: [
      "Supported $150K–$200K in awarded climate funding",
      "Improved credibility of funding proposals through data-driven spatial analysis",
      "Demonstrated the value of GIS in securing external investment for climate initiatives",
    ],
    status: "Completed",
    skills: ["remote-sensing", "spatial-analysis", "cartography", "gee", "qgis", "gee-api", "arcgis-storymaps", "thematic-mapping", "technical-writing"],
  },
  {
    id: "spatial-epidemiology-rabies-surveillance",
    anchor: "spatial-epidemiology-peel",
    title: "Spatial Epidemiology & Rabies Surveillance Analysis",
    type: "professional",
    context: "Public Sector | Public Health GIS",
    image: mapEpidemiology,
    imageCaption: "10-year rabies prevalence hotspots across Mississauga, Brampton & Caledon · ArcGIS Pro + R",
    featured: true,
    problem:
      "Public health planners at the Region of Peel needed to understand where and why rabies cases were concentrating across three municipalities serving 1.5M residents, and required defensible spatial evidence to guide surveillance, vaccination outreach, and policy decisions.",
    approach: [
      "Compiled and cleaned 10+ years of rabies surveillance records, joining case data to census tracts, land cover, and wildlife corridor layers in ArcGIS Pro",
      "Performed hotspot analysis (Getis-Ord Gi*, kernel density) to identify statistically significant case clusters and persistent risk zones across Mississauga, Brampton, and Caledon",
      "Built predictive disease prevalence models in R by integrating environmental covariates (vegetation, hydrology, urban-rural gradient) with demographic and pet-population datasets",
      "Designed 8–10 publication-quality thematic maps and analytical outputs tailored for non-technical policy stakeholders and public health leadership",
    ],
    outcome:
      "Delivered a spatial epidemiology evidence base that translated a decade of surveillance data into clear risk geographies and predictive insights, directly supporting public health policy discussions for the Region of Peel.",
    impact: [
      "Informed public health policy and surveillance strategy for 1.5M residents across three municipalities",
      "Identified environmental and demographic risk drivers behind rabies case clustering, enabling targeted outreach",
      "Produced 8–10 stakeholder-ready GIS maps that streamlined data-driven decision-making for policy teams",
      "Demonstrated the value of integrated GIS + statistical modeling (R) for public health risk assessment",
    ],
    status: "Completed",
    skills: ["arcgis", "spatial-analysis", "r-programming", "geoprocessing-tools", "cartography", "thematic-mapping", "technical-writing", "arcgis-dashboards", "risk-assessment", "ms-office"],
  },
  {
    id: "land-cover-soil-moisture",
    title: "Land Cover & Soil Moisture Analysis",
    type: "academic",
    context: "Sudan–Sahel Region | Remote Sensing & Environmental Risk",
    image: mapSoil,
    imageCaption: "Khartoum soil-moisture difference (Oct 2016 vs. Oct 2024) · MODIS + SMAP · Google Earth Engine",
    problem:
      "Decision-makers lacked a clear, data-driven understanding of how land cover change and soil moisture trends were contributing to desertification risk.",
    approach: [
      "Analyzed 100+ satellite scenes using the Standardized Soil Moisture Index (SSMI)",
      "Built automated raster processing workflows using Google Earth Engine and Python",
      "Integrated land cover classifications with climatic variables to assess spatial risk patterns",
      "Designed presentation-ready risk assessment maps for environmental interpretation",
    ],
    outcome: "Produced regional desertification risk maps and demonstrated scalable remote sensing workflows for environmental monitoring.",
    impact: [
      "Enabled scalable analysis through automation of raster workflows",
      "Supported environmental risk monitoring and climate adaptation planning",
    ],
    status: "Completed",
    reportUrl: `${import.meta.env.BASE_URL}ShraddhaGourishetty_SoilMoistureAnalysis.pdf`,
    skills: ["gee", "python", "qgis", "remote-sensing", "spatial-analysis", "cartography", "raster/vector-workflows", "etl", "gee-api", "geopandas", "numpy", "matplotlib", "thematic-mapping"],
  },
  {
    id: "wildfire-risk-model",
    title: "Wildfire Risk Classification Model",
    type: "academic",
    context: "Mackenzie County, Alberta | Emergency Planning",
    image: mapWildfire,
    imageCaption: "Random Forest classification · 96% accuracy",
    problem: "Emergency planners needed an objective, data-driven method to classify wildfire risk across a large region.",
    approach: [
      "Developed a Random Forest classification model using vegetation, weather, and terrain inputs",
      "Processed and validated geospatial datasets through structured ETL workflows",
      "Engineered spatial features to improve model performance",
      "Translated outputs into intuitive risk zone maps for non-technical stakeholders",
    ],
    outcome: "Delivered a high-accuracy wildfire risk classification model and stakeholder-ready risk maps.",
    impact: [
      "Achieved 96% classification accuracy",
      "Improved wildfire preparedness through clear spatial prioritization",
    ],
    status: "Completed",
    reportUrl: `${import.meta.env.BASE_URL}ShraddhaGourishetty_ClassificationModel.pdf`,
    skills: ["python", "ml", "spatial-analysis", "cartography", "qgis", "risk-assessment", "etl", "scikit-learn", "pandas", "numpy", "geopandas", "matplotlib", "thematic-mapping", "technical-writing"],
  },
  {
    id: "fire-station-network-analysis",
    title: "Fire Station Network Analysis & Response Time Optimization",
    type: "academic",
    context: "Waterloo Region, Ontario | Emergency Response & Network Analysis",
    image: mapFireStation,
    imageCaption: "Location-allocation · existing + proposed Elmira & New Hamburg stations · ArcGIS Network Analyst",
    problem:
      "Emergency response planners needed to evaluate whether existing fire stations in Waterloo Region were sufficient to meet response-time targets and determine where new stations should be located to improve coverage.",
    approach: [
      "Built a road network dataset in ArcGIS using travel time as the primary impedance, incorporating speed limits and one-way road restrictions",
      "Created multiple service area and location-allocation scenarios comparing existing stations against proposed stations in Elmira and New Hamburg",
      "Modeled four operational cases to assess system performance under different station configurations",
      "Calculated key performance metrics including average response time, demand allocation per station, and proportion of calls outside 2-, 5-, and 10-minute service areas",
    ],
    outcome:
      "Identified that adding proposed fire stations significantly reduced average response times and improved overall service coverage compared to relying on existing stations alone.",
    impact: [
      "Demonstrated that the base case with existing stations resulted in the highest average response times",
      "Showed that adding both proposed stations produced the most balanced demand allocation and fastest system-wide response",
      "Provided data-driven evidence to support facility expansion decisions for emergency response planning",
    ],
    status: "Completed",
    reportUrl: `${import.meta.env.BASE_URL}ShraddhaGourishetty_NetworkAnalysis.pdf`,
    skills: ["arcgis", "network-analysis", "spatial-analysis", "infrastructure-planning", "sql", "arcgis-dashboards", "thematic-mapping", "technical-writing"],
  },
  {
    id: "highway-corridor-impact",
    title: "Highway Corridor Impact Assessment",
    type: "academic",
    context: "Ontario | Infrastructure Planning",
    image: mapHighway,
    imageCaption: "Multi-alignment corridor comparison · PostGIS buffer + overlay analysis",
    problem: "Planners needed to identify the highway alignment that minimized environmental and community disruption.",
    approach: [
      "Executed 10+ spatial SQL queries in PostGIS",
      "Quantified vegetation loss and residential intersections across alignment options",
      "Applied buffer and overlay analysis to support objective comparison",
    ],
    outcome: "Recommended the corridor alignment that minimized agricultural and residential disruption.",
    impact: ["Enabled data-driven infrastructure planning using spatial databases"],
    status: "Completed",
    reportUrl: `${import.meta.env.BASE_URL}ShraddhaGourishetty_QGISandPostgreSQL.pdf`,
    skills: ["arcgis", "sql", "spatial-analysis", "geoprocessing-tools", "postgis", "lidar", "photogrammetry", "dji-terra", "2d-3d-mapping", "thematic-mapping", "technical-writing"],
  },
  {
    id: "toronto-traffic-intelligence",
    anchor: "toronto-traffic-intelligence",
    title: "Downtown Toronto Traffic Intelligence & Risk Prediction",
    type: "academic",
    context: "Toronto, Ontario | ArcGIS StoryMap · ML",
    image: mapTraffic,
    imageCaption: "Collision-density + congestion risk surface · Toronto Open Data",
    problem:
      "Traffic congestion and collision risk in Downtown Toronto are influenced by multiple spatial factors, yet most public traffic datasets are analyzed independently without integrating road hierarchy, collision density, signal infrastructure, and predictive spatial modeling into a unified workflow.",
    approach: [
      "Collected and preprocessed Toronto Open Data including road networks, traffic collisions, and traffic signal infrastructure",
      "Aggregated transportation variables into 500 m spatial grid cells for standardized spatial comparison",
      "Built normalized congestion and collision risk indices using spatial joins and feature engineering workflows",
      "Applied unsupervised machine learning clustering to identify distinct traffic activity zones",
      "Designed a public-facing ArcGIS StoryMap combining cartography, spatial analysis, and narrative-driven visualization",
    ],
    outcome:
      "An interactive GIS + ML project that visualizes congestion, predicts traffic-risk patterns, and identifies high-risk corridors across Downtown Toronto.",
    impact: [
      "Demonstrates end-to-end geospatial workflow development",
      "Showcases ability to communicate complex spatial patterns via cartography and StoryMap storytelling",
      "Highlights integration of transportation infrastructure, collision analysis, and predictive modeling",
    ],
    status: "Completed",
    reportUrl: "https://storymaps.arcgis.com/stories/48b2e37ad51e45e1ac89914e33bc4c85",
    skills: ["arcgis", "qgis", "python", "ml", "spatial-analysis", "cartography", "storymaps", "arcgis-storymaps", "arcgis-dashboards", "pandas", "scikit-learn", "geopandas", "thematic-mapping"],
  },
  {
    id: "wind-turbine-site-suitability",
    title: "Wind Turbine Site Suitability Analysis",
    type: "academic",
    context: "Huron County, Ontario | Renewable Energy Planning & MCDA",
    image: mapWindTurbine,
    imageCaption: "Weighted overlay suitability raster · Huron County · ArcGIS Pro",
    problem:
      "Renewable energy developers and municipal planners needed an objective, transparent way to identify where wind turbines could realistically be sited in Huron County given environmental, infrastructure, and land-use constraints.",
    approach: [
      "Collected and standardized inputs covering wind speed, slope, land cover, road and transmission proximity, and setbacks from residences, water bodies, and protected areas",
      "Reclassified each criterion into a common suitability scale and assigned weights using multi-criteria decision analysis (MCDA / AHP)",
      "Ran a weighted overlay in ArcGIS Pro to produce a continuous suitability raster across the county",
      "Validated outputs against municipal boundaries and existing wind infrastructure, then symbolized into intuitive low-to-high suitability classes",
    ],
    outcome:
      "Delivered a county-wide suitability surface that clearly distinguishes prime wind energy zones (concentrated along the Lake Huron shoreline) from constrained inland areas.",
    impact: [
      "Provided planners with a defensible, repeatable siting framework instead of ad hoc parcel review",
      "Highlighted a small cluster of high-suitability (2.0–2.4) cells worth prioritizing for feasibility studies",
      "Showed how MCDA + raster analysis can de-risk early-stage renewable energy investment decisions",
    ],
    status: "Completed",
    skills: ["arcgis", "spatial-analysis", "raster/vector-workflows", "buffer/overlay-analysis", "cartography", "risk-assessment", "gee-api", "pandas", "scikit-learn", "arcgis-storymaps", "thematic-mapping", "technical-writing"],
  },
  {
    id: "crime-occurrences-spatial-analysis",
    title: "Crime Occurrences Spatial Analysis",
    type: "academic",
    context: "Urban Public Safety | Hotspot & Pattern Analysis",
    image: mapCrime,
    imageCaption: "Crime occurrence density · kernel density + hotspot analysis",
    problem:
      "Raw crime point data is hard to act on - thousands of incidents overlap visually, and patterns by neighborhood, time, and type get lost without proper spatial aggregation.",
    approach: [
      "Cleaned and geocoded crime occurrence records, filtering by date range and offence category",
      "Generated kernel density surfaces to reveal underlying hotspots beyond individual point clusters",
      "Ran Getis-Ord Gi* hotspot analysis to statistically identify significant high-crime and low-crime clusters",
      "Aggregated incidents to neighborhood boundaries and produced thematic maps comparing rates across areas",
    ],
    outcome:
      "Produced a clear set of maps that translate raw incident points into statistically significant hotspots and neighborhood-level patterns suitable for public safety planning.",
    impact: [
      "Made dense point data interpretable for non-technical decision-makers",
      "Identified persistent hotspot zones that could be targeted for patrols or community programs",
      "Demonstrated end-to-end spatial statistics workflow: cleaning → density → hotspot → cartography",
    ],
    status: "Completed",
    skills: ["arcgis", "spatial-analysis", "cartography", "qgis", "geoprocessing-tools", "pandas", "thematic-mapping", "technical-writing"],
  },
];

export function skillName(id: string): string {
  return SKILLS.find((s) => s.id === id)?.label || id;
}
export function projectsForSkill(skillId: string): Project[] {
  return PROJECTS.filter((p) => p.skills.includes(skillId));
}
