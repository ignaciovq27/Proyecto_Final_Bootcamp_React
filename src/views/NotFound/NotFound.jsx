// css
import "../NotFound/NotFound.css"

//components
import { Link } from "react-router-dom";
import AppTitle from "../../components/AppTitle/AppTitle";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NotFound() {
    return (
        <div className="notFound-container" id="notFound">
            <AppTitle title="NOT FOUND" />

            <h3>✧ ERROR 404 ✧</h3>
            <h4>La ruta que intentas consultar no existe.</h4>
            <Typography
                component={Link}
                to="/"
                sx={{
                    m: 0,
                    py: 0,
                    textDecoration: "none",
                }}
            >
                <Button variant="contained"
                    sx={{
                        m: 0,
                        py: 2,
                    }}
                >
                    IR A INICIO
                </Button>
            </Typography>
        </div>
    )
}