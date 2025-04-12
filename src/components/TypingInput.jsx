import { useState } from "react";
const TypingInput = ({text}) => {

    const [input,setInput] = useState("")
    const [result,setResult] = useState(false)

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmitClick(){
        if(text === input){
            setResult(prevState => !prevState)
        }
    }

  return (
    <>
      <div className="typing-input">
        <textarea rows={10}
        value={input}
        onChange={handleChange}
        />
        <button onClick={handleSubmitClick}>Submit</button>
      {result ?<p>Correct</p>:<p>Incorrect</p>}
      </div>
    </>
  );
};

export default TypingInput;
