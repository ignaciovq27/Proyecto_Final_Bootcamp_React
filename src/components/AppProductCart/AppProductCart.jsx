//css
import "./AppProductCart.css"

//components
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function AppCardDashboard({
    productCartImg,
    productCartUser,
    productCartTitle,
    productCartPrice,
    productCartCount,
    productCartQuantity,
    productCartTotal,
    handleCartIncrement,
    handleCartDecrement,
}) {

    return (
        <>
            <Card
                elevation={0}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "10px",
                    mb: "10px",
                    borderRadius: "10px",
                }}

            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        maxWidth: { xs: "280px", sm: "700px", md: "880px", lg: "1100px" },
                    }}
                    className="productCart2-style"
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            maxWidth: { xs: "280px", sm: "600px", md: "880px", lg: "1040px" },
                        }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        textAlign={"center"}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                maxWidth: { xs: "280px", sm: "280px", md: "880px", lg: "1040px" },
                                m: "auto",
                            }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    width: { xs: "130px", sm: "130px", md: 100, lg: 100 },
                                    mx: "auto",
                                    my: { xs: 1, sm: 0, md: 0, lg: 0 },
                                }}
                                image={productCartImg}
                                alt="Product_01.png"
                                className="productDetailsImg-style"
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: { xs: "center", sm: "center", md: "center", lg: "flex-start" },
                                    alignItems: { xs: "center", sm: "flex-start", md: "flex-start", lg: "flex-start" },
                                    pl: 1,
                                }}
                            >
                                <Typography
                                    color="primary"
                                    sx={{
                                        textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
                                        fontSize: "14px",
                                    }}
                                >{productCartUser}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="secondary"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        py: 0.5,
                                        textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
                                        width: { xs: "240px", sm: "200px", md: "240px", lg: "300px" },
                                        mx: "auto"
                                    }}
                                    className="productName-style"
                                >{productCartTitle}
                                </Typography>

                                <Typography
                                    variant="h5"
                                    color="primary"
                                    sx={{
                                        fontWeight: "600",
                                        textAlign: { xs: "center", sm: "center", md: "center", lg: "left" },
                                        fontSize: "22px"
                                    }}
                                >{productCartPrice}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            px: { xs: 6, sm: 4, md: 6, lg: 6 },

                        }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        textAlign={"center"}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                pt: 3.1,
                                pb: { xs: 0.5, sm: 0, md: 0, lg: 0 },
                            }}
                            alignItems={"center"}
                        >
                            <Button variant="contained"
                                onClick={handleCartDecrement}
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
                                    minWidth: "50px",
                                    textAlign: "center",
                                }}
                            >{productCartCount}
                            </Typography>

                            <Button
                                variant="contained"
                                onClick={handleCartIncrement}

                                sx={{
                                    minWidth: "40px",
                                }}
                            >
                                <AddIcon />
                            </Button>
                        </Box>
                        <Typography
                            color="secondary"
                            sx={{
                                pt: 1,
                            }}
                        >DISPONIBLES: {productCartQuantity}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        textAlign={"center"}
                    >
                        <Typography
                            variant="h5"
                            color="primary"
                            sx={{
                                fontWeight: "600",
                                textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                fontSize: "24px",
                            }}
                        >{productCartTotal}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <hr className="hr4-style" />
        </>
    );
}