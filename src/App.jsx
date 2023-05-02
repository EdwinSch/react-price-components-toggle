import "./styles.scss";
import bgBottom from "./assets/bg-bottom.svg";
import bgTop from "./assets/bg-top.svg";

import Card from "./components/Card";

function App() {
  return (
    <>
      <section className="cards-wrapper">
        <Card
          class="card"
          title="basic"
          price="19.99"
          storage="500"
          users="2"
          send="3"
        />
      </section>
      <img src={bgBottom} className="bg-bottom" alt="background" />
      <img src={bgTop} className="bg-top" alt="background" />
    </>
  );
}

export default App;
