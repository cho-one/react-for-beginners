import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./routes/Home";
import Tv from "./routes/TV";
import Search from "./routes/Search";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
