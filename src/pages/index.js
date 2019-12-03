import React, { useState } from "react"
import { Link } from "gatsby"
import nendoroids from "./nendoroids.json"
import { graphql } from "gatsby"
import Card from "../components/IndexNendoroids/card"
import SEO from "../components/seo"
import indexStyles from "./index.module.css"
import navBarStyles from "./navBar.module.css"

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

const IndexPage = ({ data }) => {
  const [n, setN] = useState(data.allMongodbNendoroidsNendoroids.edges);

  const onNew = (value) => {
    console.log('ok')
    setN(value)
  }

  console.log(data)

  return (
    <div>
      <SEO title="List" />
      <NavBar />
      {/* <Filter new={onNew} /> */}
      <div className={indexStyles.container}>
        {
          n.map(nendo => {
            return (
              <Card
                key={nendo.node._id}
                name={nendo.node.formattedName}
                number={nendo.node.number}
                images={nendo.node.images}
                isLiked={nendo.node.isLiked}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export const query = graphql`
 query {
  allMongodbNendoroidsNendoroids(filter: {range: {eq: "901-1000"}}) {
    edges {
      node {
        formattedName
        number
        images
        range
        isLiked
      }
    }
  }
}
`

export default IndexPage
