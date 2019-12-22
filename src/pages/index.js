import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Card from "../components/IndexNendoroids/card";
import SEO from "../components/seo";
import indexStyles from "./index.module.css";
import navBarStyles from "./navBar.module.css";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

let currentUser = null;
if (localStorage.getItem("user")) {
  currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
}


const CREATE_INTERACTION_MUTATION = gql`
mutation CreateInteraction($nendoroidId: ID!, $userId: ID!, $type: InteractionType!){
  createInteraction(nendoroidId: $nendoroidId , userId: $userId, type: $type) {
    id
  }
}
`;

const style = {
  idContainer: {
    // border: "2px solid #ff00c8",
    height: "32px",
    width: "fit-content",
    boxSizing: "border-box",
  },
  idWrapper: {
    boxSizing: "border-box",
    // border: "2px solid #3a00ea",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  idProfilPic: {
    // border: "2px solid white",
    height: "32px",
    borderRadius: "50%",
    overflow: "hidden",
    width: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  idPicture: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  idName: {
    // border: "2px solid green",
    height: "32px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cinzel",
    fontSize: "2em",
    textShadow: "0px 0px 10px aliceblue"
  }
}

const NavBar = () => {
  return (
    <nav className={navBarStyles.container}>
      <div className={navBarStyles.wrapper}>
        <div>
          <h1 style={style.title}>Nendoroids</h1>
        </div>
        <Link to="/users">Users </Link>
        <Link to="/account">Login or Signup </Link>
        <div style={style.idContainer}>
          <div style={style.idWrapper}>
            {
              localStorage.getItem("user") ?
                <>
                  <div style={style.idProfilPic}>
                    <img style={style.idPicture} src={currentUser.avatar} alt={`${currentUser.pseudo} -profile - picture`} />
                  </div>
                  <div style={style.idName}>
                    <Link to={`/ y7rdoeze`}>{currentUser.pseudo} </Link>
                  </div>
                </>
                :
                <>
                  <div style={style.idName}>
                    <Link to="/account">Login or Signup </Link>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

const IndexPage = ({ error: lol, loading: deux, data: { api: { getNendoroids: { nendoroids: data } } } }) => {


  /*eslint-disable no-unused-vars*/
  const [nendoroids, setNendoroids] = useState(data);

  // let { error: errorNendoL, loading: LoadingNendoL, data: dataNendoL } = useQuery(HAHA, {
  //   variables: { id: user.email },
  //   fetchPolicy: 'no-cache'
  // })
  // let { error: errorNendoW, loading: LoadingNendoW, data: dataNendoW } = useQuery(HOHO, {
  //   variables: { id: user.email },
  //   fetchPolicy: 'no-cache'
  // })
  // let { error: errorNendoO, loading: LoadingNendoO, data: dataNendoO } = useQuery(HIHI, {
  //   variables: { id: user.email },
  //   fetchPolicy: 'no-cache'
  // })

  // if (errorNendoL | errorNendoW | errorNendoO) return <span>WAIT</span>
  // if (LoadingNendoL | LoadingNendoW | LoadingNendoO) return <p>Loading ...</p>


  // console.log(dataNendoL)
  // console.log(dataNendoO)
  // console.log(dataNendoW)


  // const nendoIsLiked = (idNendo) => {
  //   if (dataNendoL.userLikes !== undefined && [...dataNendoL.userLikes.filter(elem => elem.id === idNendo)].length > 0) {
  //     return true;
  //   }
  //   return false;
  // }
  // const nendoIsWished = (idNendo) => {
  //   if (dataNendoW !== undefined && [...dataNendoW.userWishes.filter(elem => elem.id === idNendo)].length > 0) {
  //     return true;
  //   }
  //   return false;
  // }
  // const nendoIsown = (idNendo) => {
  //   if (dataNendoO !== undefined && [...dataNendoO.userOwn.filter(elem => elem.id === idNendo)].length > 0) {
  //     return true;
  //   }
  //   return false;
  // }

  const tab = nendoroids.map(nendoroid => {
    return (
      <Card
        key={nendoroid.id}
        id={nendoroid.id}
        name={nendoroid.formattedName}
        number={nendoroid.number}
        images={nendoroid.images}
        isLiked={false}
        isWished={false}
        isOwned={false}
        // isLiked={false}
        // isWished={nendoIsWished(nendoroid.id)}
        // isOwned={nendoIsown(nendoroid.id)}
      />
    )
  })

  return (
    <div>
      <SEO title="List" />
      <NavBar />
      <div className={indexStyles.container}>
        {
          tab
        }
      </div>
    </div>
  )
}

export const GATSBY_NENDO_QUERY = graphql`
{
  api {
    getNendoroids {
      nendoroids {
      id
      formattedName
      number
      range
      }
    }
  }
}
`

export default IndexPage
