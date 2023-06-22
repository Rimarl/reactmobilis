

import PDF from './components/pdf';
import Pdv from './components/pdv';
import MyForm  from './components/carte';
import Sim from './components/sim';
import Stock  from './components/stock';
import DetailsListeProduit  from './components/detailproduct';
import DetailsListeProduitRecharge  from './components/detailcarterecharge';
import Authpage from './components/authpage/index'
import PageNotFound  from './components/PageNotFound';

import Navbar from './components/navbar';
import { useState } from 'react'
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";





function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  const [respons , setresponse] = useState();
  // const isAuth = Boolean(useSelector((state) => state.token));
  const getData =(data1 , data2 , data3  )=> { 
 setresponse(data1)
   
  return ( 
    <> 
    </>
  )

}
  return (
   
   <BrowserRouter> 
      <Routes>
     {/* creation des routes de l'application  */}
     <Route>
            <Route path="/form" element={<Authpage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
     <Route>
         <Route path="/home" element={isAuth ? <Pdv /> : <Navigate to="/form" />} /> 
         <Route path="/sim" element={isAuth ? <Sim /> : <Navigate to="/form" />} />
         <Route path="/carte" element={isAuth ? <MyForm /> : <Navigate to="/form" />} />
         <Route path="/pdf" element={isAuth ? <PDF /> : <Navigate to="/form" />} />
         <Route path="/stock" element={isAuth ? <Stock /> : <Navigate to="/form" />} />
         <Route path="/detail" element={isAuth ? <DetailsListeProduit /> : <Navigate to="/form" />} />
         <Route path="/detailcarte" element={isAuth ? <DetailsListeProduitRecharge /> : <Navigate to="/form" />} />
         <Route path="/detail" element={isAuth ? <DetailsListeProduit /> : <Navigate to="/form" />} />
         <Route path="/detail" element={isAuth ? <DetailsListeProduit /> : <Navigate to="/form" />} />
          
      </Route>
        
       </Routes>
     </BrowserRouter>







  );
}

export default App;
