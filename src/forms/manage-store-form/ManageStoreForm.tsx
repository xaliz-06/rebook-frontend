import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import GenresSection from "./GenresSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Store } from "@/types";
import { useEffect } from "react";

const currentYear = new Date().getFullYear();

const formSchema = z
  .object({
    sellerName: z.string({
      required_error: "Seller Name is required!",
    }),
    city: z.string({
      required_error: "City is required!",
    }),
    country: z.string({
      required_error: "Country is required!",
    }),
    deliveryPrice: z.coerce.number({
      required_error: "Delivery Price is required!",
      invalid_type_error: "Must be a valid positive number",
    }),
    interestedGenres: z.array(z.string()).nonempty({
      message: "Please select at least one genres",
    }),
    availableBooks: z.array(
      z.object({
        name: z.string().min(1, "Name is required"),
        price: z.coerce.number().min(1, "price is required"),
        author: z.string().min(1, "Author Name is required"),
        condition: z.string().min(1, "Condition is required"),
        releaseYear: z
          .string()
          .min(1, "Year is required")
          .regex(/^\d{4}$/, "Invalid Year Format")
          .refine((value) => parseInt(value) <= currentYear, {
            message: "Year must be less than or equal to the current year",
          }),
        genre: z.array(z.string()).nonempty({
          message: "Please select at least one genres",
        }),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "Image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either an image URL or an image file must be provided",
    path: ["imageFile"],
  });

type StoreFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (storeFormData: FormData) => void;
  isLoading: boolean;
  store?: Store;
};

const ManageStoreForm = ({ onSave, isLoading, store }: Props) => {
  const form = useForm<StoreFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      availableBooks: [
        {
          name: "",
          author: "",
          releaseYear: "",
          condition: "",
          genre: [],
          price: 0,
        },
      ],
      interestedGenres: [],
    },
  });

  useEffect(() => {
    if (!store) {
      return;
    }

    const deliveryPriceFormatted = (parseInt(store.deliveryPrice) / 100)
      .toFixed(2)
      .toString();
    const bookPricesFormatted = store.availableBooks.map((book) => ({
      ...book,
      price: parseFloat((parseInt(book.price) / 100).toFixed(2)),
    }));

    const updatedStore = {
      ...store,
      deliveryPrice: parseFloat(deliveryPriceFormatted),
      availableBooks: bookPricesFormatted,
    };

    form.reset(updatedStore);
  }, [form, store]);

  const onSubmit = (formDataJson: StoreFormData) => {
    const formData = new FormData();

    formData.append("sellerName", formDataJson.sellerName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );
    formDataJson.interestedGenres.forEach((genre, index) => {
      formData.append(`interestedGenres[${index}]`, genre);
    });
    formDataJson.availableBooks.forEach((book, index) => {
      formData.append(`availableBooks[${index}][name]`, book.name);
      formData.append(`availableBooks[${index}][author]`, book.author);
      formData.append(
        `availableBooks[${index}][releaseYear]`,
        book.releaseYear
      );
      formData.append(`availableBooks[${index}][condition]`, book.condition);
      formData.append(
        `availableBooks[${index}][price]`,
        (book.price * 100).toString()
      );
      formDataJson.availableBooks[index].genre.forEach((genre, genreIndex) => {
        formData.append(
          `availableBooks[${index}][genre][${genreIndex}]`,
          genre
        );
      });
    });
    if (formDataJson.imageFile) {
      formData.append("imageFile", formDataJson.imageFile);
    }
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-slate-800 rounded-lg py-4 px-2 md:py-4 md:px-2 lg:p-10"
      >
        <DetailsSection />
        <Separator />
        <GenresSection />
        <Separator />
        <MenuSection books={store?.availableBooks} />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageStoreForm;
