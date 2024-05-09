import React from "react";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import { BsFillTreeFill } from "react-icons/bs";
import Filtro from "./Filtro";

const Filtros = () => {
  const sorting = [
    { title: "Bote", icon: <GiFishingBoat /> },
    { title: "Nuevo", icon: <GiMineExplosion /> },
    { title: "Privado", icon: <ImKey /> },
    { title: "Bosque", icon: <BsFillTreeFill /> },
  ];
  return (
    <div className="   ">
      <div className="flex justify-start  gap-3 sm:gap-4  mt-4  ">
        {sorting.map((obj) => (
          <Filtro title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filtros;
