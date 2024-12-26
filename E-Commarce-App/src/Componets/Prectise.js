import React from "react";

function Prectise() {
  fetch("https://fakestoreapi.com/carts/9", {
    method: "PUT",
    body: JSON.stringify({
      userId: 3,
      date: 2019 - 12 - 10,
      products: [{ productId: 1, quantity: 3 }],
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

//   fetch("https://fakestoreapi.com/carts/6", {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
  return <div>Prectise</div>;
}

export default Prectise;
