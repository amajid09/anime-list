import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";
export interface AnimeType {
  title: string;
  description: string;
  image: string;
  _id: string;
}
interface Anime {
  getAllAnime: () => Promise<void>;
  animes: AnimeType[];
  anime: AnimeType;
  getSingleAnime: (id: string) => Promise<void>;
  addAnime: (newAnime: FormData) => Promise<void>;
  loading: boolean;
}
const AnimeContext = createContext({} as Anime);

const AnimeProvider = ({ children }: { children: ReactNode }) => {
  const [animes, setAnimes] = useState<AnimeType[]>([]);
  const [anime, setAnime] = useState<AnimeType>({} as AnimeType);
  const [loading, setLoading] = useState(false);

  const getAllAnime = async () => {
    setLoading(true);
    const { data: animes } = await axios.get(
      "http://localhost:3000/all-anime/"
    );
    setAnimes(animes);
    setLoading(false);
  };

  const getSingleAnime = async (id: string) => {
    setLoading(true);
    const { data: anime } = await axios.get(
      "http://localhost:3000/anime/" + id
    );
    setAnime(anime);
    setLoading(false);
  };
  const addAnime = async (newAnime: FormData) => {
    await axios.post("http://localhost:3000/anime", newAnime);
  };
  return (
    <AnimeContext.Provider
      value={{ addAnime, anime, animes, loading, getAllAnime, getSingleAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnime = () => {
  const context = useContext(AnimeContext);

  if (!context) {
    throw new Error("use anime must be used within the Anime provider");
  }
  return context;
};

export default AnimeProvider;
