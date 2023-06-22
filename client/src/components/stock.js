import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Navbar from "./navbar";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import DetailsListeProduit from "./detailproduct";
import { TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}

const Stock = () => {
  const pdvv = useSelector((state) => state.pdv);
  const Agree = pdvv.DetailDealerId;
  const MSISDN = pdvv.MSISDN;
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductDetails, setSelectedProductDetails] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const theme = useTheme();
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/produit/Stockgeneralpdv/${MSISDN}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const columns = [
    {
      field: "nomProduit",
      headerName: "Nom du Produit",
      width: 300,
      flex: 1,
      valueGetter: (params) => params.row.Produit.nomProduit,
    },
    { field: "num_serie", headerName: "Numero de serie", width: 300, flex: 1 },
  ];

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Navbar />
      <Box mt={4} ml={2}>
        <Typography
          variant="h4"
       
          fontWeight="bold"
          fontFamily="Argesta"
        >
          Produits disponibles
        </Typography>

  </Box>
      <Box
        ml="200px"
        mt="40px"
        height="75vh"
        width = " 150vh"
        flex="0.5"
        sx={{
          
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "solid 1px #e6e6e6",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#6EAC40",
            color: " #fff6e0",
            borderBottom: "1px solid #e6e6e6",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#e0e0e0",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#6EAC40",
            color: "#fff6e0",
            borderTop: "solid 1px #e6e6e6",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#333 !important",
          },
        }}
      >
        
        <DataGrid
          components={{
            Toolbar: CustomToolbar,
          }}
          getRowId={(row) => row.num_serie}
          rows={products || []}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
        />
        {showDetail && <DetailsListeProduit product={selectedProduct} />}
      </Box>
    </div>
  );
};

export default Stock;
