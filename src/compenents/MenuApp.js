
﻿import React from 'react';
import MenuList from './MenuList';

const menuItems = [
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'margherita.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'margherita.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'margherita.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil Classic tomato and mozzarella pizza with basilClassic tomato and mozzarella pizza with basilClassic tomato and mozzarella pizza with basilClassic tomato and mozzarella pizza with basilClassic tomato and mozzarella pizza with basilClassic tomato and mozzarella pizza with basilClassic tomato and mozzarella pizza with basilClassic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'https://cdn.yemek.com/uploads/2023/10/saray-koftesi-yemekcom.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'https://i.nefisyemektarifleri.com/2023/01/17/geleneksel-turk-yemekleri-medari-iftiharimiz.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'margherita.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'margherita.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'margherita.jpg',
    },
    {
        name: 'Margherita Pizza',
        description: 'Classic tomato and mozzarella pizza with basil',
        price: 10.99,
        image: 'margherita.jpg',
    },
    // ... Diğer menü öğeleri ...
];

const MenuApp = () => {
    return (
        <div className="menu-app">
            <h1>Online Menu</h1>
            <MenuList menuItems={menuItems} />
        </div>
    );
};

export default MenuApp;