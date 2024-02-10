import React from 'react';
import { Grid, Paper, Typography, Button } from "@mui/material";

const PricingSection = () => {
  return (
    <container sx={{justifyContent: "center", padding: "40px"  }} >
     <Typography variant="h4" gutterBottom  >
        Services I Offer to my Clients
      </Typography>
      <Typography variant="h4" gutterBottom >
        my best serveces
      </Typography>
    <Grid container spacing={3} sx={{padding: '20px'}} >
    
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{padding: '20px'}}>
          <Typography variant="h6">Basic</Typography>
          <Typography variant="h4">$10/month</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Button variant="contained" color="primary" sx={{backgroundColor: 'white', color: 'black'}}>
      See Pricing
    </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper elevation={3} sx={{padding: '20px'}}>
          <Typography variant="h6">Standard</Typography>
          <Typography variant="h4">$20/month</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Button variant="contained" color="primary" sx={{backgroundColor: 'white', color: 'black'}}>
      See Pricing
    </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper elevation={3} sx={{padding: '20px'}}>
          <Typography variant="h6">Premium</Typography>
          <Typography variant="h4">$30/month</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Button variant="contained" color="primary" sx={{backgroundColor: 'white', color: 'black'}}>
      See Pricing
    </Button>        
        </Paper>
      </Grid>
    </Grid>
    </container>
  );
}

export default PricingSection;