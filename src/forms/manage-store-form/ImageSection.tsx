import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control, watch } = useFormContext();

  const existingImageUrl = watch("imageUrl");

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
          Add images
        </h2>
        <FormDescription className="text-base md:text-lg text-gray-200">
          Add an image that will be displayed on your page. We only support a
          single image. Adding a new image will overwrite the existing one. Only
          the first image will be selected in case of multiple files.
        </FormDescription>
      </div>
      <div className="flex flex-col py-3 gap-8 md:w-[50%]">
        {existingImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        )}
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white min-h-[8vh] w-[100%]"
                  type="file"
                  accept=".jpg .jpeg .png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;
