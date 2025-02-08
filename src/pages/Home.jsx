import { useState } from "react";
import List from "../components/List";
import productsData from "../products.json";

function Home() {
  const [products, setProducts] = useState(productsData);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Lista de productos</h2>
      <List products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default Home;