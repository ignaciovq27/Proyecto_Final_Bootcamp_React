//css
import "./AppUserFavourites.css"

//components
import { useState } from "react";
import { useContext } from "react";
import { ContextProduct } from '../../context/ProductContext';
import { ContextFavourite } from '../../context/FavouriteContext';

import { Box, Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import AppCardProduct from "../AppCardProduct/AppCardProduct";
import AppFilters from "../AppFilters/AppFilters";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function AppUserFavourites() {
    const { products } = useContext(ContextProduct);
    const { favourites, addFavourites, deleteFavourites } = useContext(ContextFavourite);
    const [searchText, setSearchText] = useState("")
    const [sortOrder, setSortOrder] = useState(0)

    const [searchOrder, setsearchOrder] = useState(0);
    // console.log(sortOrder)


    const handleOnChange = (event) => {
        setsearchOrder(event.target.value);
        if (event.target.value === 0) {
            setSortOrder(0);
            console.log("sort 0");
        }
        if (event.target.value === 1) {
            setSortOrder(1);
            console.log("sort 1");
            // console.log(sortOrder);
        }
        if (event.target.value === 2) {
            setSortOrder(2);
            console.log("sort 2");
            // console.log(sortOrder);
        }
        if (event.target.value === 3) {
            setSortOrder(3);
            console.log("sort 3");
            // console.log(sortOrder);
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
            // className=''
            >✧ MIS FAVORITOS ✧
            </Typography>

            <AppFilters
                infoText="FAVORITOS: "
                infoTextLength={favourites.length}
                searchTextNav={searchText}
                setSearchTextNav={setSearchText}
                handleOnChangeSort={handleOnChange}
                searchOrderSort={searchOrder}
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
                        // sm={6}
                        // md={12}
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
                        {favourites
                            .sort((a, b) => logicOrder(a, b))
                            .filter((favourite) => favourite.title.toUpperCase().includes(searchText.toUpperCase().trim()))
                            .map((favourite, i) => {
                                const likeStatus = favourite.fav;
                                return (
                                    <AppCardProduct
                                        key={favourite.id}
                                        productId={favourite.id}
                                        productImg={favourite.img}
                                        productUser={favourite.user}
                                        productTitle={favourite.title}
                                        productPrice={favourite.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                        productDescription={favourite.description}
                                        onClickFavourite={() => {
                                            const favourite = favourites[i];
                                            if (favourite.fav) {
                                                favourite.fav = false;
                                                deleteFavourites(favourite.id)
                                                console.log("Eliminado de Favoritos");
                                                console.log(favourites)
                                            } else {
                                                favourite.fav = true;
                                                addFavourites(favourite);
                                                console.log("Agregado a favoritos");
                                                console.log(favourites)
                                            }
                                        }}
                                        favouriteIconShow={likeStatus ?
                                            (<FavoriteIcon size="large" />)
                                            : (<FavoriteBorderIcon size="large" />)}
                                    />
                                )
                            })}
                        {
                            favourites.length === 0 &&
                            //  <p>NONES</p>
                            <>
                                <Box
                                    sx={{
                                        // my: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        alignContent: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: { xs: "290px", sm: "600px", md: "750px", lg: "900px", xl: "900px" },
                                        }}
                                    >
                                        <hr />
                                    </Box>

                                    <Typography
                                        color="secondary"
                                        sx={{
                                            py: "12px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        NO HAY PRODUCTOS FAVORITOS
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: { xs: "290px", sm: "600px", md: "750px", lg: "900px", xl: "900px" },
                                        }}
                                    >
                                        <hr />
                                    </Box>
                                </Box>
                            </>
                        }
                    </Grid >
                </Grid>
            </Container >
        </>
    );
}