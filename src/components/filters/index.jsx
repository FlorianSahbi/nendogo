import React, { useState } from "react";
import useStyles from "./style";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

import { FiltersNendoroids } from "../../globalStates/useFilters";

const Filters = () => {
  // HOOKS
  const {
    name,
    setName,
    range: { min, max },
    setRange,
    orderBy,
    setOrderBy
  } = FiltersNendoroids.useContainer();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  // FUNCTIONS
  const handleClickAway = () => {};

  const RangeSelect = ({ onChange }) => {
    const ranges = [
      { name: "000~100", min: 0, max: 100 },
      { name: "101~200", min: 101, max: 200 },
      { name: "201~300", min: 201, max: 300 },
      { name: "301~400", min: 301, max: 400 },
      { name: "401~500", min: 401, max: 500 },
      { name: "501~600", min: 501, max: 600 },
      { name: "601~700", min: 601, max: 700 },
      { name: "701~800", min: 701, max: 800 },
      { name: "801~900", min: 801, max: 900 },
      { name: "901~1000", min: 901, max: 1000 },
      { name: "1001~1100", min: 1001, max: 1100 },
      { name: "1101~1200", min: 1101, max: 1200 },
      { name: "1201~1300", min: 1201, max: 1300 },
      { name: "All", min: 0, max: 2000 }
    ];
    const handleClick = (min, max) => {
      onChange();
      setRange({ min, max });
    };
    return (
      <Grid container classes={{ root: classes.rangeSelect }}>
        {ranges.map(({ name, min, max }) => (
          <Grid item xs={6}>
            <Button onClick={() => handleClick(min, max)} fullWidth>
              {name}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  };

  const OrderBySelect = ({ onChange }) => {
    const filters = [
      { name: "A-Z", value: "formattedName_ASC" },
      { name: "Z-A", value: "formattedName_DESC" },
      { name: "Number +", value: "number_ASC" },
      { name: "Number -", value: "number_DESC" }
    ];
    const handleClick = filter => {
      onChange();
      setOrderBy(filter);
    };
    return (
      <Grid container classes={{ root: classes.orderBySelect }}>
        {filters.map(({ name, value }) => (
          <Grid item xs={6}>
            <Button onClick={() => handleClick(value)} fullWidth>
              {name}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  };

  const NameFilter = ({ onChange }) => {
    return (
      <TextField
        value={name}
        onChange={e =>
          setName(
            e.target.value
              .toLowerCase()
              .split(" ")
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")
          )
        }
        margin="dense"
        variant="outlined"
      />
    );
  };

  return (
    <>
      <CssBaseline />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <RangeSelect />
      </Popper>
      <Grid container classes={{ root: classes.filtersContainer }}>
        <Grid item xs={4}>
          <NameFilter />
        </Grid>
        <Grid item xs={4} classes={{ root: classes.menu }}>
          <Button
            aria-describedby={id}
            classes={{ root: classes.buttons }}
            onClick={handleClick}
          >
            <Typography variant="h6">
              Range : {min}-{max}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} classes={{ root: classes.menu }}>
          <Button>
            <Typography variant="h6">Order By : {orderBy}</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
