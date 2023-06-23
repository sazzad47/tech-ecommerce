import { Button, Typography } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import { MdDeleteForever } from "react-icons/md";
import { UserData } from "src/gd/pages/apply";
import ErrorIcon from "@mui/icons-material/Error";

const ImageUploader = ({
  setUserData,
  errorMessage,
  setErrorMessage,
  label,
  name,
}: {
  setUserData: Function;
  errorMessage: any;
  setErrorMessage: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  name: string;
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const newFiles = Array.from(fileList);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setUserData((prevData: UserData) => ({
        ...prevData,
        photo: files,
      }));
      setErrorMessage((prevMsg: any)=> ({...prevMsg, photo: ""}))
    }
  };

  const handleRemoveFile = (file: File) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
    URL.revokeObjectURL(URL.createObjectURL(file));
  };

  return (
    <>
      <label
        htmlFor="photo"
        className="block mb-3 text-sm font-semibold text-secondaryTheme"
      >
        {label}
      </label>
      <div className="w-full flex items-center justify-center">
        <article
          aria-label="File Upload Modal"
          className="min-h-[30vh] w-full p-3 sm-p-5 border border-dotted border-gray-500 flex flex-col items-center justify-center"
          onDrop={(event) => {
            event.preventDefault();
            const fileList = event.dataTransfer.files;
            const newFiles = Array.from(fileList);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
          }}
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
            <h3 className="text-xl text-secondaryTheme font-bold">
              Drag and drop images here or click to upload
            </h3>

            <Button
              id="button"
              variant="outlined"
              className="mt-2 w-1/2 capitalize focus:shadow-outline focus:outline-none"
              onClick={() => {
                const input = document.getElementById(
                  "hidden-input"
                ) as HTMLInputElement;
                input.click();
              }}
            >
              Upload images
            </Button>
          </div>
          <div className="w-full grid gap-2 grid-cols-3 sm:grid-cols-5">
            {files.map((item, index) => (
              <div key={index} className="w-full h-[15vh] relative group">
                <img
                  className="absolute w-full h-full"
                  src={URL.createObjectURL(item)}
                  alt="uploaded"
                />
                <section className="hidden group-hover:flex bg-black-100 flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                  <h1 className="flex-1 group-hover:text-secondaryTheme">
                    {item.name}
                  </h1>
                  <div className="flex justify-end text-secondaryTheme cursor-pointer text-lg">
                    <MdDeleteForever onClick={() => handleRemoveFile(item)} />
                  </div>
                </section>
              </div>
            ))}
          </div>
        </article>
      </div>
      {errorMessage.other_documents && errorMessage.other_documents !== "" && (
        <div className="flex items-center mt-2 gap-2 text-secondaryTheme">
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
