import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

const HeadSection = () => {
  return (
    <div className='HeaderSection'>
     <Container maxWidth='lg' sx={{pt:15}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6}>
        <Box sx={{m:5,maxWidth:600,maxHeight:500,textAlign:"left"}}>
          <Typography variant='h4' sx={{fontFamily:"Saira",fontSize:{xs:20,sm:46},fontWeight:700,color:"#fff"}}>
          Making product content simple, accessible and more profitable for our clients.
          </Typography>
          <Typography variant='body2' sx={{fontFamily:"sans-serif",color:"#ffff",mt:1}}>
          Millions of products from thousands of brands standardized, optimized & ready to attract customers...
          </Typography>
        </Box>
        {/* <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Making product content simple, accessible and more profitable for our clients.
      </Typography>
      <Typography variant="h5" component="div">
      Millions of products from thousands of brands standardized, optimized & ready to attract customers
      </Typography>

    </CardContent> */}

        </Grid>
        <Grid item xs={12} md={6}>

        </Grid>

      </Grid>
    </Box>


    </Container>


    </div>
  )
}

export default HeadSection;
