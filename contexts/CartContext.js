'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('saanjh-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('saanjh-cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('saanjh-cart');
    }
  }, [cart]);

  const addToCart = (product, selectedSize = null) => {
    setCart(currentCart => {
      const existingIndex = currentCart.findIndex(
        item => item.id === product.id && item.selectedSize === selectedSize
      );

      if (existingIndex > -1) {
        const newCart = [...currentCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      }

      return [...currentCart, { ...product, quantity: 1, selectedSize }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, selectedSize = null) => {
    setCart(currentCart =>
      currentCart.filter(
        item => !(item.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (productId, quantity, selectedSize = null) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }

    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('saanjh-cart');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};