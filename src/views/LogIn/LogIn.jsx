// css
import "../LogIn/LogIn.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppLogIn from "../../components/AppLogIn/AppLogIn";

export default function Register() {

  return (
    <div className="logIn-container" id="logIn">
      <AppTitle title="LOGIN" />
      <AppLogIn />
    </div>
  );
}
