import "./App.scss";
import { GlobalStore } from "./Store/GlobalStore";
import { All } from "./view/All/All";

function App() {
  return (
    <GlobalStore>
      <All />
    </GlobalStore>
  );
}

export default App;
