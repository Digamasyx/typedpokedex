import { useEffect, useState } from "react";
import { Card } from "../wrapper";
import { useGetActiveRoute } from "../../functions/functionalComponents/getActiveRouter";


export function Overview(props: { defaultClass?:string, title:string }) {

    useEffect(() => {
        document.title = props.title
    })

    console.log(useGetActiveRoute().hash);

    

    return(

        <main className={ (props.defaultClass)?? 'content-container' }>
            <Card page="overview"/>
        </main>
    )
}