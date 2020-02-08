import React, { useState, useCallback } from "react";
import classes from "./style.module.css";
import Carousel from "../../components/carousel/index";
import Card from "../../components/card/nendoroid";
import Layout from "../../components/layout/index";
import { useQuery } from "@apollo/react-hooks";
import UserForm from "../../components/form/user"
import {
  GET_INTERACTION_LIKE_QUERY,
  GET_INTERACTION_WISH_QUERY,
  GET_INTERACTION_OWN_QUERY
} from "../../apollo/queries";
import Auth from "../../globalStates/useAuth";


const imgUrl = "https://images2.alphacoders.com/742/thumb-1920-742320.png";

const User = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState("like");
  const [img, setImg] = useState(props.pageContext.avatar)

  let {
    error: errorNendoL,
    loading: LoadingNendoL,
    data: dataNendoL
  } = useQuery(GET_INTERACTION_LIKE_QUERY, {
    variables: { id: props.pageContext.id },
    fetchPolicy: "no-cache"
  });

  let {
    error: errorNendoW,
    loading: LoadingNendoW,
    data: dataNendoW
  } = useQuery(GET_INTERACTION_WISH_QUERY, {
    variables: { id: props.pageContext.id },
    fetchPolicy: "no-cache"
  });

  let {
    error: errorNendoO,
    loading: LoadingNendoO,
    data: dataNendoO
  } = useQuery(GET_INTERACTION_OWN_QUERY, {
    variables: { id: props.pageContext.id },
    fetchPolicy: "no-cache"
  });

  if (errorNendoL | errorNendoW | errorNendoO) return <span>WAIT</span>;
  if (LoadingNendoL | LoadingNendoW | LoadingNendoO) return <p>Loading ...</p>;

  const renderCards = array => {
    return array.map(nendo => (
      <Card
        key={nendo.id}
        id={nendo.id}
        images={nendo.images}
        name={nendo.formattedName}
        number={nendo.number}
        isLoaded={() => { }}
      />
    ));
  };

  return (
    <Layout header>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.imgWrapper}>
            <img src={imgUrl} alt="dunno" />
            <div className={classes.profileImg}>
              <img src={img} alt="dunnon" />
            </div>
          </div>
          <div className={classes.content}>
            <div className={classes.contentWrapper}>
              <div className={classes.name}>
                <h2>{props.pageContext.pseudo}</h2>
              </div>
            </div>
            <div className={classes.contentCollection}>
              <div className={classes.contentCollectionTabWrapper}>
                <span onClick={() => setSelected("like")}>Like</span>
                <span onClick={() => setSelected("want")}>Want</span>
                <span onClick={() => setSelected("own")}>Own</span>
              </div>

              <div className={classes.contentCollectionResultWrapper}>
                {selected === "like" &&
                  renderCards(dataNendoL.getNendoroidsLikedBy.nendoroids)}
                {selected === "want" &&
                  renderCards(dataNendoW.getNendoroidsWishedBy.nendoroids)}
                {selected === "own" &&
                  renderCards(dataNendoO.getNendoroidsOwnedBy.nendoroids)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default User;
