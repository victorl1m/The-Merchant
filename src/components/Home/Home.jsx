import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/global.css";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://apiPubnews.vitaoks1.repl.co/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul className="event-container">
      {data?.map((item) => (
        <li className="event-list">
          <Link to={`/article/${item.id}`}>
            <img className="article-image" src={item.homeImage}></img>
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
                <Link to={`/pubinfo/${item.id}`}>
                  <b>{item.pubName}</b>
                </Link>
              </div>
            </div>
            <Link to={`/article/${item.id}`}>
              <button className="info-price">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.628 21.412l5.969-5.97 1.458 3.71-12.34 4.848-4.808-12.238 9.721 9.65zm-1.276-21.412h-9.352v9.453l10.625 10.547 9.375-9.375-10.648-10.625zm4.025 9.476c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.678-7.476c.938 0 1.699.761 1.699 1.699 0 .938-.761 1.699-1.699 1.699-.938 0-1.699-.761-1.699-1.699 0-.938.761-1.699 1.699-1.699z" />
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
