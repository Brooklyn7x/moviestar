import MovieList from "@/components/MovieList";
import SearchMovie from "@/components/SearchMovie";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import useSearchMovie from "@/hooks/useSearchMovie";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const debounceSearch = useDebounce(input, 200);
  const { data, isLoading } = useSearchMovie(debounceSearch);


  console.log(data);

  return (
    <div className="pl-28 pt-8 pr-14">
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center">
          <Input
            className="h-[68px] rounded-[8px] shadow-md bg-secondary text-xl pl-16 pr-10"
            placeholder="Movies, shows and more"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="absolute left-4">
            <SearchIcon className="w-7 h-7" />
          </div>
        </div>

        <div className="flex items-center pt-14">
          <SearchMovie data={data} name={"Top Results"}/>
        </div>
      </div>
    </div>
  );
};

export default Search;
