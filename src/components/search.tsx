"use client";

import { useState } from "react";

const Search = ({
  executeSearch,
}: {
  executeSearch: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="my-4 flex w-[450px] items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="grow-1 w-[300px] border border-gray-200 p-2"
        />
        <button>
          <img
            src="/images/search.png"
            onClick={() => executeSearch(searchTerm)}
            className="cursor-pointer"
          />
        </button>
      </div>
    </>
  );
};

export default Search;
