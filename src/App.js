import { BrowserRouter, Route, Routes } from "react-router-dom";

// Links to the pages we want to create
import Home from "./pages/home/Home";
import Information1 from "./pages/information1/Information1";
import Information2 from "./pages/information2/Information2";
import Information3 from "./pages/information3/Information3";
import Information4 from "./pages/information4/Information4";
import Information5 from "./pages/information5/Information5";
import Information6 from "./pages/information6/Information6";
import Information7 from "./pages/information7/Information7";
import Information8 from "./pages/information8/Information8";
import Information9 from "./pages/information9/Information9";
import Information10 from "./pages/information10/Information10";
import Information11 from "./pages/information11/Information11";
import NotFound from "./pages/notFound/NotFound";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logica_programacao" element={<Information1 />} />
          <Route path="/linguagem_c" element={<Information2 />} />
          <Route path="/biblioteca_c" element={<Information3 />} />
          <Route path="/declaracao_variaveis" element={<Information4 />} />
          <Route path="/comandos_entrada_saida" element={<Information5 />} />
          <Route path="/condicional" element={<Information6 />} />
          <Route path="/lacos_repeticao" element={<Information7 />} />
          <Route path="/funcoes" element={<Information8 />} />
          <Route path="/conhecimento_arduino" element={<Information9 />} />
          <Route path="/componentes_arduino" element={<Information10 />} />
          <Route path="/simulador_robotica" element={<Information11 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
