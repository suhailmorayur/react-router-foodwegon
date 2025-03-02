

import React, { useState } from "react";

function PopularItems(props) {
  const [popularItems, setPopularItems] = useState([
    {
      id: 1,
      image: "/Cheese Burger.png", 
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88"          

      
    },
    {
      id: 2,
      image: "/Toffes Cake.png",
      title: "Toffes Cake",
      location: "Top Sticks",
      price: "$4.00"
    },
    {
      id: 3,
      image: "/Dancake.png",
      title: "Dancake",
      location: "Cake World",
      price: "$1.99 "
    },
    {
      id: 4,
      image: "/Crispy Sandwitch.png",
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: "$3.00"
      
    },
    {
        id: 5,
        image: "/Thai  Soup.png",
        title: "Thai  Soup",
        location: "Foody man",
      price: "$2.79"
    },
  ]);

  return (
    <div className=" container mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {popularItems.map((item) => (
        <div key={item.id} className="flex flex-col gap-3 ">
          <img
            className="rounded-xl w-full h-auto object-contain"
            src={item.image}
            alt={item.title}
          />
          <a href= {'/products/'+item.id}> <h2 className="text-lg font-semibold">{item.title}</h2> </a>
        <div className="flex flex-row items-center gap-2">
        <img src="/map.png" alt="" />
         <span className="text-[#FFB30E]"> {item.location} </span>
        </div>

          <span className="font-bold">
            {item.price}
          </span>
          <button className="bg-[#F17228] rounded text-white py-1 font-semibold">Order Now</button>
        </div>
      ))}
    </div>
  );
}

export default PopularItems;
