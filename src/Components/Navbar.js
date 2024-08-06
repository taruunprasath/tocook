import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
  import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search/${input}`);
  }
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Recipe",
      icon: <MenuBookIcon/>,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="Home">
        <img src={Logo} alt="" width={195} height={40} />
        </Link>
      </div>
      <div className="Search">
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Search Recipe"
                            size={40}
                            className="searchInput"
                        />
                    </form>
                </div>
      <div className="navbar-links-container">
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Recipe">Recipes</Link>
        <Link to="Contact">Contact</Link>
        {user ? (
          <button className="primary-button" onClick={logout}>
            Logout
          </button>
        ) : (
          <React.Fragment>
            <Link to="/Signup">
              <button className="primary-button">Sign Up</button>
            </Link>
            <Link to="/Login">
              <button className="primary-button">Login</button>
            </Link>
          </React.Fragment>
        )}
      </div>
      {/* ... (your existing code) */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
