import { useEffect } from "react"

export const Berries = (props: {defaultClass?:string, title:string}) => {

    useEffect(() => {
        document.title = props.title
    })

    return(
        <main className={ (props.defaultClass)?? 'content-container'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum temporibus veniam fugiat. Incidunt illum sequi ratione cupiditate voluptate soluta inventore doloribus distinctio saepe odio facere vitae tenetur, ipsum officiis dignissimos.
            <p>
                { Math.floor(Math.random() * 10^10 - 1) + 1 }
            </p>
        </main>
    )
}