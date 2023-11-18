import React, { useState, useEffect } from "react";

const Card = ({ id, prompt, flx, enter, leave, speech, bold }) => {
  const [inputText, setInputText] = useState(prompt);
  const [topLeft, setTopLeft] = useState(enter);
  const [bottomRight, setBottomRight] = useState(leave);
  const [speechBubble, setSpeechBubble] = useState(speech);
  const [actionText, setActionText] = useState(bold);

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

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      handleImageGeneration(); // Generate image with default prompt on initial render
    }
  }, [firstRender]);

  return (
    <div className="panel -skew-x-2 w-full h-[450px] overflow-hidden relative border-black border-[3px]">
      <div className="absolute z-10 translate-y-[200px] flex w-[calc(100%-3rem)] m-6">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-white px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all 
            placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
             focus:border-cyan-800 focus:outline-0 
             disabled:bg-blue-gray-50"
          placeholder="Enter Image Prompt..."
          disabled={loading} // Disable input while image is generating
        />
        <button
          className={`!absolute w-28 right-1 top-1 z-10 select-none rounded  bg-cyan-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all 
          ${
            loading
              ? ` bg-gray-400`
              : `hover:shadow-lg hover:shadow-cyan-500/40 
          focus:opacity-[0.85] focus:shadow-none 
          active:opacity-[0.85] active:shadow-none 
          peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none`
          }`}
          type="button"
          data-ripple-light="true"
          onClick={handleImageGeneration}
          disabled={loading} // Disable button while image is generating
        >
          {!loading ? <>Generate</> : <>Generating</>}
        </button>
      </div>
      <div className=" absolute w-full h-full">
        <input
          type="text"
          value={topLeft}
          onChange={(event) => {
            setTopLeft(event.target.value);
          }}
          className={`bg-white -left-2 -top-1 py-0.5 px-3 h-7 absolute min-w-[100px] border-black border-2 -skew-x-12 `}
          placeholder="Enter Text..."
          style={{ width: `${topLeft.length * 8}px` }} // Adjust the width based on content length
          // disabled={loading} // Disable input while image is generating
        />
        <input
          type="text"
          value={bottomRight}
          onChange={(event) => {
            setBottomRight(event.target.value);
          }}
          className={`bg-white -right-2 -bottom-1 px-3 pb-1.5 h-7 absolute min-w-[100px] border-black border-2 -skew-x-12  `}
          placeholder="Enter Text..."
          style={{ width: `${bottomRight.length * 8}px` }} // Adjust the width based on content length
          // disabled={loading} // Disable input while image is generating
        />
        {/* <p class="  ">{enter}</p> */}
        {/* <p class="speech">{speech}</p> */}
      </div>
      {generatedImage && (
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover overflow-hidden"
            src={generatedImage}
            alt="Generated"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
