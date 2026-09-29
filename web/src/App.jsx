import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/sections/Nav";
import Footer from "./components/sections/Footer"
import Home from "./pages/Home";
import JanSujhav from "./pages/JanSujhav";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/jan-sujhav" element={<JanSujhav />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
