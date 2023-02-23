import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

import logo from '../../assets/logopib.png';

const menuTheme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
  },
});

const MainMenu = () => (<ThemeProvider theme={menuTheme}>
    <AppBar position="static">
    <Toolbar>
      <Link to="/">
        <img src={logo} alt="logo" width="200px" />
      </Link>
    </Toolbar>
  </AppBar>
</ThemeProvider>);

export default MainMenu;
