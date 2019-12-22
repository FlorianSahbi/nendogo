import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import {Link } from "gatsby";

let currentUser = null;
if (localStorage.getItem("user")) {
  currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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

  return (

    <>
      {/* <nav className={navBarStyles.container}>
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
      </nav> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
