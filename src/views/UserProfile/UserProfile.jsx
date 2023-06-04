// css
import "../UserProfile/UserProfile.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserProfile from "../../components/AppUserProfile/AppUserProfile";

export default function UserProfile() {

  return (
    <div className="userProfile-container" id="userProfile">
      <AppTitle title="USER PROFILE" />
      <AppUserProfile />
    </div>
  );
}
