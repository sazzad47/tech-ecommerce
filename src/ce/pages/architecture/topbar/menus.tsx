export interface MenuProps {
  id?: number;
  title?: string;
  url?: string;
  submenus?: Array<{
    title: string;
    url?: string;
    submenus?: Array<{ title: string; url: string }>;
  }>;
}

const menus: Array<MenuProps> = [
  {
    title: "Structural Engineering",
    url: "structural-engineering",
  },
  {
    title: "Geotechnical Engineering",
    url: "geotechnical-engineering",
  },
  {
    title: "Transportation Engineering",
    url: "transportation-engineering",
  },
  {
    title: "Water Resources Engineering",
    url: "water-resources-engineering",
  },
  {
    title: "Environmental Engineering",
    url: "environmental-engineering",
  },
  {
    title: "Construction Management",
    url: "construction-management",
  },
  {
    title: "Urban Planning",
    url: "urban-planning",
  },
  {
    title: "Surveying and Mapping",
    url: "surveying-mapping",
  },
  {
    title: "Building Services Engineering",
    url: "building-services-engineering",
  },
  {
    title: "Project Management",
    url: "project-management",
  },
];

export { menus };
