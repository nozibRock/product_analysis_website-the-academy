import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home/Home';
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import RefundPolicy from "./components/RefundPolicy/RefundPolicy";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/refund-policy" element={<RefundPolicy />} />
          <Route exact path="/terms-of-service" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
