import { Checkbox } from "../../components/ui/checkbox";
import { countries } from "countries-list";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactInfo = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const getAllCountries = () => {
    const countryNames = Object.values(countries).map(
      (country) => country.name
    );
    return countryNames;
  };

  const countryArray = getAllCountries();

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
              <div className="mt-4 space-x-0 space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="email"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 "
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Phone
                  </label>
                  <PhoneInput
                    country={"us"}
                    inputClass="phone-input"
                    dropdownClass="phone-input-dropdown"
                    enableSearch={true}
                  />
                </div>
              </div>
              <div className="mt-4 space-x-0 space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Select country
                  </label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full h-[2.8rem] hover:text-secondaryTheme justify-between bg-black-gradient-2 px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm outline-none focus:ring-1 focus:ring-gray-600"
                      >
                        {value ? value : "Select country..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          {countryArray.map((country) => (
                            <CommandItem
                              key={country}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === country
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {country}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    State/Province
                  </label>
                  <input
                    name=""
                    type="text"
                    placeholder="Enter you state/province"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div className="mt-4 space-x-0 space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    City
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Enter your city"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 "
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Post Code
                  </label>
                  <input
                    name="Last Name"
                    type="text"
                    placeholder="Enter your post code"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <label
                    htmlFor="Address"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Address
                  </label>
                  <textarea
                    className="bg-black-gradient-2 w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                    name="Address"
                    cols={20}
                    rows={4}
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Save this information for the next time.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
