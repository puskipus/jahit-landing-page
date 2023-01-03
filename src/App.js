import "./index.css";
import Header from "./Hero.js";
import KontenPertama from "./KontenPertama";
import KontenKedua from "./KontenKedua";
import KontenKetiga from "./KontenKetiga";
import HubungiKami from "./HubungiKami";

function App() {
  return (
    <div>
      <Header />
      <KontenPertama />
      <KontenKedua />
      <KontenKetiga />
      <HubungiKami />
    </div>
  );
}

export default App;
