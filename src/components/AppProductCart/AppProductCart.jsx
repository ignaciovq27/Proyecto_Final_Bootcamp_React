//css
import "./AppProductCart.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, Chip, IconButton, InputAdornment, Typography, autocompleteClasses } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

    const pollo = "( °)> "
    const [count, setCount] = useState(0)

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
                    // pt: "5px",
                    // mx: 20,
                    // mb: "40px",
                    // Width: { xs: "330px", sm: "600px", md: "700px", lg: "1200px" },
                    borderRadius: "10px",
                }}

            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        // px: 40,
                        // width: "1000px",
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
                    // className="boxContainer-style"
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
                                    // variant="h6"
                                    color="primary"
                                    sx={{
                                        textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
                                        fontSize: "14px",
                                    }}
                                // className=''
                                >{productCartUser}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="secondary"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        // mr: 10,
                                        // ml: 2,
                                        py: 0.5,
                                        // px: 1,
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
                                        // fontWeight: "bold",
                                        fontWeight: "600",
                                        textAlign: { xs: "center", sm: "center", md: "center", lg: "left" },
                                        fontSize: "22px"
                                    }}
                                // className=''
                                >{productCartPrice}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            // pt: "10px"
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
                                // py: { xs: 2, sm: 50, md: 0, lg: 0 },
                            }}
                            alignItems={"center"}
                        >
                            <Button variant="contained"
                                // onClick={() => setCount((count) => count - 1)}
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
                                    // mt: "20px",
                                    mx: "10px",
                                    fontWeight: "bold",
                                    minWidth: "50px",
                                    textAlign: "center",
                                }}
                            // className=''
                            >{productCartCount}
                            </Typography>

                            <Button
                                variant="contained"
                                // onClick={() => setCount((count) => count + 1)}
                                onClick={handleCartIncrement}

                                sx={{
                                    minWidth: "40px",
                                }}
                            >
                                <AddIcon />
                            </Button>
                        </Box>
                        <Typography
                            // variant="h4"
                            color="secondary"
                            // className=''
                            sx={{
                                // textAlign: { xs: "center", sm: "center", md: "center" }
                                pt: 1,
                            }}
                        >DISPONIBLES: {productCartQuantity}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            // pt: "10px"
                        }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        textAlign={"center"}
                    >
                        <Typography
                            variant="h5"
                            color="primary"
                            sx={{
                                // fontWeight: "bold",
                                fontWeight: "600",
                                textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                fontSize: "24px",
                                // pb: 1,
                            }}
                        // className=''
                        >{productCartTotal}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <hr className="hr4-style" />
        </>
    );
}