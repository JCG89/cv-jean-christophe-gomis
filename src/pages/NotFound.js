import React from 'react';
import {NavLink} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className = "notFound">
            <div className = "notFoundContent">
                <h3>Désolé la page demandée n'existe pas veuillez réessayer ultérieurement!</h3>
                <NavLink exact to = '/'>
                   <i className = 'fas fa-home'></i>
                   <span>Accueil</span>
                </NavLink>
            </div>
            
        </div>
    );
};

export default NotFound;