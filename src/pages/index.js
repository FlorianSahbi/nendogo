import React, { useState } from "react"
import { Link } from "gatsby"
import nendoroids from "./nendoroids.json"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

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
    <div onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)} className={isHovered ? " card--container hover--card" : "card--container default--card"}>
      <img src="https://images.goodsmile.info/cgm/images/product/20191025/8927/64741/large/f3692e336e5b3144db76690efc34c53f.jpg" alt="img_nendo" />
      <div className="card--wrapper">
        <h2 className="card--title">{props.name}</h2>
        <p className="card--number">{props.number}</p>
      </div>
    </div>
  )
}

const IndexPage = () => {

  console.log(nendoroids)
  return (
    <div>
      <SEO title="Home" />
      <div className="nendoroids--container">

        {
          nendoroids.map(nendo => <Card name={nendo.name} number={nendo.number} />)
        }

      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage
