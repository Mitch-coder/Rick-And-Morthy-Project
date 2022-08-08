import {
  BrowserRouter
} from "react-router-dom";
import Router from "./routes/Router";
import { UserProvider } from "./types/UserProvider";

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
