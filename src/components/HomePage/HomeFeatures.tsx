const details = [
  {
    id: 1,
    title: "Diverse Selection",
    description:
      "Explore a vast array of genres, from timeless classics to contemporary bestsellers, ensuring there's something for every reader's taste.",
  },
  {
    id: 2,
    title: "Effortless Selling",
    description:
      "List your preloved books quickly and connect with eager buyers, making decluttering your shelves a breeze.",
  },
  {
    id: 3,
    title: "Community Connection",
    description:
      "Engage with fellow book lovers, share recommendations, and discuss your favorite reads in a vibrant and supportive community.",
  },
  {
    id: 4,
    title: "Secure Transactions",
    description:
      "Shop with confidence knowing that your purchases and sales are protected by our secure platform, ensuring a hassle-free experience for all users.",
  },
];

const HomeFeatures = () => {
  return (
    <div className="flex flex-col gap-8 mt-6 md:mt-12">
      <h2 className="text-slate-200 font-bold text-2xl md:text-4xl text-center">
        What We Are Good At
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {details.map((detail) => {
          return (
            <div
              key={detail.id}
              className="p-10 text-slate-200 bg-slate-900 flex flex-col gap-5 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-blue-500 font-semibold text-xl md:text-2xl">
                {detail.title}
              </h3>
              <p className="text-slate-200 text-sm">{detail.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFeatures;
