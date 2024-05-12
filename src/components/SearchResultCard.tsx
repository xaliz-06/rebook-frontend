import { Store } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Dot, MapPin } from "lucide-react";

type Props = {
  store: Store;
};

const SearchResultCard = ({ store }: Props) => {
  return (
    <Link
      to={`/detail/${store._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group p-2 bg-slate-600 rounded-md"
    >
      <AspectRatio ratio={16 / 8} className="p-2 bg-slate-900 rounded-lg">
        <img
          src={store.imageUrl}
          className="rounded-md w-full h-full object-cover"
        />
      </AspectRatio>
      <div>
        <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline text-white">
          {store.sellerName}
        </h3>
        <div id="card-content" className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-row flex-wrap gap-2 text-white">
            {store.interestedGenres.map((item, index) => (
              <span className="flex">
                <span>{item}</span>
                {index < store.interestedGenres.length - 1 && <Dot />}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex items-center gap-1 text-blue-400">
              <MapPin size={16} className="text-blue-400" />
              {store.city}
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <Banknote size={16} className="text-green-600" />
              {parseInt(store.deliveryPrice) === 0
                ? "Free Delivery"
                : `Delivery: INR ${(
                    parseInt(store.deliveryPrice) / 100
                  ).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
