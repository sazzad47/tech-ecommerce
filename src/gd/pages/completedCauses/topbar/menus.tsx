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
    title: "Medical",
  },
  {
    id: 2,
    title: "Education",
  },
  {
    id: 3,
    title: "Natural Disaster",
  },
  {
    id: 4,
    title: "Animals",
  },
  {
    id: 5,
    title: "Employment",
  },
  {
    id: 6,
    title: "Sports",
  },
];

export {menus};
