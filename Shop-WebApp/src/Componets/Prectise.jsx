/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

function Prectise() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/9", {
      method: "PUT",
      body: JSON.stringify({
        userId: 3,
        date: "2019-12-10",  // Fix: Use string format for date
        products: [{ productId: 1, quantity: 3 }],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("Error updating cart:", err));

    // Uncomment if you want to perform DELETE operation
    // fetch("https://fakestoreapi.com/carts/6", {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.error("Error deleting cart:", err));
  }, []);

  return <div>Prectise</div>;
}

export default Prectise;
