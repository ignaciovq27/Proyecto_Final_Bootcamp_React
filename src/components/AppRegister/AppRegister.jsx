//css
import "./AppRegister.css"

//components
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppImg from "../AppImg/AppImg";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function AppRegister() {

    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordRepeat,
        setPasswordRepeat,
        profileImg,
        register } = useContext(ContextUser);

    const navigate = useNavigate()
    const [nameError, setNameError] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault()

        if (name.length > 12) {
            return alert("error: Cantidad de caracteres sobrepasado.")
        }

        if (password !== passwordRepeat) {
            return alert("error: No coinciden las contraseñas.")
        }

        register({
            name,
            email,
            password,
            profileImg,
            userId: Date.now(),
        })
        return navigate("/login")
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
                    src="\imgs\Icon_User_02.png"
                    alt="Logo_02"
                    width="70px"
                    display="flex"
                    py="10px"
                />
                <Typography
                    disabled={false}
                    variant="h4"
                    color="primary"
                >CREA TU CUENTA
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary"
                    sx={{
                        pb: "20px"
                    }}
                >REGISTRA TUS DATOS
                </Typography>
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
                            color="primary"
                            autoFocus
                            value={name}
                            onChange={(e) => {
                                const value = e.target.value;
                                setName(value);
                                setNameError(value.length > 12);
                            }}
                            error={nameError}
                            helperText={nameError ? "El nombre debe tener MAX 12 caracteres." : ""}
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
                            error={false}
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
                            value={passwordRepeat}
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

                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    color="warning"
                    disabled={
                        (name !== "" && email !== "" && password !== "" && passwordRepeat !== "") ? false : true
                    }
                    sx={{
                        mt: 1,
                        py: 2,
                        width: "200px",
                    }}
                    endIcon={<PersonAddIcon />}> REGISTRARSE </Button>
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
                >¿YA TIENES UNA CUENTA?
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    component={Link}
                    to="/login"
                    className="link-style"
                >INICIAR SESIÓN
                </Typography>
            </Box>
        </>
    );
}