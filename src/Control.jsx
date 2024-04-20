// Control component for button controls
const Control = ({ label, onIncrement, onDecrement }) => (
  <div className="control">
    <div className="control__label">{label}</div>
    <button className="control__button" onClick={onIncrement}>
      +
    </button>
    <button className="control__button" onClick={onDecrement}>
      -
    </button>
  </div>
);

export default Control;
