import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = (paymentMode, paymentStatus) => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: cartItems.reduce((s, i) => s + i.price, 0),
      paymentMode,
      paymentStatus,
      date: new Date().toLocaleString()
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount: cartItems.length,
        totalPrice: cartItems.reduce((s, i) => s + i.price, 0),
        orders,
        placeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
