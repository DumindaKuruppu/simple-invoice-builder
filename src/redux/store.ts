import {configureStore} from '@reduxjs/toolkit';


interface InvoiceState {
    customerName: string;
    customerAddress: string;
    Items: InvoiceItem[];
    subTotal: number;
    total: number;
    advanceAmount: number;
}

export interface InvoiceItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

const initialState: InvoiceState = {
    customerName: '',
    customerAddress: '',
    Items: [],
    subTotal: 0,
    total: 0,
    advanceAmount: 0
}

const addItem = (state: InvoiceState, action: { type: 'ADD_ITEM', payload: InvoiceItem }) => {
    const newItem = action.payload;
    state.subTotal += newItem.price * newItem.quantity;
    state.total = state.subTotal - state.advanceAmount;
}

const setAdvanceAmount = (state: InvoiceState, action: { type: 'SET_ADVANCE_AMOUNT', payload: number }) => {
    state.advanceAmount = action.payload;
    state.total = state.subTotal - state.advanceAmount;
}

const reducer = {
    addItem,
    setAdvanceAmount
}


export const store = configureStore({
    reducer: {}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch