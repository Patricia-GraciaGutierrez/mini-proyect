import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateItemForm from "../components/UpdateItemForm";

function ItemDetails({ products, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);


  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-red-600 text-center mt-4">Product not found</h2>;
  }

  const handleUpdate = (updatedProduct) => {
    onUpdate(updatedProduct);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mt-6">
      <div className="relative mb-6">
        <button
          onClick={() => navigate("/")}
          className="absolute top-0 right-0 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 flex items-center transition cursor-pointer"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back
        </button>
      </div>


      {isEditing ? (
        <UpdateItemForm item={product} onUpdate={handleUpdate} />
      ) : (
        <>
          <h2
            className="text-2xl text-center font-bold text-gray-900 mb-4 mt-16">{product.title}</h2>
          <img className="w-40 h-40 object-cover mx-auto mb-4 rounded-md"
            src={product.thumbnail}
            alt={product.title}
          />
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-gray-800 mb-2">Price: ${product.price}</p>
          <p
            className={`mt-2 font-medium ${product.stock > 10 ? 'text-green-600' : 'text-red-600'
              }`}
          >
            {product.stock > 10 ? "In Stock ✅" : "Low Stock ❌"}
          </p>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-12 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetails;
