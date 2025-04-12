import { useState } from "react";
import { quotes } from "./utils/constants";
import Header from './components/Header'
import TypingPrompt from './components/TypingPrompt'
import TypingInput from "./components/TypingInput";

function App() {
    const [text, setText] = useState("");
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const anotherRandomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = `${quotes[randomNumber]} ${quotes[anotherRandomNumber]}`
  if (!text) {
    setText(randomQuote);
  }

  return (
    <>
      <Header />
      <TypingPrompt text={text} setText = {()=>setText(randomQuote)} />
      <TypingInput text={text}/>
    </>
  )
}

export default App
