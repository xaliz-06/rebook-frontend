import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import { Loader2 } from "lucide-react";

const UserProfilePage = () => {
  const { updateUser, isLoading: isLoadingUpdate } = useUpdateMyUser();
  const { currentUser, isLoading: isLoadingUser } = useGetMyUser();

  if (isLoadingUser) {
    return (
      <div className="p-4 mx-auto my-2 text-blue-500 flex flex-col justify-center items-center gap-4">
        <span className="text-3xl">Loading...</span>
        <Loader2 className="w-10 h-10" />
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="p-4 mx-auto my-2 text-white flex flex-col justify-center items-center gap-4">
        <span className="text-3xl">Unable to load the user profile</span>
      </div>
    );
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isLoadingUpdate}
    />
  );
};

export default UserProfilePage;
