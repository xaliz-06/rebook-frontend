import React, { useEffect } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Combobox } from "@headlessui/react";

import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

import { genresList, conditions } from "@/config/store-options-config";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Book } from "@/types";

type Props = {
  index: number;
  book?: Book;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem, book }: Props) => {
  const { control } = useFormContext();

  const [selectedGenre, setSelectedGenre] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState("");

  useEffect(() => {
    if (book) {
      setSelectedGenre([...book.genre]);
    }
  }, [book]);

  const filteredGenres =
    query === ""
      ? genresList
      : genresList.filter((genre) => {
          return genre.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex flex-col justify-between gap-2 py-2">
      <div className="flex flex-row flex-1 justify-between">
        <FormField
          control={control}
          name={`availableBooks.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1 text-gray-200">
                Name
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white w-[25vw]"
                  placeholder="A fantastic book"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`availableBooks.${index}.author`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1 text-gray-200">
                Author Name
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white w-[25vw]"
                  placeholder="A brilliant author"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`availableBooks.${index}.releaseYear`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1 text-gray-200">
                Release Year
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white w-[25vw] w"
                  placeholder="1952"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-row flex-1 justify-between items-center">
        <FormField
          control={control}
          name={`availableBooks.${index}.price`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1 text-gray-200">
                Price (INR)
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white w-[10vw]"
                  placeholder="270"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`availableBooks.${index}.condition`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1 text-gray-200">
                Condition
                <FormMessage />
              </FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[100%] bg-white rounded shadow-lg">
                    <SelectValue
                      placeholder="Select a condition"
                      className=""
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white p-2 rounded shadow-lg">
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`availableBooks.${index}.genre`}
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-3">
              <div className="flex flex-col gap-2">
                <FormLabel className="flex items-center gap-1 text-gray-200">
                  Genre
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Combobox
                    value={selectedGenre}
                    onChange={setSelectedGenre}
                    as="div"
                    className="w-[25vw] bg-white rounded border border-gray-300 shadow-lg"
                    multiple
                  >
                    <Combobox.Input
                      onChange={(event) => setQuery(event.target.value)}
                      className="w-[25vw] bg-white rounded border border-gray-300 shadow-lg p-1 text-sm"
                      placeholder="Start typing..."
                    />
                    <Combobox.Options
                      className="absolute z-50 mt-1 w-[25vw] bg-white rounded border border-gray-300 shadow-lg"
                      style={{ maxHeight: "200px", overflowY: "auto" }}
                    >
                      {filteredGenres.map((genre) => (
                        <Combobox.Option key={genre} value={genre}>
                          {({ active, selected }) => (
                            <li
                              className={`${
                                active
                                  ? "bg-blue-500 text-white"
                                  : "bg-white text-black"
                              } flex items-center gap-2 p-2 cursor-pointer`}
                              onClick={() =>
                                field.onChange([...field.value, genre])
                              }
                            >
                              {selected && <CheckIcon className="w-[10px]" />}
                              {genre}
                            </li>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  </Combobox>
                </FormControl>
              </div>
              <div className="flex gap-1 bg-slate-200 w-[30vw] p-2 rounded border border-gray-300 shadow-lg min-h-[3rem]">
                {selectedGenre.length > 0 && (
                  <ul className="flex flex-row gap-2 flex-wrap">
                    {selectedGenre.map((genre) => (
                      <li
                        key={genre}
                        className="p-1 bg-slate-400 rounded text-sm shadow-lg cursor-pointer"
                        onClick={() => {
                          setSelectedGenre((prevState) =>
                            prevState.filter(
                              (selectedGenre) => selectedGenre !== genre
                            )
                          );
                          field.onChange(
                            field.value.filter((g: string) => g !== genre)
                          );
                        }}
                      >
                        {genre}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FormItem>
          )}
        />
      </div>
      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500 max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
