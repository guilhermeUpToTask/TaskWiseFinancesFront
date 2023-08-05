import React from 'react';
import BillCard from './AnotationCards/BillCard';
import PaymentCard from './AnotationCards/PaymentCard';
import type { Annotation } from "../../../../lib/types";
import dayjs, { Dayjs } from 'dayjs';
import { useQuery } from 'react-query';
import { Typography } from 'antd';
import fetchAnnotations from '../../fetchAnnotationsByMonth';
import ConnectAnnotationCard from './AnotationCards/ConnectAnnotationCard';


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



    const displayAnotations = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        if (error) {
            console.error(error);
            return <div>Error...</div>
        }
        const filtheredAnnotations = (anotations && props.selectedDate) ?
            anotations.filter(annotation => dayjs(annotation.date).isSame(props.selectedDate, 'day')) :
            [];

        if (!filtheredAnnotations || filtheredAnnotations.length === 0) {
            return <div>No Annotations</div>
        }
        if (filtheredAnnotations.length > 0) {
            return filtheredAnnotations.map(annotation => {

                return <ConnectAnnotationCard
                    annotation={annotation}
                    key={annotation.id}
                    annon_type={annotation.annon_type}
                />
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