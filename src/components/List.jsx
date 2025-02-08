import ListItem from "./ListItem";

function List({ products, onDelete }) {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <ListItem key={product.id} product={product} onDelete={onDelete} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default List;