import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Detail";
import About from "./routes/About";

import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
