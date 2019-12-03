import React, { useState } from "react"
import { Link } from "gatsby"
import nendoroids from "./nendoroids.json"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import nendo from "../templates/nendo.js"

const Card = (props) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(props.isLiked);

  const handleMouseEnter = (e) => {
    e.preventDefault();
    setIsHovered(true)
  }

  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered(false)
  }

  const handleLike = () => {
    console.log("ok")
    if (isLiked) {
      setIsLiked(false)
    } else {
      setIsLiked(true)
    }
  }

  return (
    <div onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)} className={isHovered ? " card--container hover--card" : "card--container default--card"}>
      <img src={props.images[0]} alt="img_nendo" />
      <div className="card--wrapper">
        <div className="card--likeButton" onClick={() => handleLike()}>
          {isLiked ? "❤️" : "♡"}
        </div>
        <h2 className="card--title">{props.name}</h2>
        <p className="card--number">{props.number}</p>
      </div>
      {/* <Link to={`/${props.number}/`} >{`See ${props.number}`}</Link> */}
      <AniLink cover to={`/${props.number}/`} duration={1} direction="left" bg="#000" >
        {`See ${props.number}`}
      </AniLink>
    </div>
  )
}

const Filter = ({ data, props }) => {
  const [value, setValue] = useState("default")
  const [newN, setNewN] = useState([])
  const [filter, setFilter] = useState("name")

  const handleChange = (e) => {
    console.log(e.target.value.toLowerCase())

    if (filter === "name") {
      let newN = nendoroids.filter(elem => {
        return elem.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setNewN(newN)
    }

    if (filter === "number") {
      let newN = nendoroids.filter(elem => {
        return elem.number.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setNewN(newN)
    }

    if (filter === "series") {
      let newN = nendoroids.filter(elem => {
        return elem.series.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setNewN(newN)
    }

    if (filter === "releaseDate") {
      let newN = nendoroids.filter(elem => {
        return elem.releaseDate.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setNewN(newN)
    }

    setValue(e.target.value)

    props.new(newN)
  }

  const handleChangeFilter = (e) => {
    console.log(e.target.value.toLowerCase())
    setFilter(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.new(newN)
  }

  return (

    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="name" value={value} onChange={(e) => handleChange(e)} />

      <select value={filter} onChange={(e) => handleChangeFilter(e)}>
        <option value="name">Name</option>
        <option value="number">Number</option>
        <option value="series">Series</option>
        <option value="releaseDate">Release Date</option>
      </select>

      <input type="submit" value="Envoyer" />
      {/* {<p style={{ color: "white" }}>CPT : {data}</p> } */}
    </form>
  )
}

const IndexPage = ({ data }) => {
  const [n, setN] = useState(data.allMongodbNendoroidsNendoroids.edges);

  const onNew = (value) => {
    console.log('ok')
    setN(value)
  }

  return (
    <div>
      <SEO title="index" />
      <Link to="/account">Go to your account</Link>
      <Filter new={onNew} />
      <div className="nendoroids--container">
        {n.map(nendo => <Card name={nendo.node.formattedName} number={nendo.node.number} images={nendo.node.images} isLiked={nendo.node.isLiked} />)}
      </div>
    </div>
  )
}

export const query = graphql`
 query {
  allMongodbNendoroidsNendoroids {
    edges {
      node {
        formattedName
        number
        images
        range
      }
    }
  }
}
`

export default IndexPage
