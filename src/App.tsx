import {
  BrowserRouter
} from "react-router-dom";
import Router from "./routes/Router";
import { UserProvider } from "./types/UserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return(
    <UserProvider>
       <BrowserRouter>
        <Router/>
       </BrowserRouter>
    </UserProvider>
  )
}
export default App
