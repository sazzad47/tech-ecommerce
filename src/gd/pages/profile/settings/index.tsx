import React from 'react'
import Layout from '../Layout'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BillingAddress from 'src/user/billingAddress/BillingAddress';
import ChangePassword from 'src/user/changePassword';
import VolunteerInfo from './VolunteerInfo';


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
            {children}
          </div>
        )}
      </div>
    );
  }

  
const Settings = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
    
  return (
    <Layout>
        <div className='bg-black-gradient-2 p-5'>
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
            <Tab label="Volunteer Information" />
            <Tab label="Billing Address" />
            <Tab label="Change Password" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <VolunteerInfo/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <BillingAddress/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ChangePassword/>
          </TabPanel>
        </div>
    </Layout>
  )
}

export default Settings