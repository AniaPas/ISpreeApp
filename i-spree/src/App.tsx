import style from "./App.module.scss";
import { GlobalStore } from "./Store/GlobalStore";
import { All } from "./view/All/All";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <GlobalStore>
      <div className={style.app}>
        <Header />
        <Nav />
        <All />
      </div>
    </GlobalStore>
  );
}

export default App;
