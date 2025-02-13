import { useState } from "react";
import List from "../components/List";
import AddItemForm from "../components/AddItemForm";
import productsData from "../products.json";

function Dashboard() {
  const [products, setProducts] = useState(productsData);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <div>
      <AddItemForm onAdd={addProduct} />
      <List products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default Dashboard;