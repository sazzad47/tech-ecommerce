import {
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EditIcon from "@mui/icons-material/Edit";
import ErrorIcon from "@mui/icons-material/Error";



const Expertise = () => {
  return (
    <Grid className="w-full">
        <ExpertiseInfo />
    </Grid>
  );
};

const ExpertiseInfo = () => {
 
  const [inputForm, setInputForm] = useState<boolean>(false);
  const [expertise, setExpertise] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [focused, setFocused] = useState<boolean>(false);

  const handleSubmit = async () => {
    setInputForm(false);
  };

  useMemo(() => {
    if (!focused && !inputForm) {
      setErrorMessage(["Please add your expertise."]);
    } else if (focused) {
      setErrorMessage([]);
    }
  }, [focused, inputForm]);

  return (
    <Grid>
      <Grid className="flex gap-3 items-center mb-2">
        <LocalLibraryIcon />
        <Typography className="p-0 font-bold">Expertise</Typography>
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
          data={expertise}
          setData={setExpertise}
          setFocused={setFocused}
          handleSubmit={handleSubmit}
          
        />
      ) : (
        <Typography className="p-0"></Typography>
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

}: {
  setInputForm: Function;
  data: string;
  setData: Function;
  setFocused: Function;
  handleSubmit: Function;
}) => {

  return (
    <Grid className="">
      <form>
        <Grid className="flex flex-col w-full gap-2">
          <TextField
            multiline
            autoFocus
            onChange={(e) => setData(e.target.value)}
            value={data}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            sx={{
              label: {
                color: "rgb(214 211 209)",
              },
              "& label.Mui-focused": {
                color:
                  
                    "rgb(214 211 209)"
                   
              },
              "& .MuiOutlinedInput-root": {
                color: "white" ,
                "& fieldset": {
                  color: "white",
                  borderColor:
                   "rgb(120 113 108)",
                },
                "&:hover fieldset": {
                  borderColor:
                   "rgb(168 162 158)",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                      "rgb(214 211 209)"
                },
              },
            }}
            className="md:w-[20rem] rounded-md bg-bgButton dark:bg-bgButtonDark text-textLight dark:text-textDark"
          />

          <Grid className="w-full md:w-[20rem] flex justify-end ">
            <Grid className="flex gap-5">
              <Button
                onClick={() => {
                  setInputForm(false);
                  setData("");
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
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
export default Expertise;
