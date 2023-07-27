import React, { useState } from "react";
import itContact from "../../../assets/itcontact.jpg";
import { Typography, Grid } from "@mui/material";

const Contact = () => {
  const initState = {
    name: "",
    email: "",
    contactNumber: "",
    printCategory: "",
    artworkReady: "",
    quantity: "",
    message: "",
  };

  const [formData, setFormData] = useState<any>(initState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          style={{ transform: "translateX(-50%)" }}
          className="absolute -top-[1px] left-0 hidden h-full text-white  lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z"></path>
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={itContact}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="bg-white text-gray-900 text-center mx-4 p-8 rounded shadow-md w-full md:w-[490px]">
          <form onSubmit={handleSubmit}>
            <Typography className="font-bold text-3xl mb-2">
              Get in touch
            </Typography>
            <Typography>Get a quote in as fast as 3 working hours!</Typography>
            <Grid container spacing={2} className="text-gray-900 mt-5">
              <Grid item xs={12}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                />
              </Grid>

              <Grid item xs={12}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="min-h-[5rem] w-full outline-none bg-pink-100 border-0 px-3 py-3"
                />
              </Grid>
              <Grid item xs={12}>
                <button
                  type="submit" // Important: Set the button type to 'submit' to trigger form submission
                  className="mb-2 cursor-pointer inline-block rounded bg-fuchsia-900 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Send
                </button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
