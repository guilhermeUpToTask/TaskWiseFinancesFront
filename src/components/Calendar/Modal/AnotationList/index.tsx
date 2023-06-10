import React from 'react';
import BillCard from './AnotationCards/BillCard';
import IncomingCard from './AnotationCards/IncomingCard';
import type { IAnotation } from "../../../../lib/types";

interface AnotationListProps {
    anotations: IAnotation[] | undefined;
}

export default function (props: AnotationListProps): React.ReactElement {

    const getBillCard = (anotation: IAnotation) => (
        //should create anotation id for key
        <BillCard anotation={anotation} key={anotation.name}/> 
    )
    const getIncomingCard = (anotation: IAnotation) => (
        <IncomingCard anotation={anotation} key={anotation.id}/> 
    )
    

    const displayAnotations = () => {
        if(props.anotations) {
            return props.anotations.map(anotation => {
                if(anotation.type === 'bills') {
                    return getBillCard(anotation);
                } else {
                    return getIncomingCard(anotation);
                }
            })
        }
    
    }

    return (
        <>
            {displayAnotations()}
        </>
    );
};