import "./Health-bar.css";
import { useState, useRef } from "react";

function HealthBar() {
  const inputRef = useRef(null);
  const [health, setHealth] = useState(450);
  const [healthDiff, setHealthDiff] = useState(0);

  function HealthCounter() {
    return (
      <div className="health-animated">
        <div className="health-counter">{`${
          parseInt(healthDiff, 10) > 0 ? "+" : "-"
        } ${Math.abs(healthDiff)}`}</div>
        <div className="health-test">{health}</div>
      </div>
    );
  }

  function buttonClick() {
    setHealthDiff(inputRef.current.value);
    setHealth(health + parseInt(inputRef.current.value, 10));
  }

  console.log(health);

  return (
    <div>
      <p>Add or remove health</p>
      <HealthCounter />
      <div className="health-div" style={{ width: "500px" }}>
        <div style={{ width: `${health}px` }} className="progress" />
      </div>
      <input
        ref={inputRef}
        className="health-input"
        type="number"
        name="chng"
      />
      <button onClick={() => buttonClick()}>set</button>
    </div>
  );
}

export default HealthBar;
