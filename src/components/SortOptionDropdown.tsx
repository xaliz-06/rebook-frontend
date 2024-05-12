import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SORT_OPTIONS = [
  {
    label: "Best Match",
    value: "bestMatch",
  },
  {
    label: "Delivery Price",
    value: "deliveryPrice",
  },
];

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="w-full">
          Sorted by:{" "}
          {SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
            SORT_OPTIONS[0].label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-400 opacity-90">
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
