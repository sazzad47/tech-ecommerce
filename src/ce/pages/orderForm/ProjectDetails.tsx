import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/select";

import { Demo, UserData } from ".";
import { menus } from "../architecture/topbar/menus";
import { Button, IconButton, Tooltip } from "@mui/material";

const fileURL =
  "http://127.0.0.1:8000/media/dummy/Certification-and-ownership-form.pdf/";
export default function ContactInfo({
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
  const { title, category, product, order_description, delivery_date } =
    userData;

  const categories = menus.map((item, index) => (
    <SelectItem key={index} value={item.title || ""}>
      {item.title}
    </SelectItem>
  ));

  const filteredMenu = menus.find((item) => item.title === category);
  const products = filteredMenu?.submenus?.map((product, index) => (
    <SelectItem key={index} value={product.title || ""}>
      {product.title}
    </SelectItem>
  ));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState: UserData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange =
    (propertyName: keyof UserData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setUserData((prevData: UserData) => ({
          ...prevData,
          [propertyName]: file,
        }));
        setErrorMessage((prevError: any)=> ({...prevError, order_file: ""}))
      }
    };

  const handleDemoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newData = [...userData.demo];
    newData[index] = {
      ...newData[index],
      [event.target.name]: event.target.value,
    };
    setUserData((prevData: UserData) => ({
      ...prevData,
      demo: newData,
    }));
  };

  const deleteField = (index: number) => {
    const updatedData = [...userData.demo];
    updatedData.splice(index, 1);
    setUserData((prevData: UserData) => ({
      ...prevData,
      demo: updatedData,
    }));
  };

  const addMore = () => {
    const newDemo: Demo = {
      url: "",
      description: "",
    };
    setUserData((prevData: UserData) => ({
      ...prevData,
      demo: [...prevData.demo, newDemo],
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Set the time component to 0:00 (midnight)
      date.setHours(0, 0, 0, 0);
    }
    setUserData((prevData: UserData) => ({ ...prevData, delivery_date: date }));
    setErrorMessage((prevError: any)=> ({...prevError, delivery_date: ""}))
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <Box component="form" autoComplete="off" className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField
                inputProps={{
                  type: "title",
                  name: "title",
                  id: "title",
                  label: "Title",
                  value: title,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="firstName"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Choose category
              </label>
              <Select
                value={category}
                onValueChange={(value) =>
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    category: value,
                  }))
                }
              >
                <SelectTrigger className="common-input">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>{categories}</SelectContent>
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
              <label
                htmlFor="product"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Choose product
              </label>
              <Select
                value={product}
                onValueChange={(value) =>
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    product: value,
                  }))
                }
              >
                <SelectTrigger className="common-input">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>{products}</SelectContent>
              </Select>
              {errorMessage.product && errorMessage.product !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.product}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12}>
              <InputField
                inputProps={{
                  multiline: true,
                  minRows: 3,
                  type: "text",
                  name: "order_description",
                  id: "order_description",
                  label: "Describe your order",
                  value: order_description,
                  onChange: handleChange,
                  setErrorMessage: setErrorMessage,
                  errorMessages: errorMessage,
                }}
              />
            </Grid>

            {userData.demo.map((item, index) => (
              <Grid key={index} item xs={12}>
                {index > 0 && (
                  <Grid className="w-full flex justify-end text-#4b5563">
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => deleteField(index)}
                        className="text-inherit flex justify-start p-0 focus:outline-none normal-case mb-1"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                )}
                <Grid className="flex flex-col w-full gap-2">
                  <InputField
                    inputProps={{
                      type: "text",
                      name: "url",
                      id: "url",
                      label: "Demo URL",
                      value: item.url,
                      onChange: (event) => handleDemoChange(event, index),
                      setErrorMessage,
                      errorMessages: errorMessage,
                    }}
                  />
                  <InputField
                    inputProps={{
                      multiline: true,
                      minRows: 3,
                      type: "text",
                      name: "description",
                      id: "description",
                      label: "Describe demo",
                      value: item.description,
                      onChange: (event) => handleDemoChange(event, index),
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
                Add another demo
              </Button>
            </Grid>
            <Grid item xs={12}>
              <ul className="flex flex-col gap-3 text-gray-800">
                <li className="flex items-center gap-3">
                  <BsInfoCircleFill /> Download this file and upload it in the
                  following box after filling it out.
                </li>
                <li>
                  <button
                    onClick={() => window.open(fileURL, "_blank")}
                    className="flex items-center gap-3 px-4 py-3 common-input-button-it"
                  >
                    {" "}
                    <AiFillEye /> View file
                  </button>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <div className="block mb-3 text-sm font-semibold text-gray-800">
                Upload attached file
              </div>
              <label className="block">
                <span className="sr-only">Upload your file</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange("order_file")}
                  className=" block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-[5px] file:rounded-r-none file:border-0 file:h-[56px] file:cursor-pointer
                    file:text-sm file:font-semibold
                    file:bg-yellow-600 file:text-white
                    hover:file:bg-yellow-600/2 common-input-it cursor-pointer rounded-md text-gray-800"
                />
              </label>
              {errorMessage.order_file && errorMessage.order_file !== "" && (
                <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                  <ErrorIcon />
                  <Typography className="p-0 text-sm">
                    {errorMessage.order_file}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="block mb-3 text-sm font-semibold text-gray-800">
                Additional file
              </div>
              <label className="block">
                <span className="sr-only">Upload your file</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange("additional_file")}
                  className=" block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-[5px] file:rounded-r-none file:border-0 file:h-[56px] file:cursor-pointer
                    file:text-sm file:font-semibold
                    file:bg-yellow-600 file:text-white
                    hover:file:bg-yellow-600/2 common-input-it cursor-pointer rounded-md text-gray-800"
                />
              </label>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label
                htmlFor="delivery_date"
                className="block mb-3 text-sm font-semibold text-gray-800"
              >
                Delivery date
              </label>
              <DatePicker
                selected={delivery_date}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className="common-input w-full"
                showIcon
                wrapperClassName="common-input w-full"
              />
              {errorMessage.delivery_date &&
                errorMessage.delivery_date !== "" && (
                  <Grid className="flex items-center mt-2 gap-2 text-gray-800">
                    <ErrorIcon />
                    <Typography className="p-0 text-sm">
                      {errorMessage.delivery_date}
                    </Typography>
                  </Grid>
                )}
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
