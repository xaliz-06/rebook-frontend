import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isLoadingUpdate } = useUpdateMyUser();
  const { currentUser, isLoading: isLoadingUser } = useGetMyUser();

  if (isLoadingUser) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
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
