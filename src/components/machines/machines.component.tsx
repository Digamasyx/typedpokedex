import { useEffect } from "react"

export const Machine = (props: { defaultClass?:string, title:string }) => {

    useEffect(() => {
        document.title = props.title
    })

    return(
        <main className={ (props.defaultClass)?? 'content-container' }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia veniam impedit corporis velit accusantium consequuntur aut expedita minima aperiam dicta saepe, hic perferendis asperiores officia, quibusdam facere cumque exercitationem!
            <p>
                { Math.floor(Math.random() * 10^10 - 1) + 1 }
            </p>
        </main>
    )
}