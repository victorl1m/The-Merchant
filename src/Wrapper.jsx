import "./assets/global.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Article from "./components/Article/Article.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
