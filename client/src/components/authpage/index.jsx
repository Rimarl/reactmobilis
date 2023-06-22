import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Loginpage from './Login';
import mob from '../img/mob.png';
import MOBILIS from '../img/MOBILIS.png';

const Authpage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      sx={{
        backgroundImage: `url(${MOBILIS})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
          
      }}
    >
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
       
       
      >
        <Box
          component="img"
          alt="profile"
          src={mob}
          height="80px"
          width="200px"
          sx={{ objectFit: 'cover' }}
        />
      </Box>

      <Box
        width={isNonMobileScreens ? '30%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="white"
        marginRight = ' 900px'
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
      >
        <Typography fontWeight="500" variant="h5" color="green" sx={{ mb: '1.5rem' }}>
          Bienvenue sur MOBILIS !
        </Typography>
       

   <Loginpage />

      
      </Box>
    </Box>
  );
};

export default Authpage;
