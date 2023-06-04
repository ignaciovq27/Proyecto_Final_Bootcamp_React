//css
import "./AppTitle.css"

//components
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppIconButton from "../AppIconButton/AppIconButton";

export default function AppTitle({ title }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#292829",
                    color: "white",
                    py: "5px",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 2) 0px 1px 3px -1px",
                }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: "18px"
                    }}
                >VIEW: {title}
                </Typography>
            </Box>
        </>
    );
}