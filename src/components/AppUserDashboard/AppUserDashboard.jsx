//css
import "./AppUserDashboard.css"

//components
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { ContextProduct } from "../../context/ProductContext";

import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppCardDashboard from "../AppCardDashboard/AppCardDashboard";

export default function AppUserDashboard() {
    const { products, deleteProduct } = useContext(ContextProduct);
    const { user } = useContext(ContextUser);

    const [userProductsCount, setuserProductsCount] = useState(0);

    useEffect(() => {

        function sortById(a, b) {
            if (a.id < b.id) {
                return -1;
            } else if (a.id > b.id) {
                return 1;
            } else {
                return 0;
            }
        }
        const userProducts = products.sort(sortById).filter(product => product.userId === user.userId);
        setuserProductsCount(userProducts.length);
    }, [products, user.userId]);

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
            >✧ MIS PUBLICACIONES ✧
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
                    pb: "35px",
                    maxWidth: { xs: "330px", sm: "700px", md: "880px", lg: "1040px" },
                    borderRadius: "20px",
                }}
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                    }}
                >
                    <Box
                        sx={{
                            my: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                        }}
                    >
                        <Button
                            component={Link}
                            to="/user-dashboard-create"
                            variant="contained"
                            size="small"
                            color="warning"
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 2,
                                mx: 3,
                            }}
                            endIcon={<AutoAwesomeIcon />}> CREAR PUBLICACIÓN
                        </Button>
                    </Box>
                    <>
                        {products.filter(product => product.userId === user.userId).length === 0 ? (
                            <>
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
                                    NO HAY PUBLICACIONES CREADAS
                                </Typography>
                                <Box
                                    sx={{
                                        width: { xs: "290px", sm: "600px", md: "750px", lg: "900px", xl: "900px" },
                                    }}
                                >
                                    <hr />
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        width: { xs: "290px", sm: "600px", md: "750px", lg: "900px", xl: "900px" },
                                    }}
                                >
                                    <hr />
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        pt: 1,
                                    }}
                                >
                                    <Typography
                                        color="secondary"
                                        sx={{
                                            px: 1
                                        }}
                                    >
                                        PUBLICACIONES:
                                    </Typography>
                                    <Typography
                                        color="primary"
                                        sx={{ fontWeight: "600", fontSize: "20px" }}
                                    >{userProductsCount}
                                    </Typography>
                                </Box>
                                {products.filter(product => product.userId === user.userId)
                                    .map(product => (
                                        <AppCardDashboard
                                            key={product.id}
                                            dashboardProductTitle={product.title}
                                            dashboardProductImg={product.img}
                                            to={`/user-dashboard-edit/${product.id}`}
                                            dashboardOnClickDelete={() => deleteProduct(product.id)}
                                        />
                                    ))}
                            </>
                        )}
                    </>
                </CardContent>
            </Card>
        </>
    );
}