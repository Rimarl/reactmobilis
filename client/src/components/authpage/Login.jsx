import React from 'react';
import { useState } from 'react';
import { Box, Button, TextField, useMediaQuery, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setPdv } from '../../state/authSlice';
import { useTheme } from '@mui/material/styles';
import ErrorDialog from './ErrorDialog';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MOBILIS from '../img/MOBILIS.png';

// Creating schema
const schema = Yup.object().shape({
  MSISDN: Yup.string().required('MSISDN is a required field'),
  password: Yup.string().required('Password is a required field').min(8, 'Password must be at least 8 characters'),
});

const initialValuesLogin = {
  MSISDN: '',
  password: '',
};

function Loginpage() {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const isNonMobile = useMediaQuery('(min-width:600px)');

  const login = async (values, onSubmitProps) => {
    try {
      const loggedInResponse = await fetch('http://localhost:3001/login/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const loggedIn = await loggedInResponse.json();
      console.log(loggedIn);
      onSubmitProps.resetForm();
      if (loggedIn.success) {
        dispatch(
          setLogin({
            pdv: loggedIn.pdv,
            token: loggedIn.token,
          })
        );
        dispatch(setPdv(loggedIn.pdv));
        console.log(loggedIn.pdv.DetailDealerId);
        navigate('/home');
      } else {
        throw new Error(loggedIn.msg);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setOpenErrorDialog(true);
    }
  };

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  return (
    <Box sx={{ backgroundColor: 'white' }}> {/* Updated line */}
      <Formik onSubmit={handleFormSubmit} initialValues={initialValuesLogin} validationSchema={schema}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } ,  backgroundColor: 'white'}}
            >
              <TextField
                label="MSISDN"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.MSISDN}
                name="MSISDN"
                error={Boolean(touched.MSISDN) && Boolean(errors.MSISDN)}
                helperText={touched.MSISDN && errors.MSISDN}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                label="Password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box sx={{ marginLeft: 0 }}>
              <Button
                fullWidth
                type="submit"
                sx={{
                  m: '2rem 0',
                  p: '1rem',
                  backgroundColor: 'green',
                  color: 'white',
                }}
              >
                LOGIN
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <ErrorDialog open={openErrorDialog} onClose={handleCloseErrorDialog} message={errorMessage} />
    </Box>
  );
}

export default Loginpage;
