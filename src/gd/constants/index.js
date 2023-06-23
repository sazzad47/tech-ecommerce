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
import { AiOutlineHome, AiOutlineForm } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdMiscellaneousServices, MdOutlineSecurity } from "react-icons/md";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import { BiDonateBlood } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";
import { BsPersonFillLock } from "react-icons/bs";
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
      id: "causes",
      title: "Donate",
      icon: BiDonateBlood,
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
      id: "company",
      title: "Company",
      icon: IoMdBusiness,
    },
    {
      id: "apply",
      title: "Apply",
      icon: AiOutlineForm,
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

export const applyForOptions = [
  {  title: "Myself", value: "Myself" },
  {  title: "Family", value: "Family" },
  {  title: "Relatives", value: "Relatives" },
  {  title: "Public", value: "Public" },
];

export const maritalStatusOptions = [
  {  title: "Single", value: "Single" },
  {  title: "Married", value: "Married" },
  {  title: "Separated", value: "Separated" },
  {  title: "Devorced", value: "Devorced" },
  {  title: "Other (please specify)", value: "Other" },
];

export const bloodGroupOptions = [
  {  title: "A+", value: "A+" },
  {  title: "B+", value: "B+" },
  {  title: "O+", value: "O+" },
  {  title: "A-", value: "A-" },
  {  title: "B-", value: "B-" },
  {  title: "O-", value: "O-" },
];

export const modeOptions = [
  {  title: "Normal", value: "Normal" },
  {  title: "Medium", value: "Medium" },
  {  title: "Emergency", value: "Emergency" },
];

export const causes = [
  {
    name: "Modern Apartments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: hero1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Beautiful Apartments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",

    image: hero2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stunning Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: hero3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Modern Apartments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: hero1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Beautiful Apartments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",

    image: hero2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stunning Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: hero3,
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
