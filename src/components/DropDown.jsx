import PropTypes from "prop-types";
import { useState } from "react";
import {
  Menu,
  MenuItem,
  // ListItemIcon,
} from "@mui/material";
import ChevronDown from "../images/svg/icon-font/chevron-down.svg";
import SVGIcon from "./SVGIcon";

/**
 *
 * @param {Object} props
 * @param {Object | null} props.children
 * @param {Array | []} props.items
 * @returns
 */
export default function DropDown({ children, items, showIcon }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button className="flex items-center" onClick={handleOpen}>
        {children}{" "}
        {showIcon && items?.length ? (
          <SVGIcon src={ChevronDown} className="icon" alt="chevron-down icon" />
        ) : null}
      </button>
      {items?.length ? (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {items.map((item, idx) => (
            <MenuItem key={idx} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      ) : null}
    </>
  );
}

DropDown.defaultProps = {
  children: null,
  items: [],
  showIcon: false,
};

DropDown.propTypes = {
  children: PropTypes.any,
  items: PropTypes.arrayOf(PropTypes.any),
  showIcon: PropTypes.bool,
};
