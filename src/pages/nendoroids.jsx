import React, { useState } from "react";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/nendoroid";
import { graphql } from "gatsby";
import Skeleton from "@material-ui/lab/Skeleton";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_NENDOROIDS_BY_RANGE_QUERY } from "../apollo/queries/index";
import Auth from "../globalStates/useAuth";
import NendoroidsFiltersForm from "../components/form/nendoroidsFilters";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const isLikedBy = (i, userId) => {
  let b = [...i.filter(e => e.user.id === userId && e.type === "LIKE")][0];
  if (b) b = b.id;
  if (
    [...i.filter(e => e.user.id === userId && e.type === "LIKE")].length > 0
  ) {
    return { isActive: true, interactionId: b };
  } else {
    return { isActive: false, interactionId: null };
  }
};

const isWishedBy = (i, userId) => {
  let b = [...i.filter(e => e.user.id === userId && e.type === "WISH")][0];
  if (b) b = b.id;
  if (
    [...i.filter(e => e.user.id === userId && e.type === "WISH")].length > 0
  ) {
    return { isActive: true, interactionId: b };
  } else {
    return { isActive: false, interactionId: null };
  }
};

const isOwnedBy = (i, userId) => {
  let b = [...i.filter(e => e.user.id === userId && e.type === "OWN")][0];
  if (b) b = b.id;
  if ([...i.filter(e => e.user.id === userId && e.type === "OWN")].length > 0) {
    return { isActive: true, interactionId: b };
  } else {
    return { isActive: false, interactionId: null };
  }
};

const handleLoading = () => {
  const imgs = [...document.querySelectorAll(`#con img`)];
  const tab = [...imgs.filter(i => i.complete === false)];
  if (tab.length > 0) {
    return true;
  }
  return false;
};

const renderCards = (nendoroids, currentUser) => {
  let currentUserId = "à";
  if (currentUser) {
    currentUserId = currentUser.id;
  } else {
    currentUserId = "k";
  }
  const cards = nendoroids.map(
    ({ id, formattedName, number, images, interactions }) => {
      return (
        <Card
          key={id}
          id={id}
          name={formattedName}
          number={number}
          images={images}
          isLiked={isLikedBy(interactions, currentUserId)}
          isLoaded={handleLoading}
        />
      );
    }
  );
  return cards;
};

const NendoroidsPage = props => {
  const auth = Auth.useContainer();
  const [nens, setNens] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [orderBy, setOrderBy] = useState("formattedName_ASC");
  const [name, setName] = useState("");

  const { error, loading, data } = useQuery(GET_NENDOROIDS_BY_RANGE_QUERY, {
    variables: { min, max, orderBy, name },
    onCompleted: data => {
      setNens(data.getNendoroidsByRange.nendoroids);
    },
    onError: error => {}
  });

  const FakeSelect = ({ display, onChange }) => {
    return (
      <div className={`${classes.fakeSelect} ${display ? "" : classes.hid}`}>
        <Grid className={classes.filters} container>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 0, max: 100 });
              }}
              fullWidth
            >
              000-100
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 101, max: 200 });
              }}
              fullWidth
            >
              101-200
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 201, max: 300 });
              }}
              fullWidth
            >
              201-300
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 301, max: 400 });
              }}
              fullWidth
            >
              301-400
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 401, max: 500 });
              }}
              fullWidth
            >
              401-500
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 501, max: 600 });
              }}
              fullWidth
            >
              501-600
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 601, max: 700 });
              }}
              fullWidth
            >
              601-700
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 701, max: 800 });
              }}
              fullWidth
            >
              701-800
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 801, max: 900 });
              }}
              fullWidth
            >
              801-900
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 901, max: 1000 });
              }}
              fullWidth
            >
              901-1000
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 1001, max: 1100 });
              }}
              fullWidth
            >
              1001-1100
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 1101, max: 1200 });
              }}
              fullWidth
            >
              1101-1200
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 1201, max: 1300 });
              }}
              fullWidth
            >
              1201-1300
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                getByRange({ min: 0, max: 2000 });
              }}
              fullWidth
            >
              All
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };

  const FakeSelect2 = ({ display, onChange }) => {
    return (
      <div className={`${classes.fakeSelect} ${display ? "" : classes.hid}`}>
        <Grid className={classes.filters} container>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                handleOrder("name_asc");
              }}
              fullWidth
            >
              A-Z
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                handleOrder("name_desc");
              }}
              fullWidth
            >
              Z-A
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                handleOrder("number_asc");
              }}
              fullWidth
            >
              Numeros croissants
            </Button>
          </Grid>
          <Grid className={classes.grid} item xs={6}>
            <Button
              onClick={() => {
                onChange();
                handleOrder("number_desc");
              }}
              fullWidth
            >
              Numeros décroissants
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };

  const renderFilter = () => {
    const [displayRange, setDisplayRange] = useState(false);
    const [displayOrderBy, setDisplayOrderBy] = useState(false);
    const handleClickAway = () => {
      setDisplayRange(false);
      setDisplayOrderBy(false);
    };
    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid className={classes.filters} container>
          <Grid className={classes.grid} item xs={4}>
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
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.grid} item xs={4}>
            <Button onClick={() => setDisplayRange(!displayRange)}>
              Range : {min}-{max}
            </Button>
            <FakeSelect onChange={handleClickAway} display={displayRange} />
          </Grid>
          <Grid className={classes.grid} item xs={4}>
            <Button onClick={() => setDisplayOrderBy(!displayOrderBy)}>
              Order By : {orderBy}
            </Button>
            <FakeSelect2 onChange={handleClickAway} display={displayOrderBy} />
          </Grid>
        </Grid>
      </ClickAwayListener>
    );
  };

  const getByRange = range => {
    setMin(range.min);
    setMax(range.max);
  };

  const handleOrder = value => {
    switch (value) {
      case "name_asc":
        setOrderBy("formattedName_ASC");
        break;
      case "name_desc":
        setOrderBy("formattedName_DESC");
        break;
      case "number_desc":
        setOrderBy("number_DESC");
        break;
      case "number_asc":
        setOrderBy("number_ASC");
        break;

      default:
        break;
    }
  };

  return (
    <Layout header>
      <section className={classes.nendoroidsContainer}>
        {renderFilter()}
        {loading && <div style={{ color: "white" }}>Loading...</div>}
        {!loading && (
          <div id="con" className={classes.wrapper}>
            {nens && renderCards(nens, auth.user)}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default NendoroidsPage;
