// import {createRoot} from "react-dom/client"
import {createRoot} from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import App from "./app"


////// WAS . Раньше див можно было получить прямо в рэндере
// reactDOM.render(<App/>, document.querySelector('#root'))

// AFTER . теперь сначала нужно получить див, и в нем рендерить элемент
const counter = document.getElementById('root')
const Root = createRoot(counter)

Root.render(<App/>)