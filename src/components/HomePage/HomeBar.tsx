import { useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "../SearchBar";

const HomeBar = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValue: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValue.searchQuery}`,
    });
  };

  return (
    <div className="bg-slate-900 rounded-lg shadow-md py-14 px-6 flex flex-col justify-center gap-5 text-center m-auto -mt-6 md:mt-4 lg:mt-0 md:w-[90%] lg:w-[70%] w-[100%]">
      <h1 className="md:text-5xl text-3xl font-semibold tracking-tight text-blue-500">
        Start Your Book Journey Today
      </h1>
      <span className="md:text-xl text-lg text-slate-200">
        Safe, Secure, and Hassle-Free
      </span>
      <div className="pt-4 md:px-[3rem]">
        <SearchBar
          placeholder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
    </div>
  );
};

export default HomeBar;
