import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import BarChart from '../Charts/BarChart';
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Chartsdisplay = () => {
  return (
    <Box sx={{ flexGrow: 1 ,m:1}}>
     <Box>
      <Typography variant='h3' sx={{color:"rgb(255, 99, 132)" ,fontFamily:"fantasy",textAlign:"center",alignItems:"center",justifyContent:"center"}}>Product charts</Typography>
    </Box>
    <Grid container spacing={2} align="center">
      <Grid item xs={12} md={6} >
        <LineChart />
      </Grid>
      <Grid item xs={12} md={6} >
        <BarChart/>
      </Grid>
      <Grid item xs={12} md={12}>
        {/* <PieChart /> */}
      </Grid>

    </Grid>
  </Box>
  )
}

export default Chartsdisplay;
