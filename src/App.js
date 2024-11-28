import { useEffect, useState } from "react";
import Navbar from "./components/Navigation/Header/Navbar";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./components/Product/ProductsCategory/CategoryPage";
import MainPage from "./pages/MainPage";
import LogInForm from "./components/LogIn/LogInForm";
import Services from "./components/Services/Services";
import ServicesItemDetail from "./components/Services/ServicesItemDetail";

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categoriesData } = await axios.get(
          "http://localhost:9000/categories"
        );
        setCategories(categoriesData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage categories={categories} />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/account/login" element={<LogInForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServicesItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
