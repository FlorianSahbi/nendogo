import React from "react";
import Layout from "../components/layout";

let currentUser = null;
if (localStorage.getItem("user")) {
  currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
}


const IndexPage = () => {

  // let { error, loading, data } = useQuery(GET_NENDOROIDS_QUERY, {
  //   fetchPolicy: 'no-cache'
  // })

  // if (error) {
  //   return (
  //     <div>{error.message}</div>
  //   )
  // }

  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  // const flag = { like: false, wish: false, own: false };

  // const tab = data.getNendoroids.nendoroids.map(({ name, number, id, interactions }) => {
  //   interactions.forEach(({ type, user: { id } }) => {
  //     if (type === "LIKE") {
  //       if (id === currentUser.id) {
  //         flag.like = true;
  //       }
  //     }

  //     if (type === "WISH") {
  //       if (id === currentUser.id) {
  //         flag.wish = true;
  //       }
  //     }

  //     if (type === "OWN") {
  //       if (id === currentUser.id) {
  //         flag.own = true;
  //       }
  //     }
  //   });
  //   return (
  //     <Card
  //       key={id}
  //       id={id}
  //       name={name}
  //       number={number}
  //       images={false}
  //       isLiked={flag.like}
  //       isWished={flag.wish}
  //       isOwned={flag.own}
  //     />
  //   )
  // })

  return (
    <Layout>

    </Layout>
  )
}

export default IndexPage
