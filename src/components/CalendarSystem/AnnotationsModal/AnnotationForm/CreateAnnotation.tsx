import React from 'react';
import AnotationForm from '.';

 export default  function CreateAnnotation() : React.ReactElement
 {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    }
    
    return <AnotationForm formName={'create-anotation'} onFinish={onFinish}/>;
}


