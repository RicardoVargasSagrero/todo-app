import React from "react";
import "./TodoSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import { TodoContext } from "../TodoContext";
function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        value={searchValue}
      />
      <SearchIcon className="search-bar-icon" fontSize="large"></SearchIcon>
    </div>
  );
}

export { TodoSearch };
