import { useEffect } from "react"

export const Items = (props: {defaultClass?:string, title:string}) => {

    useEffect(() => {
        document.title = props.title
    })

    return(
        <main className={ (props.defaultClass)?? 'content-container' }>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur qui sunt incidunt eveniet facilis asperiores. Temporibus magnam suscipit nostrum voluptatem in. Pariatur molestiae tempore blanditiis iste molestias quia nam enim.
            <p>
                { Math.floor(Math.random() * 10^10 - 1) + 1 }
            </p>
        </main>
    )
}