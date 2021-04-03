//UseRef,UseEffect

import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";
import {} from "react";

const ImageChangeOnScroll = () => {
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  useEffect(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect setting title to ${currentSpeakerId}`);
  }, [currentSpeakerId]);
  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurrentSpeakerId(speakerId);
            }}
          >
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
            />
          </div>
        );
      })}
      <h2 style={{ position: "absolute", top: 0, right: 50 }}>
        currentSpeakerId:{currentSpeakerId}
      </h2>
    </div>
  );
};

export default ImageChangeOnScroll;
