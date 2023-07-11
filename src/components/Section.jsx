import { useState } from "react";

const Section = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(inputText);
  };
  return (
    <div>
      <div className="m-20 p-7">
        <textarea
          rows="10"
          cols="50"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button
          className="py-2 px-4 bg-rose-200 text-slate-800 font-semibold rounded-lg shadow-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-opacity-75"
          onClick={handleButtonClick}
        >
          Display Text
        </button>
        <div className="output">{displayText}</div>
      </div>
    </div>
  );
};

export default Section;
