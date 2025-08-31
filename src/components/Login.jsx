import { useDispatch } from "react-redux"
import { login, logout }  from '../features/User'

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => {dispatch(login({ name: "Kelia", age: 20 }))}}>Login</button>
        <button onClick={() => {dispatch(logout({ name: "Pedro", age: 20 }))}}>Logout</button>
    </div>
  )
}

export default Login