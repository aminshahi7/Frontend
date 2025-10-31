import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Test from "./pages/Test"
import Bestellung from "./pages/Bestellung";
import KasseGemischt from "./pages/KasseGemischt"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test/>} />
              <Route path="/bestellung" element={<Bestellung/>} />
              <Route path="/KasseGemischt" element={<KasseGemischt/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
