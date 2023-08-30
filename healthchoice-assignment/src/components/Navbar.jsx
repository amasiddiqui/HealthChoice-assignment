import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "@mui/material/Menu";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Navbar = () => {
  const [LearnMore, setLearnMore] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEr1, setanchorEr1] = useState(null);
  const [anchorRCC, setanchorRCC] = useState(null);
  const [anchorFh, setanchorFh] = useState(null);
  const [anchorCp, setanchorCp] = useState(null);
  const [GetHelp, setGetHelp] = useState("");
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleLearnMore = (event) => {
    setLearnMore(event.target.value);
  };

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

  const handleCpOpenMenu = (event) => {
    setanchorCp(event.currentTarget);
  };

  const handleCpCloseMenu = () => {
    setanchorCp(null);
  };

  const handleGetHelp = (event) => {
    setGetHelp(event.target.value);
  };

  const handleGetHelpOpenMenu = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleGetHelpCloseMenu = () => {
    setAnchorEl2(null);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#014ab2" }}>
      <Toolbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 mt-3">
              <Typography
                variant="h5"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <span style={{ fontWeight: "bold", color: "white" }}>
                  Health
                </span>
                <span style={{ fontWeight: "lighter", color: "white" }}>
                  Choice
                </span>
              </Typography>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-1 text-right">
              <Button
                variant="h6 Text"
                color="white"
                className="mt-3 mx-3"
                style={{ textAlign: "right" }}
              >
                English
              </Button>
            </div>
            <div className="col-md-1 mx-3 p-3">
              <Button
                onClick={handleLearnMoreOpenMenu}
                variant="Text"
                color="primary"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ textAlign: "center" }}
              >
                Learn More
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
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
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
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      Tips about HealthChoice
                    </MenuItem>
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      Get Health insurance in 4 Steps
                    </MenuItem>
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      See 2023 Plans & Prices
                    </MenuItem>
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      Medicaid and CHIP Coverage
                    </MenuItem>
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      Submit Requested Documents
                    </MenuItem>
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      Special Enrollment Period
                    </MenuItem>
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      How to Pay Your Premium
                    </MenuItem>
                    <MenuItem onClick={handleEnrollmentCloseMenu} >
                      Who to include in Your Household
                    </MenuItem>
                  </Menu>
                </div>
                <div className="text text-primary">
                  <Button
                    onClick={handleRCCOpenMenu}
                    variant="Text"
                    
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
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
                    <MenuItem onClick={handleRCCCloseMenu} >
                      How to Shop for 2023
                    </MenuItem>
                    <MenuItem onClick={handleRCCCloseMenu} >
                      About Auto Renewal
                    </MenuItem>
                    <MenuItem onClick={handleRCCCloseMenu} >
                      Change Your Plan for 2022
                    </MenuItem>
                    <MenuItem onClick={handleRCCCloseMenu} >
                      Report Changes after RCC
                    </MenuItem>
                    <MenuItem onClick={handleRCCCloseMenu} >
                      Cancel Your Plan
                    </MenuItem>
                  </Menu>
                </div>
                <div className="text text-primary">
                  <Button
                    onClick={handleFhOpenMenu}
                    variant="Text"
                    
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
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
                    <MenuItem onClick={handleFhCloseMenu} >
                      Save on Your Premiums
                    </MenuItem>
                    <MenuItem onClick={handleFhCloseMenu} >
                      Cost Sharing Reductions
                    </MenuItem>
                    <MenuItem onClick={handleFhCloseMenu} >
                      High Deductible Health Plans
                    </MenuItem>
                    <MenuItem onClick={handleFhCloseMenu} >
                      Advanced Premium Tax Credits
                    </MenuItem>
                  </Menu>
                </div>
                <div className="text text-primary">
                  <Button
                    onClick={handleRCCOpenMenu}
                    variant="Text"
                    
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
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
                    <MenuItem onClick={handleCpCloseMenu} >
                      How to Pick a Plan
                    </MenuItem>
                    <MenuItem onClick={handleCpCloseMenu} >
                      Metal Categories
                    </MenuItem>
                    <MenuItem onClick={handleCpCloseMenu} >
                      Yearly Healthcare Cost
                    </MenuItem>
                    <MenuItem onClick={handleCpCloseMenu} >
                      Plan and Network Types
                    </MenuItem>
                    <MenuItem onClick={handleCpCloseMenu} >
                      Health Plan Quality Ratings
                    </MenuItem>
                  </Menu>
                </div>
              </Menu>
            </div>
            <div className="col-md-1 p-3 mx-3">
              <Button
                onClick={handleGetHelpOpenMenu}
                variant="Text"
                color="primary"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get Help
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
                <MenuItem onClick={handleGetHelpCloseMenu}>
                  Get Answers
                </MenuItem>
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
            </div>
            <div
              className="input-group rounded col-md-2 p-3 mx-1"
              style={{ alignItems: "center", width: "300px" }}
            >
              
              <input
                type="search"
                className="bi bi-search form-control rounded fa fa-search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
            <div
              className="col-md-1 p-3 mx-1"
              style={{  alignItems: "center", padding: "5px" }}
            >
              <Button
                variant="contained"
                className="bg bg-white text text-primary text-nowrap"
                style={{ align: "center" }}
              >
                Sign In
              </Button>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;