import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  filtersContainer: {
    background: "green",

    position: "relative",
    zIndex: 999,

  },
  menu: {
    position: "relative",
  },
  rangeSelect: {
    background: "rgb(255, 164, 180)",
    borderRadius: "0 0 5px 5px"
  },
  orderBySelect: {
    position: "absolute",
    zIndex: theme.zIndex.appBar,
    top: 0,
    minHeight: "fit-content",
    background: "rgb(255, 164, 180)",
    borderRadius: "0 0 5px 5px"
  },
  buttons: {
    border: "2px solid blue",
  }
}));

export default useStyles;
