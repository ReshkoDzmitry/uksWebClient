import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";
import ScrollBtn from "./components/scrollBtn/ScrollBtn";
import {useEffect, useState} from "react";

function App() {

    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

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
            {scroll > document.documentElement.clientHeight && <ScrollBtn/>}
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
