import { useSearchStore } from "@/api/StoreApi";
import GenreFilter from "@/components/GenreFilter";
import PaginationSelect from "@/components/PaginationSelect";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedGenres: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedGenres: [],
    sortOption: "bestMatch",
  });

  const { results, isLoading } = useSearchStore(searchState, city);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (isLoading) {
    <span>Loading...</span>;
  }

  if (!results?.data || !city) {
    return <span>No Results Found!</span>;
  }

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1,
    }));
  };

  const setSearchQuery = (searchFormValue: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      page: 1,
      searchQuery: searchFormValue.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
    }));
  };

  const handlePageChange = (page: number) => [
    setSearchState((prevState) => ({
      ...prevState,
      page,
    })),
  ];

  const setSelectedGenre = (selectedGenres: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedGenres,
      page: 1,
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="genre-list">
        <GenreFilter
          selectedGenres={searchState.selectedGenres}
          onChange={setSelectedGenre}
          isExpanded={isExpanded}
          onExpandedClick={() => setIsExpanded((prevState) => !prevState)}
        />
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          placeholder="Search by Store or Genre"
          onSubmit={setSearchQuery}
          onReset={resetSearch}
          searchQuery={searchState.searchQuery}
        />
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultInfo total={results.pagination.total} city={city} />
          <SortOptionDropdown
            sortOption={searchState.sortOption}
            onChange={(value) => setSortOption(value)}
          />
        </div>
        {results.data.map((store) => (
          <SearchResultCard key={store._id} store={store} />
        ))}
        <PaginationSelect
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SearchPage;
