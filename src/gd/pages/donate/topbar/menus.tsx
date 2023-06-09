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
    id: 1,
    title: "Education",
  },
  {
    id: 2,
    title: "Health and Medical",  
  },
  {
    id: 3,
    title: "Environment and Conservation",  
  },
  {
    id: 4,
    title: "Poverty Alleviation",  
  },
  {
    id: 5,
    title: "Disaster Relief",  
  },
  {
    id: 6,
    title: "Animal Welfare",  
  },
  {
    id: 7,
    title: "Social Justice",  
  },
  {
    id: 8,
    title: "Arts and Culture",  
  },
  {
    id: 9,
    title: "Community Development",  
  },
  {
    id: 10,
    title: "International Aid",  
  },
];

export {menus};
