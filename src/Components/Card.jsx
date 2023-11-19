import React, { useState, useEffect } from "react";
import "../Images/1.jpg";

const TopBottomText = ({ text, editMode, styles }) => {
  // console.log(text);
  const [inputText, setInputText] = useState(text);
  return (
    (editMode || inputText) && (
      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        className={`bg-white max-w-full ${styles} px-3 pb-1.5 h-7 absolute min-w-[100px] border-black border-2 -skew-x-12  `}
        placeholder="Enter Text..."
        style={{ width: `${inputText.length * 8}px` }} // Adjust the width based on content length
        disabled={!editMode} // Disable input while image is generating
      />
    )
  );
};

const SpeechBubble = ({ speech, editMode, styles }) => {
  const [inputText, setInputText] = useState(speech);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    (editMode || inputText) && (
      <div className={`relative ${styles}`}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          className=" -skew-x- disabled:bg-white overflow-hidden border-2 -mx-4 border-black max-w-full max-h-full resize min-w-[60px] text-center min-h-[40px] p-2 rounded-t-[40px] rounded-l-[40px] focus:outline-none"
          placeholder="Enter Text..."
          disabled={!editMode}
        />
      </div>
    )
  );
};

const Card = ({ id, prompt, flx, enter, leave, speech, bold, editMode }) => {
  const [inputText, setInputText] = useState(prompt);
  const [topLeft, setTopLeft] = useState(enter);
  const [bottomRight, setBottomRight] = useState(leave);
  const [speechBubble, setSpeechBubble] = useState(speech);
  const [actionText, setActionText] = useState(bold);
  const [speechBubbleRight, setSpeechBubbleRight] = useState("Right Speech");

  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleImageGeneration = async () => {
    console.log(inputText);
    try {
      setLoading(true);
      const response = await query({ inputs: inputText });
      const imageURL = URL.createObjectURL(response);
      setGeneratedImage(imageURL);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const query = async (data) => {
    setLoading(true);
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    setLoading(false);
    return result;
  };

  // useEffect(() => {
  //   handleImageGeneration(); // Generate image with default prompt on initial render
  //   // console.log('i fire once');
  // }, []);

  // console.log(id);
  // console.log(enter);
  // console.log(leave);

  return (
    <div
      style={{ flexBasis: `${flx}px` }}
      className={`flex-1 shadow-md m-2 -skew-x-2 h-[450px] relative border-black border-[3px]`}
    >
      {editMode && (
        <div className="absolute z-10 translate-y-[320px] flex w-[calc(100%-3rem)] m-6">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-white px-2 py-2.5 pr-12 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all 
            placeholder-shown:border shadow-sm shadow-cyan-900 border-cyan-950 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
             focus:border-cyan-800 focus:outline-0 
             disabled:bg-blue-gray-50"
            placeholder="Enter Image Prompt..."
            disabled={loading} // Disable input while image is generating
          />
          <button
            className={`!absolute  right-1 top-1 z-10 select-none rounded  bg-cyan-700 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all 
          ${
            loading
              ? ` bg-gray-400`
              : `hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none`
          }`}
            type="button"
            data-ripple-light="true"
            onClick={handleImageGeneration}
            disabled={loading} // Disable button while image is generating
          >
            GO
          </button>
        </div>
      )}
      <div className=" absolute w-full h-full ">
        <TopBottomText
          editMode={editMode}
          text={enter}
          styles={`-left-[10px] -top-2`}
        />
        <TopBottomText
          editMode={editMode}
          text={leave}
          styles={`-right-[10px] -bottom-2`}
        />

        <SpeechBubble editMode={editMode} speech={speech} styles={`mt-8`} />
      </div>
      {
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover overflow-hidden"
            src={
              generatedImage ? generatedImage : require(`../Images/${id}.jpg`)
            }
            alt="Generated"
          />
        </div>
      }
    </div>
  );
};

export default Card;
