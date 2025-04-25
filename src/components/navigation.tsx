"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = ({
  selectedPage,
  numItemsInCart,
}: {
  selectedPage: string;
  numItemsInCart: number;
}) => {
  const pages = [
    { path: "all", pageName: "all", displayName: "All" },
    { path: "ships", pageName: "ship", displayName: "Ships" },
    { path: "deathstars", pageName: "star", displayName: "Death Stars" },
    {
      path: "destroyers",
      pageName: "destroyer",
      displayName: "Star Destroyers",
    },
  ];

  const router = useRouter();
  const goToPage = (path: string) => {
    if (path === "all") {
      router.push("/");
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <>
      {/* Home Button */}
      <div className="flex justify-between w-full">
        {/* Left: Navigation */}
        <div className="flex">

        <Link href={"/"} className="mr-2">
          <img
            src={"/images/logo.png"}
            width="40"
            height="40"
            onClick={() => router.push("/")}
            className="cursor-pointer"
            />
        </Link>
        {/* Navigation / filter buttons */}
        <div className="flex gap-4">
          {pages.map((filterValue) => (
            <button
            onClick={() => goToPage(filterValue.path)}
            key={filterValue.path}
            className={`shrink-0 cursor-pointer py-2 ${filterValue.pageName === selectedPage ? "font-bold" : ""}`}
            >
              {filterValue.displayName}
            </button>
          ))}
        </div>
          </div>
        {/* Right: Cart Button */}
        <button className="flex items-center mr-4">
          <img
            src={"/images/cart.png"}
            className="cursor-pointer"
            width="24"
            height="20"
            onClick={() => router.push("/checkout")}
          />
          <p className="rounded-full bg-amber-500 px-2">{numItemsInCart}</p>
        </button>
      </div>
    </>
  );
};

export default Navigation;
