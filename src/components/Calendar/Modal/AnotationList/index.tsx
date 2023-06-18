import React from 'react';
import BillCard from './AnotationCards/BillCard';
import PaymentCard from './AnotationCards/PaymentCard';
import type { IAnotation } from "../../../../lib/types";
import { Dayjs } from 'dayjs';
import { useQuery } from 'react-query';
import { filtherAnotations } from '../../../../lib/functions';




interface AnotationListProps {
    selectedDate: Dayjs;
}

export default function (props: AnotationListProps): React.ReactElement {
    const { data: anotations, isLoading, error } = useQuery<IAnotation[]>('anotations');


    const getBillCard = (anotation: IAnotation) => (
        <BillCard anotation={anotation} key={anotation.id} />
    )
    const getIncomingCard = (anotation: IAnotation) => (
        <PaymentCard anotation={anotation} key={anotation.id} />
    )


    const displayAnotations = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        if (error) {
            return <div>Error...</div>
        }
        const filtheredAnotations = filtherAnotations(anotations, props.selectedDate);

        if (!filtheredAnotations || filtheredAnotations.length === 0) {
            return <div>No Anotations</div>
        }
        if (filtheredAnotations.length > 0) {

            return filtheredAnotations.map(anotation => {
                if (anotation.type === 'BILL') {
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