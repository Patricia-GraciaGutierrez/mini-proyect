function ListItem({ product, onDelete }) {
    return (
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>
          Stock: {product.stock > 10 ? "In Stock ✅" : "Low Stock ❌"}
        </p>
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    );
  }
  
  export default ListItem;
  