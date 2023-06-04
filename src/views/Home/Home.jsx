// css
import "../Home/Home.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppHeader from "../../components/AppHeader/AppHeader";
import AppSection from "../../components/AppSection/AppSection";
import AppFooter from "../../components/AppFooter/AppFooter";


export default function Home() {

  return (
    <div className="home-container" id="home">
      <AppTitle title="HOME" />
      <AppHeader />
      <AppSection />
      <AppFooter />
    </div>
  );
}
