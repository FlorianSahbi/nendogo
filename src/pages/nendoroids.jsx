import React, { useContext, useState } from "react";
import Layout from "../components/layout";
import classes from "./nendoroids.module.css";
import Card from "../components/card/nendoroid";
import { UserContext } from "../components/layout/index";
import { graphql } from "gatsby";

import Skeleton from "@material-ui/lab/Skeleton";

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
  // console.log(imgs)
  const tab = [...imgs.filter(i => i.complete === false)];
  console.log(tab);
};

const renderCards = (nendoroids, currentUser) => {
  const cards = nendoroids.map(
    ({ id, formattedName, number, images, interactions }) => {
      return (
        <Card
          key={id}
          id={id}
          name={formattedName}
          number={number}
          images={images}
          isLiked={isLikedBy(interactions, currentUser.id)}
          isLoaded={handleLoading}
        />
      );
    }
  );
  return cards;
};

const NendoroidsPage = ({
  data: {
    prisma: { nendoroids }
  }
}) => {
  console.log("render Nendoroids");

  const currentUser = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout header={true}>
      <section
        style={{ background: "#121415", minHeight: "100vh" }}
        className={classes.nendoroidsContainer}
      >
        <div id="con" className={classes.wrapper}>
          {/* <Skeleton variant="text" />
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="rect" width={210} height={118} /> */}

          {renderCards(nendoroids, currentUser)}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    prisma {
      nendoroids(orderBy: number_ASC) {
        id
        formattedName
        number
        images
        interactions {
          id
          type
          user {
            pseudo
            id
            avatar
          }
        }
      }
    }
  }
`;

export default NendoroidsPage;
