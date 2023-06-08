import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { textVariant } from "../../components/utils/motion";
import styles from "../../style";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <>
     <motion.div
        variants={textVariant()}
        className="mt-10 w-full flex flex-col justify-center items-center relative z-[1]"
      >
        <div>
          <h2 className={styles.heading2}>Contact Information</h2>
        </div>
      </motion.div>
      <Grid className="mt-10 text-secondaryTheme w-full p-5 min-h-[35vh]">
     
     <Grid className="grid grid-cols-1 sm:grid-2 md:grid-cols-4 gap-3">
       {items?.map((item, i) => (
         <Grid
           key={i}
           className="w-full h-[10rem] relative green-pink-gradient p-[1px]"
         >
           <Content item={item} i={i} />
         </Grid>
       ))}
     </Grid>
   </Grid>
    </>
   
  );
};

const Content = ({
  item,
  i,
}: {
  item: { icon: React.ReactNode; title: string; description: string };
  i: number;
}) => {
  return (
    <Grid className="w-full h-full bg-black-gradient-2 relative flex items-start justify-center p-3">
      <Grid className="w-full flex flex-col items-center justify-start gap-3">
        <Grid className="flex flex-col items-center">
          {item.icon}
          <Typography className="p-0">{item.title}</Typography>
        </Grid>
        <Typography className="p-0">{item.description}</Typography>
      </Grid>
    </Grid>
  );
};

const items = [
  {
    id: 0,
    title: "Location",
    icon: <LocationOnIcon />,
    description: "123 Street, City, Country",
  },
  {
    id: 1,
    title: "Mailing Address",
    icon: <ContactMailIcon />,
    description: "P.O. Box 456, City, Country",
  },
  {
    id: 2,
    title: "Phone",
    icon: <CallIcon />,
    description: "+123 456 7890",
  },
  {
    id: 3,
    title: "Email",
    icon: <EmailIcon />,
    description: "example@example.com",
  },
];

export default ContactInfo;

