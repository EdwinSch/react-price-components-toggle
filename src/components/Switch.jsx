import "../switch.scss";

import { useState } from "react";

const Switch = () => {
  const [showSubsciption, setShowSubsciption] = useState(false);

  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
