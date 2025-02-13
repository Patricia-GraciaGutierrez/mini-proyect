import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import productsData from "./products.json";
import "./App.css";

function App() {
  const [products, setProducts] = useState(productsData);

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard products={products} setProducts={setProducts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/item/:id" element={<ItemDetails products={products} onUpdate={updateProduct} />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
