import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  carrent,
  jobit,
  tripguide,
  man1,
  man3,
  man2,
} from "../assets";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { SiSemanticweb } from "react-icons/si";
import { BsPersonFillLock } from "react-icons/bs";
import { IoMdBusiness } from "react-icons/io";
import { MdMiscellaneousServices, MdOutlineSecurity } from "react-icons/md";
import { useSelector } from "react-redux";

import {CgWebsite} from "react-icons/cg";
import {BsFillMenuAppFill} from "react-icons/bs";
import {HiDocumentSearch} from "react-icons/hi";
import {BsPlugin} from "react-icons/bs";
import {SiGoogleoptimize} from "react-icons/si";
import {FaAffiliatetheme} from "react-icons/fa";
import {AiOutlineBug} from "react-icons/ai";
import {MdContactSupport} from "react-icons/md";
import {DiReact} from "react-icons/di";
import {DiAngularSimple} from "react-icons/di"
import {TbBrandNextjs} from "react-icons/tb";
import {FaVuejs} from "react-icons/fa";
import {SiJquery} from "react-icons/si";
import {SiEmberdotjs} from "react-icons/si";
import {SiSvelte} from "react-icons/si";
import {SiBackbonedotjs} from "react-icons/si";
import {SiD3Dotjs} from "react-icons/si";
import {SiGatsby, SiRubyonrails, SiPython, SiDotnet, SiSpring, SiGooglesheets, SiAdobeillustrator, SiAdobephotoshop, SiSketch, SiFigma, SiInvision, SiOpenzeppelin, SiAdobeindesign, SiAbstract, SiCanva, SiBlender} from "react-icons/si";
import {DiNodejsSmall, DiPhp, DiJava, DiLaravel, DiDocker} from 'react-icons/di';
import {AiTwotoneStar} from "react-icons/ai";
import {BsFillSendFill} from "react-icons/bs";
import {MdSecurity} from "react-icons/md";

export const GenereateNavLinks = ()=> {
  const { access_token } = useSelector(state => state.auth);
  const items = [
      {
        id: "home",
        title: "Home",
        icon: AiOutlineHome,
      },
      {
        id: "technology",
        title: "Technology",
        icon: SiSemanticweb,
      },
      {
        id: "services",
        title: "Services",
        icon: MdMiscellaneousServices,
      },
      {
        id: "security",
        title: "Security",
        icon: MdOutlineSecurity,
      },
      {
        id: "order",
        title: "Order Now",
        icon: BsFillCartPlusFill,
      },
      {
        id: "company",
        title: "Company",
        icon: IoMdBusiness,
      },
      {
        id: access_token ? "profile" : "login",
        title: access_token ? "Profile" : "Login",
        icon: access_token ? CgProfile : BsPersonFillLock,
      },
  ]

  return items;
}

export const appItems = [
  { id: "it", title: "Information Technology", route: "/it" },
  { id: "ce", title: "Civil Engineering", route: "/ce" },
  { id: "gd", title: "Global Donation", route: "/gd" },
];

export const services = [
  {
    title: "Web Development",
    icon: CgWebsite,
    shortDescription: "Creating stunning websites to meet your needs.",
    link: "/it/services/web-development",
  },
  {
    title: "App Development",
    icon: BsFillMenuAppFill,
    shortDescription: "Crafting user-friendly and functional applications.",
    link: "/it/services/app-development",
  },
  {
    title: "SEO",
    icon: HiDocumentSearch,
    shortDescription: "Boosting your online visibility and ranking.",
    link: "/it/services/seo",
  },
  {
    title: "Plugin Development",
    icon: BsPlugin,
    shortDescription: "Building custom plugins for your specific requirements.",
    link: "/it/services/plugin-development",
  },
  {
    title: "Optimization",
    icon: SiGoogleoptimize,
    shortDescription: "Improving performance and efficiency.",
    link: "/it/services/optimization",
  },
  {
    title: "Theme Customization",
    icon: FaAffiliatetheme,
    shortDescription: "Tailoring themes to match your brand.",
    link: "/it/services/theme-customization",
  },
  {
    title: "Bug Fixing",
    icon: AiOutlineBug,
    shortDescription: "Identifying and resolving software issues.",
    link: "/it/services/bug-fixing",
  },
  {
    title: "Support",
    icon: MdContactSupport,
    shortDescription: "Providing reliable and timely technical assistance.",
    link: "/it/services/support",
  },
];


export const projects = [
  {
    name: "Eco Market",
    description:
      "E-commerce platform that offers a wide selection of eco-friendly and sustainable products, promoting responsible consumer choices and a greener lifestyle.",
    image: carrent,
  },
  {
    name: "Health Track",
    description:
      "Mobile app that enables users to track their daily health activities, including exercise, nutrition, and sleep, to maintain a healthy and balanced lifestyle.",
    image: jobit,
  },
  {
    name: "Recipe Box",
    description:
      "A digital recipe organizer that helps users save, organize, and discover a variety of delicious recipes from all over the world.",
    image: tripguide,
  },
];

export const technos = [
  {
    name: "React",
    icon: DiReact,
  },
  {
    name: "Angular",
    icon: DiAngularSimple,
  },
  {
    name: "Vue.js",
    icon: FaVuejs,
  },
  {
    name: "jQuery",
    icon: SiJquery,
  },
  {
    name: "Ember.js",
    icon: SiEmberdotjs,
  },
  {
    name: "Svelte",
    icon: SiSvelte,
  },
  {
    name: "Backbone.js",
    icon: SiBackbonedotjs,
  },
  {
    name: "D3.js",
    icon: SiD3Dotjs,
  },
  {
    name: "Next.js",
    icon: TbBrandNextjs,
  },
  {
    name: "Gatsby",
    icon: SiGatsby,
  },
];


export const backendTechnos = [
  {
    name: "Node.js",
    icon: DiNodejsSmall,
  },
  {
    name: "Ruby",
    icon: SiRubyonrails,
  },
  {
    name: "PHP",
    icon: DiPhp,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "Java",
    icon: DiJava,
  },
  {
    name: ".NET",
    icon: SiDotnet,
  },
  {
    name: "Spring",
    icon: SiSpring,
  },
  {
    name: "Laravel",
    icon: DiLaravel,
  },
  {
    name: "Docker",
    icon: DiDocker,
  },
  {
    name: "Google Sheets",
    icon: SiGooglesheets,
  },
];

export const designTechnos = [
  {
    name: "Adobe Illustrator",
    icon: SiAdobeillustrator,
  },
  {
    name: "Adobe Photoshop",
    icon: SiAdobephotoshop,
  },
  {
    name: "Sketch",
    icon: SiSketch,
  },
  {
    name: "Figma",
    icon: SiFigma,
  },
  {
    name: "InVision",
    icon: SiInvision,
  },
  {
    name: "Zeplin",
    icon: SiOpenzeppelin,
  },
  {
    name: "Abstract",
    icon: SiAbstract,
  },
  {
    name: "Canva",
    icon: SiCanva,
  },
  {
    name: "Blender",
    icon: SiBlender,
  },
  {
    name: "Adobe InDesign",
    icon: SiAdobeindesign,
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sazzad proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: man1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sazzad does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: man2,
  },
  {
    testimonial:
      "After Sazzad optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: man3,
  },
];

export const features = [
  {
    id: "feature-1",
    icon: AiTwotoneStar,
    title: "Stunning Design",
    content:
      "Stunning design increases your company's value, and puts your business in a better financial situation.",
  },
  {
    id: "feature-2",
    icon: MdSecurity,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: BsFillSendFill,
    title: "Fast and Intuitive",
    content:
      "Give your business a boost with our fast and intuitive products and services.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Projects Completed",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Clients Satified",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Positive Reviews",
    value: "3030+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Account",
        link: "https://www.facebook.com",
      },
      {
        name: "Technology",
        link: "https://www.facebook.com",
      },
      {
        name: "Order",
        link: "https://www.facebook.com",
      },
      {
        name: "Services",
        link: "https://www.facebook.com",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.facebook.com",
      },
      {
        name: "Security",
        link: "https://www.facebook.com",
      },
      {
        name: "Privacy Policy",
        link: "https://www.facebook.com",
      },
      {
        name: "Terms and Conditions",
        link: "https://www.facebook.com",
      },
    ],
  },
  {
    title: "Website",
    links: [
      {
        name: "About us",
        link: "https://www.facebook.com",
      },
      {
        name: "FAQs",
        link: "https://www.facebook.com",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
