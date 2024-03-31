import HomeBar from "@/components/HomePage/HomeBar";
import HomeFeatures from "@/components/HomePage/HomeFeatures";
import HomeTestimonials from "@/components/HomePage/HomeTestimonials";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <HomeBar />
      <HomeFeatures />
      <HomeTestimonials />
    </div>
  );
};

export default HomePage;
