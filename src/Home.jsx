import "./assets/global.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import Article from "./components/Article/Article.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import BottomBar from "./components/BottomBar/BottomBar.jsx";
import { useEffect, useState } from "react";

const App = () => {
  // const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Luiz-NP/repos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRepos(data);
  //       console.log(repos);
  //     });
  // }, []);

  return (
    <>
      <TopBar />
      <Article />
      <NavBar />
      {/* <BottomBar /> */}
    </>
  );
};

export default App;
