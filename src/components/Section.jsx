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
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
          defaultValue={""}
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
