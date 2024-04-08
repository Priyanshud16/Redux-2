import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Create from "./Create"
import 'bootstrap/dist/css/bootstrap.min.css'
import Update from "./Update"

function App() {
  

  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/edit/:id" element={<Update/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
