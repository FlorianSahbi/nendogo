const Filter = ({ data, props }) => {
    const [value, setValue] = useState("default")
    const [newN, setNewN] = useState([])
    const [filter, setFilter] = useState("name")
  
    const handleChange = (e) => {
  
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