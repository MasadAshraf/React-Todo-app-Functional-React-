import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
         setAuthPayload(state, action) {
             state.isAuth = action.payload
         },
    },
})
export const { setAuthPayload } = authSlice.actions
export default authSlice.reducer
