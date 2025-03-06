// src/pages/productDetails/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error al obtener el producto:", error));
  }, [id]);

  const handleAddToCart = () => {
    addItem(product);
    alert("Producto añadido al carrito");
  };

  if (!product) {
    return <div className="product-detail">Cargando...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="product-specs">
          <h3>Especificaciones</h3>
          <ul>
            {product.specs && product.specs.length > 0 ? (
              product.specs.map((spec, index) => <li key={index}>{spec}</li>)
            ) : (
              <li>No hay especificaciones disponibles.</li>
            )}
          </ul>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
