import React from 'react';
import Nav from '../nav/Nav';
import Foot from '../foot/Foot';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1">
                <Outlet />
            </main>
            <Foot />
        </div>
    );
};

export default UserLayout;
