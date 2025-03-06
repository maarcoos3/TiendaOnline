 
import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Ejemplo de datos de productos (simulados)
  const products = [
    { id: 1, name: "Camiseta Clásica", description: "Camiseta oficial de Adidas con diseño clásico.", price: "$50" },
    { id: 2, name: "Camiseta Modern", description: "Diseño moderno para un look actual.", price: "$60" },
    { id: 3, name: "Camiseta Performance", description: "Optimizada para rendimiento en el campo.", price: "$70" },
  ];

  // Filtrar productos por nombre según el término de búsqueda
  const filteredProducts = products.filter(product =>
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
        <h2>Nuestros Productos</h2>
        <div className="products-container">
          {filteredProducts.length ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
              </div>
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
