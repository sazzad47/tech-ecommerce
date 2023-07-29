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
  send,
  shield,
  star,
  man1,
  man3,
  man2,
} from "../assets";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdBusiness } from "react-icons/io";
import { ImRoad } from "react-icons/im";
import { MdHomeWork } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { SiMarketo } from "react-icons/si";
import { FaMosque } from "react-icons/fa";
import { GiArchBridge } from "react-icons/gi";
import { BsPersonFillLock } from "react-icons/bs";
import {
  MdMiscellaneousServices,
  MdOutlineSecurity,
  MdArchitecture,
} from "react-icons/md";
import design1 from "../images/design1.jpg";
import design2 from "../images/design2.jpg";
import design3 from "../images/design3.jpg";
import { useSelector } from "react-redux";

export const GenerateNavLinks = ()=> {

const { access_token } = useSelector(state => state.auth);

const items = [
  {
    id: "home",
    title: "Home",
    icon: AiOutlineHome,
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: MdArchitecture,
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
    title: "House Design",
    icon: MdHomeWork,
    description: "We offer creative and functional house design services to turn your dream home into a reality.",
    link: "/ce/house-design", // Add the link property here
  },
  {
    title: "Office Design",
    icon: HiOfficeBuilding,
    description: "Our office design solutions focus on optimizing space and productivity to create a professional environment.",
    link: "/ce/office-design", // Add the link property here
  },
  {
    title: "Market Design",
    icon: SiMarketo,
    description: "Our market design expertise ensures an efficient layout and appealing ambiance to attract customers.",
    link: "/ce/market-design", // Add the link property here
  },
  {
    title: "Mosque Design",
    icon: FaMosque,
    description: "We specialize in mosque design, creating sacred spaces that reflect architectural beauty and spiritual values.",
    link: "/ce/mosque-design", // Add the link property here
  },
  {
    title: "Road Design",
    icon: ImRoad,
    description: "Our road design services prioritize safety and functionality to build well-planned and durable roads.",
    link: "/ce/road-design", // Add the link property here
  },
  {
    title: "Bridge Design",
    icon: GiArchBridge,
    description: "Bridging the gap with our bridge design solutions, combining aesthetics and structural integrity.",
    link: "/ce/bridge-design", // Add the link property here
  },
];



export const projects = [
  {
    name: "Modern Apartments",
    description:
      "This beautiful home has many stylish interiors with blue hues and tailored furniture.",
    image: design1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Beautiful Apartments",
    description:
      "This beautiful home has many stylish interiors with blue hues and tailored furniture.",

    image: design2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stunning Design",
    description:
      "This beautiful home has many stylish interiors with blue hues and tailored furniture.",
    image: design3,
    source_code_link: "https://github.com/",
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
    icon: star,
    title: "Stunning Design",
    content:
      "Stunning design increases your company's value, and puts your business in a better financial situation.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
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
        name: "Donate",
        link: "https://www.facebook.com",
      },
      {
        name: "Explore Designs",
        link: "https://www.facebook.com",
      },
      {
        name: "Order",
        link: "https://www.facebook.com",
      },
      {
        name: "Sell",
        link: "https://www.facebook.com",
      },
      {
        name: "Buy Template",
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
        name: "Services",
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
