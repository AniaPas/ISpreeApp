import { GlobalStore } from "./Store/GlobalStore";
import { All } from "./view/All/All";
import { Add } from "./view/Add/Add";
import { OneCart } from "./view/OneCart/OneCart";
//Components
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
//HelperInterface
import { navElements, PathNav } from "./HelperInterface/Navigation";
// Router
import { Routes, Route } from "react-router-dom";

// Style
import style from "./App.module.scss";

// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const navigation: navElements[] = [
    {
      path: PathNav.HOME,
      name: "I Spree",
    },

    {
      path: PathNav.ADD,
      name: "Add...",
    },
  ];
  const theme = createTheme({
    palette: {
      primary: {
        light: "#a2cf6e",
        main: "#8bc34a",
        dark: "#618833",
        contrastText: "#000",
      },
      secondary: {
        light: "#ffcf33",
        main: "#ffc400",
        dark: "#b28900",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStore>
        <div className={style.app}>
          <Header />
          <Nav navElements={navigation} />
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
