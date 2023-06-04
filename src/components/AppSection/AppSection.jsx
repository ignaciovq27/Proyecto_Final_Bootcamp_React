//css
import './AppSection.css'

//components
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import AppImg from '../AppImg/AppImg';

export default function AppSection() {
    return (
        <Container
            sx={{
                m: "auto",
                p: 3,
                py: 5,
                pt: 7,
            }}
        >
            <Grid container
                spacing={3}
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={8}

                    sx={{
                        pr: { xs: 'none', sm: '0px', md: "30px" },
                    }}
                >
                    <Typography
                        disabled={false}
                        variant="h4"
                        color="primary"
                        sx={{
                            textAlign: "left",
                        }}
                    >BIENVENIDO AL MEJOR MARKETPLACE DE JUEGOS DE MESA
                    </Typography>
                    <Typography
                        disabled={false}
                        variant="h6"
                        color="secondary"
                        sx={{
                            textAlign: "justify",
                            textJustify: "initial",
                            mt: "20px",
                            mb: "20px", fontWeight: "bold",
                        }}
                    >"Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
                    </Typography>
                    <Typography
                        disabled={false}
                        variant="h6"
                        color="secondary"
                        sx={{
                            textAlign: "justify",
                            textJustify: "initial",
                            mt: "20px",
                            mb: "20px",
                        }}
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil beatae ipsum assumenda reprehenderit dolorem porro minus doloremque recusandae nesciunt odio cupiditate eum ullam itaque quos similique accusantium sint, nisi maxime!
                    </Typography>
                </Grid >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ display: { xs: 'flex', sm: 'flex' } }}
                    justifyContent={"center"}
                    textAlign={"center"}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            m: "auto",
                            mx: "2px",
                        }}
                        textAlign={"center"}
                    ><AppImg
                            src="\imgs\Section_Img_01.png"
                            alt="Section_Img_01"
                            imgClass="imgBorderRadius imgShadow imgSize"
                        />
                    </Typography>
                </Grid >
            </Grid>
        </Container>
    )
}