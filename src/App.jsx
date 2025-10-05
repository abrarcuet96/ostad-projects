import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog/:pageNo" element={<Blog />} />
        <Route path="/blog-detail/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
