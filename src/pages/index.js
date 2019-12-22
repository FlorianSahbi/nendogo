import React from "react";
import Card from "../components/IndexNendoroids/card";
import SEO from "../components/seo";
import { useQuery } from "@apollo/react-hooks"
import indexStyles from "./index.module.css";
import {
  GET_INTERACTION_LIKE_QUERY,
  GET_INTERACTION_WISH_QUERY,
  GET_INTERACTION_OWN_QUERY,
  GET_NENDOROIDS_QUERY
} from "../apollo/queries";

let currentUser = null;
if (localStorage.getItem("user")) {
  currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
}


const IndexPage = () => {

  let { error, loading, data } = useQuery(GET_NENDOROIDS_QUERY, {
    fetchPolicy: 'no-cache'
  })

  // if (errorNendoL | errorNendoW | errorNendoO) return <span>WAIT</span>
  // if (LoadingNendoL | LoadingNendoW | LoadingNendoO) return <p>Loading ...</p>
  if (error) {
    return (
      <div>{error.message}</div>
    )
  }

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }



  console.log(data.getNendoroids.nendoroids)
  const flag = { like: false, wish: false, own: false };

  const tab = data.getNendoroids.nendoroids.map(({ name, number, id, interactions }) => {
    interactions.forEach((element) => {
      if( element.type === "LIKE") {
        if (element.user.id === currentUser.id) {
          flag.like = true;
        }
      }

      if( element.type === "WISH") {
        if (element.user.id === currentUser.id) {
          flag.wish = true;
        }
      }

      if( element.type === "OWN") {
        if (element.user.id === currentUser.id) {
          flag.own = true;
        }
      }

    });
    return (
      <Card
        key={id}
        id={id}
        name={name}
        number={number}
        images={false}
        isLiked={flag.like}
        isWished={flag.wish}
        isOwned={flag.own}
      // isLiked={false}
      // isWished={nendoIsWished(nendoroid.id)}
      // isOwned={nendoIsown(nendoroid.id)}
      />
    )
  })

  return (

    <div>
      <SEO title="List" />

      <div className={indexStyles.container}>
        {
          tab
        }
      </div>
    </div>

  )
}

export default IndexPage
