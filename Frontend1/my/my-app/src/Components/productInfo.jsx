import React from "react";
import { useState } from "react";

const productdetails=[
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product1",
      price:"$100",
      description:"new product"
    },
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product2",
      price:"$100",
      description:"new product"
    },
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product3",
      price:"$100",
      description:"new product"
    },
    
  ]
  const ProductCard = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (product, quantity) => {
          if (quantity > 0) {
            setCart([...cart, { ...product, quantity }]);
          }
    };

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Product Info Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productdetails.map((product) => (
            <div key={product.name} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">Price: {product.price}</p> 
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="border p-2 w-full my-2"
                id={`quantity-${product.name}`}
              />
              <button
                onClick={() => addToCart(product, parseInt(document.getElementById(`quantity-${product.name}`).value))}
                className="bg-blue-500 text-white p-2 rounded"
              > 
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default ProductCard;