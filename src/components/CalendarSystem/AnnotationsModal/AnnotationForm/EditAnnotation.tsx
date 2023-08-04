import React from 'react';
import AnotationForm from '.';
import type { Annotation } from '../../../../lib/types';

interface IEditAnnotation {
    annotation: Annotation;
    connect: (newAnnotation: Annotation) => void;
}

export default function EditAnnotation(props: IEditAnnotation): React.ReactElement {
    const onFinish = (values: any) => {
        console.log('Success:', values);

        const updatedAnnotation: Annotation = {
            id: props.annotation.id,
            name: values.annotation_name,
            description: values.annotation_description,
            date: props.annotation.date, // for now we will not edit the date
            status: props.annotation.status, // we need a option to change the status
            repeat: props.annotation.repeat,
            annon_type: values.annotation_type,
            value: values.annotation_value,
        }
        props.connect(updatedAnnotation);

    }

    return <AnotationForm formName={`edit-anotation-${props.annotation.id}`}
        onFinish={onFinish} values={props.annotation} />;
}
