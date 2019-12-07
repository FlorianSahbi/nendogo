import React, { useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import usersStyles from "./users.module.css"
import navBarStyles from "../pages/navBar.module.css"


const NavBar = ({ props }) => {
  return (
    <nav className={navBarStyles.container}>
      <div className={navBarStyles.wrapper}>
        <Link to="/">Nendoroids </Link>
        <Link to="/account">Go to your account </Link>
      </div>
    </nav>
  )
}

const Card = (props) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    e.preventDefault();
    setIsHovered(true)
  }

  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      className={isHovered ? `${usersStyles.container} ${usersStyles.hover}` : `${usersStyles.container} ${usersStyles.default}`}
    >
      <img src={props.avatar} alt="img_nendo" />
      <div className={usersStyles.wrapper}>
        <h2 className={usersStyles.title}>{props.pseudo}</h2>
        <div className={`${usersStyles.link} ${usersStyles.default}`}>
          <Link to={`/${props.pseudo}/`}>Details</Link>
        </div>
      </div>
    </div>
  )
}

const UsersPage = ({ data: { nendo: { users: data } } }) => {

  return (
    <div>
      <SEO title="Users list" />
      <NavBar />
      <div className={usersStyles.containerList}>
        {
          data.map(user => {
            return (
              <Card
                pseudo={user.pseudo}
                avatar={user.avatar}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export const GATSBY_USER_QUERY = graphql`
 {
  nendo {
    users {
      id
      avatar
      pseudo
    }
  }
 }
`

export default UsersPage
