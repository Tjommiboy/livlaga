import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Book from "./pages/Book.jsx";
import Admin from "./pages/Admin.jsx";
import OmOss from "./pages/OmOss.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="omOss" element={<OmOss />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
