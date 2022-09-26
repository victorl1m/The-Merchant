import "./Article.css";

const Article = () => {
  return (
    <div className="article-div">
      <div className="img">
        <img
          className="article-image"
          src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        ></img>
      </div>
      <div className="article-content">
        {/*  */}
        {/* article header  */}

        <div className="article-header">
          <h1 className="article-title">
            Bar é assaltado e dois ficam feridos.
          </h1>
          <h1 className="article-local">
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm1.476 14.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z" />
            </svg>
            Uberaba, Minas Gerais
          </h1>
        </div>
        <p className="article-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl ut aliquam lacinia, nunc nisl aliquet nisl, nec
          tincidunt nunc nisl euismod nunc. Nulla facilisi. Nulla facilisi.
          Pellentesque habitant morbi tristique sen
        </p>
        <div className="article-additional">
          {/* <h1 className="article-date">1 hora atrás.</h1> */}
          <h1 className="article-author">
            | Escrito por: <b>João da Silva</b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Article;
