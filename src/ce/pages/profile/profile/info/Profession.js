import {
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Tooltip,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ErrorIcon from "@mui/icons-material/Error";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Profession = () => {
  return (
    <Grid className="w-full">
      <Grid className="flex flex-col gap-3">
        <ProfessionComponent />
      </Grid>
    </Grid>
  );
};

const ProfessionComponent = () => {
  const [inputForm, setInputForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [focused, setFocused] = useState(false);
  const [profession, setProfession] = useState([
    {
      position: "",
      company: "",
      current: false,
      from: "",
      to: "",
      description: "",
    },
  ]);

  const handleSubmit = async () => {
    setInputForm(false);
  };

  useMemo(() => {
    if (!focused && !inputForm) {
      setErrorMessage(["Please add your profession."]);
    } else if (focused) {
      setErrorMessage([]);
    }
  }, [focused, inputForm]);

  return (
    <Grid>
      <Grid className="flex gap-3 items-center mb-2">
        <WorkIcon />
        <Typography className="p-0 font-bold">Profession</Typography>
        {!inputForm && (
          <Tooltip title="Edit">
            <IconButton
              onClick={() => setInputForm(true)}
              disableRipple
              className="text-inherit flex justify-start p-0 focus:outline-none normal-case"
            >
              <EditIcon className="p-0 mr-2" />
            </IconButton>
          </Tooltip>
        )}
      </Grid>
      {errorMessage.length !== 0 && (
        <Grid className="w-full md:w-[20rem] p-4 my-4 bg-zinc-500 flex flex-col gap-3">
          {errorMessage.map((error, i) => (
            <Grid key={i} className="flex items-center gap-2">
              <ErrorIcon />
              <Typography className="p-0 text-sm">{error}</Typography>
            </Grid>
          ))}
        </Grid>
      )}
      {inputForm ? (
        <Form
          setInputForm={setInputForm}
          data={profession}
          setData={setProfession}
          setFocused={setFocused}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Grid className="flex flex-col gap-2">
         
        </Grid>
      )}
    </Grid>
  );
};

const Form = ({
  setInputForm,
  data,
  setData,
  setFocused,
  handleSubmit,
}) => {

  function generateArrayOfYears() {
    let max = new Date().getFullYear();
    let min = 1971;
    let years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }

  const handleChange = (event, index) => {
    let newData = [...data];
    newData[index][event.target.name] = event.target.value;
    setData(newData);
  };
  const deleteField = (index) => {
    let updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  const addMore = () => {
    let object = {
        position: "",
        company: "",
        current: false,
        from: "",
        to: "",
        description: "",
      };
    setData([...data, object]);
  };

  return (
    <Grid className="">
      <form className="flex flex-col gap-5">
        {data.map((item, index) => (
          <Grid key={index}>
            <Grid className="w-full md:w-[20rem] flex justify-end">
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => deleteField(index)}
                  className="text-inherit flex justify-start p-0 focus:outline-none normal-case mb-1"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid className="flex flex-col w-full gap-2">
              <CustomTextField
                inputProps={{
                  autoFocus: true,
                  multiline: true,
                  type: "text",
                  name: "position",
                  id: "position",
                  label: "Position",
                  value: item.position,
                  onChange: (event) => handleChange(event, index),
                  setFocused: setFocused,
                }}
              />
              <CustomTextField
                inputProps={{
                  multiline: true,
                  type: "text",
                  name: "company",
                  id: "company",
                  label: "Company",
                  value: item.company,
                  onChange: (event) => handleChange(event, index),
                  setFocused: setFocused,
                }}
              />
              <Grid className="flex flex-col">
                <Typography className="p-0">Time Period</Typography>
                <Grid className="flex items-center mt-2">
                  <Checkbox
                    onChange={() => {
                      let newData = [...data];
                      newData[index]["current"] = !item.current;
                      setData(newData);
                    }}
                    checked={item.current}
                    sx={{
                      color: "#fff",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                  <Typography className="p-0 pl-3">
                    I currently work here
                  </Typography>
                </Grid>
                <Grid className="w-full my-3">
                  {item.current ? (
                    <Grid className="flex items-center">
                      <Typography className="p-0 pr-3">From</Typography>
                      <CustomSelect
                        inputProps={{
                          type: "number",
                          name: "from",
                          id: "from",
                          label: "Year",
                          value: item.from,
                          onChange: (event) => handleChange(event, index),
                          setFocused: setFocused,
                        }}
                      >
                        {generateArrayOfYears().map((year, i) => (
                          <MenuItem key={i} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </CustomSelect>
                    </Grid>
                  ) : (
                    <Grid className="w-full md:w-[20rem] justify-between flex items-center">
                      <Typography className="p-0 pr-3">From</Typography>
                      <CustomSelect
                        inputProps={{
                          type: "number",
                          name: "from",
                          id: "from",
                          label: "Year",
                          value: item.from,
                          onChange: (event) => handleChange(event, index),
                          setFocused: setFocused,
                        }}
                      >
                        {generateArrayOfYears().map((year, i) => (
                          <MenuItem key={i} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </CustomSelect>
                      <Typography className="p-0 px-3">to</Typography>
                      <CustomSelect
                        inputProps={{
                          type: "number",
                          name: "to",
                          id: "to",
                          label: "Year",
                          value: item.to,
                          onChange: (event) => handleChange(event, index),
                          setFocused: setFocused,
                        }}
                      >
                        {generateArrayOfYears().map((year, i) => (
                          <MenuItem key={i} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </CustomSelect>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              <CustomTextField
                inputProps={{
                  multiline: true,
                  minRows: 4,
                  type: "text",
                  name: "description",
                  id: "description",
                  label: "Description",
                  value: item.description,
                  onChange: (event) => handleChange(event, index),
                  setFocused: setFocused,
                }}
              />
            </Grid>
          </Grid>
        ))}
        <Button
          onClick={addMore}
          startIcon={<AddCircleOutlineIcon />}
          disableRipple
          className="w-[12rem] text-slate-200 bg-stone-500 hover:bg-stone-600 focus:outline-none normal-case"
        >
          Add another workplace
        </Button>

        <Grid className="w-full md:w-[20rem] flex justify-end ">
          <Grid className="flex gap-5">
            <Button
              onClick={() => {
                setInputForm(false);
                setData([
                    {
                        position: "",
                        company: "",
            
                        current: false,
                        from: "",
                        to: "",
                        description: "",
                      },
                ]);
              }}
              className="w-[5rem] normal-case text-slate-200 bg-zinc-500 hover:bg-zinc-600"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleSubmit()}
              disabled={!data}
              variant="contained"
              className="w-[5rem] normal-case text-slate-200 bg-green-700 hover:bg-green-800"
            >
             
                <Typography>Save</Typography>
          
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

const CustomSelect = ({ children, inputProps }) => {
  const { type, name, id, label, value, onChange, setFocused } = inputProps;
  return (
    <FormControl>
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          color:
            "rgb(214 211 209)",
          "&.Mui-focused": {
            color:
              "rgb(214 211 209)",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        required
        type={type}
        labelId={name}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        sx={{
          color: "white",
          label: {
            color: "darkred",
            "&.Mui-focused": {
              color: "darkred",
            },
          },
          ".MuiOutlinedInput-notchedOutline": {
            color:
              "rgb(214 211 209)",
            borderColor: "rgb(120 113 108)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color:
              "rgb(214 211 209)",
            borderColor:
              "rgb(214 211 209)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            color:
              "rgb(214 211 209)",
            borderColor: "rgb(168 162 158)",
          },
          ".MuiSvgIcon-root ": {
            fill:
              "rgb(214 211 209)",
          },
        }}
        inputProps={{
          MenuProps: {
            MenuListProps: {
              sx: {
                backgroundColor:
                 "rgb(63 63 70)",
                color: "white",
              },
            },
          },
        }}
        label={label}
        className="min-w-[6rem] rounded-md"
      >
        {children}
      </Select>
    </FormControl>
  );
};

const CustomTextField = ({ inputProps }) => {
  const {
    type,
    name,
    id,
    label,
    value,
    onChange,
    setFocused,
    multiline,
    minRows,
    autoFocus,
  } = inputProps;

  return (
    <TextField
      autoFocus={autoFocus}
      multiline={multiline}
      minRows={minRows}
      type={type}
      name={name}
      value={value}
      required
      fullWidth
      id={id}
      label={label}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      sx={{
        label: {
          color: "rgb(214 211 209)",
        },
        "& label.Mui-focused": {
          color:
            "rgb(214 211 209)",
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
            borderColor:
              "rgb(214 211 209)",
          },
        },
      }}
      className="md:w-[20rem]"
    />
  );
};

export default Profession;
