import React from 'react';
import AnnotationForm from '../index';
import { NewAnnotation } from '../../../../../lib/types';
import { Dayjs } from 'dayjs';


interface ICreateAnnotation {
    selectedDate: Dayjs;
    isLoading: boolean;
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

    return <AnnotationForm formName={'create-anotation'} onFinish={onFinish}  isLoading={props.isLoading}/>;
}


