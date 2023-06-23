import { Typography } from "@mui/material";
import React from "react";
import { UserData } from "src/gd/pages/apply";
import ErrorIcon from "@mui/icons-material/Error";

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
  const handleFileChange =
    (propertyName: keyof UserData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file && file.size > 3 * 1024 * 1024)
        return setErrorMessage((prevErrors: any) => ({
          ...prevErrors,
          [name]: "File size should not exceed 3MB.",
        }));

      if (file) {
        setUserData((prevData: UserData) => ({
          ...prevData,
          [propertyName]: file,
        }));
        setErrorMessage((prevErrors: any) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    };
    
  return (
    <>
      <div className="block mb-3 text-sm font-semibold text-secondaryTheme">
        {label}
      </div>
      <label className="block">
        <span className="sr-only">Upload your file</span>
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange(name)}
          className=" block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-[5px] file:rounded-r-none file:border-0 file:h-[56px] file:cursor-pointer
                    file:text-sm file:font-semibold
                    file:bg-gray-900 file:text-white
                    hover:file:bg-gray-900/2 common-input cursor-pointer rounded-md text-secondaryTheme"
        />
      </label>
      {errorMessage[name] && errorMessage[name] !== "" && (
        <div className="flex items-center mt-2 gap-2 text-secondaryTheme">
          <ErrorIcon />
          <Typography className="p-0 text-sm">{errorMessage[name]}</Typography>
        </div>
      )}
    </>
  );
};

export default FileUploader;
