import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-200">Details</h2>
        <FormDescription className="text-xl text-gray-200">
          Enter the details about your store
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="sellerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl text-gray-200">Seller Name</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-4 justify-between">
        <div className="flex gap-2 w-[50%]">
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-gray-200">City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-gray-200">Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 w-[50%]">
          <FormField
            control={control}
            name="deliveryPrice"
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormLabel className="text-xl text-gray-200">
                  Delivery Price (INR)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white"
                    placeholder="Enter the amount you would charge for delivery ex. Rs. 100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
