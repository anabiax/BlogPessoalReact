import React from 'react'
import './Home.css'

function Home() {

    // função do TS
    let nome: string = "Ana"

    return (
        <>
            <h1 className='titulo'>{nome}</h1>
            <span> Bloco 3 - React</span>
        </>        
    )
}

export default Home