import React, { useState } from 'react';
import BillCard from './AnotationCards/BillCard';
import IncomingCard from './AnotationCards/IncomingCard';
export default function (): React.ReactElement {
    const [loading, setLoading] = useState(true);



    return (
        <>
            <BillCard />
            <IncomingCard/>
        </>
    );
};