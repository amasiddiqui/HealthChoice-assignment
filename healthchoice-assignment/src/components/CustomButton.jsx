import React, { useState, useRef, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = ({ title, url, submenu }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnchorEl(ref.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMenuClose = () => {
    if (!isHovered) {
      setAnchorEl(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsHovered(false);

        setAnchorEl(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleMouseEnter} // Open the menu on click as well
      >
        {title}
      </Button>

      {submenu && submenu.length > 0 && (
        <Menu
          anchorEl={anchorEl}
          open={isHovered}
          onClose={handleMenuClose}
          getContentAnchorEl={null}
          anchorOrigin={
            submenu.length > 1
              ? {
                  vertical: "bottom",

                  horizontal: "right",
                }
              : {
                  vertical: "bottom",

                  horizontal: "left",
                }
          }
        >
          {submenu.map((item, index) => (
            <MenuItem key={index}>
              {item.submenu ? (
                <CustomButton
                  title={item.title}
                  url={"../Json/LearnMore"} // Pass the parent menu item's URL
                  submenu={item.submenu}
                />
              ) : (
                <Link to={item.url}>{item.title}</Link>
              )}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default CustomButton;
