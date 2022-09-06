import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchProduct:''
};


const productStore = createSlice({
    name:'product',
    initialState,
    reducers:{
        productUpdate:(state,action)=>{
            state.searchProduct = action.payload;
        }
    }
});

export const { productUpdate } = productStore.actions;

export default productStore.reducer;