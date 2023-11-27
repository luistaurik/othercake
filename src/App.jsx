import { Route, Routes } from "react-router-dom";
import Home from './views/Home';
import Contact from  './views/Contact';
import NotFound from './views/NotFound';
import NavbarComponent from "./components/Navbar/Navbar";

function App() {

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route
        path="/contact"
        element={<Contact />}
        />
        <Route
        path="*"
        element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
