import React from 'react';

import { message } from 'antd';
import ConnectChangeDateModal from './connectChangeDateModal';

interface IWithMsgChangeDateModalProps {
    closeModal: () => void;
    isOpen: boolean;
    predictionDate: string;
}


export default function WithMsgChangeDateModal(props: IWithMsgChangeDateModalProps): React.ReactElement {
    const [messageApi, contextHolder] = message.useMessage();


    const onLoading = () => {
        messageApi.open({
            key: `update_prediction_date`,
            type: 'loading',
            content:
                `Updating  Prediction Date...`
        });
    }

    const onSuccess = () => {
        messageApi.open({
            key: `update_prediction_date`,
            type: 'success',
            content:
                `Successfully Updated Prediction Date!`
        });

    }

    const onError = () => {
        messageApi.open({
            key: `update_prediction_date`,
            type: 'error',
            content:
                `Failed to Update Prediction Date!`
        })
    }

    return (
        <>
            {contextHolder}
            <ConnectChangeDateModal
                closeModal={props.closeModal}
                isOpen={props.isOpen}
                predictionDate={props.predictionDate}
                messageFns={{ onLoading, onSuccess, onError }}
            />
        </>
    )
}