
//components
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function AppButtonUpload() {
    // const [file, setFile] = useState(null);
    // const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = (e) => {
        // if (e.target.files) {
        //     setFile(e.target.files[0]);
        //     const reader = new FileReader();
        //     reader.onload = (event) => {
        //         setImageUrl(event.target.result);
        //     };
        //     reader.readAsDataURL(e.target.files[0]);
        // }
    };

    return (
        <>
            <Box
                sx={{
                    mt: { xs: 1, sm: 1, md: 1, lg: 1.5 },
                }}
            >
                <input
                    type="file"
                    // accept="image/*"
                    style={{ display: 'none' }}
                    // id="contained-button-file"
                    // onChange={handleFileChange}
                />
                <label htmlFor="contained-button-file">
                    <Button type="file"
                        disabled
                        variant="contained"
                        color="primary"
                        component="span"
                        // onChange={handleFileChange}
                        endIcon={<FileUploadIcon />}>SUBIR
                    </Button>
                </label>
            </Box>
        </>
    );
}
