import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pagetitle/Home";
import Company from "./pagetitle/Company";

function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
