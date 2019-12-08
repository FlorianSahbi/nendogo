import React from "react"
import SEO from "../components/seo"
import "./nendo.css"
import { Link } from "gatsby"
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const More = (props) => {
  return (
    <div className="more--container">
      <div className="more--title">
        {props.title}
      </div>
      <div className="more--value">
        {props.value}
      </div>
    </div>
  )
}

const ProfilPic = (props) => {
  return (
    <div className="user--roundedProfil">
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

const renderProfile = (nbr) => {
  let a = [];
  for (let i = 0; i < nbr; i++) {
    a.push(<ProfilPic src="https://images.goodsmile.info/cgm/images/product/20140219/4228/27934/large/d099e29345767893f5976388a7d75e4e.jpg" alt="jsp" />)
  }
  return a
}

const Carousel = (props) => {
  return (
    <div className="cd--container">
      <div className="cd--wrapper">
        <div className="slide slide1">
          <img src={props.img1} alt="bla" />
        </div>
        <div className="slide slide2">
          <img src={props.img2} alt="bla" />
        </div>
        <div className="slide slide3">
          <img src={props.img3} alt="bla" />
        </div>
      </div>
    </div >
  )
}

const GET_INTERACTIONS = gql`
query Nendo($id: ID!) {
  nendoroid(id: $id) {
    likedBy {
      avatar
      pseudo
    }
    wishedBy {
      avatar
      pseudo
    }
    ownedBy {
      pseudo
      avatar
    }
  }
}
`;

export default (props) => {

  console.log(props.pageContext.id)




  const { loading, error, data } = useQuery(GET_INTERACTIONS, {
    variables: { id: props.pageContext.id },
    fetchPolicy: 'no-cache'
  });

  if (loading) return <span style={{ color: "white" }}>Loading ...</span>
  if (error) return <span style={{ color: "white" }}>{error.message}</span>


  return (
    <>
      <SEO title={`lol ${props.pageContext.name} | Flo`} description="With the theatrical release of 'Magical Girl Lyrical Nanoha The MOVIE 1st' getting closer by the day, yet another Nendoroid is here to join the cast - Fate Testarossa is here, and just like Nanoha, she is wearing her new barrier jacket from the movie! Three facial expressions are included: a typical, stoic expression, a serious expression, as well as an expression with closed eyes. Her all important intelligent device, 'Bardiche' is also included in both axe form and scythe form. Her familiar Arf is also included in her dog form, once again giving you everything you need for a Nendoroid reenactment of the original!" />
      <div className="nendo--container">
        <div className="nendo--wrapper">
          <div className="nendo--info">

            <div className="nendo--meta">
              <div className="nendo--title">
                <Link to={`/`} >back</Link>
                <h2>{props.pageContext.formattedName}</h2>
              </div>
              <div className="nendo--description">
                <h2>{props.pageContext.title}</h2>
                {props.pageContext.description.map(p => <p>{p}</p>)}
              </div>
              <div className="nendo--more">
                <More title="Product Name" value={props.pageContext.name} />
                <More title="Series" value={props.pageContext.series} />
                <More title="Manufacturer" value={props.pageContext.manufacturer} />
                <More title="Category" value={props.pageContext.category} />
                <More title="Price" value={props.pageContext.price} />
                <More title="Release Date" value={props.pageContext.releaseDate} />
                <More title="Sculptor" value={props.pageContext.sculptor} />
                <More title="Cooperation" value={props.pageContext.cooperation} />
                <More title="Specifications" value={props.pageContext.specifications} />
                <a target="_blank" rel="noopener noreferrer" href={props.pageContext.srcUrl} >{`See ${props.pageContext.formattedName}`}</a>
              </div>
            </div>

            <div className="nendo--preview">
              <Carousel img1={props.pageContext.images[0]} img2={props.pageContext.images[1]} img3={props.pageContext.images[2]} />
              <div className="nendo--number">#{props.pageContext.number}</div>

              {/* <img src={props.pageContext.images[0]} alt="ok" /> */}
              {/* {props.pageContext.images.map(img => {
              return (
                <div className="imgCont">
                  <img src={img} alt={`img ${props.pageContext.name}`} />
                </div>
              )
            })} */}
            </div>
          </div>
          <div className="nendo--user">
            <>
              <div className="user--like">
                <div className="user--title">
                  <p>They liked it</p>
                </div>
                <div className="user--like--list">
                  {data.nendoroid.likedBy !== undefined && data.nendoroid.likedBy.length <= 0 ? <span style={{ color: "white" }}>{`Poor ${props.pageContext.formattedName} nobody likes her :(`}</span> :
                    data.nendoroid.likedBy.map(user => <ProfilPic src={user.avatar} alt={user.pseudo} />)}
                </div>
              </div>

              <div className="user--want">
                <div className="user--title">
                  <p>They want it</p>
                </div>
                <div className="user--want--list">
                  {data.nendoroid.wishedBy !== undefined && data.nendoroid.wishedBy.length <= 0 ? <span style={{ color: "white" }}>{`Poor ${props.pageContext.formattedName} nobody seems interested by her nendoroids :(`}</span> :
                    data.nendoroid.wishedBy.map(user => <ProfilPic src={user.avatar} alt={user.pseudo} />)}
                </div>
              </div>

              <div className="user--love">
                <div className="user--title">
                  <p>They loved it</p>
                </div>
                <div className="user--love--list">
                  {data.nendoroid.ownedBy !== undefined && data.nendoroid.ownedBy.length <= 0 ? <span style={{ color: "white" }}>{`Poor ${props.pageContext.formattedName} nobody she havn't home :(`}</span> :
                    data.nendoroid.ownedBy.map(user => <ProfilPic src={user.avatar} alt={user.pseudo} />)}
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  )
}
