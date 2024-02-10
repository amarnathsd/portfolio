import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Typography, Card, CardContent } from '@mui/material';

const ProfileCard = () => {
  const commonStyles = {
    width: "90%",
    height: "90%",
    // borderRadius: '50%',
    // overflow: 'hidden',
    position: "absolute",
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Center the Avatar
    border: "10px solid blue",
  };
  return (
    
    <div>
      <Grid container spacing={2}>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <div
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            marginTop: "250px",
          }}
        >
          <Avatar
            variant='rectangular'
            alt="Circle Avatar"
            src="/path/to/image.jpg"
            sx={{ ...commonStyles }}
          />
          <Avatar
            variant='rectangular'
            alt="Green Border Avatar"
            src="/path/to/image.jpg"
            sx={{
              ...commonStyles,
              border: "5px solid red",
              zIndex: 1,
              marginBottom: "50%",
            }}
          />
        </div>
      </Grid>
        <Grid item xs={6}>
        <Card>
      <CardContent>
      <Typography variant="h6" gutterBottom>
          Services I Offer to My Clients
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
        Kayreen Smetha.
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
        Hello! I’m Kayreen Smetha. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership in typography.
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileCard;
