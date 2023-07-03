import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { ColorRing } from "react-loader-spinner";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../../../components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/popover";
import { currencies } from "src/gd/constants";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useCreateDonationSessionMutation } from "src/state/api/gd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

export type UserData = {
  currency: string;
  donation_amount: number | null;
  tips_amount: number | null;
  is_hidden: boolean;
  [key: string]: string | number | boolean | null;
};

const initState: UserData = {
  currency: "usd",
  donation_amount: null,
  tips_amount: null,
  is_hidden: false,
};

const suggestedDonations = [{ amount: 20 }, { amount: 30 }, { amount: 40 }];

export default function Form() {
  const params = useParams();
  const { id } = params;
  const { access_token } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = React.useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = React.useState<any>({});
  const [open, setOpen] = React.useState(false);
  const [conversionRate, setConversionRate] = useState<number>(1);

  const { currency, donation_amount, tips_amount, is_hidden } = userData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState: UserData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [customizeDonationField, setCustomizeDonationField] =
    useState<boolean>(false);
  const [customizeTipsField, setCustomizeTipsField] = useState<boolean>(false);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch conversion rate");
        }
        const data = await response.json();
        const rate = data["usd"];
        setConversionRate(rate[currency]);
        console.log("resonse", rate["bdt"]);
      } catch (error: any) {
        console.error("Error fetching conversion rate:", error.message);
      }
    };

    fetchConversionRate();
  }, [currency]);

  const [createDonationSession, { isLoading }] =
    useCreateDonationSessionMutation();

  const createDonation = async () => {
    const response = await createDonationSession({
      userData,
      id,
      access_token,
    });
    if ("data" in response) {
      window.location.href = response.data.checkout_url;
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <Box component="form" autoComplete="off" className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label
                htmlFor="firstName"
                className="block mb-3 text-sm font-semibold text-secondaryTheme"
              >
                Currency
              </label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    role="combobox"
                    aria-controls="currencyList"
                    aria-expanded={open}
                    className="combobox-input flex items-center justify-between px-3 py-2"
                  >
                    {currency ? currency : "Select currency..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search currency..." />
                    <CommandEmpty>No currency found.</CommandEmpty>
                    <CommandGroup id="currencyList">
                      {currencies.map((currencyName) => (
                        <CommandItem
                          key={currencyName}
                          onSelect={(currentValue) => {
                            setUserData((prevData: UserData) => ({
                              ...prevData,
                              currency: currentValue,
                            }));
                            setOpen(false);
                            setErrorMessage((prevErrors: any) => ({
                              ...prevErrors,
                              currency: "",
                            }));
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              currency === currencyName
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {currencyName}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              {errorMessage.currency && errorMessage.currency !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.currency}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12}>
              <label
                htmlFor="amount"
                className="block mb-3 text-sm font-semibold text-secondaryTheme"
              >
                Suggested amount
              </label>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
                {suggestedDonations.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setUserData((prevData) => ({
                        ...prevData,
                        donation_amount: item.amount,
                      }));
                      setCustomizeDonationField(false);
                    }}
                    className={`common-input ${
                      donation_amount === item.amount ? "active" : ""
                    } cursor-pointer flex items-center justify-center`}
                  >
                    {`${(item.amount * conversionRate).toFixed(
                      2
                    )} ${currency.toUpperCase()}`}
                  </div>
                ))}
                <div
                  onClick={() => {
                    setUserData((prevData) => ({
                      ...prevData,
                      donation_amount: null,
                    }));
                    setCustomizeDonationField(true);
                  }}
                  className="common-input cursor-pointer flex items-center justify-center"
                >
                  Customise
                </div>
              </div>
            </Grid>
            {customizeDonationField && (
              <Grid item xs={12}>
                <InputField
                  inputProps={{
                    type: "number",
                    name: "donation_amount",
                    id: "donation_amount",
                    label: "Enter donation amount",
                    value: donation_amount,
                    onChange: handleChange,
                    setErrorMessage: setErrorMessage,
                    errorMessages: errorMessage,
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <label
                htmlFor="amount"
                className="block mb-3 text-sm font-semibold text-secondaryTheme"
              >
                Suggested tips
              </label>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
                {suggestedDonations.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setUserData((prevData) => ({
                        ...prevData,
                        tips_amount: item.amount,
                      }));
                      setCustomizeTipsField(false);
                    }}
                    className={`common-input ${
                      tips_amount === item.amount ? "active" : ""
                    } cursor-pointer flex items-center justify-center`}
                  >
                    {`${(item.amount * conversionRate).toFixed(
                      2
                    )} ${currency.toUpperCase()}`}
                  </div>
                ))}
                <div
                  onClick={() => {
                    setUserData((prevData) => ({
                      ...prevData,
                      tips_amount: null,
                    }));
                    setCustomizeTipsField(true);
                  }}
                  className="common-input cursor-pointer flex items-center justify-center"
                >
                  Customise
                </div>
              </div>
            </Grid>
            {customizeTipsField && (
              <Grid item xs={12}>
                <InputField
                  inputProps={{
                    type: "number",
                    name: "tips_amount",
                    id: "tips_amount",
                    label: "Enter tips amount",
                    value: tips_amount,
                    onChange: handleChange,
                    setErrorMessage: setErrorMessage,
                    errorMessages: errorMessage,
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <FormControlLabel
                className="text-secondaryTheme"
                control={
                  <Checkbox
                    checked={is_hidden}
                    onChange={() =>
                      setUserData((prevData) => ({
                        ...prevData,
                        is_hidden: !is_hidden,
                      }))
                    }
                    sx={{
                      color: "rgb(120 113 108)",
                      "&.Mui-checked": {
                        color: "rgb(120 113 108)",
                      },
                    }}
                  />
                }
                label="I want to hide my donation"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={createDonation}
                variant="contained"
                className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
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
                  "Continue"
                )}
              </Button>
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
    value: number | null;
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
