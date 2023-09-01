import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import SignInButton from "./SignInButton";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "./CustomButton";
import menuData from "../Json/LearnMore";

const ButtonSx = {
  navbarButtonStyles: {
    textAlign: "center",
    whiteSpace: "nowrap",
    margin: "20px",
    color: "white",
  },
};
const useStyles = makeStyles((theme) => ({
  Stackroot: {
    "&button:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEr1, setanchorEr1] = useState(null);
  const [anchorRCC, setanchorRCC] = useState(null);
  const [anchorFh, setanchorFh] = useState(null);
  const [anchorCp, setanchorCp] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleLearnMoreOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLearnMoreCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEnrollmentOpenMenu = (event) => {
    setanchorEr1(event.currentTarget);
  };

  const handleEnrollmentCloseMenu = () => {
    setanchorEr1(null);
  };

  const handleRCCOpenMenu = (event) => {
    setanchorRCC(event.currentTarget);
  };

  const handleRCCCloseMenu = () => {
    setanchorRCC(null);
  };

  const handleFhOpenMenu = (event) => {
    setanchorFh(event.currentTarget);
  };

  const handleFhCloseMenu = () => {
    setanchorFh(null);
  };

  const handleCpCloseMenu = () => {
    setanchorCp(null);
  };

  const handleGetHelpOpenMenu = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleGetHelpCloseMenu = () => {
    setAnchorEl2(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#014ab2" }}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ margin: "20px" }}>
            <Typography
              variant="h5"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <span style={{ fontWeight: "bold", color: "white" }}>
                Health{" "}
              </span>{" "}
              <span style={{ fontWeight: "lighter", color: "white" }}>
                Choice{" "}
              </span>
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={1}>
            <Button
              variant="text"
              color="primary"
              style={{
                ...ButtonSx.navbarButtonStyles,
                marginLeft: "5px",
                marginRight: "0px",
              }}
            >
              English
            </Button>
          </Grid>
          <Grid item xs={1}>
            {/* <Button
              onClick={handleLearnMoreOpenMenu}
              variant="text"
              style={{
                ...ButtonSx.navbarButtonStyles,
                marginLeft: "0px",
                marginRight: "16px",
              }}
              className={classes.button}
              elevation={3}
            >
              Learn More
              <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLearnMoreCloseMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <div className="text text-primary">
                <Button
                  onClick={handleEnrollmentOpenMenu}
                  variant="Text"
                  color="primary"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  style={{ textAlign: "center" }}
                >
                  Enrollment
                  <ArrowRightIcon />
                </Button>
                <Menu
                  anchorEl={anchorEr1}
                  open={Boolean(anchorEr1)}
                  onClose={handleEnrollmentCloseMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    Tips about HealthChoice
                  </MenuItem>
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    Get Health insurance in 4 Steps
                  </MenuItem>
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    See 2023 Plans & Prices
                  </MenuItem>
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    Medicaid and CHIP Coverage
                  </MenuItem>
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    Submit Requested Documents
                  </MenuItem>
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    Special Enrollment Period
                  </MenuItem>
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    How to Pay Your Premium
                  </MenuItem>
                  <MenuItem onClick={handleEnrollmentCloseMenu}>
                    Who to include in Your Household
                  </MenuItem>
                </Menu>
              </div>
              <div className="text text-primary">
                <Button
                  onClick={handleRCCOpenMenu}
                  variant="Text"
                  color="primary"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  style={{ textAlign: "center" }}
                >
                  Review Change or Cancel
                  <ArrowRightIcon />
                </Button>
                <Menu
                  anchorEl={anchorRCC}
                  open={Boolean(anchorRCC)}
                  onClose={handleRCCCloseMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleRCCCloseMenu}>
                    How to Shop for 2023
                  </MenuItem>
                  <MenuItem onClick={handleRCCCloseMenu}>
                    About Auto Renewal
                  </MenuItem>
                  <MenuItem onClick={handleRCCCloseMenu}>
                    Change Your Plan for 2022
                  </MenuItem>
                  <MenuItem onClick={handleRCCCloseMenu}>
                    Report Changes after RCC
                  </MenuItem>
                  <MenuItem onClick={handleRCCCloseMenu}>
                    Cancel Your Plan
                  </MenuItem>
                </Menu>
              </div>
              <div className="text text-primary">
                <Button
                  onClick={handleFhOpenMenu}
                  variant="Text"
                  color="primary"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  style={{ textAlign: "center" }}
                >
                  Financial Help
                  <ArrowRightIcon />
                </Button>
                <Menu
                  anchorEl={anchorFh}
                  open={Boolean(anchorFh)}
                  onClose={handleFhCloseMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleFhCloseMenu}>
                    Save on Your Premiums
                  </MenuItem>
                  <MenuItem onClick={handleFhCloseMenu}>
                    Cost Sharing Reductions
                  </MenuItem>
                  <MenuItem onClick={handleFhCloseMenu}>
                    High Deductible Health Plans
                  </MenuItem>
                  <MenuItem onClick={handleFhCloseMenu}>
                    Advanced Premium Tax Credits
                  </MenuItem>
                </Menu>
              </div>
              <div className="text text-primary">
                <Button
                  onClick={handleRCCOpenMenu}
                  variant="Text"
                  color="primary"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  style={{ textAlign: "center" }}
                >
                  Choosing a Plan
                  <ArrowRightIcon />
                </Button>
                <Menu
                  anchorEl={anchorCp}
                  open={Boolean(anchorCp)}
                  onClose={handleCpCloseMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleCpCloseMenu}>
                    How to Pick a Plan
                  </MenuItem>
                  <MenuItem onClick={handleCpCloseMenu}>
                    Metal Categories
                  </MenuItem>
                  <MenuItem onClick={handleCpCloseMenu}>
                    Yearly Healthcare Cost
                  </MenuItem>
                  <MenuItem onClick={handleCpCloseMenu}>
                    Plan and Network Types
                  </MenuItem>
                  <MenuItem onClick={handleCpCloseMenu}>
                    Health Plan Quality Ratings
                  </MenuItem>
                </Menu>
              </div>
            </Menu> */}
            {menuData.map((menuItem, index) => (
              <CustomButton
                key={index}
                title={menuItem.title}
                submenu={menuItem.submenu}
              />
            ))}
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={handleGetHelpOpenMenu}
              variant="text"
              style={{
                ...ButtonSx.navbarButtonStyles,
                marginLeft: "20px",
                marginRight: "16px",
              }}
              elevation={3}
            >
              Get Help
              <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={handleGetHelpCloseMenu}
            >
              <MenuItem onClick={handleGetHelpCloseMenu}>
                Start Live Chat
              </MenuItem>
              <MenuItem onClick={handleGetHelpCloseMenu}>
                Trouble Signing in
              </MenuItem>
              <MenuItem onClick={handleGetHelpCloseMenu}>Get Answers</MenuItem>
              <MenuItem onClick={handleGetHelpCloseMenu}>
                Find Local Help
              </MenuItem>
              <MenuItem onClick={handleGetHelpCloseMenu}>
                Marketplace Application Checklist
              </MenuItem>
              <MenuItem onClick={handleGetHelpCloseMenu}>
                Appeal Marketplace Decision
              </MenuItem>
              <MenuItem onClick={handleGetHelpCloseMenu}>Glossary</MenuItem>
            </Menu>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{ margin: "20px", marginLeft: "30px", marginRight: "10px" }}
          >
            <SearchBar />
          </Grid>
          <Grid item xs={1}>
            <SignInButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
