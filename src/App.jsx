import "./App.css";
import ProductList from "./components/ProductList";
import Title from "./components/Title";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";

function App() {
  const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Mouse", price: 25, category: "Accessories" },
  { id: 3, name: "keyboard", price: 75, category: "Electronics" },
  { id: 4, name: "Monitor", price: 300, category: "Monitors" },
];
const categories = [
  { id: 1, name: "Tecnología" },
  { id: 2, name: "Audio" },
  { id: 3, name: "Accesorios" },
];


  return (
    <>
      <Title title="ofertas"/>

      <ProductList products={products} />

      <h2>Categorías</h2>

      <CategoryList categories={categories} />

      <Footer company="Una empresa"/>
    </>
  );
}

export default App;
