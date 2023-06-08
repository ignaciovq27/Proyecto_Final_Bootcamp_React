//css
import './AppCardProduct.css'

//components
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { ContextFavourite } from '../../context/FavouriteContext';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box, Divider } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function AppCardProduct({
    productId,
    productImg,
    productTitle,
    productUser,
    productDescription,
    productPrice,
    onClickFavourite,
    favouriteIconShow,
    toDetailProduct }) {

    const { user } = useContext(ContextUser);
    const { addFavourites } = useContext(ContextFavourite);

    return (
        <>
            <Card
                elevation={2}
                sx={{
                    maxWidth: 300,
                    minHeight: 390,
                    maxHeight: 390,
                    borderRadius: "8px",
                    transition: "0.15s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, #0e5895 0px 0px 0px 2px, rgba(60, 64, 67, 0.3) 0px 2px 6px 2px",
                    }
                }}>
                <Box
                    sx={{
                        px: 1,
                        pt: 0.5,

                    }}
                    textAlign={"right"}
                >
                    <IconButton
                        color="primary"
                        disabled={!user}
                        onClick={onClickFavourite}
                    >
                        {favouriteIconShow}
                    </IconButton>
                </Box>
                <Typography
                    component={Link}
                    to={toDetailProduct}
                    sx={{
                        textDecoration: "none"
                    }}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: "60%",
                            mx: "auto", px: 1,
                        }}
                        image={productImg}
                        alt="Product_01.png"
                    />
                    <Divider sx={{ py: 0.5 }} />
                    <CardContent
                        sx={{ px: 2, pb: 1 }}
                        className="cardContent-style"
                    >
                        <Typography
                            color="primary"
                            sx={{
                                textAlign: { xs: "center", sm: "center", md: "center" },
                                fontSize: "12px",
                            }}
                        >{productUser}
                        </Typography>
                        <Typography
                            variant="h5"
                            color="secondary"
                            sx={{
                                fontWeight: "bold",
                                textAlign: { xs: "center", sm: "center", md: "center" },
                                fontSize: "22px"
                            }}
                            className="cardProductTitle-style"
                        >{productTitle}
                        </Typography>
                        <Typography
                            disabled={false}
                            color="secondary"
                            sx={{
                                textAlign: "center",
                                mt: "5px",
                                mb: "5px",
                            }}
                            className="cardProductInfo-style"
                        >{productDescription}
                        </Typography>
                        <Typography
                            variant="h5"
                            color="primary"
                            sx={{
                                fontWeight: "600",
                                textAlign: { xs: "center", sm: "center", md: "center" },
                                fontSize: "30px"
                            }}
                        >{productPrice}
                        </Typography>
                    </CardContent>
                </Typography>
            </Card>
        </>
    )
}