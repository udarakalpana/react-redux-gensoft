import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state, action) => {
            console.log(state.value)
            state.value += 1
        },

        decrement: (state, action) => {
            console.log(action)
            state.value -= action.payload
        }
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
