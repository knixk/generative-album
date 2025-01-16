import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Album from "./pages/Album";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/album" element={<Album />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
