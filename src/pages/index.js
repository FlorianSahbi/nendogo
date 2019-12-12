import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Card from "../components/IndexNendoroids/card";
import SEO from "../components/seo";
import indexStyles from "./index.module.css";
import navBarStyles from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={navBarStyles.container}>
      <div className={navBarStyles.wrapper}>
        <Link to="/users">Users </Link>
        <Link to="/account">Go to your account </Link>
      </div>
    </nav>
  )
}

const IndexPage = ({ data: { nendo: { nendoroids: data } } }) => {
  /*eslint-disable no-unused-vars*/
  const [nendoroids, setNendoroids] = useState(data);

  return (
    <div>
      <SEO title="List" />
      <NavBar />
      <div className={indexStyles.container}>
        {
          nendoroids.map(nendoroid => {
            return (
              <Card
                key={nendoroid.id}
                id={nendoroid.id}
                name={nendoroid.formattedName}
                number={nendoroid.number}
                images={nendoroid.images}
                isLiked={nendoroid.likedBy && nendoroid.likedBy.filter(user => user.id === "5dec1908bb95cb8650150814").length > 0 ? true : false}
                isWished={nendoroid.wishedBy && nendoroid.wishedBy.filter(user => user.id === "5dec1908bb95cb8650150814").length > 0 ? true : false}
                isOwned={nendoroid.ownedBy && nendoroid.ownedBy.filter(user => user.id === "5dec1908bb95cb8650150814").length > 0 ? true : false}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export const GATSBY_NENDO_QUERY = graphql`
{
  nendo {
    nendoroids {
      id
      formattedName
      images
      number
      range
      likedBy {
      id
      avatar
      pseudo
    }
    }
  }
}
`

export default IndexPage
