import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { UserProvider } from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchProvider } from "./providers/SearchProvider";

const App = () => {
  return (
    <UserProvider>
      <SearchProvider >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </SearchProvider>
    </UserProvider>
  );
};
export default App;
