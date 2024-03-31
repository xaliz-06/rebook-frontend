import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center font-bold hover:text-blue-500 gap-3 text-gray-200 text-xl bg-slate-800 p-3 px-5 rounded-md">
        <CircleUserRound className="text-blue-500" />
        <p>{user?.given_name}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-700 border-none shadow-md mt-6 mx-3 px-4 min-w-[15vw] py-2 flex flex-col justify-start">
        <DropdownMenuItem className="hover:bg-slate-800">
          <p className="font-bold text-gray-400 text-sm">{user?.email}</p>
        </DropdownMenuItem>
        <div className="py-2">
          <DropdownMenuItem>
            <Link
              to="/user-profile"
              className="font-bold text-gray-200 text-xl hover:text-blue-500"
            >
              Your Profile
            </Link>
          </DropdownMenuItem>
        </div>
        <Separator />
        <div className="py-2">
          <DropdownMenuItem>
            <Button
              className="flex flex-1 font-semibold bg-slate-800"
              onClick={() => logout()}
            >
              Log Out
            </Button>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
