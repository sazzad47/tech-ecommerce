import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabsClasses } from "@mui/material/Tabs";
import { Dialog, IconButton, Slide, Typography } from "@mui/material";
import home from "../../../assets/home.jpg";
import highway from "../../../assets/highway.jpg";
import railway from "../../../assets/railway.jpg";
import dam from "../../../assets/dam.jpg";
import drainage from "../../../assets/drainage.jpg";
import powerSupply from "../../../assets/powerSupply.webp";
import bridge from "../../../assets/bridge.jpg";
import flyover from "../../../assets/flyover.jpg";
import airport from "../../../assets/airport.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";


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
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const categories: string[] = products.map((product) => product.category_name);

export default function Works() {
  const [value, setValue] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="px-[2rem] sm:px-[5rem] w-full flex flex-col gap-5 items-center">
       <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "white",
          },
        }}
      >
        <div className="p-5 pb-0 flex justify-between">
          <Typography className="text-2xl text-gray-900">{name}</Typography>
          <IconButton
            edge="start"
            color="primary"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon className="text-gray-900" />
          </IconButton>
        </div>
        <div>
        <img src={image} alt="" className="w-full h-full" />
        </div>
      </Dialog>
     
      <div>
        <div className="one">
          <h1 className="text-2xl sm:text-4xl">Featured Works</h1>
        </div>
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
        <div className="vertical-marquee mt-[2rem]">
          <div className={`marquee-item ${isHovering ? 'paused' : ''}`}>
            <TabPanel setName={setName} setIsHovering={setIsHovering} setOpen={setOpen} setImage={setImage} value={value} products={products} />
          </div>
        </div>
      </Grid>
    </div>
  );
}

interface TabPanelProps {
  value: number;
  products: Product[];
  setOpen: Function;
  setImage: Function;
  setIsHovering: Function;
  setName: Function;
}

function TabPanel({ value, products, setIsHovering, setOpen, setImage, setName}: TabPanelProps) {
  const filteredProducts =
    value === 0
      ? products
      : products.filter(
          (product) => product.category_name === categories[value - 1]
        );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 pt-[3rem]">
        {filteredProducts.map((product, index) => (
          <div key={index} className="w-full flex flex-col gap-5 items-center">
            <ProductDetails setName={setName} setIsHovering={setIsHovering} setOpen={setOpen} setImage={setImage} product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

interface ProductProps {
  product: Product;
  setOpen: Function;
  setImage: Function;
  setIsHovering: Function;
  setName: Function;
}

function ProductDetails({ product, setName, setIsHovering, setOpen, setImage }: ProductProps) {
 
  return (
    <div onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=> setIsHovering(false)} className="w-full">
      <h3>{product.name}</h3>
      <div
        className="w-full max-w-full h-[200px] relative"
      >
        <img onClick={() => {
          setOpen(true);
          setImage(product.image);
          setName(product.name);
          console.log('clicked')
        }} src={product.image} alt="" className="w-full h-full absolute cursor-pointer" />
      </div>
    </div>
  );
}
