import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { FiltersNendoroids } from "../../globalStates/useFilters";
import { useTheme } from "@material-ui/styles";
import Popper from "@material-ui/core/Popper";

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
  const theme = useTheme();

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick1 = event => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  };
  const handleClick2 = event => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);

  const id1 = open1 ? "rangeSubMenu" : undefined;
  const id2 = open2 ? "orderBySubMenu" : undefined;

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
      <Grid
        container
        style={{
          background: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.contrastText}`
        }}
      >
        {ranges.map(({ name, min, max }) => (
          <Grid
            item
            xs={6}
            style={{ widht: "50%", padding: theme.spacing(0.5) }}
          >
            <Button
              style={{ color: theme.palette.primary.contrastText }}
              onClick={() => handleClick(min, max)}
              fullWidth
            >
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
      <Grid
        container
        style={{
          background: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.contrastText}`
        }}
      >
        {filters.map(({ name, value }) => (
          <Grid item xs={6}>
            <Button
              style={{ color: theme.palette.primary.contrastText }}
              onClick={() => handleClick(value)}
              fullWidth
            >
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
      <Popper
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        style={{ zIndex: 1 }}
        placement={"bottom-start"}
        transition
      >
        <RangeSelect onChange={() => setAnchorEl1(null)} />
      </Popper>
      <Popper
        id={id2}
        open={open2}
        anchorEl={anchorEl2}
        style={{ zIndex: 1 }}
        placement={"bottom-start"}
        transition
      >
        <OrderBySelect onChange={() => setAnchorEl2(null)} />
      </Popper>
      <AppBar
        style={{ zIndex: 5 }}
        position="static"
        style={{
          background: theme.palette.primary.main,
          borderTop: `3px solid ${theme.palette.primary.contrastText}`,
          borderLeft: `none`,
          borderBottom: `3px solid ${theme.palette.primary.contrastText}`,
          borderRight: `none`,
        }}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
        >
          <Grid
            item
            style={{
              // border: "5px solid yellow"
              height: "100%"
            }}
          >
            <Typography
              variant="h6"
              style={{
                color: theme.palette.primary.contrastText,
                border: "2px solid green"
              }}
            >
              Filters
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              borderRight: `1px solid ${theme.palette.primary.contrastText}`,
              height: "100%"
            }}
            onClick={handleClick1}
            aria-describedby={id1}
          >
            <Button
              style={{
                border: "3px solid blue",
                height: "100%"
              }}
            >
              Range : {min}-{max}
            </Button>
          </Grid>
          <Grid
            item
            style={{
              borderRight: `1px solid ${theme.palette.primary.contrastText}`
            }}
            onClick={handleClick2}
            aria-describedby={id2}
          >
            <Button
              style={{
                border: "3px solid blue",
                height: "100%"
              }}
            >
              Order By : {orderBy}
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Filters;
