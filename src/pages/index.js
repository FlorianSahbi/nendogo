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


const APOLLO_NENDO_QUERY = gql`
{
  nendoroid(id: "5de5dc15a9fedeb1755ec3cb") {
    number
    images
    formattedName
  }
}

`

const NavBar = ({ props }) => {
  return (
    <nav className={navBarStyles.container}>
      <div className={navBarStyles.wrapper}>
        <Link to="/users">Users </Link>
        <Link to="/account">Go to your account </Link>
      </div>
    </nav>
  )
}


const IndexPage = ({ data: { nendo: { nendoroids } } }) => {
  const [n, setN] = useState(nendoroids);

  const { loading, error, data } = useQuery(APOLLO_NENDO_QUERY);


  if (loading) return 'loading ...';
  if (error) return `error ${error.message}`
  console.log(data)

  return (
    <div>
      <SEO title="List" />
      <NavBar />

      {/* <Query query={APOLLO_NENDO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span style={{ coloc: "white" }}>bla...</span>
          if (error) return <p style={{ coloc: "white" }}>{error.message}</p>
          return <img src={data.nendoroid.images[0]} alt={data.nendoroid.number} />
        }}
      </Query> */}


      <div className={indexStyles.container}>
        {
          n.map(nendo => {
            return (
              <Card
                key={nendo.id}
                id={nendo.id}
                name={nendo.formattedName}
                number={nendo.number}
                images={nendo.images}
                isLiked={nendo.isLiked}
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
