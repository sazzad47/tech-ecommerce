import styles from "../../style";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Button } from "../../components/ui/button";

const Order = () => {
  const fileURL =
    "https://drive.google.com/file/d/1-v9NDQh1rlmLwNvRC5DClHcN6sadqgbF/view?usp=sharing";
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <div className="">
        <h1 className={`flex items-center justify-center ${styles.heading2}`}>
          Order
        </h1>
      </div>
      <div className="">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <form className="justify-center w-full mx-auto" method="post">
              <div className="">
                <div className="mt-4">
                  <div className="space-x-0 space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block mb-3 text-sm font-semibold text-secondaryTheme"
                      >
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 "
                      />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label
                        htmlFor="firstName"
                        className="block mb-3 text-sm font-semibold text-secondaryTheme"
                      >
                        Last Name
                      </label>
                      <input
                        name="Last Name"
                        type="text"
                        placeholder="Last Name"
                        className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="Email"
                        className="block mb-3 text-sm font-semibold text-secondaryTheme"
                      >
                        Email
                      </label>
                      <input
                        name="Last Name"
                        type="text"
                        placeholder="Email"
                        className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="space-x-0 space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                      <div className="w-full lg:w-1/2">
                        <label
                          htmlFor="firstName"
                          className="block mb-3 text-sm font-semibold text-secondaryTheme"
                        >
                          Choose category
                        </label>
                        <Select>
                          <SelectTrigger className="w-full bg-black-gradient-2">
                            <SelectValue placeholder="Sort" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Newest">Newest</SelectItem>
                            <SelectItem value="Oldest">Oldest</SelectItem>
                            <SelectItem value="Best Seller">
                              Best Seller
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-full lg:w-1/2 ">
                        <label
                          htmlFor="firstName"
                          className="block mb-3 text-sm font-semibold text-secondaryTheme"
                        >
                          Choose your product
                        </label>
                        <Select>
                          <SelectTrigger className="w-full bg-black-gradient-2">
                            <SelectValue placeholder="Sort" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Newest">Newest</SelectItem>
                            <SelectItem value="Oldest">Oldest</SelectItem>
                            <SelectItem value="Best Seller">
                              Best Seller
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
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
                  <div className="w-full">
                    <ul className="flex flex-col gap-3 text-secondaryTheme">
                      <li className="flex items-center gap-3">
                        <BsInfoCircleFill /> Download this file and upload it in
                        the following box after filling it out.
                      </li>
                      <li
                      >
                        <button onClick={() => window.open(fileURL, "_blank")} className="flex items-center gap-3 px-4 py-3 bg-btn-gradient"> <AiFillEye/> View file</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                <div
                   
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
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
                    placeholder="Post Code"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                  />
                </div>
                <div className="mt-4">
                  <Button className="w-full">Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
