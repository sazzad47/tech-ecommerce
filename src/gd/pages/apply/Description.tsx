import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserData } from ".";
import { RadioGroup, RadioGroupItem } from "src/components/radio-group";
import VideoRecorder from "src/components/videoRecorder";

export default function Description({
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

  const { fixed_time, time_limit, donation_needed, written_description } =
    userData;

  const conditionalLabel = GenerateLabels({ userData });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState: UserData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setUserData((prevData: UserData) => ({ ...prevData, date_of_birth: date }));
    setErrorMessage((prevError: any) => ({ ...prevError, date_of_birth: "" }));
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <Box component="form" autoComplete="off" className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>{conditionalLabel}</label>
              <VideoRecorder
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                name="live_description"
              />
            </Grid>
            <Grid item xs={12} sm={time_limit === "No limit" ? 6 : 12}>
              <label className="block mb-3 text-sm font-semibold text-secondaryTheme">
                Time limit
              </label>
              <RadioGroup
                onValueChange={(value) => {
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    time_limit: value,
                  }));
                  setErrorMessage((prevErrors: any) => ({
                    ...prevErrors,
                    time_limit: "",
                  }));
                }}
                defaultValue={time_limit}
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No limit" id="time_limit" />
                  <label htmlFor="No limit">No limit</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Date" id="time_limit" />
                  <label htmlFor="Date">Set a date</label>
                </div>
              </RadioGroup>
              {errorMessage.time_limit && errorMessage.time_limit !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.time_limit}
                  </Typography>
                </Grid>
              )}
            </Grid>
            {time_limit === "Date" && (
              <Grid item xs={12} sm={6}>
                <label
                  htmlFor="date_of_birth"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Please set a date
                </label>
                <DatePicker
                  selected={fixed_time}
                  onChange={handleDateChange}
                  dateFormat="yyyy/MM/dd"
                  className="common-input w-full"
                  showIcon
                  wrapperClassName="common-input w-full"
                />
                {errorMessage.fixed_time && errorMessage.fixed_time !== "" && (
                  <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.fixed_time}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}
            <Grid item xs={12}>
              <InputField
                inputProps={{
                  type: "number",
                  name: "donation_needed",
                  id: "donation_needed",
                  label: "How much money do you need (in USD)",
                  value: donation_needed,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                inputProps={{
                  type: "text",
                  name: "written_description",
                  id: "written_description",
                  label: "Your requirements",
                  value: written_description,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
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

const GenerateLabels = ({ userData }: { userData: UserData }) => {
  switch (userData.category) {
    case "Medical":
      return "Bring up the problem live (Sick Person/Applicant/Other)";
    case "Education":
      return "Present feedback live (Students/Applicant/Other)";
    case "Natural Disaster":
      return "Attendance Response Live (Aggrieved/Applicant /Other)";
    case "Animals":
      return "Present feedback live (Animal owner/Applicant/Other)";
    case "Employment":
      return "Attendance Response Live (Employment/Applicant/Other)";
    case "Sports":
      return "Attendance Feedback Live (Player/Applicant/Other)";
    default:
      return null;
  }
};
