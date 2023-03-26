import React from 'react'
import {BottomNavigation,styled} from '@mui/material';

const Foot=styled(BottomNavigation)`
color:gray;
position:fixed;
bottom:1px;
right:43rem;

`

const Footer = () => {
  return (
  <Foot>
    <p>made by <span><a style={{textDecoration:"none"}} href='https://github.com/FARINE-KHAN'>FARINE</a></span></p>
  </Foot>
  )
}

export default Footer