import React from 'react';
import { Annotation, AnnotationType } from '../../../../../lib/types';
import { message } from 'antd';
import ConnectAnnotationCard from './ConnectAnnotationCard';


interface IWithMsgProps {
    annotation: Annotation;
    annon_type: AnnotationType;
}

export default function WithMsgAnnCard(props: IWithMsgProps): React.ReactElement {
    const [messageApi, contextHolder] = message.useMessage();


    const onLoading = (key:'confirm' | 'delete') => {
        messageApi.open({
            key,
            type: 'loading',
            content:
                (key === 'confirm') ?
                `Confirming the Annotation...` :
                'Deleting the Annotation...',
        });
    }

    const onSuccess =  (key:'confirm' | 'delete') => {
        messageApi.open({
            key,
            type: 'success',
            content:
                (key === 'confirm') ?
                `Successfully Confirmed the Annotation!` :
                'Successfully Deleted the Annotation!',
        });

    }

    const onError = (key:'confirm' | 'delete') => {
        messageApi.open({
            key,
            type: 'error',
            content:
            (key === 'confirm') ?
            `Failed to Confirm the Annotation!` :
            'Failed to Delete the Annotation!',
        })
    }

    return (
        <>
            {contextHolder}
            <ConnectAnnotationCard
                annotation={props.annotation}
                annon_type={props.annon_type}
                messageFns={{ onLoading, onSuccess, onError }}
            />
        </>
    )
}