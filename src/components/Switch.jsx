import "../switch.scss";

const Switch = ({ showSubsciption, setShowSubsciption }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onClick={() => setShowSubsciption(!showSubsciption)}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
