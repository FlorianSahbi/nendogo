import React from "react";
import classes from "./style.module.css";
import SEO from "../../components/seo";
import moment from "gatsby";
import { Link } from "gatsby";
import { useQuery } from "@apollo/react-hooks";
import Carousel from "../../components/carousel/index";
import { GET_INTERACTIONS_QUERY } from "../../apollo/queries/index";

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

const Nendoroid = ({ pageContext: { manufacturer, releaseDate, id, formattedName, title, description, name, series, category, price, sculptor, cooperation, specifications, srcUrl, images, number } }) => {
  const { loading, error, data } = useQuery(GET_INTERACTIONS_QUERY, {
    variables: { id: id },
    fetchPolicy: "no-cache"
  });

  if (loading) return <span style={{ color: "white" }}>Loading ...</span>;
  if (error) return <span style={{ color: "white" }}>{error.message}</span>;

  console.log(data.getNendoroid.interactions);

  return (
    <>
      {/* <SEO
        title={`${name}`}
        description={`${name}`}
      /> */}
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.info}>
            <div className={classes.meta}>
              <div className={classes.title}>
                <Link to={`/`}>back</Link>
                <h2>{formattedName}</h2>
              </div>
              <div className={classes.description}>
                <h2>{title}</h2>
                {description &&
                  description.map(p => <p>{p}</p>)}
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
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={srcUrl}
                >{`See ${formattedName}`}</a> */}
              </div>
            </div>
            <div className={classes.preview}>
              {images && (
                <Carousel images={images} />
              )}
              <div className={classes.number}>#{number}</div>
            </div>
          </div>
          <div className={classes.user}>
            <>
              <div className={classes.userlike}>
                <div className={classes.usertitle}>
                  <p>Like</p>
                </div>
                <div className={classes.userlikelist}>
                  {data.getNendoroid.interactions &&
                    data.getNendoroid.interactions
                      .filter(interaction => interaction.type === "LIKE")
                      .map(user => (
                        <ProfilPic src={user.avatar} alt={user.pseudo} />
                      ))}
                </div>
              </div>
              <div className={classes.userwant}>
                <div className={classes.usertitle}>
                  <p>Wish</p>
                </div>
                <div className={classes.userwantlist}>
                  {data.getNendoroid.interactions &&
                    data.getNendoroid.interactions
                      .filter(interaction => interaction.type === "WISH")
                      .map(user => (
                        <ProfilPic src={user.avatar} alt={user.pseudo} />
                      ))}
                </div>
              </div>

              <div className={classes.userlove}>
                <div className={classes.usertitle}>
                  <p>Own</p>
                </div>
                <div className={classes.userlovelist}>
                  {data.getNendoroid.interactions &&
                    data.getNendoroid.interactions
                      .filter(interaction => interaction.type === "OWN")
                      .map(user => (
                        <ProfilPic src={user.avatar} alt={user.pseudo} />
                      ))}
                </div>
              </div>

            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nendoroid;
