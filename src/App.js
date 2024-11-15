import { BrowserRouter, Routes, Route } from "react-router-dom";

import Headbar from "./component/Headbar";
import Section from "./component/Section";
import SectionMain from "./component/SectionMain";

function App() {
  return (
    <div className="App">
      <Headbar />
      <Section />
    </div>
  );
}

export default App;
