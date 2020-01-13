import React, { useState, useCallback } from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";
import { useQuery } from "@apollo/react-hooks";
// import Carousel from "../../components/carousel/index";
import { GET_INTERACTIONS_QUERY } from "../../apollo/queries/index";
import moment from "moment";
import Layout from "../../components/layout/index";


import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

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

  const testI = images.map(e => {
    return { src: e, width: 3, height: 4 }
  })

  console.log(testI)

  if (error) return <span style={{ color: "white" }}>{error.message}</span>;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout header>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.info}>
            <div className={classes.meta}>

              <div className={classes.title}>
                <h2>{formattedName}</h2>
              </div>

              <div className={classes.description}>
                <h2>{title}</h2>
                {description && description.map(p => <p>{p}</p>)}
              </div>

              <div className={classes.more}>
                <More title="Product Name" value={name} />
                <a href={`../../serie/${series}`} >
                  <More title="Series" value={series} />
                </a>
                <a href={`../../manufacturer/${manufacturer}`} >
                  <More title="Manufacturer" value={manufacturer} />
                </a>
                <More title="Category" value={category} />
                <More title="Price" value={`¥${price} (Before Tax)`} />
                <More title="Release Date" value={moment(releaseDate).format('YYYY/MM')} />
                <a href={`../../sculptor/${sculptor}`} >
                  <More title="Sculptor" value={sculptor} />
                </a>
                <More title="Cooperation" value={cooperation} />
                {/* <More title="Specifications" value={specifications} /> */}
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={srcUrl}
                >{`See ${formattedName}`}</a> */}
              </div>

            </div>

            <div className={classes.preview}>
              {images &&
                // <Carousel images={images} />



                <>
                  <Gallery photos={testI} onClick={openLightbox} />
                  <ModalGateway>
                    {viewerIsOpen ? (
                      <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage}
                          views={testI.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                          }))}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </>
              }



              <div className={classes.number}>#{number}</div>
            </div>

          </div>

          {loading
            ? (<span style={{ color: "white" }}>Loading ...</span>)
            :
            (<div className={classes.user}>
              <div className={classes.blankL}>
              </div>
              <div className={classes.like}>
                <InteractionsList title="They like it." type="LIKE" data={data.getNendoroid.interactions} />
              </div>
              <div className={classes.blankML}>
              </div>
              <div className={classes.own}>
                <InteractionsList title="They own it." type="OWN" data={data.getNendoroid.interactions} />
                <ProfilPic src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png" alt="ok" />
                <ProfilPic src="http://eskipaper.com/images/anime-wallpaper-8.jpg" alt="ok" />
                <ProfilPic src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1" alt="ok" />
                <ProfilPic src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                <ProfilPic src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
              </div>
              <div className={classes.blankMR}></div>
              <div className={classes.wish}>
                <InteractionsList title="They want it." type="WISH" data={data.getNendoroid.interactions} />
                <ProfilPic src="https://www.itl.cat/pngfile/big/93-931458_2019-anime-wallpaper-anime-wallpaper-background-anime.jpg" alt="ok" />
                <ProfilPic src="https://www.xtrafondos.com/wallpapers/resized/shinobu-kocho-de-kimetsu-no-yaiba-3717.jpg?s=large" alt="ok" />
                <ProfilPic src="https://steamuserimages-a.akamaihd.net/ugc/777357228030313022/C7FFE68928D4E7A820F10B3FDEF3A32D6FE97657/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="ok" />
                <ProfilPic src="https://hdqwalls.com/wallpapers/ahri-lol-j5.jpg" alt="ok" />

              </div>
              <div className={classes.blankR}>
              </div>
              <div className={classes.b}></div>
            </div>)
          }
        </div>
      </div>
    </Layout>
  );
}

export default Nendoroid;
