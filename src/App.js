import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import MetalMeta from "./Components/MetalMeta/MetalMeta";
import Band from "./Components/Band/Band";

function App() {
  return (
    <div className="App">
      <Header />
      <MetalMeta />
      <div className="band-grid">
        <Band />
      </div>
    </div>
  );
}

export default App;
