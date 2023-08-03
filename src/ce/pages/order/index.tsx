import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabsClasses } from "@mui/material/Tabs";
import { IconButton, Tooltip, Typography } from "@mui/material";
import home from "../../assets/home.jpg";
import highway from "../../assets/highway.jpg";
import railway from "../../assets/railway.jpg";
import dam from "../../assets/dam.jpg";
import drainage from "../../assets/drainage.jpg";
import powerSupply from "../../assets/powerSupply.webp";
import bridge from "../../assets/bridge.jpg";
import flyover from "../../assets/flyover.jpg";
import airport from "../../assets/airport.jpg";
import { BiDownload } from "react-icons/bi";
import { BsCloudUploadFill } from "react-icons/bs";
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
    category_name: "Home",
    name: "Home",
    image: home,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Highway",
    name: "Highway",
    image: highway,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Railway",
    name: "Railway",
    image: railway,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Bridge",
    name: "Bridge",
    image: bridge,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Dam",
    name: "Dam",
    image: dam,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Drainage",
    name: "Drainage",
    image: drainage,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Power Supply",
    name: "Power Supply",
    image: powerSupply,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Flyover",
    name: "Flyover",
    image: flyover,
    pdf: "https://res.cloudinary.com/sazzadhossen/image/upload/v1690446514/fevo-10-767950_jhedif.pdf",
  },
  {
    category_name: "Airport",
    name: "Airport",
    image: airport,
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
    <div className="bg-yellow-500 w-full px-[1rem] pb-[5rem] md:px-[5rem] flex flex-col gap-5 items-center">
      <div className="w-full text-center text-gray-900 my-[3rem]">
        <div className="one mb-[3rem]">
          <h1 className="text-2xl sm:text-4xl">Order Now!</h1>
        </div>
        <Typography className="text-lg">
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
              backgroundColor: "#831843",
            },
          }}
          sx={{
            "& button": {
              color: "white",
              textTransform: "capitalize",
              fontSize: "1rem",
              backgroundColor: "#ca8a04",
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
            zIndex: 1,
            [`& .${tabsClasses.scrollButtons}`]: {
              color: "#831843",
              "&.Mui-disabled": { opacity: 0.3, color: "#831843" },
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
            <IconButton
              onClick={handleDownload}
              className="text-white bg-yellow-600 w-[50px] h-[50px]"
            >
              {" "}
              <BiDownload className="text-white text-2xl" />{" "}
            </IconButton>
          </Tooltip>
          <Tooltip title="Upload">
            <IconButton className="text-white bg-yellow-600 w-[50px] h-[50px]">
              {" "}
              <Link to={`${access_token ? "/ce/order/create" : "/login"}`}>
                {" "}
                <BsCloudUploadFill className="text-white text-2xl" />{" "}
              </Link>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
