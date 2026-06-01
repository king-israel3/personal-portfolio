import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center"/>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
