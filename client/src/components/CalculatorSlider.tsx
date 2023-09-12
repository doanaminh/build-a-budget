import React from "react";
import "./CalculatorSlider.css";

export default function () {
  const [isOn, setIsOn] = React.useState([true, false]);
  console.log(isOn);

  return (
    <section className="slider">
      <button
        className={`sliderButton1 ${isOn[0] ? "on" : ""}`}
        onClick={() => setIsOn([true, false])}
      >
        Budget
      </button>
      <button
        className={`sliderButton2 ${isOn[1] ? "on" : ""}`}
        onClick={() => setIsOn([false, true])}
      >
        Compound
      </button>
    </section>
  );
}
