import React, { useState } from "react";
import classes from "./style.module.css";

export default function Carousel(props) {
  const { images } = props;
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[index]);

  function handlePrevious() {
    let i = index - 1;
    if (i < 0) {
      i = images.length - 1;
      setIndex(i);
      setCurrentImage(images[index]);
    } else {
      setIndex(i);
      setCurrentImage(images[index]);
    }
  }

  function handleNext() {
    let i = index + 1;
    if (i > images.length - 1) {
      i = 0;
      setIndex(i);
      setCurrentImage(images[index]);
    } else {
      setIndex(i);
      setCurrentImage(images[index]);
    }
  }

  function handleShow() {
    alert("show");
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.ActionsLayerContainer}>
          <div className={classes.ActionsLayerWrapper}>
            <div
              className={classes.previousButton}
              onClick={handlePrevious}
            ></div>
            <div className={classes.showImage} onClick={handleShow}></div>
            <div className={classes.nextButton} onClick={handleNext}></div>
          </div>
        </div>
        <img src={currentImage} className={classes.slideBg} alt="bla" />
        <img src={currentImage} className={classes.slide} alt="bla" />
      </div>
    </div>
  );
}
