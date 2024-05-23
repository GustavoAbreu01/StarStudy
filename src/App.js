import { BrowserRouter, Route, Routes } from "react-router-dom";

// Links to the pages we want to create
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import { useEffect } from "react";
import { changeTheme } from "./utils/ChangeTheme";

// https://home.openweathermap.org/api_keys


  

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
