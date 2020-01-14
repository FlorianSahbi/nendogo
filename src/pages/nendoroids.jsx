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
  const getByRange = range => {
    // lazyNen({ variables: { min: range.min, max: range.max } });
    setMin(range.min);
    setMax(range.max);
  };

  const renderFilter = () => {
    return (
      <div className={classes.filters}>
        <NendoroidsFiltersForm
          filter={value => {
            setName(value.filter);
            setMin(value.min);
            setMax(value.max);
          }}
        />
        <button onClick={() => getByRange({ min: 0, max: 100 })}>
          000-100
        </button>
        <button onClick={() => getByRange({ min: 101, max: 200 })}>
          101-200
        </button>
        <button onClick={() => getByRange({ min: 201, max: 300 })}>
          201-300
        </button>
        <button onClick={() => getByRange({ min: 301, max: 400 })}>
          301-400
        </button>
        <button onClick={() => getByRange({ min: 401, max: 500 })}>
          401-500
        </button>
        <button onClick={() => getByRange({ min: 501, max: 600 })}>
          501-600
        </button>
        <button onClick={() => getByRange({ min: 601, max: 700 })}>
          601-70
        </button>
        <button onClick={() => getByRange({ min: 701, max: 800 })}>
          701-800
        </button>
        <button onClick={() => getByRange({ min: 801, max: 900 })}>
          801-900
        </button>
        <button onClick={() => getByRange({ min: 901, max: 1000 })}>
          901-1000
        </button>
        <button onClick={() => getByRange({ min: 1001, max: 1100 })}>
          1001-1100
        </button>
        <button onClick={() => getByRange({ min: 1101, max: 1200 })}>
          1101-1200
        </button>
        <button onClick={() => getByRange({ min: 1201, max: 1300 })}>
          1201-1300
        </button>
        <button onClick={handleLimit}>-</button>
        <button onClick={() => handleOrder("name_asc")}>name ASC</button>
        <button onClick={() => handleOrder("name_desc")}>name DESC</button>
        <button onClick={() => handleOrder("number_desc")}>number DESC</button>
        <button onClick={() => handleOrder("number_asc")}>number ASC</button>
      </div>
    );
  };

  const [nens, setNens] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50);
  const [orderBy, setOrderBy] = useState("formattedName_ASC");
  const [name, setName] = useState("");

  const [lazyNen] = useLazyQuery(GET_NENDOROIDS_BY_RANGE_QUERY, {
    onCompleted: data => setNens(data.getNendoroidsByRange.nendoroids),
    fetchPolicy: "no-cache"
  });

  const { error, loading, data } = useQuery(GET_NENDOROIDS_BY_RANGE_QUERY, {
    variables: { min, max, orderBy, name },
    onCompleted: data => {
      setNens(data.getNendoroidsByRange.nendoroids);
    },
    onError: error => {}
  });

  const handleLimit = () => {
    let maxx = max - 1;
    console.log("ok");
    setMax(maxx);
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
        {loading && <div style={{color: "white"}}>Loading...</div>}
        {!loading && 
        <div id="con" className={classes.wrapper}>
          {nens && renderCards(nens, auth.user)}
        </div>
        }
      </section>
    </Layout>
  );
};

export default NendoroidsPage;
