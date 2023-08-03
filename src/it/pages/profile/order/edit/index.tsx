import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import ContactInfo from "./ContactInfo";
import ProjectDetails from "./ProjectDetails";
import { validateContactInfo, validateProjectDetails } from "./Validate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import {
  useUpdateOrderMutation,
  useGetOrderDetailsQuery,
} from "../../../../../state/api/it";
import { useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import Layout from "../../Layout";
import { Oval } from "react-loader-spinner";
import moment from "moment";
import { handleNotification } from "src/state/slices/common/auth";

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
  product: string;
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

export default function OrderPage() {

  const dispatch = useDispatch();

  const { access_token } = useSelector((state: RootState) => state.auth);
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetOrderDetailsQuery({
    access_token,
    id,
  });

  const [updateOrder, { isLoading: isUpdatingOrder }] =
    useUpdateOrderMutation();


  const [userData, setUserData] = React.useState<UserData>({} as UserData);
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

    const response = await updateOrder({ userData, access_token, id });
   
    if ("error" in response) {
      if ("data" in response.error) {
        const errorData: any = response.error.data;
        setErrorMessage(errorData);
      }
    }

    if ("data" in response) {
      setErrorMessage({});
      dispatch(
        handleNotification({
          show: true,
          message: "Order saved successfully",
        })
      );
    }
  };

  React.useEffect(() => {
    if (data) {
      const initialDate = moment(data.delivery_date, 'YYYY-MM-DD').toDate();
      const updatedData = { ...data, delivery_date: initialDate };
      setUserData(updatedData);
    }
  }, [data]);
  
  React.useEffect(() => {
    if (access_token) {
      refetch();
    }
  }, [access_token, id, refetch]);

  if (!access_token || isLoading) {
    return (
      <Layout>
        <div className="w-full h-[70vh] flex items-center justify-center bg-black-gradient-2">
          <Oval
            height={30}
            width={30}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      </Layout>
    );
  }


  return (
    <Layout>
      <div className="bg-black-gradient-2 p-5">
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
                isUpdatingOrder ? (
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
    </Layout>
  );
}
