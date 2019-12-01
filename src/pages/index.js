import React, { useState } from "react"
import { Link } from "gatsby"
import nendoroids from "./nendoroids.json"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

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
      <Link to={`/${props.number}/`} >{`See ${props.number}`}</Link>
    </div>
  )
}

const Filter = (props) => {
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
      </select>

      <input type="submit" value="Envoyer" />
    </form>
  )
}

const IndexPage = () => {

  const [n, setN] = useState(nendoroids);

  const onNew = (value) => {
    console.log('ok')
    setN(value)
  }

  return (
    <div>
      <Link to="/account">Go to your account</Link>
      <SEO title="Home" />
      <Filter new={onNew} />
      <div className="nendoroids--container">
        {/* <input type="text" /> */}
        {n.map(nendo => <Card name={nendo.name} number={nendo.number} images={nendo.images} isLiked={nendo.isLiked} />)}

      </div>
    </div>
  )
}

export default IndexPage
