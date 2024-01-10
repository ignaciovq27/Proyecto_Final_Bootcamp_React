//css
import "./AppLogIn.css"

//components
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppImg from "../AppImg/AppImg";
import LoginIcon from '@mui/icons-material/Login';

export default function AppLogIn() {

    const {
        setName,
        email,
        setEmail,
        password,
        setPassword,
        logIn,
        compararInfoUsuarLogIn } = useContext(ContextUser);

    const navigate = useNavigate()

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("mail ingresado: " + email)
        console.log("password ingresado: " + password)
        const user = await logIn(email, password)
        if (user) {
            setName(user.name)
            console.log("Ingresó usuario: " + user.name)
            return navigate("/user-profile")
        }

        compararInfoUsuarLogIn(email, password, setEmailError, setPasswordError)
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: { sx: "10ch", sm: "30ch", md: "40ch" } },
                    display: "flex",
                    my: "20px",
                    mb: "40px",
                }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
            >
                <AppImg
                    src="\imgs\Icon_User_01.png"
                    alt="Logo_02"
                    width="70px"
                    display="flex"
                    py="10px"
                />
                <Typography
                    disabled={false}
                    variant="h4"
                    color="primary"
                >¡BIENVENIDO!
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary"
                    sx={{
                        pb: "20px"
                    }}
                >INICIA SESIÓN
                </Typography>
                <div>

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
                            placeholder="ignacio@mail.cl"
                            helperText={emailError
                                ? ("Ingrese un correo valido.")
                                : null}
                            error={emailError}
                            value={email}
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
                            placeholder="ignacio"
                            helperText={passwordError
                                ? ("La contraseña no es correcta.")
                                : null}
                            error={passwordError}
                            value={password}
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
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    color="warning"
                    disabled={
                        (email !== "" && password !== "") ? false : true
                    }
                    sx={{
                        mt: 1,
                        py: 2,
                        width: "200px",
                    }}
                    endIcon={<LoginIcon />}> INGRESAR </Button>
            </Box>

            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' },
                    display: "flex",
                    my: "40px",
                    px: "40px",
                    mb: "100px"
                }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
            >
                <hr className="hr-style2" />
                <Typography
                    variant="h6"
                    color="secondary"
                >¿AÚN NO TIENES UNA CUENTA?
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    component={Link}
                    to="/register"
                    className="link-style"
                >REGISTRARSE
                </Typography>
            </Box>
        </>
    );
}