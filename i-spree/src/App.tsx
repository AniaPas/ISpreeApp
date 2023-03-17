import style from "./App.module.scss";
import { GlobalStore } from "./Store/GlobalStore";
import { All } from "./view/All/All";

function App() {
  return (
    <GlobalStore>
      <div className={style.app}>
        <All />
      </div>
    </GlobalStore>
  );
}

export default App;
