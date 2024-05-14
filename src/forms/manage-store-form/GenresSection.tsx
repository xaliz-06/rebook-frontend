import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { genresList } from "@/config/store-options-config";
import { useFormContext } from "react-hook-form";
import GenreCheckbox from "./GenreCheckbox";

const GenresSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2 flex flex-col">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-200">Genres</h2>
        <FormDescription className="text-lg md:text-xl text-gray-200">
          Select the genres that you are interested in
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="interestedGenres"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-3">
              {genresList.map((genre, index) => (
                <GenreCheckbox genre={genre} field={field} key={index} />
              ))}
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default GenresSection;
