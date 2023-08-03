import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ErrorIcon from "@mui/icons-material/Error";
import {
  useCreateVolunteerInformationMutation,
  useGetVolunteerInformationQuery,
  useUpdateVolunteerInformationMutation,
} from "../../../../state/api/user";
import { ColorRing, Oval } from "react-loader-spinner";
import { RootState } from "../../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import { countries } from "countries-list";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { handleNotification } from "../../../../state/slices/common/auth";
import "react-phone-input-2/lib/style.css";

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "src/components/select";
import FileUploader from "src/components/fileUploader";
import { RadioGroup, RadioGroupItem } from "src/components/radio-group";
import { bloodGroupOptions, maritalStatusOptions } from "src/gd/constants";

export default function VolunteerInfo() {
  const { access_token } = useSelector((state: RootState) => state.auth);

  const [createVolunteerInformation, { isLoading: isCreatingVolunteerInformation }] =
    useCreateVolunteerInformationMutation();

  const [updateVolunteerInformation, { isLoading: isUpdatingVolunteerInformation }] =
    useUpdateVolunteerInformationMutation();

  const { data, isLoading: isFetchingVolunteerInformation } =
    useGetVolunteerInformationQuery({ access_token });

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const getAllCountries = () => {
    const countryNames = Object.values(countries).map(
      (country) => country.name
    );
    return countryNames;
  };

  const countryArray = getAllCountries();

  interface UserData {
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
  }

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

  const [userData, setUserData] = useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = useState<any>({});

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
    sex,
    specific_sex,
    blood_group,
    occupation,
    email,
    phone,
  } = userData;

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
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = data
      ? await updateVolunteerInformation({ userData, access_token })
      : await createVolunteerInformation({ userData, access_token });
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
          message: "Information saved successfully",
        })
      );
    }
  };

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

 

  return (
    <div className="w-full flex items-center justify-center">
      {isFetchingVolunteerInformation ? (
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
        <div className="flex flex-col items-center w-full">
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
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Phone
                </label>
                <PhoneInput
                  country={"us"}
                  inputClass="common-input"
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
                    setUserData((prevData) => ({ ...prevData, phone }))
                  }
                />
                {errorMessage.phone && errorMessage.phone !== "" && (
                  <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.phone}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12}>
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Country
                </label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <button
                      role="combobox"
                      aria-controls="countryList"
                      aria-expanded={open}
                      className="combobox-input flex items-center justify-between px-3 py-2"
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
                              setUserData((prevData) => ({
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
                  <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.country}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12}>
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
              className="block mb-3 text-sm font-semibold text-secondaryTheme"
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
              <SelectTrigger className="common-input">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>{maritalStatusChoices}</SelectContent>
            </Select>
            {errorMessage.marital_status &&
              errorMessage.marital_status !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
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
                  <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.specific_marital_status}
                    </Typography>
                  </Grid>
                )}
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <label className="block mb-3 text-sm font-semibold text-secondaryTheme">
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
              <SelectTrigger className="common-input">
                <SelectValue placeholder="Blood group" />
              </SelectTrigger>
              <SelectContent>{bloodGroupChoices}</SelectContent>
            </Select>
            {errorMessage.blood_group && errorMessage.blood_group !== "" && (
              <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
                <ErrorIcon />
                <Typography className="p-0 text-sm">
                  {errorMessage.blood_group}
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} sm={sex === "Other" ? 6 : 12}>
            <label className="block mb-3 text-sm font-semibold text-secondaryTheme">
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
                <label htmlFor="Male" className="text-secondaryTheme">
                  Male
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Female" id="sex" />
                <label htmlFor="Female" className="text-secondaryTheme">
                  Female
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Other" id="sex" />
                <label htmlFor="Other" className="text-secondaryTheme">
                  Other
                </label>
              </div>
            </RadioGroup>
            {errorMessage.sex && errorMessage.sex !== "" && (
              <Grid className="flex items-center mt-2 gap-2 text-secondaryTheme">
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
            </Grid>
            <Button
              className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleSubmit}
            >
              {isCreatingVolunteerInformation || isUpdatingVolunteerInformation ? (
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
                "Save"
              )}
            </Button>
          </Box>
        </div>
      )}
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
