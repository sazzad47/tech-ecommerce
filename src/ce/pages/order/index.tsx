import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import styles from "../../style";
import ContactInfo from "./ContactInfo";
import ProjectDetails from "./ProjectDetails";
import { validateContactInfo, validateProjectDetails } from "./Validate";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useCreateOrderMutation } from "../../../state/api/ce";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";

export interface Demo {
  url: string;
  description: string;
}

export type UserData = {
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
  order_file: File | null;
  order_description: string;
  delivery_date: Date | null;
  demo: { url: string; description: string }[];
  additional_file: File | null;
  [key: string]:
    | string
    | File
    | null
    | Date
    | { url: string; description: string }[];
};

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
  order_file: null,
  order_description: "",
  delivery_date: null,
  demo: [{ url: "", description: "" }],
  additional_file: null,
};

export default function OrderPage() {
  const navigate = useNavigate();

  const successAlert = () => {
    Swal.fire({
      title: "Thank you!",
      text: "We received your order. Go to your dashboard to check your order details.",
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "Dashboard",
      preConfirm: () => navigate("/ce/profile"),
    });
  };

  const { access_token } = useSelector((state: RootState) => state.auth);

  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();

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

    if (Object.keys(errMsg).length > 0) return setErrorMessage(errMsg);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    const errMsg = validateProjectDetails(userData);

    if (Object.keys(errMsg).length > 0) return setErrorMessage(errMsg);

    const response = await createOrder({ userData, access_token });

    if ("error" in response) {
      if ("data" in response.error) {
        const errorData: any = response.error.data;
        setErrorMessage(errorData);
      }
    }

    if ("data" in response) {
      setErrorMessage({});
      successAlert();
      setUserData(initState);
    }
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
            variant="outlined"
            onClick={activeStep === maxSteps - 1 ? handleSubmit : handleNext}
            className="focus:outline-none normal-case px-4 text-secondaryTheme"
          >
            {activeStep === maxSteps - 1 ? (
              isCreatingOrder ? (
                <ColorRing
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#b8c480",
                    "#B2A3B5",
                    "#F4442E",
                    "#51E5FF",
                    "#429EA6",
                  ]}
                />
              ) : (
                "Submit"
              )
            ) : (
              "Next"
            )}
          </Button>
        }
        backButton={
          <Button
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
