import React, { useEffect, useState } from "react";
import Table from "./Table";
import Chart from './Chart';


const Main = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
   fetch("https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json")
   .then(response=>response.json())
   .then(data=>setDatas(data));
  }, []);

  return (
    <div className ="m-auto flex justify-between py-10" style={{width:"80%"}}>
    <Table datas = {datas}/>
    <Chart datas = {datas} />
    </div>
  );
};

export default Main;
