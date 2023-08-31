import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Twitter, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(4),
    backgroundColor: "#014ab2",
    textAlign: "left",
  },
  inlineText: {
    display: "inline", // Keep the text inline
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(),
    // Align icons to the right
  },
  customButton: {
    backgroundColor: "blue",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: "#014ab2",
      fontSize: "15px", // Increase font size when hovered
    },

    textTransform: "none", // Apply lowercase text transformation
    transition: "font-size 0.2s", // Add transition effect for smooth font-size change
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={1}>
          {/* First Column */}
          <Grid item xs={2}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Button className={classes.customButton} variant="Text">
                  <Typography
                    variant="body1"
                    style={{ textTransform: "none", color: "white" }}
                  >
                    <span className={classes.inlineText}>
                      <strong>Health</strong>Choice
                      <sup>
                        <small>TM</small>
                      </sup>
                    </span>
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Logo placeholder
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Second Column: icons */}
          <Grid item xs={1.5}>
            <Grid container spacing={0} alignItems="center">
              <Grid item>
                <FacebookIcon
                  style={{ padding: "2px", color: "white", fontSize: "25px" }}
                />
                <Twitter
                  style={{ padding: "2px", color: "white", fontSize: "25px" }}
                />
                <YouTube
                  style={{ padding: "2px", color: "white", fontSize: "25px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* icons code end */}
          {/* Third Column */}
          <Grid item xs={2.05}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Customer Resources
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Other Policies
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Fourth Column */}
          <Grid item xs={1.25}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  FAQ's
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  About Us
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Fifth Column */}
          <Grid item xs={1.25}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Glossary
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Careers
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Sixth Column */}
          <Grid item xs={2.5}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Nondiscrimination
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Language Resources
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Seventh Column */}
          <Grid item xs={1.45}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Button
                  className={classes.customButton}
                  variant="Text"
                  style={{ textTransform: "none", color: "white" }}
                >
                  Privacy Policy
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
