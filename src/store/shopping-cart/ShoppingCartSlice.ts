import { iBubbleTea } from "@/model/BubbleTea";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface iShoppingCartOrder {
    id: string,
    bubbleTea: iBubbleTea,
    quantity: number
}
export interface iShoppingCart {
  orders: iShoppingCartOrder[];
  totalPrice: number;
}

const initialState: iShoppingCart = {
    orders: [],
    totalPrice: 0
};

export function createNewOrderObject(bubbleTea: iBubbleTea){
    const date = new Date();
    const newOrderObject: iShoppingCartOrder = {
        id: (date.getDate() + date.getMonth() + date.getFullYear() + date.getTime()).toString(),
        bubbleTea: bubbleTea,
        quantity: 1,
    };
    return newOrderObject;
}

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<iShoppingCartOrder>) => {
        state.orders.push(action.payload)
    },
    updateOrder: (state, action: PayloadAction<iShoppingCartOrder>) => {
        const orderId = action.payload.id
        const quantity = action.payload.quantity
        const order = state.orders.find((item: iShoppingCartOrder) => item.id === orderId)
        if (order) order.quantity = quantity
    },
    deleteOrder: (state, action: PayloadAction<iShoppingCartOrder>) => {
        const order = state.orders.find((item) => item.id === action.payload.id)
        if (order) {
            const orderIndex = state.orders.indexOf(order)
            if (orderIndex > -1) {
                state.orders.splice( orderIndex, 1 )
            }
        }
    },
    calculateTotalPrice: (state) => {
        const orders = state.orders
        let totalPrice = 0;
        orders.forEach((item)=> {
            totalPrice += item.bubbleTea.price
        })
        state.totalPrice = totalPrice
    }
  },
});

export const { addOrder, updateOrder, deleteOrder, calculateTotalPrice } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;