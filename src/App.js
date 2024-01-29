import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

//pages
import Home from "./pages/Home";
import OurWedding from "./pages/OurWedding";
import OurGalary from "./pages/OurGalary";
import GuestList from "./pages/GuestList";
import SendMessage from "./pages/SendMessage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourwedding" element={<OurWedding />} />
            <Route path="/ourgalary" element={<OurGalary />} />
            <Route path="/guestlist" element={<GuestList />} />
            <Route path="/sendmessage" element={<SendMessage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
