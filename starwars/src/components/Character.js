import React from 'react';


function Character(props) {
    //console.log(props);
    return (
        <div className="character-sheet">
        {/* <img className="characterpic" src={props.character.url}/> */}
        <div className="character-info">
            <h3 className="name">{props.character.name}</h3>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Homeworld: {props.character.homeworld}</p>
            <p>Species: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Hair: {props.character.hair_color}</p>
            <p>Eye Color: {props.character.eye_color} </p>
            <p>Skin: {props.character.skin_color}</p>
            {/* <p>Created: {props.character.created}</p>
            <p>Edited: {props.character.edited}</p> */}
            {/* <p>Films: {props.character.films}</p> */}
            <p>Starships: {props.character.starships}</p>
            <p>Vehicles: {props.character.vehicles}</p>
            </div>
        </div> 
    );
}


export default Character;