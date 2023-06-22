import { useState , useEffect , useCallback , useRef } from "react";
import './sim.css';
import { useNavigate } from "react-router-dom";
import WebcamCapture from './OCR'
import { createWorker } from "tesseract.js";
import Navbar from "./navbar"


import { BrowserMultiFormatReader } from '@zxing/library';
function MyForm () {
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    
    const [name, setName] = useState("");
    const [prenom, setprenom] = useState("");
    const [adresse, setadresse] = useState("");
    const [myWilaya, setMyWilaya] = useState("");
    const [Wilayapdv, setWilayapdv] = useState("---");
    const [DATE, setDate] = useState("");
	const [DATEV, setDateV] = useState("");
    const [PI, setpi] = useState("");
	
	const [NumPI, setNumPI] = useState("");
	const [ICCID, setICCID] = useState("");
    const [TypeCarte, setTypeCarte] = useState("");
    const [Carte, setCarte] = useState([]);
    const [ListeICCID, setListeICCID] = useState([]);
    
    const [IdCarte, setIdCarte] = useState("");
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const [scannedNumber, setScannedNumber] = useState("");
    const values ={name ,prenom , adresse , myWilaya , DATE ,PI ,NumPI , ICCID}
     
    
    
    
    async function fetchData() {
          try {
            const response = await fetch('http://localhost:3001/carte'); // appeler la route backend créée ci-dessus
            const json = await response.json();
            setCarte(json); // mettre à jour le state avec les données
           
          } catch (err) {
            console.error(err);
          }
        }    useEffect(() => {
        fetchData();
      }, []);
     const  fetchCarte = useCallback (async () => {
        try {
          const response = await fetch('http://localhost:3001/carte/detailCarte/'+IdCarte); // appeler la route backend créée ci-dessus
          const json = await response.json();
          setListeICCID(json);
          console.log(ListeICCID)
          
          setIsDataAvailable(json.length >0 ); // mettre à jour le state avec les données
        } catch (err) {
          console.error(err);
        }
      }, [IdCarte])
   
     
     
    useEffect(() => {
        
            fetchCarte ();
      
        }, [IdCarte, fetchCarte ]);

       
        






  
      const handleChangecarte = (e) => {
        e.preventDefault();
        setIdCarte(e.target.value)
       
        
      };



     
      const handleChangeiccid = (e) => {
      
        setICCID(e.target.value)
      
        
      };
      

      const handleSubmit = (e) => {
       
        e.preventDefault();
        // if (!name || !prenom || !adresse || !myWilaya || !DATE || !PI || !NumPI || !ICCID     ) {
        //   alert('Veuillez remplir tous les champs!');
        //   setIsDataAvailable(false)
         
        // }
        //  fetch('http://localhost:3001/clientrecharge/detail/clientRecharge', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(values)
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
       
    };
   
 
  return( 

    <div> <Navbar />
    <div className="container1">

<form onSubmit={handleSubmit}>
<h3> Informations CARTE DE RECHARGE </h3>
    <div className="row">
    
        <div className="col">

          
      
              
            <div className="inputBox">
                <span>Type de carte:</span>
                <select
                
                onChange= {handleChangecarte}
                value={IdCarte} >
             <option value=""></option>
                
             {Carte.map((item, index  ) => (
                
                
               
            <option key={index}  value={item.nomProduit }  >{item.nomProduit} 
           
            </option>
           
      ))} 
    </select>
    
		
				
				
            </div>
            
           
            <div className="msisdn-date">
               
               
            </div>

        </div>

        <div className="col">

          

           
            {/* <div className="inputBox">
                <span> Prenom :   </span> 
                <input type="text"
                value={prenom}
                onChange={(e) => setprenom(e.target.value)} />
            </div> */}
            {/* <div className="inputBox">
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
  
            </div> */}
            {/* <div className="inputBox">
                
            </div> */}

            {/* <div className="flex">
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
                
            </div> */}
            <div className="inputBox">
                
                <div className="iccid"><span>ICCID :</span>
                <select  onChange={handleChangeiccid}
                value={ICCID}
                 disabled={!isDataAvailable}
                >
                <option value=""></option>
                {ListeICCID.flatMap(item => item.StockRecharges).map((sim, index) => (
        <option key={index} value={sim?.num_serie}>{sim?.num_serie}</option>
    ))}
    </select>
    
 
                 </div>
                
            </div>
                <button className="submit-btn"  disabled={!isDataAvailable} > Envoyer </button>
                
        </div>

    </div>

   

</form>

</div>    
    </div>
  )
}
export default MyForm ;