import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { ResetIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Store name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeholder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, placeholder, onReset, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full md:p-3 md:mx-5 ${
          form.formState.errors.searchQuery ? "border-red-600" : "border-white"
        } mx-1 p-2`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-blue-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none lg:text-xl md:text-xl text-base shadow-none focus-visible:ring-0 text-white"
                  placeholder={placeholder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full md:p-4 p-2"
        >
          <span className="hidden md:block">Reset</span>
          <ResetIcon className="md:hidden" />
        </Button>
        <Button type="submit" className="rounded-full md:p-4 p-2 bg-blue-500">
          <span className="hidden md:block">Search</span>
          <SearchIcon size={20} className="md:hidden" />
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
