import { memo } from "react";
import { Input } from "./ui/input";
import { SearchIcon, X } from "lucide-react";
import { Button } from "./ui/button";

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value: string;
}

export const SearchInput = memo(
  ({ onChange, onClear, value }: SearchInputProps) => {
    return (
      <div className="relative flex items-center justify-center w-full">
        <Input
          className="h-[68px] rounded-[8px] shadow-md bg-secondary text-xl pl-16 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0"
          placeholder="Movies, shows and more"
          onChange={onChange}
          value={value}
        />
        <div className="absolute left-4">
          <SearchIcon className="w-7 h-7" />
        </div>

        {value && (
          <div className="absolute right-3">
            <Button onClick={onClear} variant={"ghost"}>
              <X />
            </Button>
          </div>
        )}
      </div>
    );
  }
);
