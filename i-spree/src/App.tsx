import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { GlobalStore } from "./Store/GlobalStore";

function App() {
  return (
    <GlobalStore>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalStore>
  );
}

export default App;
