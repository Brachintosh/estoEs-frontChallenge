import Add from "./components/Add.js";
import ShowList from "./components/ShowList.js";
import FooterBrand from "./components/FooterBrand";
import EstoEsLogo from "./EstoEsLogo.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container text-center">
        <EstoEsLogo />
        <Routes>
          <Route path="/" element={<ShowList />}/>
          <Route path="/addProject" element={<Add />}/>
        </Routes>
      </div>
      <FooterBrand />
    </>
  );
}

export default App;
