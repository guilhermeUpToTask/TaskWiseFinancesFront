import React from 'react';
import { Dayjs } from 'dayjs';
import { message } from 'antd';
import ConnectCreateAnnotation from './ConnectCreateAnnotation';

interface IWithMsgProps {
    selectedDate: Dayjs,
}

export default function WithMsgCreateAnn(props: IWithMsgProps): React.ReactElement {
    const [messageApi, contextHolder] = message.useMessage();


    const onLoading = () => {
        messageApi.open({
            key: `Create_Annotation`,
            type: 'loading',
            content:
                `Creating  Annotation...`
        });
    }

    const onSuccess = () => {
        messageApi.open({
            key: `Create_Annotation`,
            type: 'success',
            content:
                `Successfully created Annotation!`
        });

    }

    const onError = () => {
        messageApi.open({
            key: `Create_Annotation`,
            type: 'error',
            content:
                `Failed to create Annotation!`
        })
    }

    return (
        <>
            {contextHolder}
            <ConnectCreateAnnotation
                selectedDate={props.selectedDate}
                messageFns={{ onLoading, onSuccess, onError }}
            />
        </>
    )
}