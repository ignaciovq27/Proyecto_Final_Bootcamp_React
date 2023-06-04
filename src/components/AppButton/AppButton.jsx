//css
import './AppButton.css'

//components
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AppButton({ text, to, isActive }) {
    return (
        <Typography
            // noWrap
            component={NavLink}
            to={to}
            className={isActive}
            sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                m: 0,
                mx: 1,
                py: 0,
                px: 0,
                textDecoration: "none",
            }}
        >
            <Button
                // startIcon={<FavoriteIcon />}
                disabled={false}
                // variant="outlined"
                color="inherit"
                size="small"
                className='button-style'
                // className={isActive}
                sx={{
                    mx: 0,
                    px: 1,
                    py: 0,
                    // py: "14px",
                    color: 'white',
                    textDecoration: "none",
                }}
            >{text}
            </Button>
        </Typography>
    )
}