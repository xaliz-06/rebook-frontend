import { Book } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  book: Book;
  addToCart: () => void;
};

const BookItem = ({ book, addToCart }: Props) => {
  return (
    <Card
      className="cursor-pointer border-sla border-slate-600 bg-slate-600"
      onClick={addToCart}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tighter text-white">
          {book.name}
        </CardTitle>
        <CardDescription className="flex justify-between text-slate-100 text-lg">
          <div className="">
            {book.author} ({book.releaseYear})
          </div>
          <div>Condition: {book.condition}</div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col text-green-400">
        <div className="flex flex-row">
          {book.genre.map((item, index) => (
            <span className="flex" key={index}>
              <span className="text-white">{item}</span>
              {index < book.genre.length - 1 && <Dot className="text-white" />}
            </span>
          ))}
        </div>
        <div className="font-bold">
          INR {(parseInt(book.price) / 100).toFixed(2)}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookItem;
