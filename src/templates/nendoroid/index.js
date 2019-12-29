import React from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";
import { useQuery } from "@apollo/react-hooks";
import Carousel from "../../components/carousel/index";
import { GET_INTERACTIONS_QUERY } from "../../apollo/queries/index";
import { useStaticQuery, graphql } from "gatsby";

const More = props => {
  return (
    <div className={classes.morecontainer}>
      <div className={classes.moretitle}>{props.title}</div>
      <div className={classes.morevalue}>{props.value}</div>
    </div>
  );
};

const ProfilPic = props => {
  return (
    <div className={classes.userroundedProfil}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

const InteractionsList = (props) => {
  const array = props.data.filter(e => e.type === props.type);
  return (
    <div className={classes.userlike}>
      <div className={classes.usertitle}>
        <p>{props.title}</p>
      </div>
      <div className={classes.userlikelist}>
        {array &&
          array
            .map(interaction => {
              return (
                <ProfilPic src={interaction.user.avatar} alt={interaction.user.pseudo} />
              )
            })}
      </div>
    </div>
  )
};

const Nendoroid = ({ pageContext: { manufacturer, releaseDate, id, formattedName, title, description, name, series, category, price, sculptor, cooperation, specifications, srcUrl, images, number } }) => {

  const { loading, error, data } = useQuery(GET_INTERACTIONS_QUERY, {
    variables: { id: id },
    fetchPolicy: "no-cache"
  });

  if (loading) return <span style={{ color: "white" }}>Loading ...</span>;
  if (error) return <span style={{ color: "white" }}>{error.message}</span>;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.info}>
            <div className={classes.meta}>

              <div className={classes.title}>
                <Link to={`/nendoroids`}>back</Link>
                <h2>{formattedName}</h2>
              </div>

              <div className={classes.description}>
                <h2>{title}</h2>
                {description && description.map(p => <p>{p}</p>)}
              </div>

              <div className={classes.more}>
                <More title="Product Name" value={name} />
                <More title="Series" value={series} />
                <More title="Manufacturer" value={manufacturer} />
                <More title="Category" value={category} />
                <More title="Price" value={price} />
                <More title="Release Date" value={releaseDate} />
                <More title="Sculptor" value={sculptor} />
                <More title="Cooperation" value={cooperation} />
                <More title="Specifications" value={specifications} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={srcUrl}
                >{`See ${formattedName}`}</a>
              </div>

            </div>

            <div className={classes.preview}>
              {images && <Carousel images={images} />}
              <div className={classes.number}>#{number}</div>
            </div>

          </div>
          <div className={classes.user}>
            <InteractionsList title="Like" type="LIKE" data={data.getNendoroid.interactions} />
            <InteractionsList title="Wish" type="WISH" data={data.getNendoroid.interactions} />
            <InteractionsList title="Own" type="OWN" data={data.getNendoroid.interactions} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nendoroid;
