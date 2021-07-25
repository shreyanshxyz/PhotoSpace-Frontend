import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    height: "70px",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    fontWeight: "bold",
    color: "black",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    paddingRight: "30px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  logout: {
    borderRadius: "0",
    color: "white",
    backgroundColor: "red",
  },
}));
