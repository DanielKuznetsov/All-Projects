import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <h1>ABOUT</h1>
      <p>Some paragraph</p>
      <Link to="/">Click to be directed to the "Home" page</Link>
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Some paragraph</p>
      <Link to="/about">Click to be directed to the "About" page</Link>
      <br />
      <Link to="/products">Click to be directed to the "Products" page</Link>
    </>
  );
}

function Products() {
  return (
    <>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>

      <Link to="/about">Click to be directed to the "About" page</Link>
    </>
  );
}
