import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // verificar si está autenticado.
  const isAuthenticated = () => {
    return localStorage.getItem("user") !== null;
  };

  const handlePay = () => {
    if (!isAuthenticated()) {
      navigate("/login");
    } else {
      navigate("/compra");
    }
  };

  return (
    <main className="cart-page">
      <h2>Carrito de Compras</h2>
      {cart.items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.items.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image"/>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={handlePay} className="pay-button">
              Pagar
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default CartPage;
