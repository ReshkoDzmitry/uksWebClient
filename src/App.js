import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='services' element={<Services/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='contacts' element={<Contacts/>}/>
            </Route>
        )
    )

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
