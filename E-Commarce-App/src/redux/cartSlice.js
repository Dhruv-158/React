import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createCart, updateCart as updateCartAPI } from "../utils/api";

export const initializeCart = createAsyncThunk(
  "cart/initializeCart",
  async () => {
    const response = await createCart();
    return response;
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ cartId, userId, products }) => {
    const response = await updateCartAPI(cartId, userId, products);
    return response;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { id: null, items: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearCart: (state) => {
        state.items = [];
    },
    increment: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeCart.fulfilled, (state, action) => {
        state.id = action.payload.id;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        const { cartId, products } = action.payload;
        state.id = cartId;
        state.items = products.map((product) => ({
          id: product.productId,
          quantity: product.quantity,
        }));
      });
  },
});

export const { addToCart, removeFromCart, clearCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
