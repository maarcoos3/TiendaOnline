import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  items: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += 1;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM': {
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    }
    case 'CLEAR_CART': {
      return initialState;
    }
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart: state, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
