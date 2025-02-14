import { useState } from "react";

function AddItemForm({ onAdd }) {
    const [newItem, setNewItem] = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        thumbnail: "",
    });

    const handleChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem.title || !newItem.price || !newItem.stock) return;
        onAdd({ ...newItem, id: (newItem.id), price: (newItem.price), stock: (newItem.stock) });
        setNewItem({ title: "", description: "", price: "", stock: "", thumbnail: "" });
    };

    return (
        <form
            className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto flex flex-col gap-4 mb-12"
            onSubmit={handleSubmit}>
            <h3 className="text-2xl text-center font-bold text-gray-800 mb-4" >Add New Product</h3>
            <input
                className="border border-gray-300 p-2 rounded-md"
                type="text"
                name="title"
                placeholder="Title"
                value={newItem.title}
                onChange={handleChange}
                required
            />
            <textarea
                className="border border-gray-300 p-2 rounded-md"
                name="description"
                placeholder="Description"
                value={newItem.description}
                onChange={handleChange}
            />
            <input
                className="border border-gray-300 p-2 rounded-md"

                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleChange}
                required
            />
            <input
                className="border border-gray-300 p-2 rounded-md"
                type="number"
                name="stock"
                placeholder="Stock"
                value={newItem.stock}
                onChange={handleChange}
                required
            />
            <input
                className="border border-gray-300 p-2 rounded-md"
                type="text"
                name="thumbnail"
                placeholder="Image URL"
                value={newItem.thumbnail}
                onChange={handleChange}
            />

            <button
                className="bg-zinc-300 hover:bg-zinc-400 text-black py-2 rounded-md transition cursor-pointer"
                type="submit">
                Add Product
            </button>

        </form>
    );
}
export default AddItemForm;