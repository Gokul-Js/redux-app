
const { createSlice } = require('@reduxjs/toolkit');
// const { createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
           state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },

    }

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProducts.pending, (state, action) => {
    //             state.status = STATUSES.LOADING;
    //         })
    //         .addCase(fetchProducts.fulfilled, (state, action) => {
    //             state.data = action.payload;
    //             state.status = STATUSES.IDLE;
    //         })
    //         .addCase(fetchProducts.rejected, (state, action) => {
    //             state.status = STATUSES.ERROR;
    //         });
    // },
})

export const { setProducts, setStatus } = productSlice.actions; // it create actions & reducer also

export default productSlice.reducer;

// Thunks Another Method

// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             return data;
// })

// THUNKS SIMPLE METHOD
export function fetchProducts(){
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch(err){
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}