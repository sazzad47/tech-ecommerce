import { UserData } from "..";
import Animals from "./Animals";
import Education from "./Education";
import Employment from "./Employment";
import Medical from "./Medical";
import NaturalDisaster from "./NaturalDisaster";
import Sports from "./Sports";

const Credentials = ({
  userData,
  setUserData,
  errorMessage,
  setErrorMessage,
}: {
  userData: UserData;
  setUserData: Function;
  errorMessage: any;
  setErrorMessage: React.Dispatch<React.SetStateAction<any>>;
}) => {
  switch (userData.category) {
    case "Medical":
      return (
        <Medical
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      );
    case "Education":
      return (
        <Education
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      );
    case "Natural Disaster":
      return (
        <NaturalDisaster
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      );
    case "Animals":
      return (
        <Animals
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      );
    case "Employment":
      return (
        <Employment
          userData={userData}
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      );
    case "Sports":
      return (
        <Sports
          setUserData={setUserData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      );
    default:
      return null;
  }
};

export default Credentials
