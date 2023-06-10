import React from "react";
import { SectionWrapper } from "../../hoc";
import hero4 from "../../images/hero3.png";
import styles from "../../style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="p-3">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}


const About: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="mt-10 w-full gap-7 grid grid-cols-1 sm:grid-cols-2 mb-6">
        <div className="w-full h-[60vh] relative">
          <img src={hero4} alt="" className="w-full h-full absolute" />
        </div>
        <div className="w-full h-[60vh] max-h-[60vh] overflow-y-auto text-secondaryTheme">
          <h3 className={styles.heading2}>Who Are We?</h3>
          <Tabs
            TabIndicatorProps={{
              sx: {
                backgroundColor: "green",
              },
            }}
            sx={{
              "& button": { color: "#00f6ff" },
              "& button:focus": { outline: "none" },
              "& button.Mui-selected": {
                color: "green",
              },
            }}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab label="About" />
            <Tab label="Mission" />
            <Tab label="Vision" />
          </Tabs>
          <TabPanel value={value} index={0}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TabPanel>
          <TabPanel value={value} index={1}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur.
          </TabPanel>
          <TabPanel value={value} index={2}>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
