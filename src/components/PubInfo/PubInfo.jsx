import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PubInfo.css";

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
      <div className="pubinfo-div">
        <div className="img">
          <img className="pubinfo-image" src={data?.pubimage}></img>
        </div>
      </div>
    </>
  );
};
export default PubInfo;
