import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

import logo from '../../assets/logopib.png';

const MainMenu = () => (<Menu open>
  <Link to="/">
    <img src={logo} alt="logo" width="200px" />
  </Link>
</Menu>);

export default MainMenu;
