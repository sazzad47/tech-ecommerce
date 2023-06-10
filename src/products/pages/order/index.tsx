import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "../../style";
import ContactInfo from "./ContactInfo";
import ProjectDetails from "./ProjectDetails";

const steps = [
  {
    label: "Contact Information",
    content: <ContactInfo/>,
  },
  {
    label: "Project Details",
    content: <ProjectDetails/>,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}>
      <div className="">
        <h1 className={`flex items-center justify-center ${styles.heading2}`}>
          Order
        </h1>
      </div>
      <h4 className="text-xl font-bold">
      {steps[activeStep].label}
      </h4>
      <div
        className="h-[255] max-w-[400] w-full mt-5"
        
      >
        {steps[activeStep].content}
      </div>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{background: "transparent", color: "white", marginTop: "3rem", padding: 0}}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className="flex items-center text-secondaryTheme"
          >
            <span className="mt-[2px]">Next</span>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" className="text-secondaryTheme" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
   
  );
}
