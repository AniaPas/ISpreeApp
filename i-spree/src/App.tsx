import style from "./App.module.scss";
import { GlobalStore } from "./Store/GlobalStore";
import { All } from "./view/All/All";
import { Add } from "./view/Add/Add";
import { OneCart } from "./view/OneCart/OneCart";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";

// router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalStore>
      <div className={style.app}>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/add' element={<Add />} />
          <Route path='/:id' element={<OneCart />} />
        </Routes>
      </div>
    </GlobalStore>
  );
}

export default App;
