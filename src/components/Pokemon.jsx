import React from 'react'

function Pokemon({ pokemon }) {
    return (

        <div className='pokemon'>
            <div className='pokemon__name'>
                <p>{pokemon.name}</p>
            </div>
            <div className='pokemon__meta'>
                <p>{pokemon.maxHP}</p>
                <p>{pokemon.maxCP}</p>
            </div>
            <div className='pokemon__image'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='pokemon__attacks'>
            {pokemon.attacks.special.slice(0,3).map(attack=>
                <span key={`${attack.name}-${attack.demage}`}>{attack.name}</span>)}
            </div>


        </div>

    )
}


export default Pokemon