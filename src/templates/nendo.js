import React, { useState } from "react"
import SEO from "../components/seo"
import "./nendo.css"
import { Link } from "gatsby"
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import useStyle from "./slideshow.module.css";

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

const Carousel = (props) => {
  const { images } = props;
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[index]);

  function handlePrevious() {
    let i = index - 1;
    if (i < 0) {
      i = images.length - 1;
      setIndex(i)
      setCurrentImage(images[index])
    } else {
      setIndex(i)
      setCurrentImage(images[index])
    }
  }

  function handleNext() {
    let i = index + 1;
    if (i > images.length - 1) {
      i = 0;
      setIndex(i)
      setCurrentImage(images[index])
    } else {
      setIndex(i)
      setCurrentImage(images[index])
    }
  }

  function handleShow() {
    alert("show")
  }

  return (
    <div className={useStyle.container}>
      <div className={useStyle.wrapper}>
        <div className={useStyle.ActionsLayerContainer}>
          <div className={useStyle.ActionsLayerWrapper}>
            <div className={useStyle.previousButton} onClick={handlePrevious}></div>
            <div className={useStyle.showImage} onClick={handleShow}></div>
            <div className={useStyle.nextButton} onClick={handleNext}></div>
          </div>
        </div>
        <img src={currentImage} className={useStyle.slide} alt="bla" />
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

  const { loading, error, data } = useQuery(GET_INTERACTIONS, {
    variables: { id: props.pageContext.id },
    fetchPolicy: 'no-cache'
  });

  if (loading) return <span style={{ color: "white" }}>Loading ...</span>
  if (error) return <span style={{ color: "white" }}>{error.message}</span>


  return (
    <>
      <SEO title={`${props.pageContext.name}`} description={`${props.pageContext.name}`} />
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
              <Carousel images={props.pageContext.images} />
              <div className="nendo--number">#{props.pageContext.number}</div>
            </div>
          </div>
          <div className="nendo--user">
            <>
              <div className="user--like">
                <div className="user--title">
                  <p>Like</p>
                </div>
                <div className="user--like--list">
                  {data.nendoroid.likedBy !== undefined && data.nendoroid.likedBy !== null && data.nendoroid.likedBy.length <= 0 ? <span style={{ color: "white" }}>{{/*  `Poor ${props.pageContext.formattedName} nobody likes her :(`*/ }}</span> :
                    data.nendoroid.likedBy.map(user => <ProfilPic src={user.avatar} alt={user.pseudo} />)}
                </div>
              </div>


              <div className="user--want">
                <div className="user--title">
                  <p>Wish</p>
                </div>
                <div className="user--want--list">
                  {data.nendoroid.wishedBy !== undefined && data.nendoroid.wishedBy !== null && data.nendoroid.wishedBy.length <= 0 ? <span style={{ color: "white" }}>{{/*`Poor ${props.pageContext.formattedName} nobody seems interested by her nendoroids :(`*/ }}</span> :
                    data.nendoroid.wishedBy.map(user => <ProfilPic src={user.avatar} alt={user.pseudo} />)}
                </div>
              </div>

              <div className="user--love">
                <div className="user--title">
                  <p>Own</p>
                </div>
                <div className="user--love--list">
                  {data.nendoroid.ownedBy !== undefined && data.nendoroid.ownedBy !== null && data.nendoroid.ownedBy.length <= 0 ? <span style={{ color: "white" }}>{{/*`Poor ${props.pageContext.formattedName} nobody she havn't home :(`*/ }}</span> :
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
