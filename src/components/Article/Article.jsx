import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://apiPubnews.vitaoks1.repl.co/")
      .then((res) => res.json())
      .then((data) => setData(data[id - 1]));
  }, []);

  return (
    <div className="article-div">
      <div className="img">
        <img className="article-image" src={data?.eventImage}></img>
      </div>
      <div className="article-content">
        {/*  */}
        {/* article header  */}

        <div className="article-header">
          <h1 className="article-title">{data?.title}</h1>
          <h1 className="article-local">
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm1.476 14.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z" />
            </svg>
            <Link to={`/pubinfo/${item.id}`}>{data?.pubName}</Link>
          </h1>
        </div>
        <div className="article-desc">{data?.description}</div>
        <p className="article-text">{data?.more}</p>
        <div className="article-additional">
          {/* <h1 className="article-date">1 hora atrás.</h1> */}
          <h1 className="article-author">
            | Escrito por: <b>{data?.author}</b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Article;
