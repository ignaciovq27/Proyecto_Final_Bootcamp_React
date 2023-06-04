// css
import "../UserDashboard/UserDashboard.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserDashboard from "../../components/AppUserDashboard/AppUserDashboard";

export default function UserProfile() {

  return (
    <div className="userDashboard-container" id="userDashboard">
      <AppTitle title="USER DASHBOARD" />
      <AppUserDashboard />
    </div>
  );
}
