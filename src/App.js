
import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

import Footer from "./components/Footer"
import { Home } from "./pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
          <Route path='/create' element={<Create></Create>}/>
        
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;