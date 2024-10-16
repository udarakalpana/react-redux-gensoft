import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./utlities/counterSlice.js";

const App = () => {
    const stateValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
      <>
          <p>{stateValue}</p>
          <button onClick={() => {
              dispatch(increment())
          }}>Increment
          </button>

          <button onClick={() => {
              dispatch(decrement(2))
          }}>decrement
          </button>
      </>
  )
}

export default App
