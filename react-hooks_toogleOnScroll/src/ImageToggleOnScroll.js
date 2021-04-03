import React, { useState, useEffect, useRef } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  //UseEffect Runs After the first render is completed.
  //since the default image color is b/w.the images will be b/w then moves to color.
  //to avoid seeing color change at start.use loading.
  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  //if(isLoading) return null;
  //this normally works but here it throws error because for isInView calculation ImageRef must be set.

  return (
    <img
      ref={imageRef}
      src={
        isLoading
          ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" //transperent 1x1gif
          : inView
          ? secondaryImg
          : primaryImg
      }
      alt=""
      width="200"
      height="200"
    />
  );
};

export default ImageToggleOnScroll;
