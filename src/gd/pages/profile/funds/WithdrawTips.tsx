import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ErrorIcon from "@mui/icons-material/Error";
import { useGetProfileQuery } from "../../../../state/api/user";
import { useCreateTipsWithdrawalRequestMutation } from "../../../../state/api/gd";
import { ColorRing, Oval } from "react-loader-spinner";
import { RootState } from "../../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { handleNotification } from "../../../../state/slices/common/auth";
import "react-phone-input-2/lib/style.css";
import Layout from "../Layout";
import { validateFields } from "./Validate";

export type UserData = {
  amount: number | null;
  account_number: number | null;
  bank_name: string;
  routing_number: string;
  other_information: string;
  [key: string]: string | number | null;
};

export default function WithdrawTips() {
  const { access_token } = useSelector((state: RootState) => state.auth);

  const [
    createTipsWithdrawalRequest,
    { isLoading: isCreatingDonationWithdrawalRequest },
  ] = useCreateTipsWithdrawalRequestMutation();

  const { data, isLoading: isFetchingProfile } = useGetProfileQuery({
    access_token,
  });

  const dispatch = useDispatch();

  const initState: UserData = {
    amount: null,
    account_number: null,
    bank_name: "",
    routing_number: "",
    other_information: "",
  };

  const [userData, setUserData] = useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = useState<any>({});

  const {
    amount,
    account_number,
    bank_name,
    routing_number,
    other_information,
  } = userData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const errMsg = validateFields(userData);

    if (Object.keys(errMsg).length > 0) return setErrorMessage(errMsg);

    const response = await createTipsWithdrawalRequest({
      userData,
      access_token,
    });
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
          message: "Request submitted successfully",
        })
      );
      setUserData(initState)
    }
  };

  useEffect(() => {
    if (data && amount) {
      if (
        parseFloat(data.tips) + parseFloat(data.pending_withdrawal_tips) <
        amount
      ) {
        setErrorMessage((prevErr: any) => ({
          ...prevErr,
          amount: "Insufficient balance",
        }));
      } else if (amount) {
        setErrorMessage((prevErr: any) => ({ ...prevErr, amount: "" }));
      }
    }
  }, [data, amount]);

  return (
    <Layout>
      <div className="w-full flex items-center justify-center">
        {isFetchingProfile ? (
          <div className="w-full h-[70vh] flex items-center justify-center">
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
        ) : (
          <div className="flex flex-col items-center w-full bg-black-gradient-2 p-5">
            {errorMessage.non_field_errors && (
              <Grid className="w-full p-4 my-4 bg-zinc-500 flex flex-col gap-3">
                <Grid className="flex items-center gap-2">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.non_field_errors}
                  </Typography>
                </Grid>
              </Grid>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              autoComplete="off"
              className="w-full"
            >
              <div className="mb-5 flex justify-center items-center text-2xl">
                Withdraw Tips
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputField
                    inputProps={{
                      type: "number",
                      name: "amount",
                      id: "amount",
                      label: "Enter your withdraw amount",
                      value: amount,
                      onChange: handleChange,
                      setErrorMessage: setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    inputProps={{
                      type: "number",
                      name: "account_number",
                      id: "account_number",
                      label: "Enter your account number",
                      value: account_number,
                      onChange: handleChange,
                      setErrorMessage: setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    inputProps={{
                      type: "text",
                      name: "bank_name",
                      id: "bank_name",
                      label: "Enter your bank name",
                      value: bank_name,
                      onChange: handleChange,
                      setErrorMessage: setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    inputProps={{
                      type: "text",
                      name: "routing_number",
                      id: "routing_number",
                      label: "Enter your bank routing number",
                      value: routing_number,
                      onChange: handleChange,
                      setErrorMessage: setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    inputProps={{
                      type: "textarea",
                      multiline: true,
                      minRows: 3,
                      name: "other_information",
                      id: "other_information",
                      label: "Other Information",
                      value: other_information,
                      onChange: handleChange,
                      setErrorMessage: setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={handleSubmit}
              >
                {isCreatingDonationWithdrawalRequest ? (
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
            </Box>
          </div>
        )}
      </div>
    </Layout>
  );
}

interface Props {
  inputProps: {
    type: string;
    name: string;
    id: string;
    label: string;
    value?: string | number | null;
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
