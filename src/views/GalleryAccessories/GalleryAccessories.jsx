// css
import "../GalleryAccessories/GalleryAccessories.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppGalleryAccessories from "../../components/AppGalleryAccessories/AppGalleryAccessories";


export default function GalleryAccessories() {

    return (
        <div className="galleryAccessories-container" id="galleryAccessories">
            <AppTitle title="GALLERY ACCESSORIES" />
            <AppGalleryAccessories />
        </div>
    )
}