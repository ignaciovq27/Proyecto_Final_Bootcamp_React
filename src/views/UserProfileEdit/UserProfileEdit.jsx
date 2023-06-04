// css
import "../UserProfileEdit/UserProfileEdit.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserProfileEdit from "../../components/AppUserProfileEdit/AppUserProfileEdit";

export default function UserProfileEdit() {

  return (
    <div className="userProfileEdit-container" id="userProfileEdit">
      <AppTitle title="USER PROFILE EDIT" />
      <AppUserProfileEdit />
    </div>
  );
}
