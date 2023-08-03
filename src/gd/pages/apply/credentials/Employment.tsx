import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { UserData } from "..";
import FileUploader from "src/components/fileUploader";
import ImageUploader from "src/components/imageUplaoder";

export default function Employment({
  userData,
  setUserData,
  errorMessage,
  setErrorMessage,
}: {
  userData: UserData;
  setUserData: Function;
  errorMessage: any;
  setErrorMessage: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { name_of_employment } = userData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState: UserData) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <Box component="form" autoComplete="off" className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FileUploader
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Birth certificate/ NID / Passport/ Driving licence"
                name="identification_card"
                accept="application/pdf"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                inputProps={{
                  type: "text",
                  name: "name_of_employment",
                  id: "name_of_employment",
                  label: "Name of employment",
                  value: name_of_employment,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FileUploader
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Provide written certificate from local city council for employment person"
                name="certificate_from_city_council"
                accept="application/pdf"
              />
            </Grid>
            <Grid item xs={12}>
              <ImageUploader
                userData={userData}
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Employment picture"
                name="credential_photos"
              />
            </Grid>
            <Grid item xs={12}>
              <FileUploader
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Other documents"
                name="other_documents"
                accept="application/pdf"
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

interface Props {
  inputProps: {
    type: string;
    name: string;
    id: string;
    label: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setErrorMessage: React.Dispatch<React.SetStateAction<any>>;
    errorMessages: any;
    multiline?: boolean;
    minRows?: number;
  };
}

const InputField = ({ inputProps }: Props) => {
  const {
    type,
    name,
    id,
    label,
    value,
    onChange,
    setErrorMessage,
    multiline,
    minRows,
  } = inputProps;

  const errorMessages = inputProps.errorMessages || {};

  return (
    <div>
      <label
        htmlFor="firstName"
        className="block mb-3 text-sm font-semibold text-secondaryTheme"
      >
        {label}
      </label>
      <TextField
        multiline={multiline}
        minRows={minRows}
        type={type}
        name={name}
        value={value}
        required
        fullWidth
        id={id}
        onChange={onChange}
        onFocus={() =>
          setErrorMessage((prevErrors: any) => ({
            ...prevErrors,
            [name]: "",
          }))
        }
        sx={{
          label: {
            color: "rgb(214 211 209)",
          },
          "& label.Mui-focused": {
            color: "rgb(214 211 209)",
          },
          "& .MuiOutlinedInput-root": {
            color: "white",
            "& fieldset": {
              color: "white",
              borderColor: "rgb(120 113 108)",
            },
            "&:hover fieldset": {
              borderColor: "rgb(168 162 158)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgb(214 211 209)",
            },
          },
        }}
      />
      {errorMessages[name] && errorMessages[name] !== "" && (
        <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
          <ErrorIcon />
          <Typography className="p-0 text-sm">{errorMessages[name]}</Typography>
        </Grid>
      )}
    </div>
  );
};
