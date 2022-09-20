import React, { useState } from 'react';
import {AppBar ,Box,makeStyles,Tab,Tabs,Toolbar,Typography,useMediaQuery,useTheme} from '@mui/material';

import ibshar from '../img/ibshar.png'
import DrawerComp from './DrawerComp';
const PAGES = ["Home","About me","What I Do","Portfolio","My resume","Blog","Contact me"]

const useStyles = makeStyles(()=>{
  return(
    {
      menuButton: {
        marginRight : (theme)=> theme.spacing(2)
      },
      hide:{
        display:"none"
      },
      appBar:(theme)=> theme.zindex.drawer + 1
    }


  )
})


const Header = () => {
  const [value,setValue]=useState();
  const classes =useStyles(theme);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <React.Fragment>
    <AppBar sx={{background:"#212529",minHeight:"10vh"}} className={classes.appBar}>
    <Box >
    <Toolbar sx={{justifyContent:'center'}}>
    <img
        src={ibshar}
        className="logo"
        alt="something"
        loading="lazy"
      />


      {
        isMatch ? (
          <>
          <DrawerComp />
          </>
        ) :(
          <>
          <Tabs sx={{marginLeft:"auto",fontfamily: 'Saira',fontSize:13,fontWeight:600}} textColor="#fff" value={value} onChange={(e,value) => setValue(value)} indicatorColor="primary" >
          {/* {
            PAGES.map((page,index)=>{
              <Tab key={index} label={page} />

            })
          } */}
             <Tab label="Home" />
       <Tab label="About me" />
       <Tab label="What I Do" />
       <Tab label="Portfolio" />
       <Tab label="My resume" />
       <Tab label="Blog" />
       <Tab label="Contact me" />

     </Tabs>

          </>

        )
      }
    </Toolbar>
   </Box>
  </AppBar>
    {/* <DrawerComp /> */}

    </React.Fragment>
  )
}

export default Header;
