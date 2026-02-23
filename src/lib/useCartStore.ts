
import { create } from 'zustand';

// Definimos exactamente qué es un producto para que no haya errores de tipo

interface CartItem {
  id: string
  name: string
  price: number
  image_url: string
  quantity: number
}
interface CartState {
  cart: Product[];
  isOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  toggleCart: () => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isOpen: false,

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          isOpen: true,
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
        isOpen: true,
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  toggleCart: () =>
    set((state) => ({ isOpen: !state.isOpen })),

  clearCart: () => set({ cart: [] }),
}));
