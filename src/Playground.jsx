import { useReducer } from "react";
import Control from "./Control";

const Playground = () => {
  // Function to limit a number between 0 and max
  const limit = (num, max) => (num < 0 ? 0 : num > max ? max : num);

  const step = 20;

  const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
      case "INCREMENT_H":
        return { ...state, h: (state.h + step) % 360 };
      case "DECREMENT_H":
        return { ...state, h: (state.h - step) % 360 };
      case "INCREMENT_S":
        return { ...state, s: limit(state.s + step, 100) };
      case "DECREMENT_S":
        return { ...state, s: limit(state.s - step, 100) };
      case "INCREMENT_L":
        return { ...state, l: limit(state.l + step, 100) };
      case "DECREMENT_L":
        return { ...state, l: limit(state.l - step, 100) };
      default:
        return state;
    }
  };

  const initialState = { h: 50, l: 50, s: 50 };
  const [{ h, l, s }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="component">
      <div
        className="card"
        style={{
          color: `hsl(${(h + 180) % 360}, ${s}% , ${(l + 50) % 100}%)`,
          backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
        }}
      >
        Sample text for contrast.
      </div>
      <div className="controls">
        <Control
          label="Hue"
          onIncrement={() => dispatch({ type: "INCREMENT_H" })}
          onDecrement={() => dispatch({ type: "DECREMENT_H" })}
        />
        <Control
          label="Saturation"
          onIncrement={() => dispatch({ type: "INCREMENT_S" })}
          onDecrement={() => dispatch({ type: "DECREMENT_S" })}
        />
        <Control
          label="Lightness"
          onIncrement={() => dispatch({ type: "INCREMENT_L" })}
          onDecrement={() => dispatch({ type: "DECREMENT_L" })}
        />
      </div>
    </div>
  );
};

export default Playground;
