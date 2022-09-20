import React from 'react';
import ibshar from '../img/ibshar.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';



const Footer = () => {
  return (
    <div className='Footer'>
     <Box sx={{ flexGrow: 1 ,mt:"10vh",color:"#FFF",background:"#000",textAlign:"center",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
     <Grid container  justifyContent="center" >
      <Grid item xs={12} md={3} sx={{mt:6 ,mb:5}}>
       <img
       src={ibshar}
        className='logo'
       />
    </Grid>
      <Grid item xs={12} md={4} sx={{mb:5,mt:4}}>
      <Typography variant='h6' sx={{m:1,fontFamily:"serif"}}>Contact</Typography>
      <Typography variant='body2' sx={{fontSize:12,fontFamily:'sans-serif'}}>ibsharahmed66@gmail.com</Typography>
      <Typography variant='body2' sx={{fontSize:12,fontFamily:'sans-serif'}}>+91 9513474612</Typography>
      <Typography variant='body2' sx={{fontSize:12,fontFamily:'sans-serif'}}>Azad Nagar 1st Cross,bkl</Typography>



      </Grid>
      <Grid item xs={12} md={4} sx={{mb:5,mt:4}}>
      <Typography variant='h6' sx={{m:1,fontFamily:"serif"}}>Menu</Typography>
      <Typography variant='body2' sx={{fontSize:12,fontFamily:'sans-serif',color:"grey"}}>Home</Typography>
      <Typography variant='body2' sx={{fontSize:12,fontFamily:'sans-serif',color:"grey"}}>contact</Typography>
      <Typography variant='body2' sx={{fontSize:12,fontFamily:'sans-serif',color:"grey"}}>About</Typography>
      <Typography variant='body2' sx={{fontSize:12,fontFamily:'sans-serif',color:"grey"}}>Products</Typography>



      </Grid>
    </Grid>

    <Grid container sx={{minHeight:"10vh"}}  alignItems="center"  >
      <Grid item xs={12} md={6} >
      <Typography sx={{fontFamily:"cursive"}}> @copyright 2022 by ibshar Ahmed Akrami</Typography>

      </Grid>
      <Grid item xs={12} md={6} >
      <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton aria-label="delete" size="small"  sx={{color:"#fff"}} >
           <InstagramIcon />
      </IconButton>
      <IconButton aria-label="delete" size="small"  sx={{color:"#fff"}}>
      <TwitterIcon />
      </IconButton>
      <IconButton aria-label="delete" size="small"  sx={{color:"#fff"}}>
      <LinkedInIcon />
      </IconButton>
      <IconButton aria-label="delete" size="small"  sx={{color:"#fff"}}>
      <GitHubIcon />
      </IconButton>
      <IconButton aria-label="delete" size="small"  sx={{color:"#fff"}}>
      <YouTubeIcon />
      </IconButton>




      </Stack>

      </Grid>

    </Grid>
  </Box></div>
  )
}

export default Footer;
