import '../src/components/styles/App.css';
import Header from "./components/layouts/Header";
import Navi from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import HomePage from "./components/pages/Home";
import Golosinas from "./components/pages/Golosinas";
import 'bootstrap/dist/css/bootstrap.min.css';
import Postres from "./components/pages/Postres"
import Helados from "./components/pages/Helados"
import Bebidas from "./components/pages/Bebidas"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header></Header>
        <Navi></Navi>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/golosinas" element={<Golosinas />}></Route>
            <Route path="/postres" element={<Postres />}></Route>
            <Route path="/helados" element={<Helados />}></Route>
            <Route path="/bebidas" element={<Bebidas />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </div>
  );
}
export default App;
