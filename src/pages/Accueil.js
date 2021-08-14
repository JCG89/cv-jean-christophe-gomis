import React from 'react';
import Navigation from '../components/Navigation';

const Accueil = () => {
   return (
      <div className="accueil">
         <Navigation />
         <div className="accueilContent">
            <div className="content">
               <h1> Jean C Gomis</h1>
               <h2>Développeur web Fullstack Junior</h2>

               <div className="pdf">
                  <a href="/media/jcg.pdf" target="_blank" >Télécharger CV</a>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Accueil;



