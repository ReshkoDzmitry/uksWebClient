import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Header/>}/>
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
