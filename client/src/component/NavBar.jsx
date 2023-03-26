import React from "react";
import { styled ,Toolbar ,AppBar ,BottomNavigation, Button} from '@mui/material';
import { Link } from "react-router-dom";
const Styleheader=styled(AppBar)`
 background:#0E1444
`;
const Tab=styled(Link)`
font-size:20px;
margin-right:30px;
color:inherit;
text-decoration:none;

`
const NavBar = () => {
  return (
    <Styleheader position="static">
      <Toolbar>
       
        <Tab to="/">
            Dashboard 
        </Tab>
        
        <Tab to="/add">
         <Button variant="contained" color="secondary">Add-employee</Button>    
        </Tab>
        
      </Toolbar>
    </Styleheader>
  );
};

export default NavBar;
