import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ImageUploader from "src/components/imageUplaoder";
import FileUploader from "src/components/fileUploader";
import { UserData } from "..";

export default function NaturalDisaster({
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


  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <Box component="form" autoComplete="off" className="w-full">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FileUploader
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Birth certificate/ NID / Passport/ Driving licence"
                name="identification_card"
                accept="application/pdf"
              />
            </Grid>
            <Grid item xs={12}>
              <FileUploader
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Provide written certificate from local city council due to
                natural calamity"
                name="certificate_from_city_council"
                accept="application/pdf"
              />
            </Grid>
            <Grid item xs={12}>
              <ImageUploader
                userData={userData}
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Provide some photos of the disaster"
                name="credential_photos"
              />
            </Grid>
            <Grid item xs={12}>
              <FileUploader
                setUserData={setUserData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                label="Other documents"
                name="other_documents"
                accept="application/pdf"
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

