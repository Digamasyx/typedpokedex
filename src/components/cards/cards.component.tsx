import { PushData } from "../../classes/pushPokeApiData";
import { useEffect, useState } from "react";

export function Card(props: { page:string, pokemon?:string }) {

    const [mapArr, setMapArr] = useState(Array)

    useEffect(() => {
        async function getMap() {
            let C = new PushData()
            let data = C.returnDataFn("array", 1)
            
            if (C.isObjectArray(data)) setMapArr(await data)
        }

        if (mapArr.length === 0) {
            getMap()
        }
    }, [mapArr])

    return(
        <div className="cards">
            <ul className="card">

            {mapArr.map((name:any, index) =>
                <li key={index}>
                    <div className="card-main">
                        <div className="card-img-div">
                            <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" className="card-img" loading="lazy" />
                        </div>
                        <div className="card-body">
                            <h1 className="card-title"><b>{name.name}</b></h1>
                            <div className="cardDesc">Actual page <b>{props.page}</b></div>
                        </div>
                        <div className="cardBtn">
                            <div className="subBtn">

                                <button className="card-btn">
                                    Lorem
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            )}
            </ul>
        </div>
    )
}