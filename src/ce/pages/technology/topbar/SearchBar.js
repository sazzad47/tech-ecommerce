import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="flex items-center justify-center min-w-full">
      <form
        className="w-full text-inherit flex items-center justify-between"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex min-h-[3rem] flex-1 bg-blue-gradient items-center justify-between rounded-3xl h-10 pl-2">
          <div className="w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full min-h-full focus:outline-none border-none"
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm && (
            <Tooltip title="Clear search">
              <IconButton
                className="focus:outline-none text-zinc-600 dark:text-slate-200"
                onClick={() =>  setSearchTerm("")}
              >
                <AiOutlineClose className="mx-1 p-1" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Search">
            <IconButton className="text-zinc-600 dark:text-slate-200 focus:outline-none h-full px-2 rounded-r-3xl flex items-center justify-end">
              <AiOutlineSearch className="text-2xl" />
            </IconButton>
          </Tooltip>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
