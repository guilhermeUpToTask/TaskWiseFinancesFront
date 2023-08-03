import React from 'react';
import BillCard from './AnotationCards/BillCard';
import PaymentCard from './AnotationCards/PaymentCard';
import type { Annotation } from "../../../../lib/types";
import dayjs, { Dayjs } from 'dayjs';
import { useQuery } from 'react-query';
import { Typography } from 'antd';
import fetchAnnotations from '../../fetchAnnotationsByMonth';

const { Title } = Typography;


interface IAnnotationListProps {
    selectedDate: Dayjs;
}

export default function AnnotationList(props: IAnnotationListProps): React.ReactElement {
    const year = props.selectedDate.year();
    const month = props.selectedDate.month() + 1;

    const { data: anotations, isLoading, error } = useQuery<Annotation[]>({
        queryKey: ['annotations', year, month],
        queryFn: () => fetchAnnotations(year, month)
    });



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
            console.error(error);
            return <div>Error...</div>
        }
        const filtheredAnotations = (anotations && props.selectedDate) ?
            anotations.filter(annotation => dayjs(annotation.date).isSame(props.selectedDate, 'day')) :
            [];

        if (!filtheredAnotations || filtheredAnotations.length === 0) {
            return <div>No Anotations</div>
        }
        if (filtheredAnotations.length > 0) {

            return filtheredAnotations.map(anotation => {
                if (anotation.annon_type === 'bill') {
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