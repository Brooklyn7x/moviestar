import { SearchInput } from "@/components/SearchInput";
import SearchMovie from "@/components/SearchMovie";
import { Button } from "@/components/ui/button";

import useDebounce from "@/hooks/useDebounce";
import useSearchMovie from "@/hooks/useSearchMovie";
import { ArrowLeft } from "lucide-react";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const debounceSearch = useDebounce(value, 200);
  const { data } = useSearchMovie(debounceSearch);

  const handleChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  const handleClear = useCallback((e: any) => {
    setValue("");
  }, []);

  return (
    <div className="p-8 md:pl-28">
      <div className="fixed pt-20 z-10">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost"
        >
          <ArrowLeft />
        </Button>
      </div>
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center">
          <SearchInput
            onChange={handleChange}
            onClear={handleClear}
            value={value}
          />
        </div>

        <div className="flex items-center pt-14 md:pt-14">
          <SearchMovie data={data} name={"Top Results"} />
        </div>
      </div>
    </div>
  );
};

export default Search;
