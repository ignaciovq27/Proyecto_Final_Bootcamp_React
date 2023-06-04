// css
import "../Register/Register.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppRegister from "../../components/AppRegister/AppRegister";

export default function Register() {

  return (
    <div className="register-container" id="register">
      <AppTitle title="REGISTER" />
      <AppRegister />
    </div>
  );
}
