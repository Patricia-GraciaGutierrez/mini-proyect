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
    <form className="bg-white rounded-lg p-6 max-w-lg mx-auto flex flex-col gap-4 mb-12"
      onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-gray-900 text-center">Update Product</h3>
      <input className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="title"
        value={updatedItem.title}
        onChange={handleChange}
        required
      />
      <textarea
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="description"
        value={updatedItem.description}
        onChange={handleChange}
      />
      <input
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        name="price"
        value={updatedItem.price}
        onChange={handleChange}
        required
      />
      <input
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        name="stock"
        value={updatedItem.stock}
        onChange={handleChange}
        required
      />
      <input
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="thumbnail"
        value={updatedItem.thumbnail}
        onChange={handleChange}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
        type="submit"
      >
        Update Product
      </button>
    </form>
  );
}

export default UpdateItemForm;