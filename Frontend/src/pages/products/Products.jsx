import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Error al obtener productos:", error)
      );
  }, []);

  // Filtrar 
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="products">
      <section className="search-section">
        <input
          type="text"
          placeholder="Buscar camisetas..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </section>
      <section className="product-list">
        <h2>Nuestras Camisetas</h2>
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/productos/${product.id}`} 
                className="product-card-link"
              >
                <div className="product-card">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  )}
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
