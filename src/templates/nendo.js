import React from "react"
import SEO from "../components/seo"
import "./nendo.css"

export default (props) => {
  console.log(props.pageContext)
  // var nendo = data.allSitePage.edges[0].node.context;
  return (
    <div className="ok">
      <SEO title={`lol ${props.pageContext.name} | Flo`} description="With the theatrical release of 'Magical Girl Lyrical Nanoha The MOVIE 1st' getting closer by the day, yet another Nendoroid is here to join the cast - Fate Testarossa is here, and just like Nanoha, she is wearing her new barrier jacket from the movie! Three facial expressions are included: a typical, stoic expression, a serious expression, as well as an expression with closed eyes. Her all important intelligent device, 'Bardiche' is also included in both axe form and scythe form. Her familiar Arf is also included in her dog form, once again giving you everything you need for a Nendoroid reenactment of the original!" />
      <div className="imgContainer">
        {props.pageContext.images.map(img => {
          return (
            <div className="imgCont">
              <img src={img} alt={`img ${props.pageContext.name}`} />
            </div>
          )
        })}
      </div>
      <h2>{props.pageContext.name}</h2>
      <h2>From the popular game "League of Legends" comes a Nendoroid of Ahri!</h2>
      <p>From the internationally popular E-sports game "League of Legends" comes a Nendoroid of Ahri! She comes with two face plates, both of which capture her charming expressions in cute Nendoroid form. Her detailed costume has been faithfully recreated, including the gold adornments.</p>
      <p>Two kinds of effect parts are included to display her using her abilities. Two tail parts are included allowing you to display her two different ways! Bent arms and bent leg parts are included allowing you to create a variety of different scenes!</p>
    </div>
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
