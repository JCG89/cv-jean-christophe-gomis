import React from 'react';
import Navigation from '../components/Navigation';
import { copyToClipboard  } from 'react-copy-to-clipboard';



const Contact = () => {
    return (
        <div className = "contact">
        <Navigation />
               <div className="contactContent">
                  <div className = "header"></div>
                     <div className = "contactBox">
                        <h1>Coordonées</h1>
                        <ul>
                           <li>
                              <i className = "fas fa-map-marker-alt"></i>
                              <span>13 Rue Babeuf 94500 Champigny Sur Marne</span>
                           </li>
                           <li>
                           <i className ="fas fa-mobile-alt"></i>
                              <copyToClipboard text="0621456056">
                                 <span className ="clickInput" onClick ={() =>
                                { alert('JC Gomis, copié!');}}>06 21 45 60 56</span>
                              </copyToClipboard>
                           </li>
                           <li>
                           <i className ="far fa-envelope"></i>
                              <copyToClipboard text="christophegomis89@gmail.com">
                                 <span className ="clickInput" onClick ={() =>
                                { alert('christophegomis89@gmail.com, copié!');}}>christophegomis89@gmail.com</span>
                              </copyToClipboard> 
                           </li>
                        </ul>
                     </div>
                     
             </div>
            </div>
          );
          };

     export default Contact;