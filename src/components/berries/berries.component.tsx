import { useEffect } from "react"
import { Card } from "../wrapper"
import { useGetActiveRoute } from "../../functions/functionalComponents/getActiveRouter"

export const Berries = (props: {defaultClass?:string, title:string}) => {

    useEffect(() => {
        document.title = props.title
    })
    console.log(useGetActiveRoute());

    return(
        <main className={ (props.defaultClass)?? 'content-container'}>
            <Card page="berries"/>
        </main>
    )
}