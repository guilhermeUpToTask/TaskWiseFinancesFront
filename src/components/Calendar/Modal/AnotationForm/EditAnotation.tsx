import React from 'react';
import AnotationForm from '.';
import type { IAnotation } from '../../../../lib/types';

interface IEditAnotation {
    anotation: IAnotation;
}

 export default function (props: IEditAnotation) : React.ReactElement
 {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    }
    
    return <AnotationForm formName={`edit-anotation-${props.anotation.id}`} onFinish={onFinish} values={props.anotation}/>;
}
