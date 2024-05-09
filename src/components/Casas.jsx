import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import Cards from "./Cards";

const Casas = () => {
  const rentals = [
    { title: "Aguascalientes, Mexico", image: house1, price: "1,541" },
    { title: "Baja California, México", image: house2, price: "1,541" },
    { title: "Baja California Sur, México", image: house3, price: "1,541" },
    { title: "Campeche, México", image: house4, price: "1,541" },
    { title: "Chiapas, México", image: house5, price: "1,541" },
    { title: "Chihuahua, México", image: house1, price: "1,541" },
    { title: "Ciudad de México, México", image: house2, price: "1,541" },
    { title: "Coahuila de Zaragoza, México", image: house3, price: "1,541" },
    { title: "Colima, México", image: house4, price: "1,541" },
    { title: "Durango, México", image: house5, price: "1,541" },
    { title: "Guanajuato, México", image: house1, price: "1,541" },
    { title: "Guerrero, México", image: house2, price: "1,541" },
    { title: "Hidalgo, México", image: house3, price: "1,541" },
    { title: "Jalisco, México", image: house4, price: "1,541" },
    { title: "Michoacán de Ocampo, México", image: house5, price: "1,541" },
  ];

  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental, index) => (
          <Cards
            key={index}
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Casas;
