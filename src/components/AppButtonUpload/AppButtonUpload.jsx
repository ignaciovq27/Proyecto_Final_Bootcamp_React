
//components
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function AppButtonUpload() {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = (event) => {
                setImageUrl(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // const handleUploadClick = () => {
    //     if (!file) {
    //         return;
    //     }

    //     // Uploading the file using the fetch API to the server
    //     fetch('https://httpbin.org/post', {
    //         method: 'POST',
    //         body: file,
    //         headers: {
    //             'content-type': file.type,
    //             'content-length': `${file.size}`,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((err) => console.error(err));
    // };

    return (
        <>
            <Box
                sx={{
                    mt: { xs: 1, sm: 1, md: 1, lg: 1.5 },
                }}
            >
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    onChange={handleFileChange}
                />
                <label htmlFor="contained-button-file">
                    <Button type="file"
                        variant="contained"
                        color="primary"
                        component="span"
                        onChange={handleFileChange}
                        endIcon={<FileUploadIcon />}>SUBIR
                    </Button>
                </label>
                {/* <Button color="secondary" variant="contained" onClick={handleUploadClick}>
                Upload button
            </Button> Botón que llama a subir img a servidor con fetch. */}
                {/* <div>{file && `${file.name} - ${file.type}`}</div> mostrar nombre de archivo subido. */}
                {/* {imageUrl && <img src={imageUrl} alt="Uploaded Image" width="80px" />} */}
            </Box>
        </>
    );
}
