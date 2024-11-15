import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Section from "./component/Section";
import SectionMain from "./component/SectionMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Home />
      <Section />
      <SectionMain />
    </div>
  );
}

export default App;
