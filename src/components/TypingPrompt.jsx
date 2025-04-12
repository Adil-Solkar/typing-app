import { useState } from "react";
import { quotes } from "../utils/constants";
const TypingPrompt = () => {

  const [text, setText] = useState("");
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const anotherRandomNumber = Math.floor(Math.random() * quotes.length);

  if (!text) {
    setText(`${quotes[randomNumber]} ${quotes[anotherRandomNumber]}`);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>{text || "Loading...."}</h3>
      </div>
    </>
  );
};

export default TypingPrompt;


