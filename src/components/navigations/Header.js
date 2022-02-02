import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Avatar, Stack } from '@mui/material';
// import HomeScreen from '../../screens/pages/Home';
import { Search, Notifications } from '@mui/icons-material';
import { Avatar, Menu, MenuItem } from '@mui/material';
import '../../stylesheets/navbar.css';
import Image from '../../images/image.jpg';
import Flags from 'country-flag-icons/react/3x2';
import ListIcon from '@mui/icons-material/List';

// const drawerWidth = 170;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="flex text-gray-600 navbar py-5 px-10 flex-row w-full items-center justify-between">
        <div className="flex flex-row gap-5">
          <div className="xl:hidden block">
            <ListIcon />
          </div>

          <Search />
        </div>
        <div className="flex gap-5 mr-5 ">
          <Flags.US title="United States" onClick={handleClick} className="" />
          <Notifications className="cursor-pointer" />
          <Avatar src={Image} sx={{ width: '20px', height: '20px', cursor: 'pointer' }} />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
