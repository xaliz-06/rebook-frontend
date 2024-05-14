import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Emily S.",
    review:
      "Re-Book has completely changed the way I discover new reads. I've found rare gems and connected with fellow book lovers. Highly recommend!",
  },
  {
    id: 2,
    name: "Samuel L.",
    review:
      "Selling my used books on Re-Book was a breeze! Within days, I had cleared out space on my shelf and made some extra cash. Thanks, Re-Book!",
  },
  {
    id: 3,
    name: "Sophia M.",
    review:
      "I love how easy it is to navigate through Re-Book's extensive collection. It's like stepping into a treasure trove of literary wonders!",
  },
  {
    id: 4,
    name: "Alex R.",
    review:
      "The community aspect of Re-Book is what keeps me coming back. It's great to connect with other bookworms and share recommendations.",
  },
  {
    id: 5,
    name: "Emma T.",
    review:
      "Shopping for used books on Re-Book is not only budget-friendly but also environmentally conscious. A win-win in my book!",
  },
  {
    id: 6,
    name: "Nathan H.",
    review:
      "I've been using Re-Book for years now, and it never disappoints. Safe transactions, diverse selection, and a welcoming community – what more could you ask for?",
  },
];

const HomeTestimonials = () => {
  return (
    <div className="flex flex-col gap-8 mt-12">
      <h2 className="text-slate-200 font-bold text-2xl md:text-4xl text-center">
        What the Talk of the Town is
      </h2>
      <Carousel className="mx-6 md:mx-5 lg:mx-4">
        <CarouselContent className="px-5 md:-px-4">
          {testimonials.map((obj) => {
            return (
              <CarouselItem
                key={obj.id}
                className="ml-2 md:basis-1/3 rounded-lg bg-slate-900 p-4"
              >
                <div className="flex flex-col gap-4 text-slate-200 px-4 py-6">
                  <p className="text-base md:text-base lg:text-xl">
                    {obj.review}
                  </p>
                  <h5 className="text-xl md:text-xl lg:text-2xl font-medium text-blue-500">
                    - {obj.name}
                  </h5>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeTestimonials;
