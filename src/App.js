import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from "./globalStyles";

// Pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Reviews from './pages/Reviews';
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/reviews" exact element={<Reviews />} />
          <Route path="/dashboard" exact component={<Dashboard />} />
          <Route path="/blogs" exact component={<Blogs />} />
          <Route path="/about" exact component={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
