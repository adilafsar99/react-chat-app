import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: "#df4830",
    "&:hover": {
      backgroundColor: "#df4830"
    },
  },
  container: {
    marginTop: "5px"
  },
  avatar: {
    position: "relative",
    right: "10px"
  }
}))

export {useStyles};