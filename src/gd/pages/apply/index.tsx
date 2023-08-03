import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import styles from "../../style";
import Introduction from "./Introduction";
import {
  validateContactInfo,
  validateCredentials,
  validateDescription,
} from "./Validate";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useCreatePostMutation } from "../../../state/api/gd";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";
import Credentials from "./credentials";
import Description from "./Description";
import { PrimaryButton } from "src/gd/components/Button";
import "react-phone-input-2/lib/style.css";

export type UserData = {
  application_for: string;
  mode: string;
  category: string;
  first_name: string;
  last_name: string;
  fathers_name: string;
  mothers_name: string;
  country: string;
  province: string;
  city: string;
  zip: string;
  address: string;
  marital_status: string;
  specific_marital_status: string;
  date_of_birth: Date | null;
  sex: string;
  specific_sex: string;
  blood_group: string;
  occupation: string;
  email: string;
  phone: string;
  identification_card: File | null;
  certificate_from_city_council: File | null;
  medical_report: File | null;
  permission_letter: File | null;
  test_results: File | null;
  name_of_employment: string;
  credential_photos: string[];
  other_documents: File | null;
  title: string;
  photo: string;
  live_description: string;
  written_description: string;
  time_limit: string;
  fixed_time: Date | null;
  donation_needed: string | number;
  [key: string]: string | string[] | number | Date | File | null | undefined;
};

const initState: UserData = {
  application_for: "",
  mode: "",
  category: "",
  first_name: "",
  last_name: "",
  fathers_name: "",
  mothers_name: "",
  country: "",
  province: "",
  city: "",
  zip: "",
  address: "",
  marital_status: "",
  specific_marital_status: "",
  date_of_birth: null,
  sex: "",
  specific_sex: "",
  blood_group: "",
  occupation: "",
  email: "",
  phone: "",
  identification_card: null,
  certificate_from_city_council: null,
  medical_report: null,
  permission_letter: null,
  test_results: null,
  name_of_employment: "",
  credential_photos: [],
  other_documents: null,
  title: "",
  photo: "",
  live_description: "",
  written_description: "",
  time_limit: "",
  fixed_time: null,
  donation_needed: "",
};

export default function Apply() {
  const navigate = useNavigate();

  const successAlert = () => {
    Swal.fire({
      title: "Thank you!",
      text: "We received your application. Go to your dashboard to check your details.",
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "Dashboard",
      preConfirm: () => navigate("/gd/profile"),
    });
  };

  const { access_token } = useSelector((state: RootState) => state.auth);

  const [createPost, { isLoading: isCreatingPost }] = useCreatePostMutation();

  const [userData, setUserData] = React.useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = React.useState<any>({});
  console.log("userData", userData);
  const steps = [
    {
      label: "Introduction",
      content: (
        <Introduction
          userData={userData}
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      ),
    },
    {
      label: "Credentials",
      content: (
        <Credentials
          userData={userData}
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      ),
    },
    {
      label: "Description",
      content: (
        <Description
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
    let errMsg = {};

    if (activeStep === 0) {
      errMsg = validateContactInfo(userData);
    }
    if (activeStep === 1) {
      errMsg = validateCredentials(userData);
    }

    if (Object.keys(errMsg).length > 0) return setErrorMessage(errMsg);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    const errMsg = validateDescription(userData);

    if (Object.keys(errMsg).length > 0) return setErrorMessage(errMsg);

    const response = await createPost({ userData, access_token });
    console.log("response", response);
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
      className={`${styles.paddingX} ${styles.paddingY} text-secondaryTheme`}
    >
      <div className="mb-3 flex justify-between items-center">
        <h1 className={`text-start ${styles.heading2}`}>Apply for donation!</h1>
        <Link to={`${access_token ? "/gd/apply/volunteer" : "/login"}`}>
          <PrimaryButton> Be a Volunteer </PrimaryButton>
        </Link>
      </div>

      <div className="w-full bg-white p-[1rem] sm:p-[5rem] mt-[3rem]">
        <h4 className="text-xl font-bold text-gray-900 m-0 p-0">
          {steps[activeStep].label}
        </h4>
        <div className="w-full mt-5">{steps[activeStep].content}</div>
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
            variant="contained"
            onClick={activeStep === maxSteps - 1 ? handleSubmit : handleNext}
            className="focus:outline-none bg-green-700 normal-case px-4 text-secondaryTheme"
          >
            {activeStep === maxSteps - 1 ? (
              isCreatingPost ? (
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
