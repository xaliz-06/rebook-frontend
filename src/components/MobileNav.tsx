import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import MobileUsernameDropdown from "./menu/MobileUsernameDropdown";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-gray-200" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-3">
              <CircleUserRound className="text-blue-500" />
              <p>{user?.given_name}</p>
            </span>
          ) : (
            <span>Welcome to Re-book</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileUsernameDropdown />
          ) : (
            <Button
              className="flex-1 font-bold bg-slate-900 text-gray-200"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
