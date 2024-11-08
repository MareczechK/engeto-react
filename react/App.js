/* Marek Kopička
m.kopicka@seznam.cz
*/

/* Nefunguje správně stylování, ale odkaz zde: 
https://jazzy-pika-ad0be4.netlify.app/
bohužel mi nešlo nahrát celý file na github */

import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout.js"
import Error from "./pages/Error.js"
import Weather from "./pages/Weather.js"




const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<SharedLayout />} />
            <Route path="*" element={<Error />} />
            <Route path="weather" element={<Weather />} />
        </Routes>
    </BrowserRouter>

}

export default App
