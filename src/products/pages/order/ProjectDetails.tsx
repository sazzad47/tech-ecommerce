import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { menus } from "../technology/topbar/menus";
import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

const ProjectDetails = () => {

  const fileURL =
  "https://drive.google.com/file/d/1-v9NDQh1rlmLwNvRC5DClHcN6sadqgbF/view?usp=sharing";

  const [category, setCategory] = useState<string>("");

  const categories = menus.map((item, index) => (
    <SelectItem key={index} value={item.title || ""}>
      {item.title}
    </SelectItem>
  ));

  const subCategories = menus
    .find((item) => item.title === category)
    ?.submenus?.map((item, index) => (
      <SelectItem key={index} value={item.title || ""}>
        {item.title}
      </SelectItem>
    ));

  return (
    <div className={`bg-primaryTheme text-secondaryTheme`}>
      <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div className="flex flex-col md:w-full">
          <form className="justify-center w-full mx-auto" method="post">
          <div className="">
                    <div className="space-x-0 space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                      <div className="w-full lg:w-1/2">
                        <label
                          htmlFor="firstName"
                          className="block mb-3 text-sm font-semibold text-secondaryTheme"
                        >
                          Choose category
                        </label>
                        <Select onValueChange={setCategory}>
                          <SelectTrigger className="w-full bg-black-gradient-2">
                            <SelectValue placeholder="Categories" />
                          </SelectTrigger>
                          <SelectContent>{categories}</SelectContent>
                        </Select>
                      </div>
                      <div className="w-full lg:w-1/2 ">
                        <label
                          htmlFor="firstName"
                          className="block mb-3 text-sm font-semibold text-secondaryTheme"
                        >
                          Choose your product
                        </label>
                        <Select disabled={!category}>
                          <SelectTrigger className="w-full bg-black-gradient-2">
                            <SelectValue placeholder="Products" />
                          </SelectTrigger>
                          <SelectContent>
                            {subCategories}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
               
               
                <div className="w-full mt-4">
                  <div className="w-full">
                    <ul className="flex flex-col gap-3 text-secondaryTheme">
                      <li className="flex items-center gap-3">
                        <BsInfoCircleFill /> Download this file and upload it in
                        the following box after filling it out.
                      </li>
                      <li>
                        <button
                          onClick={() => window.open(fileURL, "_blank")}
                          className="flex items-center gap-3 px-4 py-3 bg-btn-gradient"
                        >
                          {" "}
                          <AiFillEye /> View file
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="block mb-3 text-sm font-semibold text-secondaryTheme">
                    Upload
                  </div>
                  <label className="block">
                    <span className="sr-only">Upload your file</span>
                    <input
                      type="file"
                      className=" block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0 file:h-[3rem] file:cursor-pointer
                    file:text-sm file:font-semibold
                    file:bg-gray-900 file:text-white
                    hover:file:bg-gray-900/2 bg-btn-gradient cursor-pointer rounded-md text-secondaryTheme h-[3rem]"
                    />
                  </label>
                </div>
                <div className="relative pt-3 xl:pt-6">
                  <label
                    htmlFor="note"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Describe your order
                  </label>
                  <textarea
                    name="note"
                    className="flex items-center bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                    rows={4}
                    placeholder="Describe your order"
                  ></textarea>
                </div>
                <div className="w-full mt-4">
                  <label
                    htmlFor="postcode"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Demo URL
                  </label>
                  <input
                    name="postcode"
                    type="text"
                    placeholder="Enter demo URL"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                  />
                </div>
                <div className="w-full mt-4">
                  <label
                    htmlFor="postcode"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Delivery Date
                  </label>
                  <input
                    name="postcode"
                    type="text"
                    placeholder="Enter delivery date"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                  />
                </div>
                <div className="mt-4">
                  <div className="block mb-3 text-sm font-semibold text-secondaryTheme">
                    Additional File
                  </div>
                  <label className="block">
                    <span className="sr-only">Upload your file</span>
                    <input
                      type="file"
                      className=" block w-full text-sm 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0 file:h-[3rem] file:cursor-pointer
                    file:text-sm file:font-semibold
                    file:bg-gray-900 file:text-white
                    hover:file:bg-gray-900/2 bg-btn-gradient cursor-pointer rounded-md text-secondaryTheme h-[3rem]"
                    />
                  </label>
                </div>
            <div className="flex items-center mt-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions.
                    </label>
                  </div>
                </div>
              </div>
            <div className="mt-4">
              <Button className="w-full">Process</Button>
            </div>
          </form>
        </div>
      </div>
   </div>
  );
};

export default ProjectDetails;
