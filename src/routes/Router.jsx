import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import HomeScreen from "../views/HomeScreen";
import AddScreen from "../views/AddScreen";
import EditScreen from "../views/EditScreen";
import ErrorScreen from "../views/ErrorScreen";

export default function Router() {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/agregar" element={<AddScreen />} />
        <Route path="/editar/:id" element={<EditScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
