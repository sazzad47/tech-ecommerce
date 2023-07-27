import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import Background from "../Background";
import logo from "../../it/images/logo.png";
// import authBg from "../../it/images/auth-bg.png";
import { useResetPasswordMutation } from "../../state/api/user";
import { ColorRing } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";

export default function ResetPasswordPage() {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const { id, token } = useParams();
  

  interface UserData {
    password: string;
    password2: string;
  }

  const initState: UserData = {
    password: "",
    password2: "",
  };

  const [userData, setUserData] = useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = useState<any>({});
  const [success, setSuccess] = useState<boolean>(false);

  const { password, password2 } = userData;


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await resetPassword({ userData, id, token });
    if ("error" in response) {
      if ("data" in response.error) {
        const errorData: any = response.error.data;
        if ("errors" in errorData) {
          setErrorMessage(errorData.errors);
        }
      }
    }
   
    if ("data" in response) {
      setSuccess(true);
    }
  };


  return (
    <div className="p-5 flex justify-center items-center w-full h-screen">
      <Background />
      {/* <img src={authBg} alt="auth" className="absolute w-full h-full" /> */}
      <div className="z-10 bg-black-gradient-2 w-full sm:w-[30rem] p-5 flex items-center justify-center">
        <div className="flex flex-col items-center w-full">
          <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
          <Typography
            component="h1"
            variant="h5"
            className="text-secondaryTheme mt-4"
          >
            {success
              ? "Password Reset Successfully"
              : "Reset your password"}
          </Typography>
          {errorMessage.non_field_errors && (
            <Grid className="w-full p-4 mt-4 bg-stone-400 dark:bg-zinc-500 flex flex-col gap-3">
              <Grid className="flex items-center gap-2">
                <ErrorIcon />
                <Typography className="p-0 text-sm">
                  {errorMessage.non_field_errors}
                </Typography>
              </Grid>
            </Grid>
          )}
          <Grid className="w-full p-4 mt-4 bg-zinc-500 flex flex-col gap-3">
            <Grid className="flex items-center gap-2">
              <Typography className="p-0 text-sm text-secondaryTheme">
                {success
                  ? "Your password has been reset successfully. You can now login with your new password."
                  : "Please create a new password for your account."}
              </Typography>
            </Grid>
          </Grid>
          <Box
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
            sx={{ mt: 3 }}
            className="w-full"
          >
            {success ? null : (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputField
                    inputProps={{
                      type: "password",
                      name: "password",
                      id: "password",
                      label: "New Password",
                      value: password,
                      onChange: handleChange,
                      setErrorMessage: setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    inputProps={{
                      type: "password",
                      name: "password2",
                      id: "password2",
                      label: "Confirm your password",
                      value: password2,
                      onChange: handleChange,
                      setErrorMessage: setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                </Grid>
              </Grid>
            )}
            {success ? (
              <Link to="/login">
                <Button
                  className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2 }}
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                {isLoading ? (
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
                )}
              </Button>
            )}
          </Box>
        </div>
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
  };
}

const InputField = ({ inputProps }: Props) => {
  const { type, name, id, label, value, onChange, setErrorMessage } =
    inputProps;

  const errorMessages = inputProps.errorMessages || {};

  return (
    <div>
      <TextField
        type={type}
        name={name}
        value={value}
        required
        fullWidth
        id={id}
        label={label}
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
