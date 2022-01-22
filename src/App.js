import './App.css';
import Login from "./components/Login"
import { selectUser } from './features/userSlice';
import Logout from './components/Logout';
import { useSelector } from "react-redux"
function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {user ? <Logout /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
