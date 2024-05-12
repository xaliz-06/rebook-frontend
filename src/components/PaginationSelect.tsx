import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationSelect = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent className="p-3 my-3 text-3xl font-bold text-white flex flex-row gap-2 items-center">
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => onPageChange(page - 1)}
              className="text-xl font-bold"
            />
          </PaginationItem>
        )}
        {pageNumbers.map((number) => (
          <PaginationLink
            href="#"
            onClick={() => onPageChange(number)}
            isActive={page === number}
            className={page === number ? "text-blue-500" : ""}
            key={number}
          >
            {number}
          </PaginationLink>
        ))}
        {page !== pageNumbers.length && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => onPageChange(page + 1)}
              className="text-xl font-bold"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelect;
