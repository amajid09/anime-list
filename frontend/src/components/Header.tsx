import React, { ReactNode } from "react";
import { Link, Outlet } from "react-router";

export default function Header() {
  return (
    <>
      <header className="bg-gray-700 h-full flex gap-4 pl-8">
        <Logo />
        <Menu />
        <Actions />
      </header>
      <Outlet />
    </>
  );
}

const Logo = () => (
  <div className="text-white font-bold text-lg bg-fuchsia-700 w-max p-4 m-4 rounded-md">
    <Link to={"/"}>AnimeList</Link>
  </div>
);

const Menu = () => (
  <ul className="flex gap-4">
    <Item>
      <Link className="" to={"/anime"}>
        Liked anime
      </Link>
    </Item>
    <Item>
      <Link className="" to={"/add-anime"}>Add anime</Link>
    </Item>
    <Browse />
  </ul>
);

const Browse = () => {
  return (
    <Item>
      <div className="cursor-pointer ">Browse</div>
    </Item>
  );
};
const Item = ({ children }: { children: ReactNode }) => (
  <li className="text-white cursor-pointer px-12 font-medium text-base h-full w-max flex hover:bg-gray-800 hover:duration-100 ease-in-out p-4 items-center ">
    {children}
  </li>
);

const Actions = () => <></>;
