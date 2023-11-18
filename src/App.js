import React from "react";
import Card from "./Components/Card";
// import ComicBook from "./Components/ComicBook";
import "./App.css";

const cardContent = [
  {
    id: 1,
    prompt: "A mysterious comet approaches Earth, emitting strange energy.",
    enter_text: "Title: The Arrival",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 2,
    prompt:
      "Scientists discover the comet's energy grants superhuman abilities.",
    enter_text: "New Characters: Dr. Smith, Dr. Rodriguez",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 3,
    prompt:
      "Villains and heroes emerge, harnessing the comet's power for good and evil.",
    enter_text: "Introduction of Villain: Dark Matter",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 4,
    prompt: "A team of unlikely individuals gains extraordinary powers.",
    enter_text: "Heroic Transformation: Team Formation",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 5,
    prompt:
      "Tensions rise between those using the energy for personal gain and those protecting humanity.",
    enter_text: "Conflict Arises: Tension Escalates",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 6,
    prompt:
      "A decisive battle erupts between the opposing sides, threatening the world's safety.",
    enter_text: "Epic Battle: Chaos Unleashed",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 7,
    prompt:
      "The heroes unite, showcasing the strength of unity against the forces of chaos.",
    enter_text: "Unity Prevails: Heroes Stand Together",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 8,
    prompt:
      "The villains' defeat restores peace, but remnants of the comet's energy linger, hinting at new challenges.",
    enter_text: "Victory Achieved: Peace Restored",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 9,
    prompt:
      "New heroes emerge, ready to defend Earth and explore the unknown powers of the comet.",
    enter_text: "Introduction of New Heroes: The Next Generation",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
  {
    id: 10,
    prompt:
      "The story continues as the world adapts to the newfound abilities and threats.",
    enter_text: "New Adventures Begin: Future Awaits",
    leave_text: "",
    speech_bubble: "",
    bold_text: "",
  },
];

const App = () => {
  return (
    <div className="w-full h-full bg-gray-500 bg-gradi bg-gradient-to-b from-indigo-500 to-gray-950 flex flex-col items-center min-h-screen ">
      <div className=" flex items-center justify-center relative mt-8 ">
        <h1 className=" absolute text-[94px] text-[#df781e] ">Comic Gen</h1>
        <h1 className=" text-[98px]  font-extrabold ">Comic Gen</h1>
      </div>

      <div className="w-full h-full mb-12 bg-white p-12 max-w-7xl flex flex-wrap gap-4 ">
        {cardContent.map((card) => (
          <Card
            id={card.id}
            prompt={card.prompt}
            flx={card.flx}
            enter={card.enter_text}
            leave={card.leave_text}
            speech={card.speech_bubble}
            bold={card.bold_text}
          />
        ))}

        {/* <ComicBook /> */}
      </div>
    </div>
  );
};

export default App;
