import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateItemForm from "../components/UpdateItemForm";

function ItemDetails({ products, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Buscar el producto en los datos que vienen de App.jsx
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Item not found</h2>;
  }

  const handleUpdate = (updatedProduct) => {
    onUpdate(updatedProduct); // Actualiza el producto en la lista global
    setIsEditing(false); 
  };

  return (
    <div className="item-details">
      {isEditing ? (
        <UpdateItemForm item={product} onUpdate={handleUpdate} />
      ) : (
        <>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock > 10 ? "In Stock ✅" : "Low Stock ❌"}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => navigate(-1)}>Back to Dashboard</button>
        </>
      )}
    </div>
  );
}

export default ItemDetails;
