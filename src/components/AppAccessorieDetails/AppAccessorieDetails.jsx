import "./AppAccessorieDetails.css";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { ContextProduct } from "../../context/ProductContext";

import {
    Box, Typography,
    Button,
    Grid,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function AppAccessorieDetails({
    productId,
    productUser,
    productTitle,
    productPrice,
    productImg,
    productDescription,
    productQuantity,
    onClickFavourite,
    favouriteIconShow,
    favouriteInfo
}) {
    const { user } = useContext(ContextUser);
    const {
        products,
        accessories,
        miniatures,
        cartItems,
        setCartAmount,
        setProductsCount,
        addProductToCart,
    } = useContext(ContextProduct);

    const [count, setCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const productMaxQuantity = parseInt(productQuantity - cartCount);

    const handleIncrement = () => {
        setCount((prevCount) => Math.min(prevCount + 1, productMaxQuantity));
    };

    const handleDecrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };

    useEffect(() => {
        if (cartItems.find(item => item.id === productId)) {
            setCartCount(cartItems.find(item => item.id === productId)?.cartQuantity);
        }
    }, [cartItems]);

    return (
        <>
            {accessories.map((product, i) => {

                const HandleOnClick = (e) => {
                    setCartAmount((cartAmount) => cartAmount + (product.price * count));
                    setProductsCount((productsCount) => productsCount + count);
                    addProductToCart(
                        product.id,
                        product.img,
                        product.user,
                        product.title,
                        product.price,
                        product.quantity,
                        count
                    );
                };
                if (product.id === productId) {
                    return (
                        <div key={product.id}>
                            <Typography
                                disabled={false}
                                variant="h4"
                                color="primary"
                                sx={{
                                    textAlign: "center",
                                    py: "20px",
                                    fontSize: { xs: "28px", sm: "30px", md: "34px" },
                                }}
                            >
                                ✧ DETALLE DE PRODUCTO ✧
                            </Typography>
                            <Card
                                elevation={5}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignContent: "center",
                                    m: "auto",
                                    mt: "10px",
                                    mb: "40px",
                                    maxWidth: {
                                        xs: "330px",
                                        sm: "600px",
                                        md: "940px",
                                        lg: "1040px",
                                    },
                                    borderRadius: "20px",
                                }}
                                key={productId}
                            >
                                <CardContent className="productDetailsCard-style">
                                    <Grid
                                        container
                                        spacing={3}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        alignContent={"center"}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={6}
                                            sx={{
                                                display: "flex",
                                            }}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            alignContent={"center"}
                                        >
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    width: {
                                                        xs: 260,
                                                        sm: 300,
                                                        md: 360,
                                                        lg: 400,
                                                    },
                                                    mx: "auto",
                                                    mr: {
                                                        xs: 0,
                                                        sm: 0,
                                                        md: 5,
                                                        lg: 5,
                                                    },
                                                    ml: {
                                                        xs: 0,
                                                        sm: 0,
                                                        md: 0,
                                                        lg: 0,
                                                    },
                                                }}
                                                image={productImg}
                                                alt="Product_img.png"
                                                className="productDetailsImg-style"
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={6}
                                            sx={{
                                                px: { xs: "none", sm: "0px", md: "5px" },
                                                display: "flex",
                                            }}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            alignContent={"center"}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    maxWidth: {
                                                        xs: "300px",
                                                        sm: "500px",
                                                        md: "940px",
                                                        lg: "980px",
                                                    },
                                                }}
                                                alignItems={"space-between"}
                                            >
                                                <Typography
                                                    color="primary"
                                                    sx={{
                                                        textAlign: {
                                                            xs: "center",
                                                            sm: "left",
                                                            md: "left",
                                                        },
                                                    }}
                                                >
                                                    Publicado por: {productUser}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    color="secondary"
                                                    sx={{
                                                        textAlign: {
                                                            xs: "center",
                                                            sm: "left",
                                                            md: "left",
                                                        },
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {productTitle}
                                                </Typography>
                                                <hr className="hr-style3" />
                                                <Typography
                                                    disabled={false}
                                                    color="secondary"
                                                    sx={{
                                                        textAlign: {
                                                            xs: "center",
                                                            sm: "left",
                                                            md: "left",
                                                        },
                                                    }}
                                                >
                                                    DESCRIPCIÓN:
                                                </Typography>
                                                <Typography
                                                    disabled={false}
                                                    color="secondary"
                                                    sx={{
                                                        textAlign: "justify",
                                                        textJustify: "initial",
                                                        mt: "5px",
                                                        mb: "15px",
                                                        minWidth: "240px",
                                                    }}
                                                    className="productDetailsDescription-style"
                                                >
                                                    {productDescription}
                                                </Typography>
                                                <Typography
                                                    color="secondary"
                                                    sx={{
                                                        textAlign: {
                                                            xs: "center",
                                                            sm: "left",
                                                            md: "left",
                                                        },
                                                    }}
                                                >
                                                    DISPONIBLES: {productQuantity}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        textAlign: {
                                                            xs: "center",
                                                            sm: "left",
                                                            md: "left",
                                                        }, color: "#ED6C02",
                                                        fontWeight: "bold",
                                                        mb: 1,
                                                    }}
                                                >
                                                    EN CARRITO: {cartCount}
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        "& .MuiTextField-root": {
                                                            m: 1,
                                                            width: "40ch",
                                                        },
                                                        display: "flex",
                                                        flexDirection: {
                                                            xs: "column",
                                                            sm: "row",
                                                            md: "row",
                                                        },
                                                    }}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                    textAlign={"center"}
                                                >
                                                    <Typography
                                                        variant="h5"
                                                        color="primary"
                                                        sx={{
                                                            textAlign: "justify",
                                                            textJustify: "initial",
                                                            fontWeight: "600",
                                                            fontSize: "32px",
                                                        }}
                                                    >
                                                        {productPrice}
                                                    </Typography>

                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                        }}
                                                        justifyContent={"space-between"}
                                                        alignItems={"center"}
                                                        textAlign={"center"}
                                                    >
                                                        <Button
                                                            sx={{
                                                                fontWeight: "600",
                                                            }}
                                                            className="link-style2"
                                                            disabled={!user}
                                                            onClick={onClickFavourite}
                                                            endIcon={favouriteIconShow}
                                                        >
                                                            {favouriteInfo}
                                                        </Button>
                                                    </Box>
                                                </Box>

                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: {
                                                            xs: "column",
                                                            sm: "row",
                                                            md: "row",
                                                        },
                                                        pt: "10px",
                                                    }}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                    textAlign={"center"}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                        }}
                                                        justifyContent={"space-between"}
                                                        alignItems={"center"}
                                                        textAlign={"center"}
                                                    >
                                                        <Button
                                                            variant="contained"
                                                            onClick={handleDecrement}
                                                            sx={{
                                                                minWidth: "40px",
                                                            }}
                                                        >
                                                            <RemoveIcon />
                                                        </Button>
                                                        <Typography
                                                            variant="h5"
                                                            color="secondary"
                                                            sx={{
                                                                mx: "10px",
                                                                fontWeight: "bold",
                                                                minWidth: {
                                                                    xs: "50px",
                                                                    sm: "50px",
                                                                    md: "50px",
                                                                    lg: "50px",
                                                                },
                                                            }}
                                                        >
                                                            {count}
                                                        </Typography>

                                                        <Button
                                                            variant="contained"
                                                            onClick={handleIncrement}
                                                            sx={{
                                                                minWidth: "40px",
                                                            }}
                                                        >
                                                            <AddIcon />
                                                        </Button>
                                                    </Box>
                                                    <Box>
                                                        <Button
                                                            variant="contained"
                                                            color="warning"
                                                            startIcon={
                                                                <AddShoppingCartIcon
                                                                    color="white"
                                                                    className="iconInfo-style"
                                                                />
                                                            }
                                                            size="small"
                                                            disabled={count <= 0 ? true : false}
                                                            sx={{
                                                                mt: { xs: 2, sm: 0, md: 0 },
                                                                ml: { xs: 0, sm: 1, md: 1 },
                                                                py: 1.5,
                                                                width: "200px",
                                                            }}
                                                            onClick={HandleOnClick}
                                                        >
                                                            AÑADIR AL CARRITO
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </div>
                    )
                }
                return null
            })}
        </>
    );
}