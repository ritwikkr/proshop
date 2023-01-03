import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartpage from "./pages/CartPage";
import Loginpage from "./pages/Loginpage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
