import React from 'react';
import Homeworld from "./Homeworld";
import Films from "./Films";
import './StarWars.scss';

   
function Character(props) {
    
    //console.log(props);
    return (
    <div className="character-info">
        <div className="character-card">
            <h3 className="name">{props.character.name}</h3>
            <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
            <p className='homeworld'><strong>Homeworld: </strong><Homeworld homeworld={props.character.homeworld}/> </p>
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
        <h3 className="filmlead">Films: </h3>
        <ul className="films"> {props.character.films.map((film, index) => (
            <Films film={film} key={index} />))}</ul>
        </div>
    );
}


export default Character;