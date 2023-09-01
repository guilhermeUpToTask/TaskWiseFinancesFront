import React from 'react';
import { OperationType } from '../../../../lib/types';
import ConnectOperationForm from './ConnectOperationForm';
import { message } from 'antd';

interface IMessageFeedBackProps {
    closeModal: () => void,
    operationType: OperationType
}

export default function WithMsgFeedBackForm(props: IMessageFeedBackProps): React.ReactElement {
    const [messageApi, contextHolder] = message.useMessage();


    const onLoading = () => {
        messageApi.open({
            key: `${props.operationType}_Operation`,
            type: 'loading',
            content:
                `Creating ${props.operationType} Operation...`
        });
    }

    const onSuccess = () => {
        messageApi.open({
            key: `${props.operationType}_Operation`,
            type: 'success',
            content:
                `Successfully created ${props.operationType} Operation!`
        });

    }

    const onError = () => {
        messageApi.open({
            key: `${props.operationType}_Operation`,
            type: 'error',
            content:
                `Failed to create ${props.operationType} Operation!`
        })
    }

    return (
        <>
            {contextHolder}
            <ConnectOperationForm
                closeModal={props.closeModal}
                operationType={props.operationType}
                messageFns={{ onLoading, onSuccess, onError }}
            />
        </>
    )
}