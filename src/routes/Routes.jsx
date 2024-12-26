import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Card from "../components/Card";
import CardDetails from "../components/CardDetails";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch('../categoryName.json') ,
                children:[
                    {
                        path:'/',
                        element:<Card></Card>,
                        loader:()=>fetch('../data.json')
                    },
                    {
                        path:'/category/:categoryName',
                        element:<Card></Card>,
                        loader:()=>fetch('../data.json')
                    }
                ]
            },
            {
                path:'/statictics',
                element:<Statistics></Statistics>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/product/:id',
                element:<CardDetails></CardDetails>,
                loader:()=>fetch('../data.json')
            },
        ]
    },
])

export default routes;