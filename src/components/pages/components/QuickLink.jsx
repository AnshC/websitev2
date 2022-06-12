import "./styles.css";
import { useState } from "react";
export default function QuickLink(props) {
  const [bgState, setBgState] = useState({ backgroundColor: "transparent" });
  const [headState, setHeadState] = useState({ color: "var(--light)" });
  return (
    <div
      className="quick-link"
      style={bgState}
      onMouseEnter={() => {
        setBgState({
          borderColor: "var(--accent)",
          transform: "scale(1.05) rotate(-1deg)",
        });
        setHeadState({
          color: "var(--accent)",
        });
      }}
      onMouseLeave={() => {
        setBgState({
          backgroundImage: "initial",
          borderColor: "var(--grey)",
          transform: "scale(1) rotate(0deg)",
        });
        setHeadState({
          color: "var(--light)",
        });
      }}
    >
      <h3 style={headState}>{props.head}</h3>
      <h4>{props.description}</h4>
    </div>
  );
}
