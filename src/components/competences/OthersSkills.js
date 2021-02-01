import React from 'react';

const OthersSkills = () => {
    return (
        <div className = "othersSkills">
            <h3>Autres compétences</h3>
            <div className = "list">
                <ul>
                    <li><i className ="fas fa-check-square"></i> Anglais courant</li>
                    <li><i className="fab fa-github"></i> Github</li>
                    <li><i className="fas fa-file-word"></i> Word</li>
                    <li><i className="fas fa-file-powerpoint"></i> PowerPoint</li>
                    
                </ul>
                <ul>
                <li><i className ="fas fa-check-square"></i> Canva</li>
                    <li><i className="fab fa-figma"></i> Figma</li>
                    <li><i className ="fas fa-check-square"></i> Adobe xd</li>
                    <li><i className ="fas fa-check-square"></i> Excel</li>
                </ul>

            </div>
        </div>
    );
};

export default OthersSkills;