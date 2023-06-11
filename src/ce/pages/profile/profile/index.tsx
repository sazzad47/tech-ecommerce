import React, { useRef, useState } from "react";
import {
  Grid,
  Avatar,
  Typography,
  IconButton,
  Button,
  Dialog,
  Divider,
} from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Info from "./info";
import GeneralInfo from "./info/GeneralInfo";
import Layout from "../Layout";

const Profile = () => {

  const profilePhotoInput = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<any | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log('photo', photo)
  const handleChooseProfilePhoto = () => {
    profilePhotoInput.current?.click();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let newPhoto = e.target.files[0];
      const newPhotoURL = URL.createObjectURL(newPhoto);
      setPhoto(newPhoto);
      setPhotoURL(newPhotoURL);
      handleClickOpen();
    }
  };

  const updatePhoto = async () => {
    
  };

 
  return (
    <Layout>

    <Grid container className="w-full flex flex-col bg-black-gradient-2">
      <Grid
        item
        className="w-full flex flex-col items-center justify-center relative p-5"
      >
        <Grid className="relative w-[150px] h-[150px]">
          <Avatar
            onClick={handleChooseProfilePhoto}
            src={photoURL}
            className="w-full h-full cursor-pointer"
          />
          <input
            ref={profilePhotoInput}
            hidden
            type="file"
            accept="image/*"
            onChange={handleFile}
          />
          <IconButton
            onClick={handleChooseProfilePhoto}
            className="focus:outline-none bg-green-700 hover:bg-green-800 dark:bg-stone-500 dark:hover:bg-stone-600 w-[40px] h-[40px] absolute left-[105px] bottom-[-1px] text-slate-200 z-[20]"
          >
            <CameraAltIcon />
          </IconButton>
        </Grid>
        <Dialog
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: "#474849",
              width: "30rem",
              height: "27rem",
              maxHeight: "30rem",
              overflow: "hidden",
              transition: "height width var(--speed) ease",
            },
          }}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Grid className="w-full h-full flex flex-col px-4">
            <Grid className="w-full h-[10%] flex items-center justify-center">
              <Typography className="p-0 text-lg text-slate-200">
                Preview
              </Typography>
            </Grid>
            <Divider className="w-full" />
            <Grid className="w-full h-[70%] relative flex items-center justify-center">
              <Avatar src={photoURL} alt="" className="w-[12rem] h-[12rem]"/>
            </Grid>
            <Grid className="w-full h-[20%] flex items-center justify-end">
              <Grid className="flex gap-5">
                <Button
                  onClick={() => {
                    handleClose();
                  }}
                  className="w-[5rem] normal-case text-slate-200 bg-stone-400 hover:bg-stone-500 dark:bg-zinc-500 hover:dark:bg-zinc-600"
                >
                  Cancel
                </Button>
                <Button
                  onClick={updatePhoto}
                  variant="contained"
                  className="w-[5rem] normal-case text-slate-200 bg-green-700 hover:bg-green-800 dark:bg-stone-500 dark:hover:bg-stone-600"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
        <Grid className="w-full flex flex-col md:flex-row items-start md:items-center relative">
          <GeneralInfo />
        </Grid>
      </Grid>
      <Grid item className="w-full px-5">
        <Info />
      </Grid>
    </Grid>
    </Layout>
  );
};

export default Profile;
