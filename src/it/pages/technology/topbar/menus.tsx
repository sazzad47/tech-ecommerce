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
    title: "Website Templates",
    submenus: [
      {
        title: "Business & Corporate",
        url: "business-templates",
      },
      {
        title: "E-commerce",
        url: "ecommerce-templates",
      },
      {
        title: "Portfolio & Creative",
        url: "portfolio-templates",
      },
      {
        title: "Blog & Magazine",
        url: "blog-templates",
      },
      {
        title: "Landing Pages",
        url: "landing-page-templates",
      },
      {
        title: "Technology & Software",
        url: "technology-templates",
      },
      {
        title: "Fashion & Beauty",
        url: "fashion-templates",
      },
      {
        title: "Food & Restaurant",
        url: "food-templates",
      },
    ],
  },
  {
    id: 2,
    title: "Graphic Designs",
    submenus: [
      {
        title: "Logo Design",
        url: "logo-designs",
      },
      {
        title: "Brochure & Flyer",
        url: "brochure-flyer-designs",
      },
      {
        title: "Social Media Graphics",
        url: "social-media-designs",
      },
      {
        title: "Business Cards",
        url: "business-card-designs",
      },
      {
        title: "Infographics",
        url: "infographic-designs",
      },
      {
        title: "Presentation Templates",
        url: "presentation-templates",
      },
      {
        title: "Poster & Banner",
        url: "poster-banner-designs",
      },
      {
        title: "UI/UX Design",
        url: "ui-ux-designs",
      },
    ],
  },
];

export {menus};
