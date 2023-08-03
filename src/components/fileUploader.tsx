import { LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { UserData } from "src/gd/pages/apply";
import ErrorIcon from "@mui/icons-material/Error";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const FileUploader = ({
  name,
  setUserData,
  errorMessage,
  setErrorMessage,
  label,
  accept,
}: {
  name: string;
  setUserData: Function;
  errorMessage: any;
  setErrorMessage: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  accept: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange =
    (propertyName: keyof UserData) =>
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file && file.size > 3 * 1024 * 1024)
        return setErrorMessage((prevErrors: any) => ({
          ...prevErrors,
          [name]: "File size should not exceed 3MB.",
        }));

      if (file) {
        setUploading(true);
        const cloudinaryURL = await uploadToCloudinary([file], setProgress);
        console.log("cloudinaryURL", cloudinaryURL);
        setUserData((prevData: UserData) => ({
          ...prevData,
          [propertyName]: cloudinaryURL[0],
        }));
        setErrorMessage((prevErrors: any) => ({
          ...prevErrors,
          [name]: "",
        }));
        setUploading(false);
      }
    };

  return (
    <>
      <div className="block mb-3 text-sm font-semibold text-gray-800">
        {label}
      </div>
      {uploading && (
        <div style={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </div>
      )}
      <label className={`${uploading ? "hidden" : "block"}`}>
        <span className="sr-only">Upload your file</span>
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange(name)}
          className=" block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-[5px] file:rounded-r-none file:border-0 file:h-[56px] file:cursor-pointer
                    file:text-sm file:font-semibold
                    file:bg-green-700 file:text-white
                    hover:file:bg-green-700/2 common-input-it cursor-pointer rounded-md text-gray-800"
        />
      </label>

      {errorMessage[name] && errorMessage[name] !== "" && (
        <div className="flex items-center mt-2 gap-2 text-gray-800">
          <ErrorIcon />
          <Typography className="p-0 text-sm">{errorMessage[name]}</Typography>
        </div>
      )}
    </>
  );
};

export default FileUploader;
