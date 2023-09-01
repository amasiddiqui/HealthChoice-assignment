
import React from "react";
import { Grid } from "@material-ui/core";
import homeImg from "../images/home_img.png";
import ReusableButton from "./ReusableButton";
import useStyles from "./HomePageStyles"; // Import the styles from the separate file

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <img src={homeImg} alt="Home" className={classes.image} />
        </Grid>
        <Grid item md={5} className={classes.middleColumn}>
          <div className={`${classes.textContainer} ${classes.paddingTop}`}>
            <div>
              <span className={classes.blueText} style={{ fontSize: 28 }}>
                <strong>Health</strong>Choice
              </span>
              <span style={{ fontSize: 18 }}> by Deloitte</span>
            </div>
            <div>
              <span style={{ fontSize: 24 }}>
                The best place to find affordable, quality Health Insurance
              </span>
            </div>
            <div>
              <span>Welcome to HealthChoice.</span>
              <span>
                <a style={{ textDecoration: "none" }} href="/apply">
                  {" "}
                  Apply and Enroll
                </a>{" "}
                to see eligible plans and if you qualify for financial help,
                free or low-cost coverage. You can also use our{" "}
                <a style={{ textDecoration: "none" }} href="/browse">
                  Browse and Compare
                </a>{" "}
                feature to get quick estimates. Transferring from HealthCare.gov
                or VA DMAS?{" "}
                <a style={{ textDecoration: "none" }} href="/claim">
                  Claim your transferred application
                </a>
              </span>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <ReusableButton
              bVariant="contained"
              bClassName={`${classes.button} ${classes.solidButton}`}
              title="Apply and Enroll"
            />
            <ReusableButton
              bVariant="outlined"
              bClassName={classes.button}
              title="Browse and Compare"
            />
            <ReusableButton
              bVariant="outlined"
              bClassName={classes.button}
              title="Transfer from Healthcare.gov or Medicaid Program"
            />
          </div>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
