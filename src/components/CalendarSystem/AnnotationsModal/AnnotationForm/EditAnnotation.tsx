import React from 'react';
import AnotationForm from '.';
import type { Annotation } from '../../../../lib/types';

interface IEditAnnotation {
    annotation: Annotation;
}

 export default function EditAnnotation(props: IEditAnnotation) : React.ReactElement
 {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    }
    
    return <AnotationForm formName={`edit-anotation-${props.annotation.id}`} 
    onFinish={onFinish} values={props.annotation}/>;
}
