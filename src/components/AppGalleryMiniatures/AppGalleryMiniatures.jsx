//css
import "./AppGalleryMiniatures.css"

//components
import { useState } from "react";
import { useContext } from "react";
import { ContextProduct } from '../../context/ProductContext';
import { ContextFavourite } from '../../context/FavouriteContext';


import { Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import AppCardProduct from "../AppCardProduct/AppCardProduct";
import AppFilters from "../AppFilters/AppFilters";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function AppGalleryMiniatures() {
    const { miniatures } = useContext(ContextProduct);
    const { favourites, addFavourites, deleteFavourites } = useContext(ContextFavourite);
    const [searchText, setSearchText] = useState("")

    const [sortOrder, setSortOrder] = useState(0)
    const [searchOrder, setsearchOrder] = useState(0);

    const handleOnChange = (event) => {
        setsearchOrder(event.target.value);
        if (event.target.value === 0) {
            setSortOrder(0);
        }
        if (event.target.value === 1) {
            setSortOrder(1);
        }
        if (event.target.value === 2) {
            setSortOrder(2);
        }
        if (event.target.value === 3) {
            setSortOrder(3);
        }
    }

    function logicOrder(a, b) {
        if (sortOrder === 0) {
            return sortByTitle(a, b);
        }

        if (sortOrder === 1) {
            return sortByTitle(b, a);
        }

        if (sortOrder === 2) {
            return sortByPrice(a, b);
        }

        if (sortOrder === 3) {
            return sortByPrice(b, a);
        }
        // return 0;
    }

    function sortByTitle(a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        // return 0;
    }

    function sortByPrice(a, b) {
        if (a.price < b.price) {
            return -1
        }
        if (a.price > b.price) {
            return 1
        }
        // return 0;
    }

    return (
        <>
            <Typography
                disabled={false}
                variant="h4"
                color="primary"
                sx={{
                    textAlign: "center",
                    pt: "20px",
                    pb: "20px",
                    fontSize: { xs: "28px", sm: "30px", md: "34px" }
                }}
            >✧ MINIATURAS ✧
            </Typography>

            <AppFilters
                infoText="PUBLICACIONES: "
                infoTextLength={miniatures.length}
                searchTextNav={searchText}
                setSearchTextNav={setSearchText}
                handleOnChangeSort={handleOnChange}
                searchOrderSort={searchOrder}
                searchPlaceholder="Set miniaturas..."
            />

            <Container
                sx={{
                    m: "auto",
                    p: 3,
                    py: 4,
                    maxWidth: "1400px !important",
                }}
            >
                <Grid container
                    spacing={3}
                    textAlign={"center"}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex", flexDirection: { xs: 'column', sm: 'row' },
                            gap: 4,
                            pb: 8
                        }}
                        flexWrap={"wrap"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                    >
                        {miniatures
                            .sort((a, b) => logicOrder(a, b))
                            .filter((miniature) => miniature.title.toUpperCase().includes(searchText.toUpperCase().trim()))
                            .map((miniature, i) => {
                                const likeStatus = miniature.fav;
                                return (
                                    <AppCardProduct
                                        key={miniature.id}
                                        productId={miniature.id}
                                        productImg={miniature.img}
                                        productUser={miniature.user}
                                        productTitle={miniature.title}
                                        productPrice={miniature.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                        productDescription={miniature.description}
                                        toDetailProduct={`/miniature-details/${miniature.id}`}
                                        onClickFavourite={() => {
                                            const miniature = miniatures[i];
                                            if (miniature.fav) {
                                                miniature.fav = false;
                                                deleteFavourites(miniature.id)
                                            } else {
                                                miniature.fav = true;
                                                addFavourites(miniature);
                                            }
                                        }}
                                        favouriteIconShow={likeStatus ?
                                            (<FavoriteIcon size="large" />)
                                            : (<FavoriteBorderIcon size="large" />)}
                                    />
                                )
                            })}
                    </Grid >
                </Grid>
            </Container >
        </>
    );
}