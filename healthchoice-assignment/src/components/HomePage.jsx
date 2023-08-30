import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import homeImg from "../images/home_img.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    height: "100vh",
  },
  image: {
    width: "100%",
  },
  middleColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
  blueText: {
    color: "#014ab2",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: theme.spacing(2),
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    width: "100%",
    color: "#014ab2",
    borderColor: "#014ab2",
    height: "32px",
    "&:hover": {
      backgroundColor: "darkblue",
      color: "white",
    },
  },
  solidButton: {
    backgroundColor: "#014ab2",
    color: "white",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  paddingTop: {
    paddingTop: theme.spacing(2), // Add padding top to col-md-5 content
    paddingBottom: theme.spacing(2), // Add padding bottom to col-md-5 content
  },
}));

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
                <a style={{ textDecoration: 'none' }} href="/apply"> Apply and Enroll</a> to see eligible plans and
                if you qualify for financial help, free or low-cost coverage.
                You can also use our <a style={{ textDecoration: 'none' }} href="/browse">Browse and Compare</a>{" "}
                feature to get quick estimates. Transferring from HealthCare.gov
                or VA DMAS?{" "}
                <a style={{ textDecoration: 'none' }} href="/claim">Claim your transferred application</a>
              </span>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={`${classes.button} ${classes.solidButton}`}
            >
              Apply and Enroll
            </Button>
            <Button variant="outlined" className={classes.button}>
              Browse and Compare
            </Button>
            <Button variant="outlined" className={classes.button}>
              Transfer from Healthcare.gov or Medicaid Program
            </Button>
          </div>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </div>
  );
};

export default HomePage;