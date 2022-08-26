import { getHeroes } from "../helpers"





export const DcPage = () => {

    const publisher = 'DC Comics';
    const heroes = getHeroes( publisher );


    return (
        <>
            <h1>Dc Comics</h1>
            <ul>
                {
                    heroes.map(heroe => (
                        <li key={heroe.id}>{heroe.superhero}</li>
                    ))
                    
                }
                
            </ul>
        </>
    )
}
