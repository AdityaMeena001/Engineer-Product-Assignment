import React, { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

import cardContent from './data'

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="w-full h-full bg-gray-500  bg-gradient-to-b from-indigo-800 to-gray-900 flex flex-col items-center min-h-screen ">
      <div className=" flex flex-col p-6 w-full items-center justify-center relative mt-8 ">
        <h4 className=" text-lg mb-0 sm:text-xl lg:text-3xl text-white">
          Your live ai comic generator
        </h4>
        <h1 className=" tracking-[3px] -mt-4 text-[44px] sm:text-[94px] text-white ">
          Comic Gen
        </h1>

        <div className="flex mb-4 flex-col border-2 border-black -skew-x-6 items-center bg-white p-4">
          <p>Turn on Edit mode to add the text and speech</p>
          <p> add prompt to genrate images</p>
          <p>Turn off Edit mode to view as comic.</p>
          <p>any field left empty will not be displayed in final comic</p>
        </div>

        <div className=" flex items-center gap-4">
          <span className=" mb-1 text-white text-xl">Edit Mode</span>
          <button
            className={`relative px-2 w-14 h-8 rounded-full focus:outline-none ${
              isOn ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={toggleSwitch}
          >
            <span
              className={`absolute inset-y-0 left-0 w-6 h-6 mx-1.5 m-auto rounded-full bg-white shadow-md transform 
            ${isOn ? "translate-x-[22px]" : ""} 
            transition-transform duration-300 ease-in-out`}
            ></span>
          </button>
        </div>
      </div>

      <div className="w-full h-full mb-12 bg-white gap-4 p-6 max-w-7xl flex flex-wrap  ">
        {cardContent.map((card) => (
          <Card
            id={card.id}
            prompt={""}
            flx={card.flx}
            enter={card.enter_text}
            leave={card.leave_text}
            speech={card.speech_bubble}
            bold={card.bold_text}
            editMode={isOn}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
