"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import pokeball from "./pokeball.svg";
import clsx from "clsx";

type FavouriteProps = {
  id: number;
};

export const Favourite = ({ id }: FavouriteProps) => {
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    const favourites = localStorage.getItem("favourites");
    if (favourites) {
      const favouritesArray = JSON.parse(favourites);
      setFavourite(favouritesArray.includes(id));
    }
  }, []);

  const handleClick = () => {
    const favourites = localStorage.getItem("favourites") || "[]";

    if (favourites) {
      const favouritesArray = JSON.parse(favourites);
      if (favouritesArray.includes(id)) {
        favouritesArray.splice(favouritesArray.indexOf(id), 1);
        setFavourite(false);
      } else {
        favouritesArray.push(id);
        setFavourite(true);
      }
      localStorage.setItem("favourites", JSON.stringify(favouritesArray));
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        favourite
          ? "bg-red-500 hover:bg-transparent opacity-100 hover:opacity-50"
          : "opacity-50 hover:bg-red-500 hover:opacity-100",
        "rounded-full w-[30px] h-[30px] transition-all flex justify-center items-center"
      )}
    >
      <Image src={pokeball} alt="favourite" width={30} height={30} />
    </button>
  );
};
