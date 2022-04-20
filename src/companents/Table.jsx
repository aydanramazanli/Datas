import React, { useState, useEffect } from "react";
import nextId from "react-id-generator";

const Table = (datas) => {
  const items = datas.datas;
  // const [name, setName]=useState()
  // const[price,setPrice] =useState()
  // const [amount,setAmount] =useState()
  // const[date,setDate] =useState()
  // const[product,setProduct] =useState()

  // useEffect(() =>{
  //   items.map((data) => {
  //     setProduct(data.product)
  //        setAmount(data.amount)
  //        setDate(data.date)
  //    })
  // },[])

  // products.map((product) =>{
  //     setName(product.name)
  //     setPrice(product.price)
  // })
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Product Amount</th>
          <th>Order Date</th>
          <th>Order Name</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
       
          {items.map((data) => {
            var products = data.product;

            return (
              <tr>
                <td>{data.amount}</td>
                <td>{data.date}</td>
                {products.map((product) => {
              return (
                <>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </>
              );
            })}
              </tr>
            );
          })}
      
      
      </tbody>
    </table>
  );
};

export default Table;
