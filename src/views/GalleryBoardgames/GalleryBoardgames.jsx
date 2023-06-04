// css
import "../GalleryBoardgames/GalleryBoardgames.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppGalleryBoardgames from "../../components/AppGalleryBoardgames/AppGalleryBoardgames";


export default function GalleryBoardgames() {

    return (
        <div className="galleryBoardgames-container" id="galleryBoardgames">
            <AppTitle title="GALLERY BOARDGAMES" />
            <AppGalleryBoardgames />
        </div>
    )
}