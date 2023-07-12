import React from 'react';
import BillCard from './AnotationCards/BillCard';
import PaymentCard from './AnotationCards/PaymentCard';
import type { Annotation } from "../../../../lib/types";
import { Dayjs } from 'dayjs';
import { useQuery } from 'react-query';
import { Typography } from 'antd';

const { Title } = Typography;


interface IAnnotationListProps {
    selectedDate: Dayjs;
}

export default function AnnotationList (props: IAnnotationListProps): React.ReactElement 
{
    const { data: anotations, isLoading, error } = useQuery<Annotation[]>('anotations');


    const getBillCard = (anotation: Annotation) => (
        <BillCard annotation={anotation} key={anotation.id} />
    )
    const getIncomingCard = (anotation: Annotation) => (
        <PaymentCard annotation={anotation} key={anotation.id} />
    )


    const displayAnotations = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        if (error) {
            return <div>Error...</div>
        }
        const filtheredAnotations =  (anotations && props.selectedDate) ? 
        anotations.filter(annotation => annotation.date.isSame(props.selectedDate, 'day')) :
        [];

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
        <Title level={2}> Annotations</Title>
            {displayAnotations()}
        </>
    );
}