import React from "react";
import SEO from "../../components/seo";
import "./style.module.css";
import { Link } from "gatsby";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Carousel from "../../components/carousel/index";

const More = props => {
  return (
    <div className="more--container">
      <div className="more--title">{props.title}</div>
      <div className="more--value">{props.value}</div>
    </div>
  );
};

const ProfilPic = props => {
  return (
    <div className="user--roundedProfil">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

const GET_INTERACTIONS_QUERY = gql`
  query GetNendoroids($id: ID!) {
    getNendoroid(id: $id) {
      interactions {
        type
        user {
          pseudo
          avatar
        }
      }
    }
  }
`;

export default props => {
  const { loading, error, data } = useQuery(GET_INTERACTIONS_QUERY, {
    variables: { id: props.pageContext.id },
    fetchPolicy: "no-cache"
  });

  if (loading) return <span style={{ color: "white" }}>Loading ...</span>;
  if (error) return <span style={{ color: "white" }}>{error.message}</span>;

  console.log(data.getNendoroid.interactions);

  return (
    <>
      <SEO
        title={`${props.pageContext.name}`}
        description={`${props.pageContext.name}`}
      />
      <div className="nendo--container">
        <div className="nendo--wrapper">
          <div className="nendo--info">
            <div className="nendo--meta">
              <div className="nendo--title">
                <Link to={`/`}>back</Link>
                <h2>{props.pageContext.formattedName}</h2>
              </div>
              <div className="nendo--description">
                <h2>{props.pageContext.title}</h2>
                {props.pageContext.description &&
                  props.pageContext.description.map(p => <p>{p}</p>)}
              </div>
              <div className="nendo--more">
                <More title="Product Name" value={props.pageContext.name} />
                <More title="Series" value={props.pageContext.series} />
                <More
                  title="Manufacturer"
                  value={props.pageContext.manufacturer}
                />
                <More title="Category" value={props.pageContext.category} />
                <More title="Price" value={props.pageContext.price} />
                <More
                  title="Release Date"
                  value={props.pageContext.releaseDate}
                />
                <More title="Sculptor" value={props.pageContext.sculptor} />
                <More
                  title="Cooperation"
                  value={props.pageContext.cooperation}
                />
                <More
                  title="Specifications"
                  value={props.pageContext.specifications}
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.pageContext.srcUrl}
                >{`See ${props.pageContext.formattedName}`}</a>
              </div>
            </div>
            <div className="nendo--preview">
              {props.pageContext.images && (
                <Carousel images={props.pageContext.images} />
              )}
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
                  {data.getNendoroid.interactions &&
                    data.getNendoroid.interactions
                      .filter(interaction => interaction.type === "LIKE")
                      .map(user => (
                        <ProfilPic src={user.avatar} alt={user.pseudo} />
                      ))}
                </div>
              </div>
              <div className="user--want">
                <div className="user--title">
                  <p>Wish</p>
                </div>
                <div className="user--want--list">
                  {data.getNendoroid.interactions &&
                    data.getNendoroid.interactions
                      .filter(interaction => interaction.type === "WISH")
                      .map(user => (
                        <ProfilPic src={user.avatar} alt={user.pseudo} />
                      ))}
                </div>
              </div>
              <div className="user--love">
                <div className="user--title">
                  <p>Own</p>
                </div>
                <div className="user--love--list">
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
};
