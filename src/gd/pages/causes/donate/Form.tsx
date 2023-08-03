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
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { useParams } from "react-router-dom";

export type UserData = {
  currency: string;
  donation_amount: number | null;
  company_tips_amount: number | null;
  volunteer_tips_amount: number | null;
  comment: string;
  is_hidden: boolean;
  [key: string]: string | number | boolean | null;
};

type DataProps = {
  suggested_donations: any[];
  suggested_company_tips: any[];
  suggested_volunteer_tips: any[];
};

const initState: UserData = {
  currency: "usd",
  donation_amount: null,
  company_tips_amount: null,
  volunteer_tips_amount: null,
  comment: "",
  is_hidden: false,
};

export default function Form({ data }: { data: DataProps }) {
  const suggestedDonations = data.suggested_donations;
  const suggestedCompanyTips = data.suggested_company_tips;
  const suggestedVolunteerTips = data.suggested_volunteer_tips;
  const params = useParams();
  const { id } = params;
  const { access_token } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = React.useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = React.useState<any>({});
  const [open, setOpen] = React.useState(false);
  const [conversionRate, setConversionRate] = useState<number>(1);

  const { currency, donation_amount, company_tips_amount, volunteer_tips_amount, comment, is_hidden } = userData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState: UserData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [customizeDonationField, setCustomizeDonationField] =
    useState<boolean>(false);
  const [customizeCompanyTipsField, setCustomizeCompanyTipsField] = useState<boolean>(false);
  const [customizeVolunteerTipsField, setCustomizeVolunteerTipsField] = useState<boolean>(false);

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

  const [createDonationSession, { isLoading: sessionLoading }] =
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
 console.log('userData', userData)
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <Box component="form" autoComplete="off" className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label
                htmlFor="firstName"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Currency
              </label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    role="combobox"
                    aria-controls="currencyList"
                    aria-expanded={open}
                    className="combobox-input-it flex items-center justify-between px-3 py-2"
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
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
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
                className="block mb-3 text-sm font-semibold text-gray-800"
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
                        donation_amount: parseFloat((item.amount * conversionRate).toFixed(2)),
                      }));
                      setCustomizeDonationField(false);
                    }}
                    className={`common-input-it ${
                      donation_amount === parseFloat((item.amount * conversionRate).toFixed(2)) ? "active" : ""
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
                  className="common-input-it cursor-pointer flex items-center justify-center"
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
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Suggested tips for company
              </label>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
                {suggestedCompanyTips.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setUserData((prevData) => ({
                        ...prevData,
                        company_tips_amount: parseFloat((item.amount * conversionRate).toFixed(2)),
                      }));
                      setCustomizeCompanyTipsField(false);
                    }}
                    className={`common-input-it ${
                      company_tips_amount === parseFloat((item.amount * conversionRate).toFixed(2)) ? "active" : ""
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
                      company_tips_amount: null,
                    }));
                  setCustomizeCompanyTipsField(true);
                  }}
                  className="common-input-it cursor-pointer flex items-center justify-center"
                >
                  Customise
                </div>
              </div>
            </Grid>
            {customizeCompanyTipsField && (
              <Grid item xs={12}>
                <InputField
                  inputProps={{
                    type: "number",
                    name: "company_tips_amount",
                    id: "company_tips_amount",
                    label: "Enter tips amount",
                    value: company_tips_amount,
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
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Suggested tips for volunteer
              </label>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
                {suggestedVolunteerTips.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setUserData((prevData) => ({
                        ...prevData,
                        volunteer_tips_amount: parseFloat((item.amount * conversionRate).toFixed(2)),
                      }));
                      setCustomizeVolunteerTipsField(false);
                    }}
                    className={`common-input-it ${
                      volunteer_tips_amount === parseFloat((item.amount * conversionRate).toFixed(2)) ? "active" : ""
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
                      volunteer_tips_amount: null,
                    }));
                  setCustomizeVolunteerTipsField(true);
                  }}
                  className="common-input-it cursor-pointer flex items-center justify-center"
                >
                  Customise
                </div>
              </div>
            </Grid>
            {customizeVolunteerTipsField && (
              <Grid item xs={12}>
                <InputField
                  inputProps={{
                    type: "number",
                    name: "volunteer_tips_amount",
                    id: "volunteer_tips_amount",
                    label: "Enter tips amount",
                    value: volunteer_tips_amount,
                    onChange: handleChange,
                    setErrorMessage: setErrorMessage,
                    errorMessages: errorMessage,
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <InputField
                inputProps={{
                  type: "text",
                  multiline: true,
                  minRows: 3,
                  name: "comment",
                  id: "comment",
                  label: "Comment",
                  value: comment,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className="text-gray-800"
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
                disabled={!donation_amount}
                onClick={createDonation}
                variant="contained"
                className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
              >
                {sessionLoading ? (
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
    value: number | string | null;
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
        className="block mb-3 text-sm font-semibold text-gray-800"
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
            color: "#4b5563",
          },
          "& label.Mui-focused": {
            color: "#4b5563",
          },
          "& .MuiOutlinedInput-root": {
            color: "#4b5563",
            "& fieldset": {
              color: "#4b5563",
              borderColor: "rgb(120 113 108)",
            },
            "&:hover fieldset": {
              borderColor: "rgb(168 162 158)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4b5563",
            },
          },
        }}
      />
      {errorMessages[name] && errorMessages[name] !== "" && (
        <Grid className="flex items-center mt-2 gap-2 text-gray-800">
          <ErrorIcon />
          <Typography className="p-0 text-sm">{errorMessages[name]}</Typography>
        </Grid>
      )}
    </div>
  );
};
