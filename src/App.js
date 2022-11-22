import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SloganContent from "./components/SloganContent";

function App() {
  return (
    <div>
      <Navbar />
      <SloganContent />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
