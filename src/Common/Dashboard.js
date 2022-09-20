import React from 'react';
import first from '../image/first.png'
import second from '../image/second.png'
import third from '../image/third.png'
import four from '../image/four.png'
import five from '../image/five.png'
import six from '../image/six.png'
import seven from '../image/seven.png'
import image from '../image/Image.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (

    <Box sx={{ flexGrow: 1 ,m:5}}>
    <Box>
      <Typography variant='h3' sx={{color:"#37" ,fontFamily:"fantasy",textAlign:"center",alignItems:"center",justifyContent:"center"}}>Our Products</Typography>
    </Box>
    <Grid container align="center" spacing={2}>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

      <img class="img" src={four} alt="jjj"/>

      <CardContent>
      <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Lee Pucker design. Leather botinki for handsome designers. Free shipping.
            </Typography>
            <Stack direction="row" justifyContent="space-around"  alignItems="center">
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $12.48

            </Typography>
            <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
            50% OFF
</Button>

            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            1258 bids, 359 watchers
$5.95 for shipping
            </Typography>
      </CardContent>
      <CardActions>
      <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.3

            </Typography>
        <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

<img class="img" src={four} alt="jjj"/>

<CardContent>
<Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      Lee Pucker design. Leather botinki for handsome designers. Free shipping.
      </Typography>
      <Stack direction="row" justifyContent="space-around"  alignItems="center">
      <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      $12.48

      </Typography>
      <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
      50% OFF
</Button>

      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
      1258 bids, 359 watchers
$5.95 for shipping
      </Typography>
</CardContent>
<CardActions>
<Rating name="size-small" defaultValue={3} size="small" />
      <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
      4.3

      </Typography>
  <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
</CardActions>
</Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

      <img class="img" src={four} alt="jjj"/>

      <CardContent>
      <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Lee Pucker design. Leather botinki for handsome designers. Free shipping.
            </Typography>
            <Stack direction="row" justifyContent="space-around"  alignItems="center">
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $12.48

            </Typography>
            <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
            50% OFF
</Button>

            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            1258 bids, 359 watchers
$5.95 for shipping
            </Typography>
      </CardContent>
      <CardActions>
      <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.3

            </Typography>
        <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

<img class="img" src={four} alt="jjj"/>

<CardContent>
<Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      Lee Pucker design. Leather botinki for handsome designers. Free shipping.
      </Typography>
      <Stack direction="row" justifyContent="space-around"  alignItems="center">
      <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      $12.48

      </Typography>
      <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
      50% OFF
</Button>

      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
      1258 bids, 359 watchers
$5.95 for shipping
      </Typography>
</CardContent>
<CardActions>
<Rating name="size-small" defaultValue={3} size="small" />
      <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
      4.3

      </Typography>
  <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
</CardActions>
</Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

      <img class="img" src={four} alt="jjj"/>

      <CardContent>
      <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Lee Pucker design. Leather botinki for handsome designers. Free shipping.
            </Typography>
            <Stack direction="row" justifyContent="space-around"  alignItems="center">
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $12.48

            </Typography>
            <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
            50% OFF
</Button>

            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            1258 bids, 359 watchers
$5.95 for shipping
            </Typography>
      </CardContent>
      <CardActions>
      <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.3

            </Typography>
        <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

<img class="img" src={four} alt="jjj"/>

<CardContent>
<Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      Lee Pucker design. Leather botinki for handsome designers. Free shipping.
      </Typography>
      <Stack direction="row" justifyContent="space-around"  alignItems="center">
      <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      $12.48

      </Typography>
      <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
      50% OFF
</Button>

      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
      1258 bids, 359 watchers
$5.95 for shipping
      </Typography>
</CardContent>
<CardActions>
<Rating name="size-small" defaultValue={3} size="small" />
      <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
      4.3

      </Typography>
  <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
</CardActions>
</Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

      <img class="img" src={four} alt="jjj"/>

      <CardContent>
      <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Lee Pucker design. Leather botinki for handsome designers. Free shipping.
            </Typography>
            <Stack direction="row" justifyContent="space-around"  alignItems="center">
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $12.48

            </Typography>
            <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
            50% OFF
</Button>

            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            1258 bids, 359 watchers
$5.95 for shipping
            </Typography>
      </CardContent>
      <CardActions>
      <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.3

            </Typography>
        <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3} margin="center">
      <Card sx={{ maxWidth: 345 ,justifyContent:"start" }}>

<img class="img" src={four} alt="jjj"/>

<CardContent>
<Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      Lee Pucker design. Leather botinki for handsome designers. Free shipping.
      </Typography>
      <Stack direction="row" justifyContent="space-around"  alignItems="center">
      <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
      $12.48

      </Typography>
      <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
      50% OFF
</Button>

      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
      1258 bids, 359 watchers
$5.95 for shipping
      </Typography>
</CardContent>
<CardActions>
<Rating name="size-small" defaultValue={3} size="small" />
      <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
      4.3

      </Typography>
  <Button size="small" startIcon={<FavoriteBorderIcon />} >Watch</Button>
</CardActions>
</Card>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Dashboard;
