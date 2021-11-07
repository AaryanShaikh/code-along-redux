import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';
import './App.css';

function App() {
  const count = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(login())}>{(isLogged) ? "Logout" : "Login"}</button>
      {
        isLogged ?
          <>
            <h2>Counter : {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </>
          :
          ""
      }
    </div>
  )
}

export default App;
