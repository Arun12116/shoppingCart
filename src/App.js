import NavComponent from "./Components/NavComponent";
import Contact from "./pages/Contact";
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"
import Cart from "./pages/ProductDeatiles"
import Product from "./Components/Product"

function App() {
  return (
    <>
      <NavComponent />
  
      <Routes>
      
        <Route path="*" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart/:id" element={<Cart/>} />

      </Routes>

      
    </>
  );
}

export default App;
