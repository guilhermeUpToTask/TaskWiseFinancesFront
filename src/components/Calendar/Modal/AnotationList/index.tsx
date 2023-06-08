import React, { useState } from 'react';
import BillCard from './BillCard';
import IncomingCard from './IncomingCard';
export default function (): React.ReactElement {
    const [loading, setLoading] = useState(true);



    return (
        <>
            <BillCard />
            <IncomingCard/>
        </>
    );
};