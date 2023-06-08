//css
import "./AppUserProfileEdit.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppImg from "../AppImg/AppImg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppButtonUpload from "../AppButtonUpload/AppButtonUpload";

export default function AppUserProfileEdit() {

    const {
        user,
        editProfile,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordRepeat,
        setPasswordRepeat,
        profileImg,
        setProfileImg } = useContext(ContextUser);

    const navigate = useNavigate()

    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        if (user) {
            setName("")
            setPassword("")
            setPasswordRepeat("")
            setName(user.name)
            setEmail(user.email)
            setPassword(user.password)
            setProfileImg(user.profileImg)
            console.log("userStates loaded")
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("usuario ingresado: " + name)
        console.log("mail ingresado: " + email)
        console.log("password ingresado: " + password)
        console.log("profileImg ingresado: " + profileImg)

        if (name.length > 12) {
            return alert("error: Indica un nombre válido.")
        }

        if (email === "") {
            return alert("error: Indica un mail válido.")
        }

        if (password !== passwordRepeat) {
            return alert("error: No coinciden las contraseñas.")
        }

        if (name === "" || email === "" || password === "" || profileImg === "") {
            return alert("error: Debe completar todos los registros.")
        }

        editProfile({
            userId: user.userId,
            name,
            email,
            password,
            profileImg
        })

        if (user) {
            return navigate("/user-profile")
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPasswordRepeat = () => setShowPasswordRepeat((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownPasswordRepeat = (event) => {
        event.preventDefault();
    };

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
            >✧ EDITAR PERFIL ✧
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
                    maxWidth: { xs: "330px", sm: "600px", md: "880px", lg: "1040px" },
                    borderRadius: "20px",
                }}
                className="userCard-style"
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="secondary"
                        sx={{
                            pt: "30px",
                            pb: "10px",
                        }}
                    >ACTUALIZA TUS DATOS:
                    </Typography>

                    <Grid container
                        spacing={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                        sx={{
                            mb: { xs: 0, sm: 3, md: 2, lg: 3 }
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={9}
                            sx={{
                                display: "flex",
                            }}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Box
                                component="form"
                                id="userProfileEditForm"
                                onSubmit={handleSubmit}
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: { sx: "10ch", sm: "30ch", md: "40ch" } },
                                    display: "flex",
                                    my: "20px",
                                }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                            >
                                <div>
                                    <div className="divTextField-style">
                                        <AccountCircle
                                            color="primary"
                                            sx={{ my: 0.5 }} />

                                        <TextField
                                            id="name"
                                            label="NOMBRE DE USUARIO"
                                            type="text"
                                            variant="outlined"
                                            required
                                            defaultValue={user.name}
                                            color="primary"
                                            autoFocus
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setName(value);
                                                setNameError(value.length > 12);
                                            }}
                                            error={nameError}
                                            helperText={nameError ? "El nombre debe tener 12 caracteres MAX." : ""}
                                        />
                                    </div>

                                    <div className="divTextField-style">
                                        <EmailIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            id="email"
                                            label="CORREO ELECTRÓNICO"
                                            type="email"
                                            variant="outlined"
                                            required
                                            error={false}
                                            disabled
                                            defaultValue={user.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            color="primary"
                                        />
                                    </div>

                                    <div className="divTextField-style">
                                        <VpnKeyIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            id="password"
                                            label="CONTRASEÑA"
                                            type={showPassword ? 'text' : 'password'}
                                            variant="outlined"
                                            required
                                            helperText={passwordError
                                                ? ("La contraseña no es correcta.")
                                                : null}
                                            error={passwordError}
                                            defaultValue={user.password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            color="primary"
                                        />
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="start"
                                            color="secondary"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </div>

                                    <div className="divTextField-style">
                                        <VpnKeyIcon
                                            color="primary"
                                            sx={{ my: 0.5 }} />
                                        <TextField
                                            id="passwordRepeat"
                                            label="REPETIR CONTRASEÑA"
                                            type={showPasswordRepeat ? 'text' : 'password'}
                                            variant="outlined"
                                            required
                                            error={false}
                                            onChange={(e) => setPasswordRepeat(e.target.value)}
                                            color="primary"
                                        />
                                        <IconButton
                                            onClick={handleClickShowPasswordRepeat}
                                            onMouseDown={handleMouseDownPasswordRepeat}
                                            edge="start"
                                            color="secondary"
                                        >
                                            {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </div>
                                </div>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={3}
                            sx={{
                                display: "flex",
                            }}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    mb: { xs: "40px", sm: "40px", md: "0px", lg: 0 },

                                }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                            >
                                <Typography
                                    color="secondary"
                                    sx={{
                                    }}
                                >IMAGEN DE PERFÍL:
                                </Typography>
                                <AppImg
                                    src="\imgs\User_Profile_Img_00.png"
                                    alt="User_Profile_Img_00.png"
                                    width="140px"
                                    imgClass="userProfileImg2-style"
                                />
                                <AppButtonUpload />
                            </Box>
                        </Grid>
                    </Grid>

                    <hr className="hr-style4" />

                    <Box
                        sx={{
                            mb: { xs: 2, sm: 2, md: 2, lg: 2 },
                        }}>


                        <Button
                            component={Link}
                            to="/user-profile"
                            variant="contained"
                            size="small"
                            color="secondary"
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 1.5,
                                mx: 3,
                                width: "160px",
                            }}
                            startIcon={<ArrowBackIcon />}>CANCELAR
                        </Button>

                        <Button
                            type="submit"
                            form="userProfileEditForm"
                            variant="contained"
                            size="small"
                            color="warning"
                            disabled={
                                (name !== "" && email !== "" && password !== "" && passwordRepeat !== "") ? false : true
                            }
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 1.5,
                                mx: 3,
                                width: "160px",
                            }}
                            endIcon={<CheckIcon />}>CONFIRMAR
                        </Button>
                    </Box>
                </CardContent>
            </Card>

        </>
    );
}