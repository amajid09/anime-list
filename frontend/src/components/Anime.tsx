import { AnimeType, useAnime } from "@/hooks/anime-provider";
import Spinner from "@/icons/Spinner";
import Tick from "@/icons/Tick";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Anime() {
  const { loading, getAllAnime } = useAnime();
  useEffect(() => {
    const fetchAnime = async () => {
      await getAllAnime();
    };
    fetchAnime();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="py-10 min-h-screen bg-black flex justify-center w-full items-center">
      <div className="text-start">
        <p className="text-xl text-white font-bold py-4 ">Liked Anime</p>
        <Cards />
      </div>
    </div>
  );
}

const Cards = () => {
  const { animes } = useAnime();

  return (
    <div className="">
      <div className="h-full grid gap-4 grid-cols-6">
        {animes.map((anime) => (
          <Card key={anime._id} anime={anime} className="cursor:poiner" />
        ))}
      </div>
    </div>
  );
};
interface CardType extends React.HTMLAttributes<HTMLAnchorElement> {
  anime: AnimeType;
}
const Card = ({ anime, className, ...props }: CardType) => {
  const { _id, title, description, image } = anime;
  return (
    <div className="flex flex-col gap-4">
      <Link
        to={`/anime/${_id}`}
        className={cn("cursor-pointer group", className)}
        {...props}>
        <div className="h-60 w-48 opacity-0 hidden group-hover:opacity-100 group-hover:block duration-150 ease-in">
          <p className="text-white">{title}</p>
          <p className="text-gray-400">
            {description.substring(0, 80) + "..."}
          </p>
        </div>
        <img
          key={_id}
          className="h-60 w-48 group-hover:hidden group-hover:opacity-0"
          src={image}
          alt=""
        />
      </Link>
      <p className="text-white w-48 text-sm">{title}</p>
    </div>
  );
};
