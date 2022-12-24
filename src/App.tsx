import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { UserProvider } from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchProvider } from "./providers/SearchProvider";
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");



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
