import { useEffect } from "react"
import { Card } from "../wrapper"

export const Machine = (props: { defaultClass?:string, title:string }) => {

    useEffect(() => {
        document.title = props.title
    })

    return(
        <main className={ (props.defaultClass)?? 'content-container' }>
            <Card page="machines"/>
        </main>
    )
}