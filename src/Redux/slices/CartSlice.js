import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const exisitingitems=state.cart.find((item)=>item.id === action.payload.id);

            if(exisitingitems){
              state.cart=  state.cart.map((item)=>item.id=== action.payload.id ?{...item, qty:item.qty+1}:item
            );
            }
            else{
            state.cart.push(action.payload)//payload mensdata

        }},
      
        removeFromCart: (state, action) => {
            // Filter out the item with the matching id
            state.cart= state.cart.filter(item => item.id !== action.payload);
          },
  
},
});
export const {addToCart,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;

