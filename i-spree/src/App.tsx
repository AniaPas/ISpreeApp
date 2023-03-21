import { GlobalStore } from "./Store/GlobalStore";
import { All } from "./view/All/All";
import { Add } from "./view/Add/Add";
import { OneCart } from "./view/OneCart/OneCart";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";

// Router
import { Routes, Route } from "react-router-dom";

// Style
import style from "./App.module.scss";

// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
