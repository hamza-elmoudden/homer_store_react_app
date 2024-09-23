import { useQuery, gql } from "@apollo/client"
import { createSlice } from '@reduxjs/toolkit'





const ProductsSlice = createSlice({
  name: 'products',

  initialState : [],

  reducers: {

    AddProd(state, action) {
      const prod = action.payload

      state.push(prod)
    },



  },

})

export const { AddProd } = ProductsSlice.actions
export default ProductsSlice.reducer