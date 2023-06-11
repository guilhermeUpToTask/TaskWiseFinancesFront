import React from 'react';
import AnotationForm from '.';

 export default function () : React.ReactElement
 {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    }
    
    return <AnotationForm formName={'create-anotation'} onFinish={onFinish}/>;
}


