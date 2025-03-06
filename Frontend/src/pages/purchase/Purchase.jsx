import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import "./Purchase.css";

const Purchase = () => {
  const { cart, clearCart } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  // Calcula el total del carrito
  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías la orden y la información de envío al backend.
    alert("Compra confirmada. Gracias por tu compra.");
    clearCart(); // Vacía el carrito tras confirmar la compra.
    // Redirigir o limpiar el formulario, según convenga.
  };

  return (
    <main className="purchase">
      <h2>Resumen de Compra</h2>
      <section className="order-summary">
        {cart.items.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul>
              {cart.items.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x ${item.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${totalPrice.toFixed(2)}</p>
          </>
        )}
      </section>

      {cart.items.length > 0 && (
        <section className="shipping-info">
          <h3>Información de Envío</h3>
          <form onSubmit={handleSubmit} className="shipping-form">
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Dirección:
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Teléfono:
              <input
                type="text"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Correo:
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Confirmar Compra</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default Purchase;
