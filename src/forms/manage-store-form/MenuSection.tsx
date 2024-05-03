import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { Book } from "@/types";

type Props = {
  books?: Book[];
};

const MenuSection = ({ books }: Props) => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "availableBooks",
  });

  return (
    <div className="space-y-2 flex flex-col">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-200">Genres</h2>
        <FormDescription className="text-xl text-gray-200">
          List the books you wish to sell
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="availableBooks"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                key={index}
                book={books?.[index]}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={() =>
          append({
            name: "",
            price: "",
            author: "",
            releaseYear: "",
            condition: "",
            genre: [],
          })
        }
      >
        Add Book
      </Button>
    </div>
  );
};

export default MenuSection;
