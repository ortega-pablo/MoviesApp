import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Listado";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
