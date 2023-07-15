import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller from "./components/Seller";
import AddProducts from "./components/AddProducts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Seller />}></Route>
          <Route path="/create" element={<AddProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
