import React from 'react';
import './StarWars.scss';

   
function Character(props) {
    
    //console.log(props);
    return (
        <div className="character-info">
            <h3 className="name">{props.character.name}</h3>
            <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
            {/* <p><strong>Homeworld:</strong> {props.character.homeworld}</p> */}
            {/* <p><strong>Species:</strong> {props.character.species}</p> */}
            <p><strong>Gender:</strong> {props.character.gender}</p>
            <p><strong>Height:</strong> {props.character.height}</p>
            <p><strong>Mass:</strong> {props.character.mass}</p>
            <p><strong>Hair:</strong> {props.character.hair_color}</p>
            <p><strong>Eye Color:</strong> {props.character.eye_color} </p>
            <p><strong>Skin:</strong> {props.character.skin_color}</p>
            {/* <p><strong>Starships:</strong> {props.character.starships}</p>
            <p><strong>Vehicles:</strong> {props.character.vehicles}</p> */}
        </div> 
    );
}


export default Character;