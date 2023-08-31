import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Services from "./pages/services/Services";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='services' element={<Services/>}/>
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
