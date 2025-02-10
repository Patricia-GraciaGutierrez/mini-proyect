
import { useParams } from "react-router-dom";
import productsData from "../products.json";

function ItemDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock > 10 ? "In Stock ✅" : "Low Stock ❌"}</p>
    </div>
  );
}

export default ItemDetails;
