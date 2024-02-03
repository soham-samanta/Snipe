import React, { useState, useEffect } from "react";

function ProductList() {
    const URL ="https://dummyjson.com/products"
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data.products);
    };
    
    fetchProducts();
  }, []);

  return (
    <div>
      <h1> Snipe Interview Assignment !</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>

          <button>Add to cart</button>
          <button>Buy Now and Pay Later</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
