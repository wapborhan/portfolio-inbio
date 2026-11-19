import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
}

const Typewriter = ({ text, delay }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) return;
    const intervalId = setTimeout(() => {
      setDisplayText((prevDisplayText) => prevDisplayText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, delay);
    return () => clearTimeout(intervalId);
  }, [text, delay, currentIndex]);

  return <p>{displayText}</p>;
};

interface MultipleTypewriterProps {
  texts: string[];
  delay: number;
}

const MultipleTypewriter = ({ texts, delay }: MultipleTypewriterProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, delay * texts[currentIndex].length);
    return () => clearInterval(intervalId);
  }, [texts, delay, currentIndex]);

  return <Typewriter text={texts[currentIndex]} delay={delay} />;
};

export default MultipleTypewriter;
