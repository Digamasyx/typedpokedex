import { PushData } from "../../classes/pushPokeApiData";
import { useEffect, useState } from "react";

export function Card(props: { page:string, pokemon?:string }) {

    const [mapArr, setMapArr] = useState(new Array())

    useEffect(() => {
        async function getMap() {
            let array = Array.from(await renderPokemon(151, 2), ([index, value]) => ({index, value}))
            setMapArr(array)
        }

        if (mapArr.length === 0) {
            getMap()
        }
    }, [mapArr])

    return(
        <div className="cards">
            <ul className="card">

            {mapArr.map((name, index) =>
                <li key={index}>
                    <div className="card-container">
                        <div className="card-body">
                            <a href="" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" className="card-img" />
                            </a>
                            <div className="card-text">
                                <h5 className="card-title"><b>{name.value.name}</b></h5>
                                <p className="card-content">Actual Page <b>{props.page}</b></p>
                                <button className="card-btn">Lorem</button>
                            </div>
                        </div>
                    </div>
                </li>
            )}
            </ul>
        </div>
    )
}



/**
 * 
 * @param limit - Max value to push
 * @param {number} [offset= 0] - Steps
 * @example (With limit 10 and offset 1)
 * ```js
 * const data = renderPokemon(10, 1)
 * console.log(data)
 * // It will print a map from the following pokedex id [2,4,6,8,10]
 * ```
 * @returns {Promise<Map<any, any>>} It will return a map as a promise
 */
async function renderPokemon(limit:number, offset?:number): Promise<Map<any, any>> {
    let pokemons = new Map();
    var data:any;

    if (offset) await dataGetter((a:any) => { data = a }, limit, offset)
    else if (!offset) await dataGetter((a:any) => { data = a }, limit)
    data.results.map((pokem:any, index:any) => {
            pokemons.set(index, pokem)
    })

    return pokemons
}

/**
 * @param {Function} callback The callback function must be a
 * ```js 
 * // Assuming the variable you want to store the data is DATA
 * (a:any) => { data = a }
 * // or
 * function (a:any) {
 *     return data = a
 * }
 * ```
 * @param limit The limit you use the same from the caller function, same apply to the offset param
 * @returns It will return the especified callback fn
 */
async function dataGetter(callback:any, limit:number, offset?:number) {
    let GET = new PushData();

    if (offset) await GET.getData({data: {dataToReq: "pokemon", interval: {limit: limit, offset: offset}}})
    else if (!offset) await GET.getData({data: {dataToReq: "pokemon", interval: {limit: limit}}})
    
    return callback(GET.data)
}