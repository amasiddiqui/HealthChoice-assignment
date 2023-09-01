import { makeStyles } from "@material-ui/core/styles";

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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default useStyles;
