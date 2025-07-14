import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productid" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
