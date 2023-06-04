// css
import "../UserCart/UserCart.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserCart from "../../components/AppUserCart/AppUserCart";

export default function UserCart() {

  return (
    <div className="userCart-container" id="userCart">
      <AppTitle title="USER CART" />
      <AppUserCart />
    </div>
  );
}
