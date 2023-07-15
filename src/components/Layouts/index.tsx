import React from 'react';
import { Outlet } from 'react-router';
export default function Layouts() : React.ReactElement {
    return (
        <main>
            <Outlet/>
        </main>
    )
}