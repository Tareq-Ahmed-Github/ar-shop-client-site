import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import Services from "./components/service/Services";
import AddService from "./components/service/AddServices";
import UpdateService from "./components/service/UpdateService";
import HomeServices from "./components/home/HomeServices";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<HomeServices />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/addServices" element={<AddService />}></Route>
        <Route
          path="/updateService/:serviceId"
          element={<UpdateService />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
