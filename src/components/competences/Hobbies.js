import React from 'react';

const Hobbies = () => {
    return (
        <div className = "hobbies">
            <h3> Centre d'interêt</h3>
            <ul>
               <li>
                 <i className = "fas fa-running"></i>  
                 <span> Course à pied</span>
               </li> 
               <li>
                 <i className = "fas fa-futbol"></i> 
                 <span> Football</span>
               </li>
               <li>
                 <i className = "fas fa-plane"></i>  
                 <span> Voyages</span>
               </li>
               <li>
                 <i className = "fas fa-music"></i> 
                 <span> Musique</span>
               </li>
               <li>
                 <i className = "fas fa-book"></i> 
                 <span> Lecture</span>
               </li>
            </ul>
          
        </div>
    );
};

export default Hobbies;