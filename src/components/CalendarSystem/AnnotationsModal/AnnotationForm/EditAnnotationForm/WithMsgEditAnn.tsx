import React from 'react';
import { Annotation } from '../../../../../lib/types';
import { message } from 'antd';
import ConnectEditAnnotation from './ConnectEditAnnotation';

interface IWithMsgProps {
    annotation: Annotation;
}

export default function WithMsgEditAnn(props: IWithMsgProps): React.ReactElement {
    const [messageApi, contextHolder] = message.useMessage();


    const onLoading = () => {
        messageApi.open({
            key: `Update_Annotation`,
            type: 'loading',
            content:
                `Updating  Annotation...`
        });
    }

    const onSuccess = () => {
        messageApi.open({
            key: `Update_Annotation`,
            type: 'success',
            content:
                `Successfully Update Annotation!`
        });

    }

    const onError = () => {
        messageApi.open({
            key: `Update_Annotation`,
            type: 'error',
            content:
                `Failed to update Annotation!`
        })
    }

    return (
        <>
            {contextHolder}
            <ConnectEditAnnotation
                annotation={props.annotation}
                messageFns={{ onLoading, onSuccess, onError }}
            />
        </>
    )
}