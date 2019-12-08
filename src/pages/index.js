import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Card from "../components/IndexNendoroids/card";
import SEO from "../components/seo";
import indexStyles from "./index.module.css";
import navBarStyles from "./navBar.module.css";
import { Query, Mutation } from "react-apollo";
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks';

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

  const [nendoroids, setNendoroids] = useState(data);
  let isLiked = false;
  console.log(nendoroids)

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
                isLiked={nendoroid.likedBy.filter(user => user.id === "5dec1908bb95cb8650150814").length > 0 ? true : false}
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
