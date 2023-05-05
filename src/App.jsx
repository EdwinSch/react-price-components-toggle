import "./styles.scss";
import bgBottom from "./assets/bg-bottom.svg";
import bgTop from "./assets/bg-top.svg";

import Card from "./components/Card";
import Switch from "./components/Switch";

function App() {
  return (
    <>
      <main>
        <h1>Our Pricing</h1>
        <section className="switch-wrapper">
          <p>Annually</p>
          <Switch />
          <p>Monthly</p>
        </section>
        <section className="cards-wrapper">
          <Card
            class="card round-left"
            title="basic"
            price="19.99"
            storage="500 GB"
            users="2"
            send="3"
          />
          <Card
            class="card-invert"
            title="professional"
            price="24.99"
            storage="1 TB"
            users="5"
            send="10"
          />
          <Card
            class="card round-right"
            title="master"
            price="39.99"
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
