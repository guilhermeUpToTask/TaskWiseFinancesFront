import React from 'react';
import Form from './index';

interface IConnectMovFormProps {
    movementType: string
}

export default function ConnectMovForm(props : IConnectMovFormProps) : React.ReactElement {

    const onFinishHandle = (values: any) : void => {
        console.log(values);
    }

    return (
        <>
            <Form onFinish={onFinishHandle} {...props} />
        </>
    )
}