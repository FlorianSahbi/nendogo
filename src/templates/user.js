import React from "react"
import SEO from "../components/seo"
import "./user.css"
import { Link } from "gatsby"
import nendoroids from "../pages/nendoroids.json"


const ProfilPic = (props) => {
    return (
        <div className="user--roundedProfil">
            <img src={props.src} alt={props.alt} />
            <Link to={`/${props.number}/`} >{`See ${props.number}`}</Link>
        </div>
    )
}

const renderliked = (array) => {
    let liked = [];
    array.forEach(e => {
        nendoroids.forEach(n => {
            if (n.number === e) {
                liked.push(<ProfilPic src={n.images[0]} alt="jsp" number={n.number} />)
            }
        })
    });

    return liked
}

export default (props) => {
    return (
        <>
            <SEO title={`${props.pageContext.pseudo}`} description="With the theatrical release of 'Magical Girl Lyrical Nanoha The MOVIE 1st' getting closer by the day, yet another userroid is here to join the cast - Fate Testarossa is here, and just like Nanoha, she is wearing her new barrier jacket from the movie! Three facial expressions are included: a typical, stoic expression, a serious expression, as well as an expression with closed eyes. Her all important intelligent device, 'Bardiche' is also included in both axe form and scythe form. Her familiar Arf is also included in her dog form, once again giving you everything you need for a userroid reenactment of the original!" />

            <div className="user--container">
                <div className="user--wrapper">
                    <div className="user--info">

                        <div className="user--meta">
                            <div className="user--title">
                                <h2>{props.pageContext.pseudo}</h2>
                            </div>
                            <div className="user--description">
                                <h2>From the popular game "League of Legends" comes a userroid of Ahri!</h2>
                                <p>From the internationally popular E-sports game "League of Legends" comes a userroid of Ahri! She comes with two face plates, both of which capture her charming expressions in cute userroid form. Her detailed costume has been faithfully recreated, including the gold adornments.</p>
                                <p>Two kinds of effect parts are included to display her using her abilities. Two tail parts are included allowing you to display her two different ways! Bent arms and bent leg parts are included allowing you to create a variety of different scenes!</p>
                            </div>
                        </div>

                        <div className="user--preview">
                            <img src={props.pageContext.avatar} alt="ok" />
                        </div>
                    </div>
                    <div className="user--user">
                        <div className="user--like">
                            <div className="user--title">
                                <p>He like it</p>
                            </div>
                            <div className="user--like--list">
                                {renderliked(props.pageContext.liked)}
                            </div>
                        </div>
                        <div className="user--want">
                            <div className="user--title">
                                <p>He want it</p>
                            </div>
                            <div className="user--want--list">
                                {renderliked(props.pageContext.wanted)}
                            </div>
                        </div>
                        <div className="user--love">
                            <div className="user--title">
                                <p>He own it</p>
                            </div>
                            <div className="user--love--list">
                                {renderliked(props.pageContext.owned)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const query = graphql`
query {
    allSitePage(filter: {path: {eq: "/0"}}) {
      edges {
        node {
          path
          component
        }
      }
    }
  }`