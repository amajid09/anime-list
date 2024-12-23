import React from "react";
import { Link } from "react-router";
export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-8 items-center  w-full h-lvh ">
      <Image />
      <ImageCaption />
      <Description />
      <ViewButton />
    </div>
  );
}

const Image = () => (
  <img
    className="absolute z-[-1] aspect-video h-full w-full"
    src={"/src/assets/anime-8.avif"}
  />
);
const ImageCaption = () => (
  <div className=" col-span-3 ml-4 flex items-center aspect-video row-start-2 row-span-2">
    <img className="w-2/3 h-full" src={"/src/assets/image-1-caption.avif"} />
  </div>
);

const Description = () => (
  <div className="text-white ml-4 text-lg w-full col-span-3 row-start-5 ">
    Jill breaks out of prison the night before she’s set to be executed by her
    fiancé, Crown Prince Gerald. She’s struck by an arrow while escaping, but
    instead of dying, she’s transported six years into the past—to the night she
    and Gerald met. Desperate to alter fate, she instead proposes to the first
    man she sees,
  </div>
);

const ViewButton = () => (
  <div className="col-span-2 py-2 ml-4 row-start-7">
    <Link
      className=" px-12 py-6 rounded-md bg-fuchsia-700 text-white font-semibold"
      to={"/anime"}>
      View Anime Watchlist
    </Link>
  </div>
);
