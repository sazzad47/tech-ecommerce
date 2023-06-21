import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import Background from "../Background";
import logo from "../../it/images/logo.png";
import authBg from "../../it/images/auth-bg.png";
import { useActivateAccountMutation } from "../../state/api/user";
import { storeToken } from "../../state/localStorage";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setUserToken } from "../../state/slices/common/auth";
import { Link } from "react-router-dom";

export default function ActivateAccount() {
  const [activateAccount, { isLoading }] = useActivateAccountMutation();

  const dispatch = useDispatch();
  const { access_token } = useSelector((state: RootState) => state.auth);

  interface UserData {
    otp: number | undefined;
  }

  const initState: UserData = {
    otp: undefined,
  };

  const [userData, setUserData] = useState<UserData>(initState);
  const { otp } = userData;

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await activateAccount(userData);
    if ("error" in response) {
      if ("data" in response.error) {
        const errorData: any = response.error.data;
        if ("message" in errorData) {
          setErrorMessage(errorData.message);
        }
      }
    }
    
    if ("data" in response) {
      dispatch(
        setUserToken({
          access_token: response.data.token.access,
        })
      );
      storeToken(response.data.token);
    }
  };

  return (
    <div className="p-5 flex justify-center items-center w-full h-screen">
      <Background />
      <img src={authBg} alt="auth" className="absolute w-full h-full" />
      <div className="z-10 bg-black-gradient-2 w-full sm:w-[30rem] p-5 flex items-center justify-center">
        <div className="flex flex-col items-center w-full">
          <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
          <Typography
            component="h1"
            variant="h5"
            className="text-secondaryTheme mt-4"
          >
            {access_token
              ? "Account Activated Successfully"
              : "Verify Your Email"}
          </Typography>
          <Grid className="w-full p-4 mt-4 bg-zinc-500 flex flex-col gap-3">
            <Grid className="flex items-center gap-2">
              <Typography className="p-0 text-sm text-secondaryTheme">
                {access_token
                  ? "Thank you for your registration. You can now access all the features of our website."
                  : "Please enter the 6-digit code we sent to your email address."}
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
            {access_token ? null : (
              <div>
                <InputField
                  inputProps={{
                    type: "otp",
                    name: "otp",
                    id: "otp",
                    label: "OTP",
                    value: otp,
                    onChange: handleChange,
                    setErrorMessage: setErrorMessage,
                  }}
                />
                {errorMessage && (
                  <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage}
                    </Typography>
                  </Grid>
                )}
              </div>
            )}
            {access_token ? (
              <Link to="/it">
                <Button
                  className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2 }}
                >
                  Go to Home
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
                  "Verify"
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
  };
}

const InputField = ({ inputProps }: Props) => {
  const { type, name, id, label, value, onChange, setErrorMessage } =
    inputProps;

  return (
    <TextField
      type={type}
      name={name}
      value={value}
      required
      fullWidth
      id={id}
      label={label}
      onChange={onChange}
      onFocus={() => setErrorMessage("")}
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
  );
};
