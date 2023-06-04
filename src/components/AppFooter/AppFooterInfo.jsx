//css
import "./AppFooter.css"

//components
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppIconButton from "../AppIconButton/AppIconButton";

export default function AppFooterInfo() {
    return (
        <>
            <hr />
            <Box
                sx={{
                }}>

                <Box
                    align="center"
                    sx={{
                        display: { xs: 'flex', sm: 'flex' },
                        justifyContent: { xs: "center", md: "flex-end" },
                        alignItems: "center",
                        gap: "5px",
                    }}>
                    <Box>
                        <Typography
                            sx={{
                                m: "auto",
                                fontSize: "15px"
                            }}
                        >IGNACIO VARAS Q.
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: { xs: "flex", sm: "flex" },
                        gap: "5px",
                    }}>
                        <AppIconButton icon={<GitHubIcon />} backgroundColor={"rgb(29, 95, 149)"}
                            boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"}
                            component="a"
                            // href="https://github.com/ignaciovq27?tab=repositories" />
                            href="https://github.com/ignaciovq27" target={"_blank"} />

                        <AppIconButton icon={<LinkedInIcon />} backgroundColor={"rgb(29, 95, 149)"}
                            boxShadow={"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.5)"}
                            component="a" href="https://www.linkedin.com/in/ignaciovarasq/" target={"_blank"} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}