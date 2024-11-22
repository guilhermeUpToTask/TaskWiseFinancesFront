import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Typography } from 'antd';
import WithMsgAnnCard from './AnotationCards/WithMsgAnnCard';
import useAnnotationsByMonth from '../../../../hooks/useAnnotationsByMonth';
import { Annotations } from '../../../../client/models/annotationModel';
import AnnotationCard from './AnnotationCard';


const { Title } = Typography;


interface IAnnotationListProps {
    annotations: Annotations
}

export default function AnnotationList(props: IAnnotationListProps): React.ReactElement {



    const displayAnotations = () => {

        if (props.annotations.length === 0) {
            return <div>No Annotations</div>
        }
        if (props.annotations.length > 0) {
            return props.annotations.map(annotation => {
                console.log('each annotation',annotation)
                return <AnnotationCard
                    annotation={annotation}
                    key={annotation.id}/>
            })
        }
    }

    return (
        <section style={{ marginBottom: '1rem' }}>
            <Title level={2}> Annotations</Title>
            {displayAnotations()}
        </section>
    );
}