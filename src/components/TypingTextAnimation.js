import React, { useState, useRef, useEffect } from "react";

export const TypingTextAnimation = ({
  text,
  frame,
  setAnimeFinished,
  animeFinishFlag,
  flag = true,
}) => {
  const [typingText, setTypingText] = useState("");
  const textIndex = useRef(0);
  const lastTimeStamp = useRef(null);

  const animationCallback = (timeStamp) => {
    if (lastTimeStamp.current === null) {
      lastTimeStamp.current = timeStamp;
    }

    const elapsedTime = timeStamp - lastTimeStamp.current;

    if (elapsedTime > frame) {
      lastTimeStamp.current = timeStamp;
      setTypingText((state) => {
        const newState = state + text[textIndex.current];
        textIndex.current += 1;
        return newState;
      });
    }

    if (textIndex.current >= text.length) {
      setAnimeFinished();
      console.log("finish!");
      return;
    }
    requestAnimationFrame(animationCallback);
  };

  useEffect(() => {
    let animeId;
    if (animeFinishFlag) {
      setTypingText(text);
    } else if (flag) {
      animeId = requestAnimationFrame(animationCallback);
    }

    return () => {
      cancelAnimationFrame(animeId);
    };
  }, [flag]);

  return <p>{typingText}</p>;
};

export const useTypingAnime = (text, frame, flag) => {
  const [animeFinishFlag, setFlageState] = useState(false);
  const setAnimeFinished = () => {
    setFlageState(true);
  };

  const TypingTextDiv = () => {
    return TypingTextAnimation({
      text,
      frame,
      setAnimeFinished,
      animeFinishFlag,
      flag,
    });
  };

  return { animeFinishFlag, TypingTextDiv };
};
