module.exports = ({ name, prenom, adresse, myWilaya, DATE, PI, NumPI, ICCID, MSISDN }) => {
  const birthYear = new Date(DATE).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const isMinor = age < 18;
  const hideClass = isMinor ? 'hide' : '';
  const isMajor = age >= 18;
  const hideMajor = isMajor ? 'hide ' : '';
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
      * {
      /* styles appliqués à tous les éléments */
    }
    .hide {
      display: none;
    }
    .d {
      background: linear-gradient(90deg, #2ecc71 60%, #27ae60 40.1%);
    }
    
    .p {
      background-color: white;
      border: grey solid;
      width: 700px;
      padding: 3px;
      margin: auto;
    }
    
    .titre {
      text-align: center;
    }
    
    .pdv {
      border: rgb(7, 208, 7) solid;

      background-color: rgb(232, 247, 232);
      box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      border-radius: 5px;
    }
    
    .info-client,
    .pj {
      margin-top: 8px;
      border: grey solid;
      border-radius: 8px;
      box-sizing: border-box;
    }
    
    .f {
      padding-left: 8px;
      margin-top: 12px;
    }
    
    .client {
      border: grey solid;
      border-radius: 8px;
      box-sizing: border-box;
    }
    
    .contrat-effet {
      white-space: nowrap; /* Empêche les éléments de passer à la ligne */
    }
    
    .date-remis,
    .contrat-offre,
    .M001 {
      display: inline-block; /* Affiche les éléments en tant que blocs en ligne */
      vertical-align: middle; /* Aligne les éléments verticalement au centre */
    }
    
    .contrat-offre {
      margin-left: 250px; /* Ajoute un espace de 10 pixels à gauche */
    }
    
    
    .encadrer-un-contenu {
      margin-top: 24px;
      border-radius: 5px;
      border: 1px solid black;
      padding-top: 4px;
      padding-bottom: 2px;
      padding-right: 8px;
      padding-left: 8px;
      background-color: rgb(239, 238, 238);
      box-shadow: 4px 4px #888888;
    }
    
    .sim-terminal {
      margin-top: 40px;
    }
     .type-terminal-mi {
      display: flex;
      margin-left: 4px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .msisdn-sim {
      display: flex;
      display: inline-block;
      align-items: center;
    }
    
   
    
    .msisdn,
    .sim {
      
    }
    .sim { 
      margin-left: 400px;
    }
    
    .nom-date {
      // white-space: nowrap; 
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    
    .nom,
    .dn {
      display: inline-block; /* Affiche les éléments en tant que blocs en ligne */
      vertical-align: middle; /* Alignement vertical au centre si nécessaire */
      /* Ajoutez d'autres styles au besoin */
    }
    .dn{  margin-left: 250px;}
.prenom-lieux { 
  // white-space: nowrap; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
}


.prenom,
.lieux { 
  display: inline-block; /* Affiche les éléments en tant que blocs en ligne */
  vertical-align: middle; /* Alignement vertical au centre si nécessaire */
  
}
.lieux{
  margin-left: 250px;
}

.adr-wilaya-c{ 
  // white-space: nowrap; 
  display: flex;
  justify-content: flex-start;
  align-items: center;

}

.adr , 
.wilaya{ 
  display: inline-block; /* Affiche les éléments en tant que blocs en ligne */
  vertical-align: middle; /* Alignement vertical au centre si nécessaire */
  /* Ajoutez d'autres styles au besoin */
}

.wilaya{
  margin-left: 250px;
}
    .caret-sim-terminale {
      border: 2px solid grey;
      padding-top: 8px;
      border-radius: 8px;
    }
    
   
    .msisdn-numsim{
      white-space: nowrap; /* Empêche les éléments de passer à la ligne */

    }
    
    .numcontrat-email {
      white-space: nowrap; /* Empêche les éléments de passer à la ligne */

      margin-left: 4px;
      margin-top: 8px;
      margin-bottom: 8px;
      box-sizing: border-box;
    }
    
    .numcontart , 
    .email { 
      display: inline-block; /* Affiche les éléments en tant que blocs en ligne */
      vertical-align: middle; /* Alignement vertical au centre si nécessaire */
      /* Ajoutez d'autres styles au besoin */
    }
    
    
    
    .typepi , 
    . NUMPI { 
      display: inline-block; /* Affiche les éléments en tant que blocs en ligne */
      vertical-align: middle; /* Alignement vertical au centre si nécessaire */
      /* Ajoutez d'autres styles au besoin */

    }
    
    .C {
      margin-left: 80px;
    }
    
    .email {
      margin-left: 160px;
    }
    
    .NUMPI {
      margin-left: 40px;
    }
    
    .datea {
      margin-left: 160px;
    }
    
   
    .bottom { 
      margin-top: 30px;
      white-space: nowrap; 
    }
    .signature-client,
    .cachet-pdf {
      display: inline-block;
      border: solid #888888;
       background-color: white;
      border-radius: 8px;
      height: 200px;
      width: 47%;
     
     
    }
   
   
    
   
    
    .signature {
      padding-top: 12px;
    }
    
    
    .label {
      background-color: white;
      position: relative;
      top: -7px;
      text-align: center;
      left: 30px;
      padding-top: 4px;
      padding-bottom: 2px;
      width: 120px;
      border: solid #888888;
    }
    
    .cacher {
      margin-top: 64px;
    }
    
    .label1 {
      background-color: white;
      position: relative;
      top: -6px;
      text-align: center;
      left: 30px;
      padding-top: 4px;
      padding-bottom: 2px;
      width: 300px;
      border: solid #888888;
    }
    
    
    
    
    
    
    
    .inputb {
      width: 200px;
    }
    
      </style>
    </head>
    <body>
    <div class="d">
   
    
  
    <div class="p" >
      <div class="pdv">
        <h1 class="titre">Contrat pdv</h1>
      </div>
      <div class="top">
        <div class="contrat-effet">
        <div class="date-remis">Date de remis: <strong>${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</strong></div>          <div class="contrat-offre">
            <h4>Contrat de l'offre:</h4>
          </div>
          <div class="M001">
            <p>M001</p>
          </div>
        </div>
      </div>
      <div class="sim-terminal">
        <span class="encadrer-un-contenu">Carte sim/terminal</span>
      </div>
      <div class="caret-sim-terminale">
        <div class="msisdn-numsim">
          <div class="msisdn">MSISDN:</div> <strong> ${MSISDN}</strong>
         
            
          
          <div class="sim">Numero SIM:</div> <strong> ${ICCID} </strong>
          
        </div>
        <div class="type-terminal-mi">
          <div class="type-terminal">Type du terminal...</div>
          <!-- <div class="mi">mi</div> -->
        </div>
      </div>
      <div class="info-client">
        <span class="encadrer-un-contenu">Information client</span>
        <div class="nom-date">
          <div class="nom">Nom: </div><strong class="${hideClass}"> ${name} </strong>
          
          <div class="dn">Date de naissance:</div><strong class="${hideClass}"> ${DATE}</strong> 
       
        </div>
        <div class="prenom-lieux">
          <div class="prenom">Prenom: </div><strong class="${hideClass}"> ${prenom}</strong>
          
          <div class="lieux">Lieu de naissance:</div>
        </div>
        <div class="adr-wilaya-c">
          <div class="adr">Adresse: <strong class="${hideClass}"> ${adresse} </strong></div>
          <div class="wilaya">Wilaya: <strong class="${hideClass}">  ${myWilaya}</strong></div>
          
        </div>
        
       
        <div class="numcontrat-email">
          <div class="numcontart">N° contrat:</div>
          <div class="email">Email:</div>
        </div>
      </div>
      <div class="pj">
        <span class="encadrer-un-contenu">Piece jointe</span>
        <div class="typecarte-num">
          <div class="msisdn-numsim">
            <div class="prenom">Type PI: <strong class="${hideClass}" >${PI} </strong></div>
            
            <div class="lieux">N° PI: <strong class="${hideClass}"> ${NumPI} </strong></div>
           
          </div>
          <div class="type-terminal-mi">
            <div class="date">Date</div>
            <div class="datea">A</div>
          </div>
        </div>
      </div>
      <div class="info-client">
        <span class="encadrer-un-contenu">Mondataire / tuteur</span>
        <div class="nom-date">
          <div class="nom">Nom:</div> <strong class="${hideMajor}"> ${name} </strong> 
          <div class="dn">Prenom:</div> <strong class="${hideMajor}"> ${prenom} </strong> 
        </div>
        <div class="prenom-lieux">
          <div class="prenom">Type PI:</div> <strong class="${hideMajor}"> ${PI} </strong> 
          <div class="lieux">N° PI:</div> <strong class="${hideMajor}"> ${NumPI} </strong> 
        </div>
        <div class="type-terminal-mi">
          <div class="date">Date</div>
          <div class="datea">A</div>
        </div>
      </div>
      <div class="bottom">
        <div class="signature-client">
          <div class="label">
            <span class="cadre-cleint">Cadre Client</span>
          </div>
          <p class="signature">signature</p>
        </div>
        <div class="cachet-pdf">
        <div class="label">
        <span class="cadre-cleint">Cadre Agence </span>
      </div>
          <p class="signature">cacher a signature</p>
        </div>
      </div>
    </div>
  </div>
  
    </body>
  </html>
  `;}