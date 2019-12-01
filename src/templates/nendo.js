import React from "react"
import SEO from "../components/seo"
import "./nendo.css"

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

export default (props) => {
  console.log(props.pageContext)
  return (
    <>
      <SEO title={`lol ${props.pageContext.name} | Flo`} description="With the theatrical release of 'Magical Girl Lyrical Nanoha The MOVIE 1st' getting closer by the day, yet another Nendoroid is here to join the cast - Fate Testarossa is here, and just like Nanoha, she is wearing her new barrier jacket from the movie! Three facial expressions are included: a typical, stoic expression, a serious expression, as well as an expression with closed eyes. Her all important intelligent device, 'Bardiche' is also included in both axe form and scythe form. Her familiar Arf is also included in her dog form, once again giving you everything you need for a Nendoroid reenactment of the original!" />

      <div className="nendo--container">
        <div className="nendo--wrapper">
          <div className="nendo--info">

            <div className="nendo--meta">
              <div className="nendo--title">
                <h2>{props.pageContext.name}</h2>
              </div>
              <div className="nendo--description">
                <h2>From the popular game "League of Legends" comes a Nendoroid of Ahri!</h2>
                <p>From the internationally popular E-sports game "League of Legends" comes a Nendoroid of Ahri! She comes with two face plates, both of which capture her charming expressions in cute Nendoroid form. Her detailed costume has been faithfully recreated, including the gold adornments.</p>
                <p>Two kinds of effect parts are included to display her using her abilities. Two tail parts are included allowing you to display her two different ways! Bent arms and bent leg parts are included allowing you to create a variety of different scenes!</p>
              </div>
              <div className="nendo--more">
                <More title="Product Name" value="Nendoroid Fate Testarossa: The MOVIE 1st Ver. (ねんどろいど ふぇいと・てすたろっさ ざ むーびー ふぁーすと ばーじょん)" />
                <More title="Series" value=" Magical Girl Lyrical Nanoha The MOVIE 1st" />
                <More title="Manufacturer" value="Good Smile Company" />
                <More title="Category" value="Nendoroid" />
                <More title="Price" value="¥3,333 (Before Tax)" />
                <More title="Release Date" value="2010/03" />
                <More title="Sculptor" value="Yaruo (LOUGH)" />
                <More title="Cooperation" value="Nendoron" />
                <More title="Specifications" value="Painted ABS&PVC posable figure - not to scale - stand included - approximately 100mm in height" />
              </div>
            </div>

            <div className="nendo--preview">
              <img src={props.pageContext.images[0]} alt="ok" />
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
            <div className="user--like">
              <div className="user--title">
                <p>They liked it</p>
              </div>
              <div className="user--like--list">
                {renderProfile(10)}
              </div>
            </div>
            <div className="user--want">
              <div className="user--title">
                <p>They want it</p>
              </div>
              <div className="user--want--list">
                {renderProfile(4)}
              </div>
            </div>
            <div className="user--love">
              <div className="user--title">
                <p>They loved it</p>
              </div>
              <div className="user--love--list">
                {renderProfile(8)}
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