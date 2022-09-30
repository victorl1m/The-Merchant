import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PubInfo.css";
import "../../assets/global.css";

const PubInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://apiPubnews.vitaoks1.repl.co/")
      .then((res) => res.json())
      .then((data) => setData(data[id - 1]));
  }, []);

  return (
    <>
      <div>
        <div className="pubinfo-div">
          <img className="pubinfo-image" src={data?.pubimage}></img>
          <h1 className="pubinfo-title">{data?.pubName}</h1>
          <h1 className="pubinfo-desc">{data?.pubDesc}</h1>
          <h1 className="pubinfo-options">{data?.pubOptions}</h1>
          <h1 className="pubinfo-local">
            {data?.address.street}, {data?.address.number} -{" "}
            {data?.address.district}
          </h1>
        </div>
      </div>
    </>
  );
};
export default PubInfo;
