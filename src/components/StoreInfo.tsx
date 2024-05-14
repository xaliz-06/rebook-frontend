import { Store } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  store: Store;
};

const StoreInfo = ({ store }: Props) => {
  return (
    <Card className="border-sla border-slate-600 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
          {store.sellerName}
        </CardTitle>
        <CardDescription className="text-slate-300">
          {store.city}, {store.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        {store.interestedGenres.map((item, index) => (
          <span className="flex" key={index}>
            <span className="text-white">{item}</span>
            {index < store.interestedGenres.length - 1 && (
              <Dot className="text-white" />
            )}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default StoreInfo;
