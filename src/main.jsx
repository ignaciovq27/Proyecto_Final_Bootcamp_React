//components
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

//contexts
import { UserContext } from './context/UserContext.jsx';
import { ProductContext } from './context/ProductContext.jsx';
import { FavouriteContext } from './context/FavouriteContext';

//import CssBaseline
import { CssBaseline } from "@mui/material";

//fonts
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";

// cambiar theme de app
const theme = createTheme({

  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#1D71B8",
      // 1D71B8 blue
    },
    secondary: {
      main: "#292829",
      // 292829 gray
    },
  },
});

export default theme;
import '@fontsource/righteous/400.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <UserContext>
      <ProductContext>
        <FavouriteContext>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </FavouriteContext>
      </ProductContext>
    </UserContext>
  </ThemeProvider>
  // </React.StrictMode>,
)
