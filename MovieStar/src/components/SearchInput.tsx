import { memo } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = memo(({ onChange }: SearchInputProps) => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <Input
        className="h-[68px] rounded-[8px] shadow-md bg-secondary text-xl pl-16 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0"
        placeholder="Movies, shows and more"
        onChange={onChange}
      />
      <div className="absolute left-4">
        <SearchIcon className="w-7 h-7" />
      </div>
    </div>
  );
});
