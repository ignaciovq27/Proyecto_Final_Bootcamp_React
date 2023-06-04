//css
import "./AppFooter.css"

//components
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AppImg from "../AppImg/AppImg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppIconButton from "../AppIconButton/AppIconButton";
import AppFooterInfo from "./AppFooterInfo";

export default function AppFooter() {
    return (
        <>
            <div className="appFooter-style">
                <Box
                    component="footer"
                    sx={{
                        py: 1,
                        px: 2,
                        mt: 2,
                        bgcolor: 'secondary.main',
                        color: 'white',
                    }
                    }>
                    <Container
                        align="center"
                        sx={{ display: "flex" }}>
                        <Grid container
                            alignItems={"center"}
                            alignContent={"center"}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                sx={{ display: { xs: 'flex', sm: 'flex' } }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                textAlign={"center"}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        textAlign: "center",
                                        m: "auto",
                                        display: { xs: 'flex', sm: 'flex' },
                                        gap: 0.5,
                                        mt: "10px",
                                    }}
                                    textAlign={"center"}
                                >¿AÚN NO ERES PARTE DE LA COMUNIDAD?
                                </Typography>
                                <Typography
                                    disabled={false}
                                    variant="h6"
                                    sx={{
                                        textAlign: "justify",
                                        textJustify: "initial",
                                        mt: "10px",
                                    }}
                                >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit amet loremter.
                                </Typography>
                                <Typography
                                    variant="a"
                                    sx={{
                                        m: 0,
                                        pt: 2,
                                        pb: 4,
                                        display: "inline"
                                    }}
                                >
                                    <Button variant="contained" color="primary"
                                        sx={{
                                            py: 2,
                                        }}
                                        href="https://desafiolatam.com/"
                                        target="_blank"
                                    >
                                        IR A COMUNIDAD
                                    </Button>
                                </Typography>
                            </Grid >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                sx={{ display: { xs: 'flex', sm: 'flex' } }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                textAlign={"center"}
                            >
                                <AppImg
                                    src="\imgs\Logo_02.png"
                                    alt="Logo_02"
                                    width="220px"
                                    display="flex"
                                />
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        m: "auto",
                                        display: { xs: 'flex', sm: 'flex' },
                                        gap: 0.5,
                                        mt: "10px",
                                        mb: "20px"
                                    }}
                                    textAlign={"center"}
                                > <MailOutlineIcon /> CONTACTO@DADOAZUL.CL
                                </Typography>
                            </Grid >
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={3}
                                sx={{ display: { xs: 'flex', sm: 'flex' } }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                textAlign={"center"}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        m: "auto",
                                        mt: "10px",
                                        mb: "20px"
                                    }}
                                    textAlign={"center"}
                                >SÍGUENOS EN:
                                </Typography>
                                <Box sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: "center", pb: "30px", gap: "5px" }}>
                                    <AppIconButton icon={<InstagramIcon />} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"}
                                        component="a" href="https://www.instagram.com/desafiolatam/" target={"_blank"} />
                                    <AppIconButton icon={<TwitterIcon />} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"}
                                        component="a" href="https://twitter.com/DesafioLatam" target={"_blank"} />
                                    <AppIconButton icon={<YouTubeIcon />} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"}
                                        component="a" href="https://www.youtube.com/@AcademiaDesafioLatam" target={"_blank"} />
                                    <AppIconButton icon={<FacebookIcon />} backgroundColor={"rgb(29, 95, 149)"}
                                        boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"}
                                        component="a" href="https://www.facebook.com/DesafioLatam" target={"_blank"} />
                                </Box>
                            </Grid >
                        </Grid>
                    </Container>
                    <Box>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: "15px"
                            }}
                        >
                            DADOAZUL MARKETPLACE
                            {' '}
                            {'© '}
                            {' '}
                            {new Date().getFullYear()}
                            {''}
                        </Typography>
                    </Box>
                    <AppFooterInfo />
                </Box>
            </div>
        </>
    );
}