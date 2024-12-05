import React from 'react';
import { Typography } from 'antd';
import { Annotations } from '../../../../client/models/annotationModel';
import AnnotationCard from './AnnotationCard';


const { Title } = Typography;


interface IAnnotationListProps {
    annotations: Annotations
}

export default function AnnotationList(props: IAnnotationListProps): React.ReactElement {



    const displayAnotations = () => {
        return props.annotations.map(annotation => {
            return <AnnotationCard
                annotation={annotation}
                key={annotation.id} />
        })
    }

    return (
        <section style={{ marginBottom: '1rem' }}>
            <Title level={2}> Annotations</Title>
            {displayAnotations()}
        </section>
    );
}