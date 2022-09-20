import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
// import ibshar from '../img/ibshar.png'
import {AppBar ,makeStyles,Tab,Tabs,Toolbar,Typography,useMediaQuery,useTheme} from '@mui/material';
const PAGES = ["Home","About me","What I Do","Portfolio","My resume","Blog","Contact me"];
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


const DrawerComp = () => {
  const [value,setValue]=useState();
  const classes =useStyles(theme);
  const theme = useTheme();

  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  const [openDrawer,setOpenDrawer]=useState(false);
  return (
    <React.Fragment>
     {/* <AppBar sx={{background:"#212529",minHeight:"10vh"}}>
    <Toolbar>

    <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
          <MenuIcon />
      </IconButton>

    </Toolbar>







    </AppBar> */}
      <Drawer open={openDrawer}
      onClose={()=>setOpenDrawer(false)}
      sx={{width:"100vw"}}>
      <List sx={{top:"100px"}}>
      {
        PAGES.map((page,index)=>{
          <ListItemButton key={index}>
          <ListItemIcon>
           <ListItemText>
             {page}
           </ListItemText>
          </ListItemIcon>
        </ListItemButton>

        })
      }
        <ListItemButton>
          <ListItemIcon>
           <ListItemText>
             Home
           </ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </List>

      </Drawer>
      {/* <Box sx={{width:"100%",bgcolor:"#ffff",height:"90vh",top:"1ovh"}} open={openDrawer}
      onClose={()=>setOpenDrawer(false)}>

      </Box> */}
      <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
          <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp;
