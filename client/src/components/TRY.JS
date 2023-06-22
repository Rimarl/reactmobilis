import React from 'react';
import { Page, Document, View, Text } from '@react-pdf/renderer';
import {Link , useLocation} from "react-router-dom"
import './pdf.css';
  
function PDF ({data}) {

    const location = useLocation();
   
  return (
      <div className='d'> 
       <div className=' p'> 
       <div className=' pdv '> 
       <h1 className='titre'> Contrat pdv</h1> 
       </div>
        <div className='top'> 
         
        <div className='contrat-effet '>
          
         <div className='date-remis'> <p> Date de remis : </p></div> 
         <div className='contrat-offre '> <h4> Contrat de l'offre : </h4></div> 
           <div className='M001'> <p> M001</p> </div>
          
           </div>
           dfddf


        </div>
        <div className='sim-terminal'>
        <span class="encadrer-un-contenu">Carte sim/terminal </span>

        </div>

        <div className='caret-sim-terminale '>
          <div className='msisdn-numsim'> 
             <div className='msisdn '> MSISDN:  </div> <div className='inputb'> <h5 className='hhh'> { location.state.MSISDN }</h5></div>

             <div className='sim '> Numero SIM:  </div> <h5 className='hhh'>{  location.state.ICCID}</h5>
           </div> 
           <div className='type-terminal-mi '> 
             <div className='type-terminal  '> type du terminal  ...  </div>
             <div className='mi  '> mi   </div>
           </div> 

           



        </div>
        <div className='info-client'>
        <span class="encadrer-un-contenu">Information client </span>
          <div className='nom-date'> 
             <div className='nom '> Nom:  </div> <div className='inputb'> <h5 className='hhh'> { location.state.name }</h5></div>

             <div className='dn '> Date de naissance :  </div><h5 className='hhh'>{  location.state.DATE}</h5>
           </div> 
           <div className='prenom-lieux '> 
             <div className='prenom  '> Prenom :</div> <div className='inputb'> <h5 className='hhh'> { location.state.prenom}</h5></div>
             
             <div className='lieux  '> Lieu de naissance:  </div>
           </div> 

           <div className='adr-wilaya-c '> 
           <div className='adr  '>Adresse :   </div>  <div className='inputb'> <h5 className='hhh'> { location.state.adresse }</h5></div>
             
           <div className='wilaya '> Wilaya:  </div> <h5 className='hhh'>{  location.state.myWilaya }</h5> 
            
           </div> 
           <div></div>
 
           <div className='confirmation  '> Confirmation:   </div>
           <div className='numcontrat-email  '> 
             <div className='numcontart  '>N° contrat: </div>
             <div className='email '> Email:  </div>
             
           </div> 



        </div>
        <div className='pj'>
        <span class="encadrer-un-contenu"> Piece jointe  </span>

        

        <div className='typecarte-num '>
          <div className='msisdn-numsim'> 
             <div className='typepi '> Type PI :  </div> <div className='inputb'> <h5 className='hhh'> { location.state.PI }</h5></div>
             <div className='NUMPI '> N° PI :  </div> <h5 className='hhh'>{  location.state.NumPI}</h5>
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
             <div className='nom '> Nom:  </div>
             <div className='dn '> Prenom:  </div>
           </div> 
           <div className='prenom-lieux '> 
             <div className='prenom  '> Type PI :</div>
             <div className='lieux  '> N° PI:    </div>
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



function gotoPDF(){
		navigate("/pdf" , {state : {name , prenom , DATE ,myWilaya ,  adresse ,PI , MSISDN , NumPI , ICCID , MSISDNPDV , DATEV}  }  )
	    axios.post("http://localhost:3001/" , )
     
    
    }; 










8888888888888888888888888888888888888888
import { useState, useEffect, useCallback } from "react";
import './sim.css';
import {  Document, Page, pdfjs } from 'react-pdf';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import Navbar from "./navbar";
import jsPDF from 'jspdf';
import { PDFDownloadLink } from '@react-pdf/renderer';


import PDF from "./pdf";

function Sim() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [prenom, setprenom] = useState("");
    const [adresse, setadresse] = useState("");
    const [myWilaya, setMyWilaya] = useState("");
    const [DATE, setDate] = useState("");
    const [DATEV, setDateV] = useState("");
    const [PI, setpi] = useState("");
    const [MSISDN, setMSISDN] = useState("");
    const [NumPI, setNumPI] = useState("");
    const [ICCID, setICCID] = useState("");
    const [TypeSim, setTypeSim] = useState("");
    const [Sim, setSim] = useState([]);
    const [ListeICCID, setListeICCID] = useState([]);
    const [IdSim, setIdSim] = useState("");
    const [searchICCID, setSearchICCID] = useState('');
    const [generatePDF, setGeneratePDF] = useState(false);


    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const values = { name, prenom, adresse, myWilaya, DATE, PI, NumPI, ICCID, MSISDN };

    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3001/sim');
            const json = await response.json();
            setSim(json);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchSim = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3001/sim/detailSim/' + IdSim);
            const json = await response.json();
            setListeICCID(json);
            console.log(ListeICCID);
            setIsDataAvailable(json.length > 0);
        } catch (err) {
            console.error(err);
        }
    }, [IdSim]);

    useEffect(() => {
        fetchSim();
    }, [IdSim, fetchSim]);

    const fetchMSISDN = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3001/sim/detailNumSim');
            const json = await response.json();
            setMSISDN(json.numero);
        } catch (err) {
            console.error(err);
        }
    }, [ICCID]);

    useEffect(() => {
        fetchMSISDN();
    }, [ICCID, fetchMSISDN]);

    const handleChangesim = (e) => {
        e.preventDefault();
        setIdSim(e.target.value);
    };

    const handleChangeMsisdn = (e) => {
        setMSISDN(MSISDN);
    };

    const handleChangeiccid = (e) => {
        setICCID(e.target.value);
    };

    const options = ListeICCID.flatMap(item => item.StockSims).map((sim, index) => ({
        value: sim?.num_serie,
        label: sim?.num_serie
    }));

    const handleChangeICCID = (selectedOption) => {
        setICCID(selectedOption.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneratePDF(true);
    };

    const handleCancel = () => {
        navigate('/home');
    };

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <div>
            <Navbar />
            <div className="container1">
                {generatePDF ? (
                    <PDFDownloadLink document={<PDF {...values} />} fileName="contrat.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Téléchargement en cours...' : 'Télécharger le PDF'
                        }
                    </PDFDownloadLink>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h1>Formulaire SIM</h1>
                        <div>
                            <label>Nom:</label>
                            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Prénom:</label>
                            <input type="text" required value={prenom} onChange={(e) => setprenom(e.target.value)} />
                        </div>
                        <div>
                            <label>Adresse:</label>
                            <input type="text" required value={adresse} onChange={(e) => setadresse(e.target.value)} />
                        </div>
                        <div>
                            <label>Wilaya:</label>
                            <input type="text" required value={myWilaya} onChange={(e) => setMyWilaya(e.target.value)} />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input type="date" required value={DATE} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div>
                            <label>Pièce d'identité:</label>
                            <input type="text" required value={PI} onChange={(e) => setpi(e.target.value)} />
                        </div>
                        <div>
                            <label>Numéro de PI:</label>
                            <input type="text" required value={NumPI} onChange={(e) => setNumPI(e.target.value)} />
                        </div>
                        <div>
                            <label>ICCID:</label>
                            <input type="text" required value={ICCID} onChange={handleChangeiccid} />
                        </div>
                        <div>
                            <label>Numéro de série (MSISDN):</label>
                            <input type="text" required value={MSISDN} onChange={handleChangeMsisdn} />
                        </div>
                        <div>
                            <label>Numéro de série SIM:</label>
                            <select value={IdSim} onChange={handleChangesim}>
                                <option value="">-- Sélectionner SIM --</option>
                                {Sim.map((sim, index) => (
                                    <option key={index} value={sim.IdSim}>
                                        {sim?.NumSim}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Numéro de série ICCID:</label>
                            <Select
                                options={options}
                                onChange={handleChangeICCID}
                                placeholder="-- Sélectionner ICCID --"
                            />
                        </div>
                        <div className="buttons">
                            <button type="submit">Envoyer</button>
                            <button onClick={handleCancel}>Annuler</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default PDF;
