import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const HeroSection = () => {
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
    <Grid
      container
      spacing={3}
      style={{ padding: "40px", justifyContent: "center" }}
    >
      {/* Left Section */}
      <Grid item xs={6}>
        <div>
          <Typography
            variant="h6"
            color="#5E5751"
            sx={{ wordWrap: "break-word", fontFamily: "Poppins" }}
          >
            Hi, I’m Amarnath Devshatwar
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Poppins", fontWeight: "800" }}
          >
            I am a <span style={{ color: "#7D6AE9" }}>Professional</span> web
            developer.
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Poppins", marginBottom: "10%" }}
          >
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make websites more & more interactive with
            web animations.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#9048DD",
                  border: "1 #7D6AE9",
                  marginBottom: "10%",
                }}
              >
                <Typography variant="body1" sx={{ color: "#D0D3D6" }}>
                  My Portfolio
                </Typography>
              </Button>
              <Typography
                variant="h6"
                sx={{
                  color: "#474C52",
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  marginBottom: "3%",
                }}
              >
                find me
              </Typography>
              <IconButton aria-label="twitter" sx={{ marginRight: "10px" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#F0EFF5",
                  border: "1px solid #D0D3D6",
                  marginBottom: "10%",
                }}
              >
                <Typography variant="body1" sx={{ color: "#7D6AE9" }}>
                  Download CV
                </Typography>
              </Button>
              <Typography
                variant="h6"
                sx={{
                  color: "#474C52",
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  marginBottom: "3%",
                }}
              >
                best skills
              </Typography>
              <IconButton aria-label="github">
                <GitHubIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </Grid>

      {/* Right Section */}
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
            alt="Circle Avatar"
            src="/path/to/image.jpg"
            sx={{ ...commonStyles }}
          />
          <Avatar
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
    </Grid>
  );
};

export default HeroSection;
