import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <div className = "sidebar">
            <div className = "id">
                <div className = "idContent">
                   <img src="./media/chris2.jpg" alt = "profile-pic"/>
                   <h3> Jean Christophe Gomis</h3>
                </div>
            </div>
            <div className="navigation">
              <ul>
                  <li>
                      <NavLink exact to ="/" activeClassName = "navActive">
                         <i className = "fas fa-home"></i>
                         <span> Accueil</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink exact to ="/Portfolio" activeClassName = "navActive">
                         <i className = "fas fa-pencil-ruler"></i>
                         <span> Portfolio</span>
                      </NavLink>
                  </li>
                  
                  <li>
                      <NavLink exact to ="/Competences" activeClassName = "navActive">
                         <i className = "fas fa-toolbox"></i>
                         <span> Compétences</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink exact to ="/contact" activeClassName = "navActive">
                         <i className = "fas fa-book"></i>
                         <span> Contact</span>
                      </NavLink>
                  </li>
                  
              </ul>
            </div>
            <div className = "socialNetwork">
                <ul>
                    <li>
                        <a href = "https://www.linkedin.com/in/jean-christophe-gomis/" target ="_blank"
                        rel = "noopener noreferrer"><i className = "fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href = "https://mail.google.com/mail/u/0/#inbox/FMfcgzGkXSVnghHRClFmtZcJqHWXFjGh?compose=new" target ="_blank"
                        rel = "noopener noreferrer"><i className = "far fa-envelope"></i></a>
                    </li>
                    <li>
                        <a href = "https://github.com/christophegomis89" target ="_blank"
                        rel = "noopener noreferrer"><i className = "fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href = "https://www.facebook.com/jeanchristophe.gomis.334" target ="_blank"
                        rel = "noopener noreferrer"><i className = "fab fa-facebook"></i></a>
                    </li>
                </ul>
                <div className = "signature">
                  <small className = "small">By <i className = "fas fa-heart"></i>JeanChristophe@gomis 2021<i className="far fa-copyright"></i></small> 
                </div>
                
            </div>
        </div>
    );
};

export default Navigation;