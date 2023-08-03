import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ErrorIcon from "@mui/icons-material/Error";
import PhoneInput from "react-phone-input-2";
import { countries } from "countries-list";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
import { SocialLinks, UserData } from ".";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";

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
    setUserData((prevState: UserData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSocialLinksChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
      | SelectChangeEvent<string>,
    index: number
  ) => {
    const newData = [...userData.social_links];
    newData[index] = {
      ...newData[index],
      [event.target.name as string]: event.target.value,
    };
    setUserData((prevData: UserData) => ({
      ...prevData,
      social_links: newData,
    }));
  };

  const deleteField = (index: number) => {
    const updatedData = [...userData.social_links];
    updatedData.splice(index, 1);
    setUserData((prevData: UserData) => ({
      ...prevData,
      social_links: updatedData,
    }));
  };

  const addMore = () => {
    const newLinks: SocialLinks = {
      domain: "",
      username: "",
    };
    setUserData((prevData: UserData) => ({
      ...prevData,
      social_links: [...prevData.social_links, newLinks],
    }));
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <Box component="form" autoComplete="off" className="w-full">
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
            <Grid item xs={12}>
              <label
                htmlFor="firstName"
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
            <Grid item xs={12} className="">
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
          {userData.social_links.map((item, index) => (
            <Grid key={index} container spacing={2} className="mt-3">
              {index > 0 && (
                <Grid className="w-full flex justify-end text-[#4b5563]">
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => deleteField(index)}
                      className="text-inherit flex justify-start p-0 focus:outline-none normal-case -mb-3"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              )}

              <Grid item xs={12} sm={6} className="w-full">
                <label
                  htmlFor="domain"
                  className="block mb-3 text-sm font-semibold text-gray-800"
                >
                  Add social link
                </label>
                <FormControl className="w-full">
                  <Select
                    autoFocus
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="domain"
                    value={item.domain}
                    onChange={(event) => handleSocialLinksChange(event, index)}
                    sx={{
                      width: "100%",
                      color: "#4b5563",
                      label: {
                        color: "darkred",
                        "&.Mui-focused": {
                          color: "darkred",
                        },
                      },
                      ".MuiOutlinedInput-notchedOutline": {
                        color: "#4b5563",
                        borderColor: "rgb(120 113 108)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        color: "#4b5563",
                        borderColor: "#4b5563",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        color: "#4b5563",
                        borderColor: "rgb(168 162 158)",
                      },
                      ".MuiSvgIcon-root ": {
                        fill: "#4b5563",
                      },
                    }}
                    inputProps={{
                      MenuProps: {
                        MenuListProps: {
                          sx: {
                            backgroundColor: "rgb(63 63 70)",
                            color: "white",
                          },
                        },
                      },
                    }}
                    
                  >
                    <MenuItem value="https://www.facebook.com/">
                      Facebook
                    </MenuItem>
                    <MenuItem value="https://www.instagram.com/">
                      Instagram
                    </MenuItem>
                    <MenuItem value="https://www.linkedin.com/">
                      LinkedIn
                    </MenuItem>
                    <MenuItem value="https://twitter.com/">Twitter</MenuItem>
                    <MenuItem value="https://www.youtube.com/">
                      Youtube
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className="">
                <InputField
                  inputProps={{
                    type: "text",
                    name: "username",
                    id: "username",
                    label: "Username",
                    value: item.username,
                    onChange: (event) => handleSocialLinksChange(event, index),
                    setErrorMessage,
                    errorMessages: errorMessage,
                  }}
                />
              </Grid>
            </Grid>
          ))}
          <Grid className="w-full flex justify-end">
            <Button
              onClick={addMore}
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              disableRipple
              className="mt-2 focus:outline-none normal-case px-4 text-gray-800"
            >
              Add another social link
            </Button>
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
            color: "rgb(214 211 209)",
          },
          "& label.Mui-focused": {
            color: "rgb(214 211 209)",
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
              borderColor: "rgb(214 211 209)",
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
