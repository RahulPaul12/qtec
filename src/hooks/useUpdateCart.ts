import { useEffect, useState } from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export function useUpdateCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateCart = (product: Product, action: 'add' | 'inc' | 'dec') => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.product.id === product.id);
      const updated = [...prevCart];

      if (index !== -1) {
        let qty = updated[index].quantity;
        if (action === 'add' || action === 'inc') {
          qty += 1;
        } else if (action === 'dec') {
          qty = Math.max(1, qty - 1);
        }
        updated[index] = { ...updated[index], quantity: qty };
      } else if (action === 'add') {
        updated.push({ product, quantity: 1 });
      }

      return updated;
    });
  };

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return {
    cart,
    updateCart,
    total,
  };
}
