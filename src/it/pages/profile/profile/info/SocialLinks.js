import {
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ErrorIcon from "@mui/icons-material/Error";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare, FaYoutube } from 'react-icons/fa'


const SocialLinks = () => {
  return (
    <Grid className="w-full">    
        <SocialLinksInfo />
    </Grid>
  );
};

const SocialLinksInfo = () => {
  const [inputForm, setInputForm] = useState(false);
  const [socialLinks, setSocialLinks] = useState([
    {username: '', domain: ''}
  ])
 
  const [errorMessage, setErrorMessage] = useState([]);
  const [focused, setFocused] = useState(false);
  
  const handleSubmit = async () => {
    
    setInputForm(false);
  };
  
  useMemo(() => {
    if (!focused && !inputForm) {
      setErrorMessage(["Please add your social links."]);
    } else if (focused) {
      setErrorMessage([]);
    }
  }, [focused, inputForm]);

  return (
    <Grid>
      <Grid className="flex gap-3 items-center mb-2">
        <RssFeedIcon />
        <Typography className="p-0 font-bold">Social Links</Typography>
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
          data={socialLinks}
          setData={setSocialLinks}
          setFocused={setFocused}
          handleSubmit={handleSubmit}
        />
      ) : (
          <Grid className="flex gap-3 items-center">
            
         
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
 
  const handleChange = (event, index)=> {
    let newData = [...data];
    newData[index][event.target.name] = event.target.value;
    setData(newData)
  }
  
  const addMore = ()=> {
    let object = {
      username: '',
      domain: ''
    }
    setData([...data, object])
  }
  


  return (
    <Grid className="">
      <form>
       
        <Grid className="flex flex-col gap-5">
        {data?.map((item, index)=> (
               <Grid key={index} className="flex flex-col w-full gap-2">

               <FormControl>
                 <InputLabel id="demo-simple-select-label" sx={{  
                    color: "rgb(214 211 209)",
                     "&.Mui-focused": {
                       color: "rgb(214 211 209)",
                     },
                 
                 }} >Social Media</InputLabel>
                 <Select
                   autoFocus
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   name="domain"
                   value={item.domain}
                   onChange={(event)=> handleChange(event, index)}
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
                     '.MuiOutlinedInput-notchedOutline': {
                      color: "rgb(214 211 209)",
                       borderColor: "rgb(120 113 108)",
                     },
                     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                       color:  "rgb(214 211 209)"
                      ,
                       borderColor:  "rgb(214 211 209)",
                     },
                     '&:hover .MuiOutlinedInput-notchedOutline': {
                      color:  "rgb(214 211 209)",
                       borderColor: "rgb(168 162 158)",
                     },
                     '.MuiSvgIcon-root ': {
                       fill:  "rgb(214 211 209)"
                      ,
                     },
                     
                   }}
                   inputProps={{
                    MenuProps: {
                        MenuListProps: {
                            sx: {
                                backgroundColor:  "rgb(63 63 70)",
                                color:  "white"
                               ,
                            }
                        }
                    }
                }}
                   label="Social media"
                   className="md:w-[20rem] rounded-md"
                 >
                   <MenuItem value="https://www.facebook.com/">Facebook</MenuItem>
                   <MenuItem value="https://www.instagram.com/">Instagram</MenuItem>
                   <MenuItem value="https://www.linkedin.com/">LinkedIn</MenuItem>
                   <MenuItem value="https://twitter.com/">Twitter</MenuItem>
                   <MenuItem value="https://www.youtube.com/">Youtube</MenuItem>
                 </Select>
               </FormControl>
               <TextField
                 multiline
                 onChange={(event)=> handleChange(event, index)}
                 name="username"
                 value={item.username}
                 onFocus={() => setFocused(true)}
                 onBlur={() => setFocused(false)}
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
                       borderColor: "rgb(214 211 209)"
                     },
                   },
                 }}
                 placeholder="Username"
                 className="md:w-[20rem] rounded-md"
               />
               </Grid>
              ))}
         
          <Button
            onClick={addMore}
            startIcon={<AddCircleOutlineIcon />}
            disableRipple
            className="w-[10rem] text-slate-200 bg-green-700 hover:bg-green-800 dark:bg-stone-500 dark:hover:bg-stone-600 focus:outline-none normal-case"
          >
            
            Add another link
          </Button>

          <Grid className="w-full md:w-[20rem] flex justify-end ">
            <Grid className="flex gap-5">
              <Button
                onClick={() => {
                  setInputForm(false);
                  setData([
                    {username: '', domain: ''}
                  ]);
                }}
                className="w-[5rem] normal-case text-slate-200 bg-stone-400 hover:bg-stone-500 dark:bg-zinc-500 hover:dark:bg-zinc-600"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleSubmit()}
                disabled={!data}
                variant="contained"
                className="w-[5rem] normal-case text-slate-200 bg-green-700 hover:bg-green-800 "
              >
                
                  <Typography>Save</Typography>
              
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
export default SocialLinks;



