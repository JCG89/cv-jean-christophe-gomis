import React from 'react';
import Navigation from '../components/Navigation';

const Accueil = () => {
    return (
          <div className = "accueil">
            <Navigation />
                   <div className="accueilContent">
                      <div className = "content">
                       <h1> Jean C Gomis</h1>
                        <h2>Développeur web Fullstack
                           <medium className = "alternance">
                           <p>En alternance avec OpenClassrooms</p>
                           </medium>
                           </h2>
                        <div className = "pdf">
                           <a href = "/media/JCCV.pdf" target = "blank">Télécharger CV</a>
                        </div>
                       </div>
                      </div>
                     </div>
                     );          
                   };          
                    export default Accueil;   
    


