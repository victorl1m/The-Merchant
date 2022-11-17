import { useEffect, useState } from "react";
import "../../assets/global.css";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState();

  const deleteProduct = (id) => {
    console.log("function executed");
    fetch("http://localhost:5000/data/" + parseInt(id), {
      method: "DELETE",
    });
    location.reload();
  };

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const loading =
    "https://i.pinimg.com/originals/24/07/b5/2407b512f6f2eec61cd2f3136242a025.gif";

  if (!data) {
    return (
      <div className="div-loading">
        <img src={loading} className="loading"></img>
        <h1 className="loading-text">Carregando os dados...</h1>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="div-loading">
        <img src={loading} className="loading"></img>
        <h1 className="loading-text">Nenhum produto cadastrado</h1>
      </div>
    );
  }

  console.log(data);
  return (
    <ul className="event-container">
      {data?.map((item) => (
        <li className="event-list">
          <img className="product-image" src={item.productImage}></img>
          <div className="product-info">
            <h1 className="info-title">{item.productName}</h1>
            <div className="info-more">
              <h1 className="info-desc">{item.productDesc}</h1>
            </div>
            <div className="btn-area">
              <button className="info-price">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 8c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.5 7v-2h-2v-1h2v-2l3 2.5-3 2.5zm-5.701-11.26c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.46-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.211-3.015c-.699-.03-1.368-.171-1.992-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26z" />
                </svg>
                <h1 className="price">{item.price} $</h1>
              </button>
              <button
                id={item.id}
                onClick={() => {
                  deleteProduct(item.id);
                }}
                className="info-remove"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.5 15c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-5v-1h5v1zm-5-11v4.501c-.748.313-1.424.765-2 1.319v-5.82c0-.552.447-1 1-1s1 .448 1 1zm-4 0v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1zm1.82 15h-11.82v-18h2v16h8.502c.312.749.765 1.424 1.318 2zm-6.82-16c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1zm14-4h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-1 2v7.182c-.482-.115-.983-.182-1.5-.182l-.5.025v-7.025h2z" />
                </svg>
              </button>
            </div>
            <h1 className="info-quantity">
              Quantidade restante: {item.quantity}
            </h1>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Home;
