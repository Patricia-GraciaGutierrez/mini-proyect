import ListItem from "./ListItem";

function List({ products, onDelete }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ListItem key={product.id} product={product} onDelete={onDelete} />
        ))
      ) : (
        <p className="text-gray-600 text-center col-span-full">No products available.</p>
      )}
    </div>
  );
}

export default List;