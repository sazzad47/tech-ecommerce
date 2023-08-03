import * as React from "react";
import styles from "../../style";
import { validateContactInfo } from "./Validate";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";
import { PrimaryButton } from "src/gd/components/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import PhoneInput from "react-phone-input-2";
import { countries } from "countries-list";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/select";
import { bloodGroupOptions, maritalStatusOptions } from "src/gd/constants";
import { RadioGroup, RadioGroupItem } from "src/components/radio-group";
import FileUploader from "src/components/fileUploader";
import { useCreateVolunteerInformationMutation } from "src/state/api/user";

export type UserData = {
  first_name: string;
  last_name: string;
  fathers_name: string;
  mothers_name: string;
  country: string;
  province: string;
  city: string;
  zip: string;
  address: string;
  marital_status: string;
  specific_marital_status: string;
  date_of_birth: Date | null;
  sex: string;
  specific_sex: string;
  blood_group: string;
  occupation: string;
  email: string;
  phone: string;
  identification_card: string;
  photo: string;
  [key: string]: string | number | Date | null | undefined;
};

const initState: UserData = {
  first_name: "",
  last_name: "",
  fathers_name: "",
  mothers_name: "",
  country: "",
  province: "",
  city: "",
  zip: "",
  address: "",
  marital_status: "",
  specific_marital_status: "",
  date_of_birth: null,
  sex: "",
  specific_sex: "",
  blood_group: "",
  occupation: "",
  email: "",
  phone: "",
  identification_card: "",
  photo: "",
};

export default function BeVolunteer() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const successAlert = () => {
    Swal.fire({
      title: "Thank you!",
      text: "We received your application. Go to your dashboard to check your details.",
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "Dashboard",
      preConfirm: () => navigate("/gd/profile"),
    });
  };

  const { access_token } = useSelector((state: RootState) => state.auth);

  const [
    createVolunteerInformation,
    { isLoading: isCreatingVolunteerInformation },
  ] = useCreateVolunteerInformationMutation();

  const [userData, setUserData] = React.useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = React.useState<any>({});
 

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

  const getAllCountries = () => {
    const countryNames = Object.values(countries).map(
      (country) => country.name
    );
    return countryNames;
  };

  const countryArray = getAllCountries();

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

  const handleSubmit = async () => {
    const errMsg = validateContactInfo(userData);

    if (Object.keys(errMsg).length > 0) return setErrorMessage(errMsg);

    const response = await createVolunteerInformation({
      userData,
      access_token,
    });
    
    if ("error" in response) {
      if ("data" in response.error) {
        const errorData: any = response.error.data;
        setErrorMessage(errorData);
        if(errorData.message) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }

    if ("data" in response) {
      setErrorMessage({});
      successAlert();
      setUserData(initState);
    }
  };
  console.log("erromsg", errorMessage);
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} text-secondaryTheme`}
    >
      <div className="mb-3 flex justify-between items-center">
        <h1 className={`text-start ${styles.heading2}`}>Be a Volunteer!</h1>

        <Link to={`${access_token ? "/gd/apply" : "/login"}`}>
          <PrimaryButton> Apply for Donation </PrimaryButton>
        </Link>
      </div>

      <div className="w-full bg-white p-[1rem] sm:p-[5rem] mt-[3rem]">
        {errorMessage.message && (
          <Grid className="w-full p-4 my-5 bg-stone-400 dark:bg-zinc-500 flex flex-col gap-3 rounded-lg">
            <Grid className="flex items-center gap-2">
              <ErrorIcon />
              <Typography className="p-0 text-sm">
                {errorMessage.message}
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid container spacing={2}>
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
                <label htmlFor="Male" className="text-gray-800">
                  Male
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Female" id="sex" />
                <label htmlFor="Female" className="text-gray-800">
                  Female
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Other" id="sex" />
                <label htmlFor="Other" className="text-gray-800">
                  Other
                </label>
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
          <Grid item xs={12}>
            <FileUploader
              setUserData={setUserData}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              label="Your Photo"
              name="photo"
              accept="image/*"
            />
          </Grid>
          <Grid item xs={12}>
            <FileUploader
              setUserData={setUserData}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              label="ID Card"
              name="identification_card"
              accept="application/pdf"
            />
          </Grid>
          <Grid item xs={12} className="w-full flex justify-center">
            <button
              onClick={handleSubmit}
              className="mb-2 inline-block whitespace-nowrap rounded bg-green-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#16a34a] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            >
              {isCreatingVolunteerInformation ? (
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
            </button>
          </Grid>
        </Grid>
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
