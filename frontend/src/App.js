import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chaiman from "./Pages/Chaiman";
import Affiliation from "./Pages/Affiliation";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chairman" element={<Chaiman />} />
      <Route path="/affiliation" element={<Affiliation />} />
    </Routes>
    <Footer />
    <BackToTop />
    </>
  )
}

export default App;