import React from 'react'
import Logo from '../../media/google-drive-logo.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import "../../styles/Header.css"
import { Avatar } from '@material-ui/core';

function Header({ userPhoto }) {
    return (
        <div className="header" >
            <div className="header__logo">
                <img src={Logo} alt="Google Drive Logo" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search in Drive" />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>

                <AppsIcon />

                <img src="https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg" alt="" />
            </div>
        </div>
    )
}

export default Header
