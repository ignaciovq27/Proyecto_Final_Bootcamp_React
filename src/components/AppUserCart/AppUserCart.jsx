//css
import "./AppUserCart.css"

//components
import { useEffect } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { ContextProduct } from "../../context/ProductContext";

import AppProductCart from "../AppProductCart/AppProductCart";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function AppUserCart() {
    const { user } = useContext(ContextUser);
    const {
        cartItems,
        setCartItems,
        cartAmount,
        setCartAmount,
        productsCount,
        setProductsCount, } = useContext(ContextProduct);

    useEffect(() => {
    }, [cartItems]);

    return (
        <>
            <Typography
                disabled={false}
                variant="h4"
                color="primary"
                sx={{
                    textAlign: "center",
                    pt: "20px",
                    pb: "15px",
                    fontSize: { xs: "28px", sm: "30px", md: "34px" }
                }}
            >✧ MI CARRITO ✧
            </Typography>
            <Card
                elevation={5}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "10px",
                    mb: "40px",
                    pb: "20px",
                    pt: "20PX",
                    maxWidth: { xs: "330px", sm: "700px", md: "880px", lg: "1040px" },
                    borderRadius: "20px",
                }}
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                        mt: 1,
                    }}
                // className="userCard-style"
                >
                    {cartItems.map((item, i) => {
                        const productMaxQuantity = parseInt(item.quantity);
                        const handleOnClickAdd = (e) => {
                            if (item.cartQuantity < productMaxQuantity) {
                                setCartAmount((productCartAmount) => (productCartAmount + item.price))
                                item.cartQuantity = Math.min(item.cartQuantity + 1, productMaxQuantity)
                                setProductsCount((productsCount) => Math.min(productsCount + 1))

                            } else {
                            }
                        }

                        const handleOnClickRemove = (e) => {
                            if (item.cartQuantity > 0) {
                                setCartAmount((cartAmount) => cartAmount - item.price);
                                setProductsCount((productsCount) => Math.max(productsCount - 1, 0))

                                const newCartItems = cartItems.map((cartItem) => {
                                    if (cartItem.id === item.id) {
                                        return {
                                            ...cartItem,
                                            cartQuantity: cartItem.cartQuantity - 1,
                                        };
                                    }
                                    return cartItem;
                                }).filter((cartItem) => cartItem.cartQuantity > 0);
                                setCartItems(newCartItems);
                            }
                        };

                        return (
                            <div key={item.id}>
                                <AppProductCart
                                    productCartImg={item.img}
                                    productCartUser={item.user}
                                    productCartTitle={item.title}
                                    productCartPrice={item.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                    productCartCount={item.cartQuantity}
                                    productCartQuantity={item.quantity}
                                    productCartTotal={(item.price * item.cartQuantity).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                    handleCartDecrement={handleOnClickRemove}
                                    handleCartIncrement={handleOnClickAdd}
                                />
                            </div>
                        )
                    })}
                </CardContent>

                <div>
                    {productsCount > 0
                        ?
                        <Box
                            sx={{
                                pb: "30px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    py: 2,
                                }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                            >

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "row" },
                                        pt: 1.5,
                                    }}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    textAlign={"center"}
                                >
                                    <Typography
                                        color="secondary"
                                        variant="h5"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                        }}
                                    >CANTIDAD DE PRODUCTOS:
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="primary"
                                        sx={{
                                            px: 1,
                                            textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                            mx: "auto"
                                        }}
                                    >{productsCount}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", sm: "row" },
                                    }}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    textAlign={"center"}
                                >
                                    <Typography
                                        variant="h5"
                                        color="secondary"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            py: 0.5,
                                            textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                            mx: "auto"
                                        }}
                                    >TOTAL:
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="primary"
                                        sx={{
                                            fontWeight: "600",
                                            textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                            fontSize: "24px",
                                            px: 1,
                                        }}
                                    >{cartAmount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                    </Typography>
                                </Box>

                            </Box>

                            <Button
                                variant="contained"
                                disabled={user && productsCount > 0 ? false : true}
                                color="warning"
                                startIcon={<ShoppingCartCheckoutIcon
                                    color="white"
                                    className="iconInfo-style" />}
                                size="small"
                                sx={{
                                    py: 2,
                                    px: 5,
                                }}
                            >CONTINUAR COMPRA
                            </Button>
                        </Box>
                        :
                        <>
                            <Box
                                sx={{
                                    my: 3,
                                    mb: 4,
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
                                    NO HAY PRODUCTOS EN EL CARRITO
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
                </div>
            </Card>
        </>
    );
}