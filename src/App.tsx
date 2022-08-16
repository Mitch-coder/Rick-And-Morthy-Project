import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { UserProvider } from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
};
export default App;
