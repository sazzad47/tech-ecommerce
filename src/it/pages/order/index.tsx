import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import styles from "../../style";
import ContactInfo from "./ContactInfo";
import ProjectDetails from "./ProjectDetails";
import { validateContactInfo, validateProjectDetails } from "./Validate";

export interface Demo {
  url: string;
  description: string;
}

export interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  province: string;
  city: string;
  zip: string;
  address: string;
  title: string;
  category: string;
  product: string;
  order_file: File | null;
  order_description: string;
  delivery_date: Date | null;
  demo: Demo[];
  additional_file: File | null;
}

export default function OrderPage() {
  const initState: UserData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    province: "",
    city: "",
    zip: "",
    address: "",
    title: "",
    category: "",
    product: "",
    order_file: null,
    order_description: "",
    delivery_date: null,
    demo: [{ url: "", description: "" }],
    additional_file: null,
  };

  const [userData, setUserData] = React.useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = React.useState<any>({});

  const steps = [
    {
      label: "Contact Information",
      content: (
        <ContactInfo
          userData={userData}
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      ),
    },
    {
      label: "Project Details",
      content: (
        <ProjectDetails
          userData={userData}
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      ),
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    const errMsg = validateContactInfo(userData);

    // if (errMsg) return setErrorMessage(errMsg);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formattedDate = userData.delivery_date
    ? userData.delivery_date.toISOString().slice(0, 10)
    : "";

  const handleSubmit = async () => {
    const errMsg = validateProjectDetails(userData);

    if (errMsg) return setErrorMessage(errMsg);
  };

  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <div className="">
        <h1 className={`flex items-center justify-center ${styles.heading2}`}>
          Order
        </h1>
      </div>
      <h4 className="text-xl font-bold">{steps[activeStep].label}</h4>
      <div className="h-[255] max-w-[400] w-full mt-5">
        {steps[activeStep].content}
      </div>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          background: "transparent",
          color: "white",
          marginTop: "3rem",
          padding: 0,
        }}
        nextButton={
          <Button
            size="small"
            variant="outlined"
            onClick={activeStep === maxSteps - 1 ? handleSubmit : handleNext}
            className="focus:outline-none normal-case px-4 text-secondaryTheme"
          >
            {activeStep === maxSteps - 1 ? "Submit" : "Next"}
          </Button>
        }
        backButton={
          <Button
            size="small"
            variant="outlined"
            className={`${
              activeStep === 0 ? "hidden" : "d-flex"
            } focus:outline-none normal-case px-4 text-secondaryTheme`}
            onClick={handleBack}
            hidden={true}
            disabled={activeStep === 0}
          >
            Back
          </Button>
        }
      />
    </div>
  );
}
