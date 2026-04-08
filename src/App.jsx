import "./App.css";
import ProductList from "./components/ProductList";
import Title from "./components/Title";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";
import Subtitle from "./components/Subtitle";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 25, category: "Accessories" },
    { id: 3, name: "keyboard", price: 75, category: "Electronics" },
    { id: 4, name: "Monitor", price: 300, category: "Monitors" },
  ]);

  // const products = [
  //   { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  //   { id: 2, name: "Mouse", price: 25, category: "Accessories" },
  //   { id: 3, name: "keyboard", price: 75, category: "Electronics" },
  //   { id: 4, name: "Monitor", price: 300, category: "Monitors" },
  // ];
  const [categories, setCategories] = useState([
    { id: 1, name: "Tecnología" },
    { id: 2, name: "Audio" },
    { id: 3, name: "Accesorios" },
  ]);

  const addProduct = () => {
    const newProduct = {

      id: Date.now(),
      name: "Headphones",
      price: 150,
      category: "Audio",
    };
    setProducts([...products, newProduct]);
  };

  const addCategory = () => {
    const newCategory = {
      id: Date.now(),
      name: "Monitors",
    };
    setCategories([...categories, newCategory]);
  }

  return (
    <>
      <Title title="ofertas" />

      <ProductList products={products} />

      <button onClick={addProduct}> Agregar producto </button>
      
      <Subtitle title="Categorías" />

      <CategoryList categories={categories} />

      <button onClick={addCategory}>Agregar producto</button>

      <Footer company="Una empresa" />
    </>
  );
}

export default App;
