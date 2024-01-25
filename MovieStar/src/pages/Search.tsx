import { SearchInput } from "@/components/SearchInput";
import SearchMovie from "@/components/SearchMovie";

import useDebounce from "@/hooks/useDebounce";
import useSearchMovie from "@/hooks/useSearchMovie";

import { useCallback, useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const debounceSearch = useDebounce(input, 200);
  const { data } = useSearchMovie(debounceSearch);

  console.log(data);

  const handleChange = useCallback((e: any) => {
    setInput(e.target.value);
  }, []);

  return (
    <div className="pl-28 pt-8 pr-14">
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center">
          <SearchInput onChange={handleChange} />
        </div>

        <div className="flex items-center pt-14">
          <SearchMovie data={data} name={"Top Results"} />
        </div>
      </div>
    </div>
  );
};

export default Search;
