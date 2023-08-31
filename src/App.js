import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Main from "./pages/Main";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
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
