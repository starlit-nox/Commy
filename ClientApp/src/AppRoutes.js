import React from 'react';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { Home } from './components/Home';
import Clothes from './components/Clothes'; 
import Automotive from './components/Automotive'; 
import Electronics from './components/Electronics';
import Groceries from './components/Groceries'; 
import Jewelry from './components/Jewelry'; 
import HomeAppliances from './components/HomeAppliances'; 

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/clothes',
        element: <Clothes />
    },
    {
        path: '/automotive',
        element: <Automotive />
    },
    {
        path: '/electronics',
        element: <Electronics />
    },
    {
        path: '/groceries',
        element: <Groceries />
    },
    {
        path: '/jewelry',
        element: <Jewelry />
    },
    {
        path: '/homeappliances',
        element: <HomeAppliances />
    },
];

export default AppRoutes;
