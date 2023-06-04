//css
import "./AppCardDashboard.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";

import { Box, Chip, IconButton, InputAdornment, Typography, autocompleteClasses } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function AppCardDashboard({
    dashboardProductTitle,
    dashboardProductImg,
    to,
    // dashboardOnClickEdit,
    dashboardOnClickDelete,
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
                    mt: "20px",
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
                        // width: "840px",
                        maxWidth: { xs: "280px", sm: "700px", md: "880px", lg: "1040px" },
                    }}
                    className="dasboardCard-style"
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
                                    mx: "auto"
                                }}
                                image={dashboardProductImg}
                                alt="Product_00.png"
                                className="productDetailsImg-style"
                            />
                            <Typography
                                variant="h5"
                                color="secondary"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    // mr: 10,
                                    // ml: 2,
                                    py: 1,
                                    px: 1,
                                    textAlign: { xs: "center", sm: "center", md: "center", lg: "left" },
                                    width: { xs: "240px", sm: "280px", md: "280px", lg: "360px" },
                                    mx: "auto"
                                }}
                                className="productName-style"
                            >{dashboardProductTitle}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                justifyContent: "center",
                                alignItems: "center,"
                                // my: "20px",
                                // mb: "20px",
                                // pb: "20px",
                                // mx: "10px",
                                // m: "auto",
                            }}
                        >
                            <Button
                                component={Link}
                                to={to}
                                variant="contained"
                                size="small"
                                sx={{
                                    my: 1,
                                    mx: { xs: 0, sm: 1, md: 1, lg: 1 },
                                    py: 1.5,
                                    width: "160px",
                                }}
                                // onClick={dashboardOnClickEdit}
                                endIcon={<EditIcon />}> EDITAR
                            </Button>
                            <Button
                                // component={Link}
                                // to="/user-dashboard"
                                variant="outlined"
                                size="small"
                                sx={{
                                    my: 1,
                                    mx: { xs: 0, sm: 1, md: 1, lg: 1 },

                                    py: 1.5,
                                    width: { xs: "160px", sm: "140px", md: "140px", lg: "140px" },
                                }}
                                onClick={dashboardOnClickDelete}
                                endIcon={<DeleteIcon />}> ELIMINAR
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}