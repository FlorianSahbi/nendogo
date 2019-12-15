/*eslint-disable jsx-a11y/click-events-have-key-events*/
/*eslint-disable jsx-a11y/no-static-element-interactions*/

import React from "react"
import SEO from "../components/seo"
import userTemplateStyles from "./userTemplateStyle.module.css"
import { Link } from "gatsby"

/*eslint-disable no-unused-vars*/
const ProfilPic = (props) => {
  return (
    <div className={userTemplateStyles.roundedProfil}>
      <img src={props.src} alt={props.alt} />
      <Link to={`/${props.number}/`} >{`See ${props.number}`}</Link>
    </div>
  )
}

export default (props) => {
  return (
    <>
      {/* <SEO title={`${props.pageContext.pseudo}`} description="With the theatrical release of 'Magical Girl Lyrical Nanoha The MOVIE 1st' getting closer by the day, yet another userroid is here to join the cast - Fate Testarossa is here, and just like Nanoha, she is wearing her new barrier jacket from the movie! Three facial expressions are included: a typical, stoic expression, a serious expression, as well as an expression with closed eyes. Her all important intelligent device, 'Bardiche' is also included in both axe form and scythe form. Her familiar Arf is also included in her dog form, once again giving you everything you need for a userroid reenactment of the original!" /> */}

      <div className={userTemplateStyles.container}>
        <div className={userTemplateStyles.wrapper}>
          <div className={userTemplateStyles.info}>
            <div className={userTemplateStyles.meta}>
              <div className={userTemplateStyles.title}>
                <h2>{props.pageContext.pseudo}</h2>
              </div>
              <div className={userTemplateStyles.description}>
                <h2>From the popular game "League of Legends" comes a userroid of Ahri!</h2>
                <p>From the internationally popular E-sports game "League of Legends" comes a userroid of Ahri! She comes with two face plates, both of which capture her charming expressions in cute userroid form. Her detailed costume has been faithfully recreated, including the gold adornments.</p>
                <p>Two kinds of effect parts are included to display her using her abilities. Two tail parts are included allowing you to display her two different ways! Bent arms and bent leg parts are included allowing you to create a variety of different scenes!</p>
              </div>
            </div>
            <div className={userTemplateStyles.preview}>
              <img src={props.pageContext.avatar} alt="ok" />
            </div>
          </div>
          <div className={userTemplateStyles.user}>
            <div className={userTemplateStyles.like}>
              {/* <div className={userTemplateStyles.title}>
                <p>He like it</p>
              </div>
              <div className={userTemplateStyles.likeList}>
                {renderliked(props.pageContext.liked)}
              </div>
            </div>
            <div className={userTemplateStyles.want}>
              <div className={userTemplateStyles.title}>
                <p>He want it</p>
              </div>
              <div className={userTemplateStyles.wantList}>
                {renderliked(props.pageContext.wanted)}
              </div>
            </div>
            <div className={userTemplateStyles.love}>
              <div className={userTemplateStyles.title}>
                <p>He own it</p>
              </div>
              <div className={userTemplateStyles.loveList}>
                {renderliked(props.pageContext.owned)}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
