import ErrorDialog from "./ErrorDialog";
 import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  ThemeProvider,

  } from "@mui/material";
 import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { setLogin } from "../../state";
 import { useTheme } from "@mui/material/styles";
import { hrHR } from "@mui/material/locale";
 


 const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
 password: yup.string().required("required"),
 });


 const initialValuesLogin = {
  MSISDN: "",
 };

 const Form = () => {

 const { palette } = useTheme();
  const dispatch = useDispatch();
 const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");


  // const handleSubmit = async (values, onSubmitProps) => {
  //   try {
  //     const response = await axios.post("http://localhost:3001/login", values);
  //     const data = response.data;

  //     // Assuming the backend response contains a token and user information
  //     const { token, user } = data;

  //     // Dispatching the setLogin action to update the Redux store
  //     dispatch(setLogin({ token, user }));

  //     // Redirecting the user to the home page or another appropriate page
  //     navigate("/home");
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     // Handle error and display an error message if needed
  //   } finally {
  //     onSubmitProps.setSubmitting(false);
  //   }
  // };

  const login = async (values, onSubmitProps) => {
   console.log(values);
  const loggedInResponse = await fetch("http://localhost:3001/api/login", {
   method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
   });
   const loggedIn = await loggedInResponse.json();
   console.log(loggedIn);
   onSubmitProps.resetForm();
    if (loggedIn) {
    dispatch(
      setLogin({
     pdv: loggedIn.pdv,
       token: loggedIn.token,
       })
      );
      navigate("/home");
     }
  };

   const handleFormSubmit = async (values, onSubmitProps) => {
      await login(values, onSubmitProps);
    
   };

  return (
    <Formik
     onSubmit={handleFormSubmit}
     initialValues={ initialValuesLogin }
      validationSchema={ loginSchema }
   >
    {({
       values,
      errors,
      touched,
        handleBlur,
       handleChange,
      handleSubmit,
     
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
           gap="30px"
           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
           }}
          >
    

            <TextField
              label="Email"
             onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
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
             sx={{ gridColumn: "span 4" }}
            />
         </Box>

         
          <Box>
            <Button
             fullWidth
             type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.secondary.main,
                 color: palette.background.alt,
                 "&:hover": { color: palette.neutral.main },
              }}
            >
            LOGIN
            </Button>
            
          </Box>
        </form>
      )}
     </Formik>
   );
 };

 export default Form;
