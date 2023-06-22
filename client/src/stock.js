import React from "react";
import DataTable from "react-data-table-component";

function Stock() {  
    const column = [ 


        { name : " Nom produit ",
       selector : row => row.name
    }, 
        { name : " Categorie produit", 
        selector : row => row.name},
        {name :" quantite " , 
        selector : row => row.name}, 
        {name : "numero de serie ",
        selector : row => row.name}
    ]
    return ( 
       
        <div className="container-table"> 

        </div>
    )
}
export default Stock;