import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  genre: string;
  field: ControllerRenderProps<FieldValues, "interestedGenres">;
};

const GenreCheckbox = ({ genre, field }: Props) => {
  return (
    <FormItem className="flex flex-row items-center space-x-2 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(genre)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, genre]);
            } else {
              field.onChange(field.value.filter((g: string) => g !== genre));
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-base font-normal text-gray-200">
        {genre}
      </FormLabel>
    </FormItem>
  );
};

export default GenreCheckbox;
