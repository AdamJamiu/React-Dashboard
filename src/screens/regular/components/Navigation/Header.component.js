import { Link } from "react-router-dom";
import { useState } from "react";

// MUI COMPONENTS
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  // ListItemIcon,
} from "@mui/material";

// HELPERS
import { routeMapper } from "../../routes";
import DropDown from "../../../../components/DropDown";

// CUSTOM STYLED COMPONENTS
import Logo from "../../../../components/Logo";
import UserMenu from "../../../../components/UserMenu";
import StyledNavigationHeader from "./Header.styled";

// ASSETS
import ScanQRCodeIcon from "../../../../images/svg/icon-font/ScanQR.svg";
import BellIcon from "../../../../images/svg/icon-font/bell.svg";
import HotjarIcon from "../../../../images/svg/icon-font/flame.svg";
import SVGIcon from "../../../../components/SVGIcon";
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
    // Buy Crypto
    {
      path: routeMapper.home,
      label: <Link to={"#"}>Buy Crypto</Link>,
      highlight: true,
      attributes: {
        "data-highlight": true,
      },
    },
    // Market
    {
      path: routeMapper.home,
      label: <Link to="#">Market</Link>,
      attributes: {},
    },
    // Spot
    {
      path: routeMapper.home,
      label: <Link to="#">Spot</Link>,
      attributes: {
        className: "",
      },
    },
    // DERIVATIVE
    {
      path: routeMapper.home,
      label: (
        <>
          <DropDown showIcon items={[<Link to="#">Get derivatives</Link>]}>
            <Link to="#">
              Derivative
              <SVGIcon src={HotjarIcon} className="icon" alt="hotjar icon" />
            </Link>
          </DropDown>
        </>
      ),
      attributes: {
        className: "",
      },
    },
    // ByFi Center
    {
      path: routeMapper.home,
      label: (
        <>
          <DropDown
            showIcon
            items={[<Link to="#">Enter the ByFi center</Link>]}
          >
            <Link to={routeMapper.home}>
              <span> ByFi Center</span>
            </Link>
          </DropDown>
        </>
      ),
      attributes: {
        className: "",
      },
    },
    // More
    {
      path: routeMapper.home,
      label: (
        <>
          <DropDown showIcon>
            <Link to={routeMapper.home}>More</Link>
          </DropDown>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>More</MenuItem>
            <MenuItem onClick={handleClose}>Get more here</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </>
      ),
      attributes: {
        className: "",
      },
    },
    // BITUSDT
    {
      path: routeMapper.home,
      label: (
        <>
          <Link
            to={routeMapper.home}
            className="flex items-center gap-[2px]"
            onClick={handleClick}
          >
            <span>BITUSDT</span>
            <SVGIcon src={HotjarIcon} className="icon" alt="hotjar icon" />
          </Link>
        </>
      ),
      attributes: {
        className: "",
      },
    },
  ];

  // RIGHT SIDE LINKS
  const rightLinks = [
    // ASSETTS
    {
      path: routeMapper.home,
      label: (
        <DropDown showIcon>
          <Link to={"#"}>
            <span>Assets</span>
          </Link>
        </DropDown>
      ),
      attributes: {
        className: "",
      },
    },
    // ORDERS AND TRADE
    {
      path: routeMapper.home,
      label: (
        <DropDown showIcon>
          <Link to={"#"}>
            <span>Orders & Trades</span>
          </Link>
        </DropDown>
      ),
      attributes: {
        className: "",
      },
    },
    // LANGUAGE SELECTION
    {
      path: routeMapper.home,
      label: (
        <DropDown showIcon items={[<>Korean</>, <>English</>]}>
          <Link to={"#"}>
            <span>EN/USD</span>
          </Link>
        </DropDown>
      ),
      attributes: {
        className: "",
      },
    },
    // SCAN QR CODE
    {
      path: routeMapper.home,
      label: (
        <div className="p-2">
          <IconButton aria-label="scan QR code">
            <img src={ScanQRCodeIcon} alt="" />
          </IconButton>
        </div>
      ),
      attributes: {
        className: "",
      },
    },
    // NOTIFICATION
    {
      path: routeMapper.home,
      label: (
        <IconButton aria-label="notification">
          <img src={BellIcon} alt="bell-icon" />
        </IconButton>
      ),
      attributes: {
        className: "",
      },
    },
    // WALLET
    {
      path: routeMapper.home,
      label: (
        <Button variant="outlined" className="" sx={{ borderRadius: 15 }}>
          <span>Wallet</span>
        </Button>
      ),
      attributes: {
        className: "",
      },
    },
    // AVATAR
    {
      path: routeMapper.home,
      label: <UserMenu />,
      attributes: {
        className: "",
      },
    },
  ];

  return (
    <>
      {/* header  */}
      <StyledNavigationHeader>
        {/* LOGO */}
        <figure className="logo-container">
          <Logo />
        </figure>

        <ul className="middle-nav">
          {middleLinks.map(({ path, highlight, label }, idx) => (
            <li
              key={idx}
              className={`nav--link ${highlight ? "highlighted" : ""}`}
            >
              {label}
            </li>
          ))}
        </ul>

        <ul className="right-nav">
          {rightLinks.map(({ path, attributes, label }, idx) => (
            <li key={idx} className="nav--link">
              {label}
            </li>
          ))}
        </ul>
      </StyledNavigationHeader>
    </>
  );
}
