// cartdivided into small parts (slices)

const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
           state.push(action.payload);
        },

        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
         },

    }
})

export const { add, remove } = cartSlice.actions; // it create actions & reducer also

export default cartSlice.reducer;
