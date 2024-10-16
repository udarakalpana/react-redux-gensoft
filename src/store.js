import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './utlities/counterSlice.js'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})