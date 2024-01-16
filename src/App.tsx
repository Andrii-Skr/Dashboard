import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<NotFound />} />
          <Route path="/customers/:id" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
