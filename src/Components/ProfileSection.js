import React from 'react';
import { Typography, Button, Card, CardContent, Grid } from "@mui/material";

const PortfolioSection = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Visit My Portfolio
      </Typography>
      <Typography variant="h5" gutterBottom>
        My Amazing Work
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                The Service Provide For
              </Typography>
              <Typography variant="body1" gutterBottom>
                The Design Project
              </Typography>
              <Typography variant="body2" gutterBottom>
                Mobile App Landing
              </Typography>
              <Typography variant="body2" gutterBottom>
                I use animation as a third dimension by which to simplify experiences and guiding
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Gym website
              </Typography>
              <Typography variant="body2" gutterBottom>
                I use animation as a third dimension by which to simplify experiences and guiding
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default PortfolioSection;
