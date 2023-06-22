// import React, { useState, useEffect } from "react";
// import { Box, Typography, useTheme , TableCell } from "@mui/material";
// import Navbar from "./navbar"
// import axios from "axios";
// import { DataGrid } from "@mui/x-data-grid";
// import {Link , useLocation} from "react-router-dom"
// import './stock.css';


// //import { makeStyles } from '@mui/styles';


// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate ,useParams} from "react-router-dom";
// import {  GridToolbar, GridToolbarContainer,
//   GridToolbarFilterButton,
//   } from  "@mui/x-data-grid";
// import { grey } from "@mui/material/colors";
//   function CustomToolbar() {
//     return (
//       <GridToolbarContainer>
//         <GridToolbarFilterButton />
        
//       </GridToolbarContainer>
//     );
//   }

// const DetailsListeProduit = () => {
//   const [products, setProducts] = useState([]);
//   const location = useLocation();
  

//   const theme = useTheme();
//   const param=useParams();
 
 
//   const nomp = location?.state?.nomp || "";
//   const cat = location?.state?.cat || "";


//   const DetailPorduit = async () =>{
//     const response = await fetch("http://localhost:3001/produit/stockPdv/"+location.state.idp, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });
//     const data = await response.json();
//     setProducts(data);
//     console.log("data"+data);
  
//   }
//   useEffect(() => {
//     DetailPorduit();
//   }, []); 
  
 
// const columns = [
  
//   { field: 'num_serie', headerName: 'Numero serie ' , width :300 , flex: 1,},
//   { field: 'Produit.nomProduit', headerName: 'Nom du produit', width: 300, flex: 1,
//   renderCell: (params) => (
//     <TableCell>
//       {params.row.Produit?.nomProduit}
//     </TableCell>
//   )
// }

//   ,
  

  
// ];


//   return (
//     <div > 
//     <Navbar />
    
//     <div className="container-stock " style={{ 
  
//   backgroundColor: "#81c784"
  
//   }}> 
   
      
//        <div  className="tab" style={{  
// backgroundColor: "#81c784",
// height: "100vh",
// width: "90vw" }}> 
//       <Box
//           mb={2}
//           ml="50px"
//           height="75vh"
//           flex="0.9"
//          sx={{
          
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
          
//           "& .MuiDataGrid-cell": {
//             borderBottom: "solid 1px #e6e6e6",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: "#f2f2f2",
//             color: " #333",
//             borderBottom: "1px solid #e6e6e6",
            
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: "#fff",
//           },
//           "& .MuiDataGrid-footerContainer": {
//             backgroundColor: "#f2f2f2",
//             color: "#333",
//             borderTop: "solid 1px #e6e6e6",
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color:  "#333 !important",
//           },
//         }}
//       > 
// <Typography
//     variant="h5"
//     style={{
//       marginTop: "20px",
//       marginBottom: "10px",
//       fontWeight: "bold",
//       color: "#333333",
//       textAlign: "center",
//     }}
//   >
//     {nomp}
//   </Typography>          
//         <DataGrid
//         components={{
//           Toolbar: CustomToolbar,
         
//         }}
        
//         getRowId={(row) => row.num_serie}
//           rows={products|| []}
//           columns={columns}
//           pageSize = {10}
          
//           disableSelectionOnClick
      
//         />
     
      
//       </Box>
      
//       </div>
      
     
      
//       </div>
     
//     </div>
  
// );
// };



//  export default DetailsListeProduit;
import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, TableCell, TextField } from "@mui/material";
import Navbar from "./navbar";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import "./stock.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";

function CustomToolbar({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <TextField
        variant="outlined"
        size="small"
        placeholder="Rechercher par numéro de série"
        onChange={handleSearchChange}
      />
    </GridToolbarContainer>
  );
}

const DetailsListeProduit = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  const theme = useTheme();
  const param = useParams();

  const nomp = location?.state?.nomp || "";
  const cat = location?.state?.cat || "";

  const DetailPorduit = async () => {
    const response = await fetch(
      "http://localhost:3001/produit/stockPdv/" + location.state.idp,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
    console.log("data" + data);
  };

  useEffect(() => {
    DetailPorduit();
  }, []);

  const columns = [
    { field: "num_serie", headerName: "Numéro de série", width: 300, flex: 1 },
    {
      field: "Produit.nomProduit",
      headerName: "Nom du produit",
      width: 300,
      flex: 1,
      renderCell: (params) => (
        <TableCell>{params.row.Produit?.nomProduit}</TableCell>
      ),
    },
  ];

  const handleSearch = (value) => {
    const filtered = products.filter((product) =>
      product.num_serie.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Navbar />
      <div className="container-stock " style={{ backgroundColor: "#81c784" }}>
        <div className="tab" style={{ backgroundColor: "#81c784", height: "100vh", width: "90vw" }}>
          <Box
            mb={2}
            ml="50px"
            height="75vh"
            flex="0.9"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "solid 1px #e6e6e6",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f2f2f2",
                color: " #333",
                borderBottom: "1px solid #e6e6e6",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "#fff",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#f2f2f2",
            color: "#333",
            borderTop: "solid 1px #e6e6e6",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
             color:  "#333 !important",
           },
        }}
      > 
 <Typography
    variant="h5"
     style={{
      marginTop: "20px",
      marginBottom: "10px",
      fontWeight: "bold",
      color: "#333333",
      textAlign: "center",
     }}
   >
    {nomp}
   </Typography>          
         <DataGrid
        components={{
           Toolbar: CustomToolbar,
         
        }}
        
        getRowId={(row) => row.num_serie}
          rows={products|| []}
        columns={columns}
          pageSize = {10}
          
          disableSelectionOnClick
      
        />
     
      
      </Box>
      
      </div>
      
     
      
      </div>
     
    </div>
  
 );
 };



  export default DetailsListeProduit;

