import React from 'react';
import AnotationForm from '.';
import type { IAnotation } from '../../../../lib/types';

interface IEditAnnotation {
    annotation: IAnotation;
}

 export default function EditAnnotation(props: IEditAnnotation) : React.ReactElement
 {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    }
    
    return <AnotationForm formName={`edit-anotation-${props.annotation.id}`} 
    onFinish={onFinish} values={props.annotation}/>;
}
