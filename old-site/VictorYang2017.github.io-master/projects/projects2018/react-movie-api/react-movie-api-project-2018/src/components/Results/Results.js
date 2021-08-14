import React from 'react';
import './Results.css';

const Results = ({movieTitles}) => {
    return (
        <div className="Results">
            <ul>
                {movieTitles.map((title,i)=>{
                    return <li key={i}>{title}</li>;
                })}
            </ul>
        </div>
    );
};

export default Results;