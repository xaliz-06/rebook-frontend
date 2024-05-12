import { genresList } from "@/config/store-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (genre: string[]) => void;
  selectedGenres: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const GenreFilter = ({
  onChange,
  selectedGenres,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleGenresReset = () => {
    onChange([]);
  };

  const handleGenresChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedGenre = event.target.value;
    const isChecked = event.target.checked;

    const newGenreList = isChecked
      ? [...selectedGenres, clickedGenre]
      : selectedGenres.filter((genre) => genre !== clickedGenre);

    onChange(newGenreList);
  };

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2 text-white">
          Filter By Genre
        </div>
        <div
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
          onClick={() => {
            handleGenresReset;
          }}
        >
          Reset Filters
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {genresList
          .slice(0, isExpanded ? genresList.length : 10)
          .map((genre) => {
            const isSelected = selectedGenres.includes(genre);
            return (
              <div className="flex" key={genre}>
                <input
                  id={`genre_${genre}`}
                  type="checkbox"
                  className="hidden"
                  value={genre}
                  checked={isSelected}
                  onChange={handleGenresChange}
                />
                <Label
                  htmlFor={`genre_${genre}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold text-white ${
                    isSelected
                      ? "border border-blue-500 text-blue-500"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {genre}
                </Label>
              </div>
            );
          })}
        <Button
          variant="link"
          className="mt-4 flex-1 bg-white rounded-full"
          onClick={onExpandedClick}
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default GenreFilter;
