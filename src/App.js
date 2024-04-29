import { BrowserRouter, Route, Routes } from "react-router-dom";
import {routes} from "./Routes/Routes";
import Layout from "./Components/UI/Layout";



function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout/>}>
          {
            routes.map((cv,ind,arr)=>{
              return (<Route key={ind} path = {cv.path} element = {cv.element}/>)

            })

          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
