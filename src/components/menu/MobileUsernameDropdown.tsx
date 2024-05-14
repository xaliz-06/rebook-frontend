import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MobileUsernameDropdown = () => {
  const { user, logout } = useAuth0();

  return (
    <div>
      <p className="font-bold text-gray-400 text-sm">{user?.email}</p>
      <div className="py-2 flex flex-col">
        <Link
          to="/user-profile"
          className="font-bold text-gray-900 text-xl hover:text-blue-500 p-3 my-1 rounded-md bg-gray-200"
        >
          Your Profile
        </Link>
        <Link
          to="/manage-store"
          className="font-bold text-gray-900 text-xl hover:text-blue-500 p-3  my-1 rounded-md bg-gray-200"
        >
          Manage Store
        </Link>
        <Link
          to="/order-status"
          className="font-bold text-gray-900 text-xl hover:text-blue-500 p-3  my-1 rounded-md bg-gray-200"
        >
          Orders
        </Link>
      </div>
      <Separator />
      <div className="py-2">
        <Button
          className="flex flex-1 font-semibold bg-slate-800"
          onClick={() => logout()}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default MobileUsernameDropdown;
