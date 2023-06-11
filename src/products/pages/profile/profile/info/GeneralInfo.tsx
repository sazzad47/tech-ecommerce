import React, { useMemo, useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Tooltip,
  TextField,
  Button,
} from "@mui/material";


import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EditIcon from "@mui/icons-material/Edit";
import ErrorIcon from "@mui/icons-material/Error";

const GeneralInfo = () => {

    const [inputForm, setInputForm] = useState<boolean>(false);
    const initState = { firstName: "", lastName: "", ssc_batch: "" };
    const [userData, setUserData] = useState<{
      firstName: string;
      lastName: string;
      ssc_batch: string;
    }>(initState);
    const [errorMessage, setErrorMessage] = useState<string[]>([]);
    const [focused, setFocused] = useState<boolean>(false);
  
    const handleSubmit = async () => {
      setInputForm(false);
    };
  
    useMemo(() => {
      if (!focused && !inputForm) {
        setErrorMessage([]);
      } else if (focused) {
        setErrorMessage([]);
      }
    }, [focused, inputForm]);
  
    return (
      <Grid className="w-full flex items-center justify-center">
        {!inputForm && (
          <Grid className="w-full mt-3 flex flex-col items-center justify-start gap-1">
            <Grid className="flex gap-2 items-center">
               <Typography className="p-0 text-2xl">
                Sazzad Hossen
               </Typography>
              <Tooltip title="Honorary member">
                <WorkspacePremiumIcon className="text-lg" />
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  onClick={() => setInputForm(true)}
                  disableRipple
                  className="text-inherit flex justify-start p-0 focus:outline-none normal-case"
                >
                  <EditIcon className="p-0" />
                </IconButton>
              </Tooltip>
            </Grid>
            <Typography className="text-lg text-slate-500 dark:text-slate-300">
              I develop what you think
            </Typography>
          </Grid>
        )}
  
        {errorMessage.length !== 0 && (
          <Grid className="w-full md:w-[20rem] p-4 my-4 bg-stone-400 dark:bg-zinc-500 flex flex-col gap-3">
            {errorMessage.map((error, i) => (
              <Grid key={i} className="flex items-center gap-2">
                <ErrorIcon />
                <Typography className="p-0 text-sm">{error}</Typography>
              </Grid>
            ))}
          </Grid>
        )}
        {inputForm && (
          <Form
            setInputForm={setInputForm}
            data={userData}
            setData={setUserData}
            setFocused={setFocused}
            handleSubmit={handleSubmit}
          />
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
    data: {firstName: string, lastName: string, ssc_batch: string};
    setData: Function;
    setFocused: Function;
    handleSubmit: Function;

  }) => {
  
    return (
      <form className="w-full pt-5">
        <Grid className="w-full flex flex-col md:items-center gap-2">
          <TextField
            multiline
            autoFocus
            onChange={(e) => setData({...data, firstName: e.target.value})}
            value={data.firstName}
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
            label="First Name"
            className="md:w-[20rem] rounded-md bg-bgButton dark:bg-bgButtonDark text-textLight dark:text-textDark"
          />
          <TextField
            multiline
            onChange={(e) => setData({...data, lastName: e.target.value})}
            value={data.lastName}
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
            label="Last Name"
            className="md:w-[20rem] rounded-md bg-bgButton dark:bg-bgButtonDark text-textLight dark:text-textDark"
          />
          <TextField
            multiline
            onChange={(e) => setData({...data, ssc_batch: e.target.value})}
            value={data.ssc_batch}
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
            label="Intro"
            className="md:w-[20rem] rounded-md bg-bgButton dark:bg-bgButtonDark text-textLight dark:text-textDark"
          />
  
          <Grid className="w-full md:w-[20rem] flex justify-end ">
            <Grid className="flex gap-5">
              <Button
                onClick={() => {
                  setInputForm(false);
                  setData("");
                }}
                className="w-[5rem] normal-case text-slate-200 bg-zinc-500 hover:bg-stone-500 dark:bg-zinc-500 hover:dark:bg-zinc-600"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleSubmit()}
                disabled={!data}
                variant="contained"
                className="w-[5rem] normal-case text-slate-200 bg-green-700 hover:bg-green-800 dark:bg-stone-500 dark:hover:bg-stone-600"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  };

  export default GeneralInfo