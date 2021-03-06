import React from 'react'
import './Header.css'
// import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosSharp';
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Header() {

  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header" >
      <div className="header_arrowContainer">
        <ArrowBackIcon  className="backArrow" />
        <ArrowForwardIcon  className="forwardArrow" />
      </div>

      {/* <div className="header__left">
        <SearchIcon />
        <input 
        placeholder="Search for Artists, Songs, or Podcasts "
        type="text"
        />
      </div> */}

      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
        <ArrowDropDownIcon />
      </div>
    </div>
  )
}

export default Header