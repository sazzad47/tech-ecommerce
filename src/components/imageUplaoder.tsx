import { Button, Typography } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UserData } from "src/gd/pages/apply";
import ErrorIcon from "@mui/icons-material/Error";
import LinearProgress from "@mui/material/LinearProgress";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const ImageUploader = ({
  userData,
  setUserData,
  errorMessage,
  setErrorMessage,
  label,
  name,
}: {
  userData: UserData;
  setUserData: Function;
  errorMessage: any;
  setErrorMessage: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  name: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      setUploading(true);
      const cloudinaryURL = await uploadToCloudinary(fileList, setProgress);
      setUserData((prevData: UserData) => ({
        ...prevData,
        credential_photos: cloudinaryURL,
      }));
      setErrorMessage((prevMsg: any) => ({ ...prevMsg, credential_photos: "" }));
      setUploading(false);
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const fileList = event.dataTransfer.files;

    try {
      setUploading(true);
      const cloudinaryURL = await uploadToCloudinary(fileList, setProgress);
      setUserData((prevData: UserData) => ({
        ...prevData,
        credential_photos: [...prevData.credential_photos, ...cloudinaryURL],
      }));
      setErrorMessage((prevMsg: any) => ({ ...prevMsg, credential_photos: "" }));
      setUploading(false);
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      setUploading(false);
    }
  };

  const handleRemoveFile = (url: string) => {
    setUserData((prevData: UserData) => ({
      ...prevData,
      credential_photos: prevData.credential_photos.filter((itemUrl: string) => itemUrl !== url),
    }));
  };

  return (
    <>
      <label
        htmlFor="photo"
        className="block mb-3 text-sm font-semibold text-gray-800"
      >
        {label}
      </label>
      <div className="w-full flex items-center justify-center">
        <article
          aria-label="File Upload Modal"
          className="min-h-[30vh] w-full p-3 sm-p-5 border border-dotted border-gray-500 flex flex-col items-center justify-center"
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
          onDragLeave={(event) => event.preventDefault()}
          onDragEnter={(event) => event.preventDefault()}
        >
          <input
            id="hidden-input"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="min-h-[20vh] flex flex-col items-center justify-center gap-3">
            <h3 className="text-xl text-gray-800 font-bold">
              Drag and drop files here or click to upload
            </h3>

            {uploading ? (
              <div style={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={progress} />
              </div>
            ) : (
              <Button
                id="button"
                variant="contained"
                className="mt-2 w-1/2 bg-green-700 capitalize focus:shadow-outline focus:outline-none"
                onClick={() => {
                  const input = document.getElementById(
                    "hidden-input"
                  ) as HTMLInputElement;
                  input.click();
                }}
              >
                Choose File
              </Button>
            )}
          </div>
          <div className="w-full grid gap-2 grid-cols-3 sm:grid-cols-5">
            {userData?.credential_photos?.map((url: string, index: number) => (
              <div key={index} className="w-full h-[15vh] relative group">
                <img
                  className="absolute w-full h-full"
                  src={url}
                  alt="uploaded"
                />
                <section className="hidden group-hover:flex backdrop-brightness-50 flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                  <div className="flex justify-end text-white cursor-pointer text-lg">
                    <AiOutlineClose onClick={() => handleRemoveFile(url)} />
                  </div>
                </section>
              </div>
            ))}
          </div>
        </article>
      </div>
      {errorMessage.other_documents && errorMessage.other_documents !== "" && (
        <div className="flex items-center mt-2 gap-2 text-gray-800">
          <ErrorIcon />
          <Typography className="p-0 text-sm">
            {errorMessage.other_documents}
          </Typography>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
