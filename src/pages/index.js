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
                isLiked={nendoroid.isLiked}
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
      }
    }
  }
`

export default IndexPage

  // const { loading, error, data } = useQuery(APOLLO_NENDO_QUERY);
  // if (loading) return 'loading ...';
  // if (error) return `error ${error.message}`