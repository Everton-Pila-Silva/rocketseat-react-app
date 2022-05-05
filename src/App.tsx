/* interface ButtonProps{
  text ?: string; //interrogação permite que o text seja opcional no componente
}

function Button(props: ButtonProps){ //propriedade do react 
                     // utilizando tailwind css, p = padding 2 = rem 
  return <button className="button" >{props.text ?? 'Default' }</button> // ?? 'default' é o valor padrão para se não tiver text
}

function App() { // componente - precisa ter letras maiúsculas 
    return ( 
    <div className="flex gap-2"> 
    <Button  text="Enviar" />
    <Button text="OK"/>
    <Button />
    </div>// quando houver vários elementos repetidos, precisa utilizar uma div para encapsular
    )  
}

export default App */

import { Widget } from "./components/Widget";
export function App() { //não utilizando o export default ajuda a não esquecer de declarar no main 
    return <Widget />
}

