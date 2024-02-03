import { useState, useEffect } from "react";

export default function ProductList() {
  const URL = "https://dummyjson.com/products";
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
    // <div>
    //   <h1> Snipe Interview Assignment !</h1>
    //   {products.map((x) => (
    //     <div key={x.id}>
    //       <h3>{x.title}</h3>
    //       <p>{x.description}</p>

    //       <button>Add to cart</button>
    //       &nbsp;&nbsp;&nbsp;
    //       <button>Buy Now and Pay Later</button>
    //     </div>
    //   ))}
    // </div>

    <div className="bg-pink-100 h-screen p-8">
      <h1 className="text-gray-700 text-left"> Snipe Interview Assignment !</h1>

      <br></br>

      {products.map((x) => (
        <div key={x.id} className="bg-gray-500 p-4 rounded-lg flex mb-6">
          <div className="w-2/3">
            <h3 className="text-xl font-bold mb-2 text-left">{x.title}</h3>
            <p className="text-gray-700 text-left">{x.description}</p>
          </div>

          <div className="w-1/3 flex justify-end">
            <button className="bg-transparent border border-yellow-500 text-white-500 px-4 py-2 rounded">
              Add to cart
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="bg-transparent border border-yellow-500 text-white-500 px-4 py-2 rounded">
              Buy Now and Pay Later
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
