import "./styles.scss";
import "./switch.scss";

import Card from "./components/Card";
import bgBottom from "./assets/bg-bottom.svg";
import bgTop from "./assets/bg-top.svg";

import { useState } from "react";

function App() {
  const [showSubsciption, setShowSubsciption] = useState(false);

  return (
    <>
      <main>
        <h1>Our Pricing</h1>
        <section className="switch-wrapper">
          <p>Annually</p>
          {/* Switch */}
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => setShowSubsciption(!showSubsciption)}
            />
            <span className="slider round"></span>
          </label>
          <p>Monthly</p>
        </section>
        <section className="cards-wrapper">
          <Card
            stylingClass="card round-left"
            title="basic"
            price={showSubsciption ? "19.99" : "190.99"}
            storage="500 GB"
            users="2"
            send="3"
          />
          <Card
            stylingClass="card-invert"
            title="professional"
            price={showSubsciption ? "24.99" : "249.99"}
            storage="1 TB"
            users="5"
            send="10"
          />
          <Card
            stylingClass="card round-right"
            title="master"
            price={showSubsciption ? "39.99" : "399.99"}
            storage="2 TB"
            users="10"
            send="20"
          />
        </section>
      </main>
      {/* BG Images */}
      <img src={bgTop} className="bg-top" alt="background" />
      <img src={bgBottom} className="bg-bottom" alt="background" />
    </>
  );
}

export default App;
