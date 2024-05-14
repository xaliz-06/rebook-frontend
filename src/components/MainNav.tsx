import { Link } from "react-router-dom";
import UsernameMenu from "./menu/UsernameMenu";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className="font-bold text-white p-3 min-w-[8rem] flex items-center justify-center text-xl rounded-lg bg-slate-800 mx-2 hover:text-blue-500"
          >
            Orders
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold text-xl text-gray-200 p-6 hover:text-gray-200 hover:bg-slate-950 transition-all bg-slate-800"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
