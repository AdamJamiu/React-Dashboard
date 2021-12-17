import React from "react";

// Material Ui Components
import {
  Stack,
  Box,
  Typography,
  Menu,
  MenuItem,
  // ListItemIcon,
} from "@mui/material";
import "../css/index.css";

// Material Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatshotIcon from "@mui/icons-material/Whatshot";

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
      {/* header  */}
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        bgcolor="var(--onSurface)"
        color="#fff"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bolder">
            BLOCK-STARS
          </Typography>
          <Typography className="nav-link" variant="p">
            Buy Crypto
          </Typography>
          <Typography className="nav-link" variant="p">
            Market
          </Typography>
          <Typography className="nav-link" variant="p">
            Spot
          </Typography>

          <Box className="navIcon">
            <Typography className="nav-link" variant="p" onClick={handleClick}>
              Deviratives
              <WhatshotIcon/>
              <KeyboardArrowDownIcon/>
            </Typography>
          </Box>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <Stack alignItems="center" className="navIcon">
            <Typography className="nav-link" variant="p" onClick={handleClick}>
              ByFi Center
              <KeyboardArrowDownIcon/>
            </Typography>
          </Stack>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <Typography
            className="nav-link"
            variant="p"
            onClick={handleClick}
          >
            
          </Typography>

          

          
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography className="nav-link">gmbfaejhf</Typography>
          <Typography>d,jhajk</Typography>
          <Typography>dn,b</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Navbar;
