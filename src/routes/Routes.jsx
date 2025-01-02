import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Card from "../components/Card";
import CardDetails from "../components/CardDetails";
import AllCart from "../components/AllCart";
import AllFaourite from "../components/AllFaourite";
import ErrorPage from "../pages/ErrorPage";
import Review from "../pages/Review";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:'/dashboard/cart',
                        element:<AllCart></AllCart>
                    },
                    {
                        path:'/dashboard/favourite',
                        element:<AllFaourite></AllFaourite>
                    }
                ]
            },
            {
                path:'/product/:id',
                element:<CardDetails></CardDetails>,
                loader:()=>fetch('../data.json')
            },
            {
                path:'/user-review',
                element:<Review></Review>
            }
        ]
    },
])

export default routes;