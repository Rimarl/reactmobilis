//  import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import Form from "./Form";
// //  import logo from "../../assets/logo.png";
// import {Provider } from 'react-redux'


//  const LoginPage = () => {
//   const theme = useTheme();
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
//    return (
   
//     <Provider  >
//       <Box
//         width="100%"
//       backgroundColor={theme.palette.background.alt}
//        p="1rem 6%"
//          textAlign="center"
//       >
//   <Box
//                component="img"
//                 alt="profile"
//                 // src={logo}
//                 height="80px"
//              width="200px"
//                sx={{ objectFit: "cover" }}
//                />
//      </Box>

//       <Box
//        width={isNonMobileScreens ? "50%" : "93%"}
//        p="2rem"
//       m="2rem auto"
//         borderRadius="1.5rem"
//         backgroundColor={theme.palette.background.alt}
//      >
//         <Typography fontWeight="500" variant="h5" color={theme.palette.secondary.main} sx={{ mb: "1.5rem" }}>
//         Bienvenue sur MOBILIS !
//          </Typography>
//         <Form />
//       </Box>
// //     </Provider >
//   );
//  };

//  export default LoginPage;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state";
import { Provider } from "react-redux";
//import { setupListeners } from "@reduxjs/toolkit/query";
//import { api } from "./state/api";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE, 
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { PersistGate } from "redux-persist/integration/react";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}); 

/*
const store = configureStore({
  reducer: {
    global: globalReducer,
    
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
