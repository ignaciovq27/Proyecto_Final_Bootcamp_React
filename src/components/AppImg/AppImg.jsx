//css

//components
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

export default function AppImg({ to, width, src, alt, imgClass, px, py, display, component }) {
    return (
        <>
            <Typography
                variant=""
                noWrap
                component={component}
                to={to}
                paddingY={py}
                paddingX={px}
                align='center'
                sx={{ display: { display }, justifyContent: "center", alignItems: "center", alignContent: "center" }}
            ><img src={src} width={width} alt={alt} className={imgClass}
                />
            </Typography>
        </>
    )
}