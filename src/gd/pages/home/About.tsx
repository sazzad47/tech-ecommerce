import { useState } from "react";
import { SectionWrapper } from "../../hoc";
import hero4 from "../../images/hero3.png";
import styles from "../../style";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const data = [
  {
    label: "About",
    value: "about",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    label: "Mission",
    value: "mission",
    desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.`,
  },
  {
    label: "Vision",
    value: "vision",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  return (
    <>
      <div className="mt-10 w-full gap-7 grid grid-cols-1 sm:grid-cols-2 mb-6">
        <div className="w-full h-[60vh] relative">
          <img src={hero4} alt="" className="w-full h-full absolute" />
        </div>
        <div className="w-full h-[60vh] max-h-[60vh] overflow-y-auto text-secondaryTheme">
          <h3 className={styles.heading2}>Who Are We?</h3>
          <Tabs value="about">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    activeTab === value ? "custom-tab active" : "custom-tab"
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
