//import './App.css';
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import HomePage from "./components/pages/Home";
import Golosinas from "./components/pages/Golosinas";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Header></Header>
            <Footer></Footer>
        <BrowserRouter>
        <Nav></Nav>
          <Routes>
          <Route path="/home" element={<HomePage />}></Route>
            <Route path="/golosinas" element={<Golosinas />}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
