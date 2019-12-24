/*eslint-disable jsx-a11y/no-static-element-interactions*/

import React, { useState } from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import usersStyles from "./users.module.css";
import Layout from "../components/layout";

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

const UsersPage = ({ data: { api: { getUsers: { users: data } } } }) => {

  return (
    <Layout>
      <SEO title="Users list" />
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
    </Layout>
  )
}

export const GATSBY_USER_QUERY = graphql`
 {
   api {
  getUsers {
    users {
      id
      avatar
      pseudo
    }
   }
  }
 }
`

export default UsersPage
