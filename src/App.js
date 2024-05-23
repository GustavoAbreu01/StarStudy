import { BrowserRouter, Route, Routes } from "react-router-dom";

// Links to the pages we want to create
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import { useEffect } from "react";
import { changeTheme } from "./utils/ChangeTheme";

// https://home.openweathermap.org/api_keys
//   const getWeather = async () => {
    // const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=macei%C3%B3&units=metric&appid=fac10a74a804d851c82efe78bb6fa468&lang=pt_br')
    // const data = await response.json()
    
    //localStorage.setItem('weather', JSON.stringify(data))
  

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
