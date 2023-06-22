import { useState , useEffect , useCallback  } from "react";
import './sim.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from "./pdf";
import ReactToPrint from "react-to-print";
import axios from "axios";
import {saveAs } from 'file-saver'
 
 import { useNavigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Select from 'react-select';
import Navbar from "./navbar"

function Sim() {
  const navigate = useNavigate();// Utiliser useHistory pour la redirection
    const [name, setName] = useState("");
    const [prenom, setprenom] = useState("");
    const [adresse, setadresse] = useState("");
    const [myWilaya, setMyWilaya] = useState("");
    const [DATE, setDate] = useState("");
    const [PI, setpi] = useState("");
    const [MSISDN, setMSISDN] = useState("");
	const [NumPI, setNumPI] = useState("");
	const [ICCID, setICCID] = useState("");
    const [Sim, setSim] = useState([]);
    const [ListeICCID, setListeICCID] = useState([]);
    const [IdSim, setIdSim] = useState("");
    const [searchICCID, setSearchICCID] = useState('');
    const [generatePDF, setGeneratePDF] = useState(false);
const [TypeSim, setTypeSim] = useState("");

    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const values ={name ,prenom , adresse , myWilaya , DATE ,PI ,NumPI , ICCID , MSISDN }
     async function fetchData() {
          try {
            const response = await fetch('http://localhost:3001/sim'); // appeler la route backend créée ci-dessus
            const json = await response.json();
            setSim(json); // mettre à jour le state avec les données
           
          } catch (err) {
            console.error(err);
          }
        }    useEffect(() => {
        fetchData();
      }, []);
     const  fetchSim = useCallback (async () => {
        try {
          const response = await fetch('http://localhost:3001/sim/detailSim/'+IdSim); // appeler la route backend créée ci-dessus
          const json = await response.json();
          setListeICCID(json);
          console.log(ListeICCID)
          
          setIsDataAvailable(json.length >0 ); // mettre à jour le state avec les données
        } catch (err) {
          console.error(err);
        }
      }, [IdSim])
   
     
     
    useEffect(() => {
        
            fetchSim ();
      
        }, [IdSim, fetchSim ]);

       
        

        const  fetchMSISDN = useCallback (async () => {
          try {
            const response = await fetch('http://localhost:3001/sim/detailNumSim'); // appeler la route backend créée ci-dessus
            const json = await response.json();
            setMSISDN(json.numero);
             // mettre à jour le state avec les données
          } catch (err) {
            console.error(err);
          }
        }, [ICCID])
     
       
       
      useEffect(() => {
          
        fetchMSISDN();
        
          }, [ICCID ,fetchMSISDN ]);
  





  
      const handleChangesim = (e) => {
        e.preventDefault();
        setIdSim(e.target.value)
       
        
      };



      const handleChangeMsisdn = (e) => { 
    
    setMSISDN(MSISDN)
      };
      const handleChangeiccid = (e) => {
      
        setICCID(e.target.value)
      
        
      };
      const options = ListeICCID.flatMap(item => item.StockSims).map((sim, index) => ({
        value: sim?.num_serie,
        label: sim?.num_serie
      }));
      const handleChangeICCID = (selectedOption) => {
        setICCID(selectedOption.value);
      };



      
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !prenom || !adresse || !myWilaya) {
          alert('Veuillez remplir tous les champs!');
          setIsDataAvailable(false);
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3001/client/detail/client', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
      
          const data = await response.json();
      
          await axios.post('http://localhost:3001/pdfRoute/createPdf',values); // Créer le fichier PDF
      
         
            axios.get('http://localhost:3001/pdfRoute/fetchPdf', { responseType: 'blob' }) // Récupérer le fichier PDF généré
            .then((res) => {
              const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
              saveAs(pdfBlob, 'InvoiceDocument.pdf'); // Télécharger le fichier PDF
      
              // Réinitialiser les champs du formulaire
              setName("");
              setprenom("");
              setadresse("");
              setMyWilaya("");
              setDate("");
              setpi("");
              setNumPI("");
              setICCID("");
              setMSISDN("");
              
            }) .then(()=>
            axios.post("http://localhost:3001/pdfRoute/sendPdf",{email:"Tirecheamira@gmail.com"})
            .then(response=>{
              console.log(response);
              alert(response.data)
            })
          )
        } catch (error) {
          console.error(error);
        }
      };
      

  return( 

    <div> <Navbar />
    <div className="container1">
    {/* {generatePDF ? (
                    <PDFDownloadLink document={<PDF {...values} />} fileName="contrat.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Téléchargement en cours...' : 'Télécharger le PDF'
                        }
                    </PDFDownloadLink>
                     ) : ( */}

<form onSubmit={handleSubmit}>
<h3> Informations CARTE SIM </h3>
    <div className="row">
        

        <div className="col">

          

            <div className="inputBox">
                <span>Nom :</span>
                <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="inputBox">
                <span>Date de naissance :</span>
                <input type="Date" 
                value={DATE}
                onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="inputBox">
                <span> Adresse</span>
                <input type="text" 
                value={adresse}
                onChange={(e) => setadresse(e.target.value)}/>
            </div>
            <div className="inputBox">
                <span>Type SIM :</span>
                <select
                
                onChange= {handleChangesim}
                value={IdSim} >
             <option value=""></option>
                
             {Sim.map((item, index  ) => (
                
                
               
            <option key={index}  value={item.nomProduit }  >{item.nomProduit} 
           
            </option>
           
      ))} 
    </select>
   
		
				
				
            </div>
            
            <div className="MSISDN">
                    {/* <span>MSISDN :</span> */}
                    <input 
                   
                     
                   defaultValue={MSISDN} 
                   readOnly 
                  hidden = {true}
                  
                    
                    // hidden= {true}
                     disabled={!isDataAvailable}
              
                    >  
                       {/* <option value=""></option> */}
                    
      {/* {ListeMSISDN.map((item , index) => (
       item.Msisdn && <option key={index} value={item.MSISDN}>{item.Msisdn.numero}</option>
      ))} */}
     
    </input>
    
                </div>

            <div className="msisdn-date">
               
               
            </div>

        </div>

        <div className="col">

          

           
            <div className="inputBox">
                <span> Prenom :   </span> 
                <input type="text"
                value={prenom}
                onChange={(e) => setprenom(e.target.value)} />
            </div>
            <div className="inputBox">
                <span>Wilaya:</span>
                <select
                  value= {myWilaya} 
                  onChange=  {(e) => setMyWilaya(e.target.value)}><option value = ""
                ></option>
				<option value = "Adrar">Adrar</option>
				<option value = "Chlef">Chlef</option>
				<option value = "Laghouat">Laghouat</option>
				<option value = "Oum El Bouaghi">Oum El Bouaghi</option>
				<option value = "Batna">Batna</option>
				<option value = "Bejaia">Bejaia</option>
				<option value = "Biskra">Biskra</option>
				<option value = "Bechar">Bechar</option>
				<option value = "Blida">Blida</option>
				<option value = "Bouira">Bouira</option>
				<option value = "Tamanrasset">Tamanrasset</option>
				<option value = "Tebessa">Tebessa</option>
				<option value = "Tlemcen">Tlemcen</option>
				<option value = "Tiaret">Tiaret</option>
				<option value = "Tizi Ouzou">Tizi Ouzou</option>
				<option value = "Alger">Alger</option>
				<option value = "Djelfa">Djelfa</option>
				<option value = "Jijel">Jijel</option>
				<option value = "Setif">Setif</option>
				<option value = "Saida">Saida</option>
				<option value = "Skikda">Skikda</option>
				<option value = "Sidi Bel Abbes">Sidi Bel Abbes</option>
				<option value = "Annaba">Annaba</option>
				<option value = "Guelma">Guelma</option>
				<option value = "Constantine">Constantine</option>
				<option value = "Medea">Medea</option>
				<option value = "Mostaganem">Mostaganem</option>
				<option value = "MSila">MSila</option>
				<option value = "Mascara">Mascara</option>
				<option value = "Ouargla">Ouargla</option>
				<option value = "Oran">Oran</option>
				<option value = "El Bayadh">El Bayadh</option>
				<option value = "Illizi">Illizi</option>
				<option value = "Bordj Bou Arreridj">Bordj Bou Arreridj</option>
				<option value = "Boumerdes">Boumerdes</option>
				<option value = "El Tarf">El Tarf</option>
				<option value = "Tindouf">Tindouf</option>
				<option value = "Tissemsilt">Tissemsilt</option>
				<option value = "El Oued">El Oued</option>
				<option value = "Khenchela">Khenchela</option>
				<option value = "Souk Ahras">Souk Ahras</option>
				<option value = "Tipaza">Tipaza</option>
				<option value = "Mila">Mila</option>
				<option value = "Ain Defla">Ain Defla</option>
				<option value = "Naama">Naama</option>
				<option value = "Ain Temouchent">Ain Temouchent</option>
				<option value = "Ghardaia">Ghardaia</option>
				<option value = "Relizane">Relizane</option>
               
        </select>
  
            </div>
            <div className="inputBox">
                
            </div>

            <div className="flex">
                <div className="inputBox">
                    <span>Nature PI  :</span>
                    <select 
                    value={PI} onChange={(e) => setpi(e.target.value)}
                    
                    >
        <option value=" "> </option>
       <option value="carte nationale ">Carte national </option>
	   <option value="permis de conduire ">permis de conduire </option>
	   
	 </select>
                </div>
                <div className="inputBox">
                    <span>Numero PI :</span>
                    <input type="text"
                    value={NumPI}
                    onChange={(e) => setNumPI(e.target.value)}/>
                </div>
                
            </div>
            <div className="inputBox">
                
                <div className="iccid"><span>ICCID :</span>
                <Select
        options={options}
        onChange={handleChangeICCID}
        value={options.find(option => option.value === ICCID)}
        isDisabled={!isDataAvailable}
        isSearchable  // Activer la recherche
        placeholder="Rechercher un ICCID"
      />

 
                 </div>
                
            </div>
                <button className="submit-btn"  disabled={!isDataAvailable}  
                 > Envoyer </button>
               
                <ReactToPrint
           
           
          />
        </div>

    </div>

   

</form>

</div>    
    </div>
  )
}
export default Sim;
