import { IconButton, Tooltip } from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import filterSearch from "./filterSearch";

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterSearch({ location, navigate, search: searchTerm });
    // Handle form submission if needed
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form
        className="w-full text-inherit flex items-center justify-between"
        onSubmit={handleSubmit} // Added onSubmit handler to the form element
      >
        <div className="flex min-h-[3rem] flex-1 bg-blue-gradient items-center justify-between rounded-3xl h-10 pl-2">
          <div className="w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full min-h-full focus:outline-none border-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          {searchTerm && (
            <Tooltip title="Clear search">
              <IconButton
                className="focus:outline-none text-zinc-600 dark:text-slate-200"
                onClick={handleClearSearch}
              >
                <AiOutlineClose className="mx-1 p-1" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Search">
            <IconButton
              className="text-zinc-600 dark:text-slate-200 focus:outline-none h-full px-2 rounded-r-3xl flex items-center justify-end"
              type="submit" // Added type="submit" to trigger form submission
            >
              <AiOutlineSearch className="text-2xl" />
            </IconButton>
          </Tooltip>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
