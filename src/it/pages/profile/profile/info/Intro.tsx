import {
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EditIcon from "@mui/icons-material/Edit";
import ErrorIcon from "@mui/icons-material/Error";

const Intro = () => {
  return (
    <Grid className="w-full">
      <GeneralInfo />
    </Grid>
  );
};

const GeneralInfo = () => {
 
  const [inputForm, setInputForm] = useState<boolean>(false);
  const initState = { placeOfBirth: "", dateOfBirth: "", currentLocation: "" };
  const [userData, setUserData] = useState<{
    placeOfBirth: string;
    dateOfBirth: string;
    currentLocation: string;
  }>(initState);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [focused, setFocused] = useState<boolean>(false);

  const handleSubmit = async () => {
    
    setInputForm(false);
  };

  useMemo(() => {
    if (!focused && !inputForm) {
      setErrorMessage(["Please add your general information."]);
    } else if (focused) {
      setErrorMessage([]);
    }
  }, [focused, inputForm]);

  return (
    <Grid>
      <Grid className="flex gap-3 items-center mb-2">
        <PermIdentityIcon />
        <Typography className="p-0 font-bold">General information</Typography>
        {!inputForm && (
          <Tooltip title="Edit">
            <IconButton
              onClick={() => setInputForm(true)}
              disableRipple
              className="text-inherit flex justify-start p-0 focus:outline-none normal-case"
            >
              <EditIcon className="p-0 mr-2" />
            </IconButton>
          </Tooltip>
        )}
      </Grid>
      {errorMessage.length !== 0 && (
        <Grid className="w-full md:w-[20rem] p-4 my-4 bg-zinc-500 flex flex-col gap-3">
          {errorMessage.map((error, i) => (
            <Grid key={i} className="flex items-center gap-2">
              <ErrorIcon />
              <Typography className="p-0 text-sm">{error}</Typography>
            </Grid>
          ))}
        </Grid>
      )}
      {inputForm ? (
        <Form
          setInputForm={setInputForm}
          data={userData}
          setData={setUserData}
          setFocused={setFocused}
          handleSubmit={handleSubmit}
         
        />
      ) : (
        <Grid className="flex flex-col gap-2">
          {/* <Grid className="w-full md:w-[20rem] flex flex-col gap-5">
            
              <Grid className="w-full flex items-start">
                <Grid className="w-[40%]">
                  <Typography className="p-0">Date of Birth</Typography>
                </Grid>
                <Grid className="w-[60%] flex flex-col gap-2">
                  <Typography className="p-0 font-bold">
                    2-2-1998
                  </Typography>
                </Grid>
              </Grid>
      
            
              <Grid className="w-full flex items-start">
                <Grid className="w-[40%]">
                  <Typography className="p-0">Place of Birth</Typography>
                </Grid>
                <Grid className="w-[60%] flex flex-col gap-2">
                  <Typography className="p-0 font-bold">
                    Nilphamari
                  </Typography>
                </Grid>
              </Grid>
          
          
              <Grid className="w-full flex items-start">
                <Grid className="w-[40%]">
                  <Typography className="p-0">Current Location</Typography>
                </Grid>
                <Grid className="w-[60%] flex flex-col gap-2">
                  <Typography className="p-0 font-bold">
                    Dhaka
                  </Typography>
                </Grid>
              </Grid>
          </Grid> */}
        </Grid>
      )}
    </Grid>
  );
};

const Form = ({
  setInputForm,
  data,
  setData,
  setFocused,
  handleSubmit,
}: {
  setInputForm: Function;
  data: { placeOfBirth: string; dateOfBirth: string; currentLocation: string };
  setData: Function;
  setFocused: Function;
  handleSubmit: Function;
}) => {


  
  return (
    <Grid className="">
      <form>
        <Grid className="flex flex-col w-full gap-2">
          <CustomTextField
            inputProps={{
              autoFocus: true,
              multiline: true,
              type: "text",
              name: "placeOfBirth",
              id: "placeOfBirth",
              label: "Place of birth",
              value: data.placeOfBirth,
              onChange: (e) =>
                setData({ ...data, placeOfBirth: e.target.value }),
              setFocused: setFocused,
            }}
          />
          <CustomTextField
            inputProps={{
              multiline: true,
              type: "text",
              name: "dateOfBirth",
              id: "dateOfBirth",
              label: "Date of birth",
              value: data.dateOfBirth,
              onChange: (e) =>
                setData({ ...data, dateOfBirth: e.target.value }),
              setFocused: setFocused,
            }}
          />
          <CustomTextField
            inputProps={{
              multiline: true,
              type: "text",
              name: "currentLocation",
              id: "currentLocation",
              label: "Current Location",
              value: data.currentLocation,
              onChange: (e) =>
                setData({ ...data, currentLocation: e.target.value }),
              setFocused: setFocused,
            }}
          />

          <Grid className="w-full md:w-[20rem] flex justify-end ">
            <Grid className="flex gap-5">
              <Button
                onClick={() => {
                  setInputForm(false);
                  setData("");
                }}
                className="w-[5rem] normal-case text-slate-200 bg-zinc-500 hover:bg-zinc-600"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleSubmit()}
                disabled={!data}
                variant="contained"
                className="w-[5rem] normal-case text-slate-200 bg-green-700 hover:bg-green-800"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

interface Props {
  inputProps: {
    multiline?: boolean;
    autoFocus?: boolean;
    minRows?: number | string;
    type: string;
    name: string;
    id: string;
    label: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setFocused: Function;
  };
}
const CustomTextField = ({ inputProps }: Props) => {
  const {
    multiline,
    autoFocus,
    minRows,
    type,
    name,
    id,
    label,
    value,
    onChange,
    setFocused,
  } = inputProps;

  return (
    <TextField
      multiline={multiline}
      minRows={minRows}
      type={type}
      name={name}
      value={value}
      required
      fullWidth
      id={id}
      label={label}
      onChange={onChange}
      autoFocus={autoFocus}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      sx={{
        label: {
          color: "rgb(214 211 209)",
        },
        "& label.Mui-focused": {
          color:
            "rgb(214 211 209)",
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
            borderColor:
              "rgb(214 211 209)",
          },
        },
      }}
      className="w-full md:w-[20rem]"
    />
  );
};

export default Intro;
