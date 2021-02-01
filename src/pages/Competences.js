import React from 'react';
import Experiences from '../components/competences/Experiences';
import Hobbies from '../components/competences/Hobbies';
import Languages from '../components/competences/Languages';
import OthersSkills from '../components/competences/OthersSkills';
import Navigation from '../components/Navigation'


const Competences = () => {
    return (
        <div className = "competences">
            <Navigation />
            <div className = "competencesContent">
                <Languages/>
                <Experiences/>
                <Hobbies/>
                <OthersSkills/>

            </div>
               </div>
           );          
        };        

export default Competences;