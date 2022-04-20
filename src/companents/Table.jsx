import React from "react";
import nextId from "react-id-generator";

const Table = (datas) => {
  const items = datas.datas;
  return (
    <div className="flex flex-col">
     {/* <div className="my-6 flex w-full">
          <input className="border-2 border-gray-500 p-2 ">Search Product</input>
          <div className="border-2 border-gray-500 p-2 ">Enter Order amount</div>
          <div className="border-2 border-gray-500 p-2 ">Select Date</div>
          <button className="border-2 border-gray-500 p-2 ">filter</button>
        </div> */}
        <table className="table-auto border-2 border-gray-700">
      <thead>
     
        <tr>
          <th className="border-2 border-gray-500 p-1"> Amount</th>
          <th className="border-2 border-gray-500 p-1">Order Date</th>
          <th className="border-2 border-gray-500 p-1">Product Name Name</th>
          <th className="border-2 border-gray-500 p-1">Total Price</th>
        </tr>
      </thead>
      <tbody>
       
          {items.map((data) => {
            var products = data.product;
           var shortDate= data.date
            return (
              <tr>
                <td className="border-2 border-gray-500 w-12">{data.amount}</td>
                <td className="border-2 border-gray-500 p-2">{shortDate.split("T")[0]}</td>
                {products.map((product) => {
              return (
                <>
                  <td className="border-2 border-gray-500 p-2">{product.name}</td>
                  <td className="border-2 border-gray-500">${product.price}</td>
                </>
              );
            })}
              </tr>
            );
          })}
      
      
      </tbody>
    </table>
    </div>
  
  );
};

export default Table;
