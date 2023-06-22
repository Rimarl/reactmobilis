import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Navbar from "./navbar"
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import {Link , useLocation} from "react-router-dom"


//import { makeStyles } from '@mui/styles';


import { useDispatch, useSelector } from "react-redux";

import { useNavigate ,useParams} from "react-router-dom";
import {  GridToolbar, GridToolbarContainer,
  GridToolbarFilterButton,
  } from  "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        
      </GridToolbarContainer>
    );
  }

const DetailsListeRecharge = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const theme = useTheme();
  const param=useParams();
  const navigate = useNavigate();
 

  const DetailPorduit = async () =>{
    const response = await fetch("http://localhost:3001/produit/detailrecharge/"+location.state.idp, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setProducts(data);
    console.log("data"+data);
  
  }
  useEffect(() => {
    DetailPorduit();
  }, []); 
  
 
const columns = [
  
  { field: 'num_serie', headerName: 'Numero serie ' , width :300 , flex: 1,},
  
];


  return (
    <div> 
      <Navbar />
       <div style = {{width : "100px" , aligne :"center " , marginLeft :"100px"}}> 
        <Box
          mt="50px"
          ml="100px"
          mb ={2}
          height="80vh"
          width="100vh"
          aligne-item = "center"
          flex = "0.9"
          
          
          sx={{
        
            
            "& .MuiDataGrid-root": {
              border: "solide",
            },
            
            "& .MuiDataGrid-cell": {
              borderBottom: "solide",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: " black",
              borderBottom: "1px solide",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#F9F9F9",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "black",
              borderTop: "solide",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color:  "black !important",
            },
          }}
        > <Typography variant="h5" style = {{marginBottom :"20px"}}> {location.state.nomp}  </Typography>
          
          <DataGrid
          components={{
            Toolbar: CustomToolbar,
           
          }}
          
            getRowId={(row) => row.id} 
            rows={products|| []}
            columns={columns}
            pageSize = {10}
           
            disableSelectionOnClick
        
          />
       
        
        </Box>
        
        </div>
      </div>
    
  );
};




 export default DetailsListeRecharge;
