import React from 'react';



export default function Personaje(props) {
    const { name, image, id, species, status } = props.pnj;
    return (
        <div>
            <img src={image} alt={name} />
            <p> ID: {id} </p>
            <p> Nombre: {name} </p>
            <p> Especie: {species} </p>
            <p> Status: {status} </p>
        </div>
    )
}