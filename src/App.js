import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <Products />
          <Cart />
        </div>
      </header>
    </div>
  );
}

export default App;
