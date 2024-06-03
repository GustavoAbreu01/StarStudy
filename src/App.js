import { BrowserRouter, Route, Routes } from "react-router-dom";

// Links to the pages we want to create
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import { useEffect, useState } from "react";
import { changeTheme } from "./utils/ChangeTheme";
import Content from "./pages/content/Content";
import SideMenu from "./components/sideMenu/SideMenu";
import Loading from "./pages/loading/Loading";

// https://home.openweathermap.org/api_keys


  

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return () => {
        clearTimeout(loadingTimeout);
    };
}, []);

  return (
    <>
      <BrowserRouter>
      <div className={`loading_page ${isLoading ? 'visible' : 'hidden'}`}>
        <Loading />
      </div>
      <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content/:id" element={<Content />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
