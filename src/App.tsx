/* eslint no-eval: 0 */
// Importación
import React, {useState, FC} from "react"
import words from "lodash.words"
import Functions from "./components/Functions"
import Numbers from "./components/Numbers"
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"
import "./App.css"


//Genracion de la funcion del componente
//funcion flecha o arrow function
const App: FC = () => {

    // Array destructuring
    //1° valor inicial
    //2° funcion que va a permitir modificar el valor inicial
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
    //lo que ejecuta la funcion
    const value = items.length > 0 ? items[items.length-1] : "0";
    
    return (    
    <main className="react-calculator">
        <Result value= {value} />
        <div className="result">
        </div>
        <Numbers  onClickNumber = {number => setStack(stack + number) }/>
        <Functions
            onContentClear={() => setStack("") }
            onDelete={() => {
                if (stack.length > 0){
                    const newStack = stack.substring(0, stack.length - 1)
                    setStack(newStack)
            }
            }}
        />
        <MathOperations 
            onClickOperations = {operation => setStack(stack + operation)}
            onClickEqual = {equal => setStack(eval(stack).toString())}
            />
    </main>)
}

//exportacion
export default App