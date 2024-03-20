import "./App.css";
import Data from "./assets/movies_rnexgr.json";
import Logo from "./assets/img/App.png";
import Section from "./components/Section";

function App() {
  return (
    <>
      <header>
        <img src={Logo} alt="logo-netflix" />
      </header>
      {Data.map((elem) => {
        return <Section elem={elem} key={elem.category} />;
      })}
    </>
  );
}

export default App;
