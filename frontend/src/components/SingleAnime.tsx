import { useAnime } from "@/hooks/anime-provider";
import Plus from "@/icons/Plus";
import Spinner from "@/icons/Spinner";
import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function SingleAnime() {
  const { id } = useParams();
  const { getSingleAnime, anime, loading } = useAnime();

  useEffect(() => {
    const fetchAnime = async () => {
      await getSingleAnime(id);
    };
    fetchAnime();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  const { image, description, title } = anime;
  return (
    <div className="w-full bg-black min-h-screen h-full">
      <div className="relative z-0">
        <img
          className="absolute blur z-[-1] h-56 block w-full object-cover"
          src={image}
          alt=""
        />
        <img className="z-[3] object-contain w-full h-56" src={image} alt="" />
      </div>
      <div className="pt-10 flex justify-center gap-4 ">
        <div className="max-w-[66rem] flex gap-4">
          <div className="max-w-[36rem] flex flex-col gap-4">
            <p className="text-2xl  text-white text-semibold">{title}</p>
            <button className=" flex items-center gap-2 text-fuchsia-700 m-0 py-2 text-lg font-semibold px-8 border-fuchsia-700 max-w-fit border">
              <Plus />
              WatchList
            </button>
            <p className="text-white text-lg font-extralight ">{description}</p>
          </div>
          <div className="text-white">video</div>
        </div>
      </div>
    </div>
  );
}
