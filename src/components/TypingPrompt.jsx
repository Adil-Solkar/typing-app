
const TypingPrompt = ({text, setText}) => {

    function handleClick(){
        setText()
    }
  return (
    <>
      <div className="typing-prompt">
        <h3>{text || "Loading...."}</h3>
      </div>
      <button onClick={handleClick}>Change Quote</button>
    </>
  );
};

export default TypingPrompt;


