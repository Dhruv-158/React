/* eslint-disable no-unused-vars */
import React from "react";


function cart() {
  fetch('https://fakestoreapi.com/carts/7',{
    method:"PUT",
    body:JSON.stringify(
        {
            userId:3,
            date:2019-12-10,
            products:[{productId:1,quantity:3}]
        }
    )
})
    .then(res=>res.json())
    .then(json=>console.log(json))

  return (
    <>
    
    </>
  );
}

export default cart;
