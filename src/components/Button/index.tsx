import React, {FC} from "react"
import "./Button.css"

export type ButtonClickHandler = (text:string) => void

type Props = {
    type?: string,
    text: string,
    clickHandler:ButtonClickHandler
}
//componente funcional
// type = "button-long-text"
const Button: FC<Props> = ({type, text, clickHandler}) => {
    return (
        <button className= {type} onClick={() => {
            clickHandler(text)
        }}>
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button