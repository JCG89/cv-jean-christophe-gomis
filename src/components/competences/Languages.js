import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state ={
        languages:[
            {id: 1, value: "javascript", xp: 1.5},
            {id: 1, value: "html&css", xp: 2},
            {id: 1, value: "php", xp: 1.3},
            {id: 1, value: "nodejs", xp: 1},
        ],
        frameworks:[
            {id: 1, value: "angular, react", xp: 1.3},
            {id: 1, value: "symfony", xp: 1.5},
            {id: 1, value: "bootstrap", xp: 1.5},
            {id: 1, value: "wordpress", xp: 1.5},
        ]

        
    }
    render() {
        let {languages, frameworks} = this.state
        return (
           <div className ="languagesFrameworks">
               <ProgressBar
                 languages ={languages}
                 className = "languagesDisplay"
                 title = "languages"
               />
               <ProgressBar
                 languages = {frameworks}
                 title = "frameworks & biblothéques"
                 className = "languagesDisplay"
               />
           </div>
        );
    }
}

export default Languages;