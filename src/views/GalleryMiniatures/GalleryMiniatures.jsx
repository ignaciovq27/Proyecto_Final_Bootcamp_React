// css
import "../GalleryMiniatures/GalleryMiniatures.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppGalleryMiniatures from "../../components/AppGalleryMiniatures/AppGalleryMiniatures";


export default function GalleryMiniatures() {

    return (
        <div className="galleryMiniatures-container" id="galleryMiniatures">
            <AppTitle title="GALLERY MINIATURES" />
            <AppGalleryMiniatures />
        </div>
    )
}