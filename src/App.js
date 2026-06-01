import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

function App() {
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
