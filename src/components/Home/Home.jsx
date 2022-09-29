import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/global.css";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://pubnews.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul className="event-container">
      {data?.map((item) => (
        <li className="event">
          <Link to={`/article/${item.id}`}>
            <img className="article-image" src={item.image}></img>
          </Link>
          <div className="article-info">
            <h1 className="info-title">{item.title}</h1>
            <div className="info-more">
              <h1 className="info-date">
                {item.date} às {item.hour}
              </h1>
              <div className="info-local">
                <svg
                  width="12"
                  height="12"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm1.476 14.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z" />
                </svg>
                <b>{item.pubName}</b>
              </div>
            </div>
            <Link to={`/article/${item.id}`}>
              <button className="info-price">
                <svg
                  width="48"
                  height="48"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.41,10.59,20.36,8.54V5.63a2,2,0,0,0-2-2H15.46l-2.05-2a2,2,0,0,0-2.82,0L8.54,3.64H5.63a2,2,0,0,0-2,2V8.54l-2,2.05A2,2,0,0,0,1,12a2,2,0,0,0,.58,1.41l2.06,2.05v2.91a2,2,0,0,0,2,2H8.54l2.05,2.05A2,2,0,0,0,12,23a2,2,0,0,0,1.41-.58l2.05-2.06h2.91a2,2,0,0,0,2-2V15.46l2.05-2.05a2,2,0,0,0,0-2.82Zm-4.05,4.05v3.72H14.64L12,21,9.36,18.36H5.64V14.64L3,12,5.64,9.36V5.64H9.36L12,3l2.64,2.64h3.72V9.36L21,12Z" />
                  <path d="M14.24,7.85l-6,7a1,1,0,0,0,1.52,1.3l6-7a1,1,0,0,0-1.52-1.3Z" />
                  <path d="M10.9,10.45a1.5,1.5,0,1,0-1.85-1A1.51,1.51,0,0,0,10.9,10.45Z" />
                  <path d="M13.1,13.55a1.5,1.5,0,1,0,1.85,1A1.51,1.51,0,0,0,13.1,13.55Z" />
                </svg>
                <h1 className="price">{item.price} R$</h1>
              </button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Home;
