import { useState } from "react";

function AddItemForm({onAdd}) {
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
        onAdd({ ...newItem, id: Date.now(), price:(newItem.price), stock:(newItem.stock) });
        setNewItem({ title: "", description: "", price: "", stock: "", thumbnail: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h3>Add New Product</h3>
            <input type="text" name="title" placeholder="Title" value={newItem.title} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={newItem.description} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" value={newItem.price} onChange={handleChange} required />
            <input type="number" name="stock" placeholder="Stock" value={newItem.stock} onChange={handleChange} required />
            <input type="text" name="thumbnail" placeholder="Image URL" value={newItem.thumbnail} onChange={handleChange} />
            <button type="submit">Add Product</button>
        </form>
    );
}
export default AddItemForm;