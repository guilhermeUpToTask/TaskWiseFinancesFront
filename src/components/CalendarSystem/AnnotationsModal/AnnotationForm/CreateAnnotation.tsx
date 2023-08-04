import React from 'react';
import AnotationForm from '.';
import { NewAnnotation } from '../../../../lib/types';
import { Dayjs } from 'dayjs';


interface ICreateAnnotation {
    selectedDate: Dayjs;
    connect: (newAnnotation: NewAnnotation) => void;
}

export default function CreateAnnotation(props: ICreateAnnotation): React.ReactElement {
    const onFinish = (values: any) => {
        console.log('Success:', values);

        const newAnnotation: NewAnnotation = {
            name: values.annotation_name,
            description: values.annotation_description,
            annon_type: values.annotation_type,
            value: values.annotation_value,
            status: 'pendent',
            date: props.selectedDate.format('YYYY-MM-DD'),
            repeat: 'never'
        }
        props.connect(newAnnotation);
    }

    return <AnotationForm formName={'create-anotation'} onFinish={onFinish} />;
}


