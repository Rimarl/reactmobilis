import React from 'react';
import './pdf.css';

import { useLocation } from 'react-router-dom';
import { addListener } from '@reduxjs/toolkit';
import ReactToPrint  from 'react-to-print';
import { useRef } from 'react';
function PDF () {
const componentRef = useRef();
   const handlePrint=()=> { 
    window.print()
   }
   const handleAfterPrint = () => {
    alert('PDF downloaded successfully!');
  };
  return (
      <div className='d'> 
      <ReactToPrint
  trigger={() => <button>Print / Download</button>}
  content={() => componentRef.current}
  onAfterPrint={handleAfterPrint} 
/>

       <div className=' p' ref={componentRef}> 
       <div className=' pdv '> 
       <h1 className='titre'> Contrat pdv</h1> 
       </div>
        <div className='top'> 
         
        <div className='contrat-effet '>
          
         <div className='date-remis' >  Date de remis : <h5 className='hhh'>   </h5> </div> 
         <div className='contrat-offre '> <h4> Contrat de l'offre : </h4></div> 
           <div className='M001'> <p> </p> </div>
          
           </div>
     


        </div>
        <div className='sim-terminal'>
        <span class="encadrer-un-contenu">Carte sim/terminal </span>

        </div>

        <div className='caret-sim-terminale '>
          <div className='msisdn-numsim'> 
             <div className='msisdn '> MSISDN:   </div> <div className='inputb'> <h5 className='hhh'>  </h5></div>

             <div className='sim '> Numero SIM:  </div> <h5 className='hhh'> </h5>
           </div> 
           <div className='type-terminal-mi '> 
             <div className='type-terminal  '> type du terminal  ...  </div>
             {/* <div className='mi  '> mi   </div> */}
           </div> 

           



        </div>
        <div className='info-client'>
        <span class="encadrer-un-contenu">Information client </span>
          <div className='nom-date'> 
             <div className='nom '> Nom: </div> <div className='inputb'> <h5 className='hhh'> </h5></div>

             <div className='dn '> Date de naissance : </div><h5 className='hhh'>  </h5>
           </div> 
           <div className='prenom-lieux '> 
             <div className='prenom  '> Prenom :  </div> <div className='inputb'> <h5 className='hhh'> </h5></div>
             
             <div className='lieux  '> Lieu de naissance:  </div>
           </div> 

           <div className='adr-wilaya-c '> 
           <div className='adr  '>Adresse :   </div>  <div className='inputb'> <h5 className='hhh'>  </h5></div>
             
           <div className='wilaya '> Wilaya:  </div> <h5 className='hhh'> </h5> 
            
           </div> 
           <div></div>
 
          
           <div className='numcontrat-email  '> 
             <div className='numcontart  '>N° contrat: </div>
             <div className='email '> Email:  </div>
             
           </div> 



        </div>
        <div className='pj'>
        <span class="encadrer-un-contenu"> Piece jointe   </span>

        

        <div className='typecarte-num '>
          <div className='prenom-lieux'> 
             <div className='prenom '> Type PI :  </div> <div className='inputb'> <h5 className='hhh'>  </h5></div>
             <div className='lieux '> N° PI :  </div> <h5 className='hhh'> </h5>
           </div> 
           <div className='type-terminal-mi '> 
             <div className='date '> Date  </div>
             <div className='datea '> A   </div>
           </div> 

           </div>
           







        </div>


        <div className='info-client'>
        <span class="encadrer-un-contenu">Mondataire / tuteur  </span>
         <div className='nom-date'> 
             <div className='nom '> Nom: </div> <div className='inputb'> <h5 className='hhh'> </h5></div>

             <div className='dn '> Prenom: </div><h5 className='hhh'>  </h5>
           </div> 
           <div className='nom-date'> 
             <div className='nom '> Type PI: </div> <div className='inputb'> <h5 className='hhh'> </h5></div>

             <div className='dn '> Num PI : </div><h5 className='hhh'>  </h5>
           </div> 
           <div className='type-terminal-mi '> 
             <div className='date '> Date  </div>
             <div className='datea '> A   </div>
           </div> 
           </div>

        

      
   <div className='bottom'> 
    <div className='signature-client '>
    <div className='label'> <span className='cadre-cleint'> Cadre Client</span></div> 
     
     <p className='signature '> signature </p> 
      
    </div>
    <div className='cachet-pdf'> 
    <span className='label1'> Cadre reservé a l'agence</span>
    <p className='cacher '> cacher a signature  </p>

</div>


   </div>

        
   </div>
        







       

       </div>
  )
};
  
export default PDF; 