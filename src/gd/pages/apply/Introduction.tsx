import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import PhoneInput from "react-phone-input-2";
import { countries } from "countries-list";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../../components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/popover";
import { UserData } from ".";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/select";
import {
  applyForOptions,
  bloodGroupOptions,
  maritalStatusOptions,
  modeOptions,
} from "src/gd/constants";
import { categories } from "./categories";
import { RadioGroup, RadioGroupItem } from "src/components/radio-group";

export default function BillingAddress({
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
  const [open, setOpen] = React.useState(false);

  const getAllCountries = () => {
    const countryNames = Object.values(countries).map(
      (country) => country.name
    );
    return countryNames;
  };

  const countryArray = getAllCountries();

  const {
    first_name,
    last_name,
    fathers_name,
    mothers_name,
    country,
    province,
    city,
    zip,
    address,
    marital_status,
    specific_marital_status,
    date_of_birth,
    sex,
    specific_sex,
    blood_group,
    occupation,
    email,
    phone,
  } = userData;

  const applyForChoices = applyForOptions.map((item, index) => (
    <SelectItem key={index} value={item.value || ""}>
      {item.title}
    </SelectItem>
  ));


  const modeChoices = modeOptions.map((item, index) => (
    <SelectItem key={index} value={item.title || ""}>
      {item.title}
    </SelectItem>
  ));

  const categoryOptions = categories.map((item, index) => (
    <SelectItem key={index} value={item.title || ""}>
      {item.title}
    </SelectItem>
  ));

  const maritalStatusChoices = maritalStatusOptions.map((item, index) => (
    <SelectItem key={index} value={item.value || ""}>
      {item.title}
    </SelectItem>
  ));

  const bloodGroupChoices = bloodGroupOptions.map((item, index) => (
    <SelectItem key={index} value={item.value || ""}>
      {item.title}
    </SelectItem>
  ));

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
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="application_for"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Whom are you applying for?
              </label>
              <Select
                onValueChange={(value) => {
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    application_for: value,
                  }));
                  setErrorMessage((prevErrors: any) => ({
                    ...prevErrors,
                    application_for: "",
                  }));
                }}
              >
                <SelectTrigger className="common-input-it">
                  <SelectValue placeholder="Apply for" />
                </SelectTrigger>
                <SelectContent>{applyForChoices}</SelectContent>
              </Select>
              {errorMessage.application_for &&
                errorMessage.application_for !== "" && (
                  <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.application_for}
                    </Typography>
                  </Grid>
                )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="mode"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                In which mode do you want to apply?
              </label>
              <Select
                onValueChange={(value) => {
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    mode: value,
                  }));
                  setErrorMessage((prevErrors: any) => ({
                    ...prevErrors,
                    mode: "",
                  }));
                }}
              >
                <SelectTrigger className="common-input-it">
                  <SelectValue placeholder="Mode" />
                </SelectTrigger>
                <SelectContent>{modeChoices}</SelectContent>
              </Select>
              {errorMessage.mode && errorMessage.mode !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.mode}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12}>
              <label
                htmlFor="category"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Select category
              </label>
              <Select
                onValueChange={(value) =>
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    category: value,
                  }))
                }
              >
                <SelectTrigger className="common-input-it">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>{categoryOptions}</SelectContent>
              </Select>
              {errorMessage.category && errorMessage.category !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.category}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                inputProps={{
                  type: "first_name",
                  name: "first_name",
                  id: "first_name",
                  label: "First Name",
                  value: first_name,
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
                  name: "last_name",
                  id: "last_name",
                  label: "Last Name",
                  value: last_name,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                inputProps={{
                  type: "fathers_name",
                  name: "fathers_name",
                  id: "fathers_name",
                  label: "Fathers Name",
                  value: fathers_name,
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
                  name: "mothers_name",
                  id: "mothers_name",
                  label: "Mothers Name",
                  value: mothers_name,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                inputProps={{
                  type: "email",
                  name: "email",
                  id: "email",
                  label: "Email",
                  value: email,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="phone"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Phone
              </label>
              <PhoneInput
                country={"us"}
                inputClass="common-input-it"
                dropdownClass="phone-input-dropdown"
                enableSearch={true}
                value={phone}
                onFocus={() =>
                  setErrorMessage((prevErrors: any) => ({
                    ...prevErrors,
                    phone: "",
                  }))
                }
                onChange={(phone) =>
                  setUserData((prevData: UserData) => ({ ...prevData, phone }))
                }
              />
              {errorMessage.phone && errorMessage.phone !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.phone}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="country"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Country
              </label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    role="combobox"
                    aria-controls="countryList"
                    aria-expanded={open}
                    className="combobox-input-it flex items-center justify-between px-3 py-2"
                  >
                    {country ? country : "Select country..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup id="countryList">
                      {countryArray.map((countryName) => (
                        <CommandItem
                          key={countryName}
                          onSelect={(currentValue) => {
                            setUserData((prevData: UserData) => ({
                              ...prevData,
                              country: currentValue,
                            }));
                            setOpen(false);
                            setErrorMessage((prevErrors: any) => ({
                              ...prevErrors,
                              country: "",
                            }));
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              country === countryName
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {countryName}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              {errorMessage.country && errorMessage.country !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.country}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                inputProps={{
                  type: "text",
                  name: "province",
                  id: "province",
                  label: "State/Province",
                  value: province,
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
                  name: "city",
                  id: "city",
                  label: "City",
                  value: city,
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
                  name: "zip",
                  id: "zip",
                  label: "Zip Code",
                  value: zip,
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
                  name: "address",
                  id: "address",
                  label: "Address",
                  value: address,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={marital_status === "Other" ? 6 : 12}>
              <label
                htmlFor="application_for"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Marital Status
              </label>
              <Select
                value={marital_status}
                onValueChange={(value) => {
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    marital_status: value,
                  }));
                  setErrorMessage((prevErrors: any) => ({
                    ...prevErrors,
                    marital_status: "",
                  }));
                }}
              >
                <SelectTrigger className="common-input-it">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>{maritalStatusChoices}</SelectContent>
              </Select>
              {errorMessage.marital_status &&
                errorMessage.marital_status !== "" && (
                  <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.marital_status}
                    </Typography>
                  </Grid>
                )}
            </Grid>
            {marital_status === "Other" && (
              <Grid item xs={12} sm={6}>
                <InputField
                  inputProps={{
                    type: "text",
                    name: "specific_marital_status",
                    id: "specific_marital_status",
                    label: "Please specify your marital status",
                    value: specific_marital_status,
                    onChange: handleChange,
                    setErrorMessage: setErrorMessage,
                    errorMessages: errorMessage,
                  }}
                />
                {errorMessage.specific_marital_status &&
                  errorMessage.specific_marital_status !== "" && (
                    <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                      <ErrorIcon />
                      <Typography className="p-0 text-sm">
                        {errorMessage.specific_marital_status}
                      </Typography>
                    </Grid>
                  )}
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="date_of_birth"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Date of birth
              </label>
              <DatePicker
                selected={date_of_birth}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className="common-input-it w-full"
                showIcon
                wrapperClassName="common-input-it w-full"
              />
              {errorMessage.date_of_birth &&
                errorMessage.date_of_birth !== "" && (
                  <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.date_of_birth}
                    </Typography>
                  </Grid>
                )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="block mb-3 text-sm font-semibold text-gray-800">
                Blood group
              </label>
              <Select
                value={blood_group}
                onValueChange={(value) => {
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    blood_group: value,
                  }));
                  setErrorMessage((prevErrors: any) => ({
                    ...prevErrors,
                    blood_group: "",
                  }));
                }}
              >
                <SelectTrigger className="common-input-it">
                  <SelectValue placeholder="Blood group" />
                </SelectTrigger>
                <SelectContent>{bloodGroupChoices}</SelectContent>
              </Select>
              {errorMessage.blood_group && errorMessage.blood_group !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.blood_group}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sm={sex === "Other" ? 6 : 12}>
              <label className="block mb-3 text-sm font-semibold text-gray-800">
                Sex
              </label>
              <RadioGroup
                onValueChange={(value) => {
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    sex: value,
                  }));
                  setErrorMessage((prevErrors: any) => ({
                    ...prevErrors,
                    sex: "",
                  }));
                }}
                defaultValue={sex}
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Male" id="sex" />
                  <label htmlFor="Male" className="text-gray-800">Male</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Female" id="sex" />
                  <label htmlFor="Female" className="text-gray-800">Female</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Other" id="sex" />
                  <label htmlFor="Other" className="text-gray-800">Other</label>
                </div>
              </RadioGroup>
              {errorMessage.sex && errorMessage.sex !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.sex}
                  </Typography>
                </Grid>
              )}
            </Grid>
            {sex === "Other" && (
              <Grid item xs={12} sm={6}>
                <InputField
                  inputProps={{
                    type: "text",
                    name: "specific_sex",
                    id: "specific_sex",
                    label: "Please specify your sex",
                    value: specific_sex,
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
                  type: "occupation",
                  name: "occupation",
                  id: "occupation",
                  label: "Occupation",
                  value: occupation,
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
