import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// For Behance, you might need a custom SVG icon as it's not in Material-UI by default.
// For demonstration, we'll use a generic Box for now or skip if not critical.

const SocialBarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
  backgroundColor: 'transparent',
  zIndex: 1000, // Ensure it's above other content
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide on smaller screens if it clutters the design
  },
}));

const VerticalText = styled(Typography)(({ theme }) => ({
  writingMode: 'vertical-rl',
  textOrientation: 'mixed',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary, // Adjust color as needed
  fontWeight: 600,
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0.5, 0),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const FollowUsSocialBar = () => {
  return (
    <SocialBarContainer>
      <VerticalText variant="body1">Follow Us</VerticalText>
      <Box sx={{ width: '1px', height: '30px', backgroundColor: theme => theme.palette.text.primary, opacity: 0.5, mb: 1 }} />
      <SocialIcon aria-label="linkedin">
        <LinkedInIcon />
      </SocialIcon>
      <SocialIcon aria-label="twitter">
        <TwitterIcon />
      </SocialIcon>
      <SocialIcon aria-label="instagram">
        <InstagramIcon />
      </SocialIcon>
      {/* Placeholder for Behance - consider adding a custom SVG if needed */}
      <SocialIcon aria-label="behance">
        <Box sx={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>Bē</Box>
      </SocialIcon>
    </SocialBarContainer>
  );
};

export default FollowUsSocialBar; 