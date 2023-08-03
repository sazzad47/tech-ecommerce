import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ErrorIcon from "@mui/icons-material/Error";
import {
  useCreateBillingAddressMutation,
  useGetBillingAddressQuery,
  useUpdateBillingAddressMutation,
} from "../../state/api/user";
import { ColorRing, Oval } from "react-loader-spinner";
import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import { countries } from "countries-list";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { handleNotification } from "../../state/slices/common/auth";
import "react-phone-input-2/lib/style.css";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/popover";

export default function BillingAddress() {
  const { access_token } = useSelector((state: RootState) => state.auth);

  const [createBillingAddress, { isLoading: isCreatingBillingAddress }] =
    useCreateBillingAddressMutation();

  const [updateBillingAddress, { isLoading: isUpdatingBillingAddress }] =
    useUpdateBillingAddressMutation();

  const { data, isLoading: isFetchingBillingAddress } =
    useGetBillingAddressQuery({ access_token });

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
    email: string;
    phone: any;
    country: string;
    province: string;
    city: string;
    zip: any;
    address: string;
  }

  const initState: UserData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    province: "",
    city: "",
    zip: "",
    address: "",
  };

  const [userData, setUserData] = useState<UserData>(initState);
  const [errorMessage, setErrorMessage] = useState<any>({});

  const {
    first_name,
    last_name,
    email,
    phone,
    country,
    province,
    city,
    zip,
    address,
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
    const response = data
      ? await updateBillingAddress({ userData, access_token })
      : await createBillingAddress({ userData, access_token });
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
          message: "Address saved successfully",
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
      {isFetchingBillingAddress ? (
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
            </Grid>
            <Button
              className="normal-case text-slate-200 bg-stone-500 hover:bg-stone-600"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleSubmit}
            >
              {isCreatingBillingAddress || isUpdatingBillingAddress ? (
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
