import { useState } from "react";

function UpdateItemForm({ item, onUpdate }) {
  const [updatedItem, setUpdatedItem] = useState({ ...item });

  const handleChange = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...updatedItem, price: (updatedItem.price), stock: (updatedItem.stock) });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>Update Product</h3>
      <input type="text" name="title" value={updatedItem.title} onChange={handleChange} required />
      <textarea name="description" value={updatedItem.description} onChange={handleChange} />
      <input type="number" name="price" value={updatedItem.price} onChange={handleChange} required />
      <input type="number" name="stock" value={updatedItem.stock} onChange={handleChange} required />
      <input type="text" name="thumbnail" value={updatedItem.thumbnail} onChange={handleChange} />
      <button type="submit">Update Product</button>
    </form>
  );
}

export default UpdateItemForm;