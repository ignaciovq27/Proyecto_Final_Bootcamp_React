//css
import './AppIconButton.css'

//components
// import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export default function AppIconButton({ icon, to, count, maxCount, onClick, xsDisplay, smDisplay, component, isActive, backgroundColor, boxShadow, href, target }) {
    return (
        <Typography
            // noWrap
            component={component}
            href={href}
            target={target}
            to={to}
            className={isActive}
            sx={{
                display: { xs: { xsDisplay }, sm: { smDisplay }, md: 'flex' },
                m: 0,
                mx: 0.2,
                py: 0,
                textDecoration: "none",
                // backgroundColor: "rgb(20, 79, 128)",
                backgroundColor: { backgroundColor },
                borderRadius: "50%",
                // boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"
                boxShadow: { boxShadow }
            }}
        >
            <IconButton
                className='IconButton-style'
                size="large"
                onClick={onClick}
            >
                <Badge badgeContent={count} max={maxCount} color="secondary">
                    {icon}
                </Badge>
            </IconButton>
        </Typography>
    )
}