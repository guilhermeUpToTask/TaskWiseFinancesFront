import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Typography } from 'antd';
import WithMsgAnnCard from './AnotationCards/WithMsgAnnCard';
import useAnnotationsByMonth from '../../../../hooks/useAnnotationsByMonth';


const { Title } = Typography;


interface IAnnotationListProps {
    selectedDate: Dayjs;
}

export default function AnnotationList(props: IAnnotationListProps): React.ReactElement {
    const { data: anotations, isLoading, error } = useAnnotationsByMonth(props.selectedDate);



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

                return <WithMsgAnnCard
                    annotation={annotation}
                    key={annotation.id}
                    annon_type={annotation.annon_type}
                />
            })
        }
    }

    return (
        <section style={{marginBottom: '1rem'}}>
            <Title level={2}> Annotations</Title>
            {displayAnotations()}
        </section>
    );
}