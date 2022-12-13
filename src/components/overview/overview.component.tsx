import { useEffect } from "react";
import { Card } from "../wrapper";
import { PushData } from "../../classes/pushPokeApiData";


export function Overview(props: { defaultClass?:string, title:string }) {

    useEffect(() => {
        document.title = props.title
    })

    return(

        <main className={ (props.defaultClass)?? 'content-container' }>
            <Card page="overview"/>
        </main>
    )
}