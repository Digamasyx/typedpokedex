import { useEffect } from "react"
import { Card } from "../wrapper"

export const Berries = (props: {defaultClass?:string, title:string}) => {

    useEffect(() => {
        document.title = props.title
    })

    return(
        <main className={ (props.defaultClass)?? 'content-container'}>
            <Card page="berries"/>
        </main>
    )
}