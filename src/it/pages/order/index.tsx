import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabsClasses } from "@mui/material/Tabs";
import { IconButton, Tooltip, Typography } from "@mui/material";
import webDev from "../../assets/web-development.jpg";
import appDev from "../../assets/app-development.jpg";
import seo from "../../assets/seo.png";
import pluginDev from "../../assets/plugin-development.jpg";
import opt from "../../assets/optimization.jpg";
import themeCust from "../../assets/theme-customization.jpg";
import bugFix from "../../assets/bug-fixing.png";
import supp from "../../assets/support.jpg";
import { BiDownload } from "react-icons/bi";
import {BsCloudUploadFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

interface Product {
  name: string;
  category_name: string;
  image: string;
  pdf: string;
  // Add more properties as needed
}

const products: Product[] = [
  {
    category_name: "Web Development",
    name: "Web Development",
    image: webDev,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "App Development",
    name: "App Development",
    image: appDev,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "SEO",
    name: "SEO",
    image: seo,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Plugin Development",
    name: "Plugin Development",
    image: pluginDev,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Optimization",
    name: "Optimization",
    image: opt,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Theme Customization",
    name: "Theme Customization",
    image: themeCust,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Bug Fixing",
    name: "Bug Fixing",
    image: bugFix,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Support",
    name: "Support",
    image: supp,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
];

const categories: string[] = products.map((product) => product.category_name);

export default function OrderNow() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full px-[1rem] md:px-[5rem] flex flex-col gap-5 items-center">
      <div className="w-full text-center text-gray-900 my-[3rem]">
        <div className="eleven">
          <h1>Order Now</h1>
        </div>
        <Typography className="mt-10 text-lg">
          Ordering from us is quick, secure, and reliable.{" "}
          <span className="font-bold text-gray-900">
            {" "}
            Choose your category and download the attached pdf. Once you've
            downloaded successfully, simply upload it using the secure file
            upload feature on this page.{" "}
          </span>
        </Typography>
      </div>
      <Grid
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#701a75",
            },
          }}
          sx={{
            "& button": {
              color: "white",
              textTransform: "capitalize",
              fontSize: "1rem",
              backgroundColor: "#701a75",
              margin: "0.7rem",
              borderRadius: "40px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
            },
            "& button:focus": { outline: "none" },
            "& button.Mui-selected": {
              backgroundColor: "#831843",
              color: "white",
            },
            borderTop: 0,
            height: "5rem",
            display: "flex",
            alignItems: "center",
            [`& .${tabsClasses.scrollButtons}`]: {
              color: "#701a75",
              "&.Mui-disabled": { opacity: 0.3, color: "#701a75" },
            },
          }}
        >
          <Tab label="All" />
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
        <TabPanel value={value} products={products} />
      </Grid>
    </div>
  );
}

interface TabPanelProps {
  value: number;
  products: Product[];
}

function TabPanel({ value, products }: TabPanelProps) {
  const filteredProducts =
    value === 0
      ? products
      : products.filter(
          (product) => product.category_name === categories[value - 1]
        );

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-[3rem] ">
        {filteredProducts.map((product, index) => (
          <div key={index} className="w-full flex flex-col gap-5 items-center">
            <ProductDetails product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

interface ProductProps {
  product: Product;
}

function ProductDetails({ product }: ProductProps) {
  const { access_token } = useSelector((state: RootState) => state.auth);
  const handleDownload = () => {
    fetch(product.pdf)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "notice.pdf";
        alink.click();
      })
      .catch((error) => {
        console.error("Error downloading the PDF:", error);
      });
  };

  return (
    <div className="w-full">
      <h3>{product.name}</h3>
      <div className="w-full h-[200px] relative">
        <img src={product.image} alt="" className="w-full h-full absolute" />
        <div className="absolute w-full bottom-2 flex justify-end gap-3 px-2">
          <Tooltip title="Download">
            <IconButton onClick={handleDownload} className="text-white bg-gray-500 w-[50px] h-[50px]">
              {" "}
              <BiDownload className="text-white text-2xl" />{" "}
            </IconButton>
          </Tooltip>
          <Tooltip title="Upload">
            <IconButton className="text-white bg-gray-500 w-[50px] h-[50px]">
              {" "}
             <Link to={`${access_token ? "/it/order/create" : "/login"}`} > <BsCloudUploadFill className="text-white text-2xl" />{" "} </Link> 
            </IconButton>
          </Tooltip>
        </div>
        
      </div>
    </div>
  );
}
