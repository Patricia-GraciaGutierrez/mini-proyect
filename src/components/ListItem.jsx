import { Link } from "react-router-dom";

function ListItem({ product, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col">
      <Link to={`/item/${product.id}`}>
        <h3 className="text-xl font-bold text-gray-900 text-center">{product.title}</h3>
        <img className="w-40 h-40 object-cover mx-auto mb-4 rounded-md"
          src={product.thumbnail}
          alt={product.title}
        />
        <p className="text-gray-700 text-left mb-2">{product.description}</p>
        <p className="text-lg font-bold text-gray-800">Price: ${product.price}</p>
        <p className={`text-sm font-medium ${product.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
          {product.stock > 10 ? "In Stock ✅" : "Low Stock ❌"}</p>
      </Link>
      <div className="mt-4 flex justify-start">
        <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md transition cursor-pointer"
          onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    </div>

  );
}

export default ListItem;

