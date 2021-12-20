import { Link } from "react-router-dom";
import { useState } from "react";
import StyledNavigationHeader from "./Header.styled";

// MUI COMPONENTS
import {
  Menu,
  MenuItem,
  // ListItemIcon,
} from "@mui/material";

// MUI ICONS
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { routeMapper } from "../../routes";
import Logo from "../../../../components/Logo";
import UserAvatar from "../../../../components/UserAvatar";
// import UserAvatar from "../../../../shared/components/UserAvatar";

/**
 * @description Navigation header
 * @returns
 */
export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // MIDDLE LINKS
  const middleLinks = [
    {
      path: routeMapper.home,
      label: "Buy Crypto",
      attributes: {
        className: "bg-warning",
      },
    },
    {
      path: routeMapper.home,
      label: "Market",
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: "Spot",
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <>
          <div className="flex gap-[10px]" onClick={handleClick}>
            <span>Derivative</span>
            <WhatshotIcon />

            <KeyboardArrowDownIcon />
          </div>
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
        </>
      ),
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <>
          <div className="flex gap-[10px]" onClick={handleClick}>
            <span>ByFi Center</span>
            <KeyboardArrowDownIcon />
            <span className="icon-coins-dether-dth"></span>
          </div>
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
        </>
      ),
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <>
          <div className="flex gap-[10px]" onClick={handleClick}>
            <span>More</span>
            <KeyboardArrowDownIcon />
          </div>
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
        </>
      ),
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <>
          <div className="flex gap-[10px]" onClick={handleClick}>
            <span>BITUSDT</span>
            <KeyboardArrowDownIcon />
          </div>
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
        </>
      ),
      attributes: {
        className: "",
      },
    },
  ];

  // RIGHT SIDE LINKS
  const rightLinks = [
    {
      path: routeMapper.home,
      label: (
        <div className="flex gap-[10px]">
          <span>Assets</span>
          <KeyboardArrowDownIcon />
        </div>
      ),
      attributes: {
        className: "",
      },
    },
    // ORDERS AND TRADE
    {
      path: routeMapper.home,
      label: (
        <div className="flex gap-[10px]">
          <span>Orders & Trades</span>
          <KeyboardArrowDownIcon />
        </div>
      ),
      attributes: {
        className: "",
      },
    },
    // LANGUAGE SELECTION
    {
      path: routeMapper.home,
      label: (
        <div className="flex gap-[10px]">
          <span>EN/USD</span>
          <KeyboardArrowDownIcon />
        </div>
      ),
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <div className="">
          <span>Scan QRcode</span>
        </div>
      ),
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <div className="">
          <span>Notification</span>
        </div>
      ),
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <div className="">
          <span>Wallet</span>
        </div>
      ),
      attributes: {
        className: "",
      },
    },
    {
      path: routeMapper.home,
      label: (
        <figure className="">
          <UserAvatar />
        </figure>
      ),
      attributes: {
        className: "",
      },
    },
  ];

  return (
    <>
      {/* header  */}
      <StyledNavigationHeader dark>
        {/* LOGO */}
        <figure>
          <Logo />
        </figure>

        <ul className="middle-nav">
          {middleLinks.map(({ path, attributes, label }, idx) => (
            <li
              key={idx}
              {...{ className: `nav-link ${attributes?.className}` }}
            >
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>

        <ul className="right-nav">
          {rightLinks.map(({ path, attributes, label }, idx) => (
            <li key={idx} className="nav-link">
              <Link to={path} {...attributes}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </StyledNavigationHeader>
    </>
  );
}
