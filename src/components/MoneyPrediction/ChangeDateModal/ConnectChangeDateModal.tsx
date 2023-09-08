import React, { useState } from 'react';
import ChangeDateModal from '.';
import { updatePredictionDate } from '../../../services/prediction_date';
import usePredictionDateQuery from '../../../hooks/usePredictionDateQuery';

interface IConnectChangeDateModalProps {
    closeModal: () => void;
    isOpen: boolean;
    predictionDate: string;
    messageFns: {
        onLoading: () => void;
        onSuccess: () => void;
        onError: () => void;
    }
}


export default function ConnectChangeDateModal(props: IConnectChangeDateModalProps): React.ReactElement {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { refetch } = usePredictionDateQuery();

    const changePredictionDate = async (newDate: string) => {
        try {
            setConfirmLoading(true);
            props.messageFns.onLoading();

            await updatePredictionDate(newDate);

            refetch();

            props.messageFns.onSuccess();
            setConfirmLoading(false);
            props.closeModal();
            
        } catch (e) {
            props.messageFns.onError();
            setConfirmLoading(false);
        }
    }



    return (
        <ChangeDateModal
            closeModal={props.closeModal}
            isOpen={props.isOpen}
            predictionDate={props.predictionDate}
            changePredictionDate={changePredictionDate}
            confirmLoading={confirmLoading} />
    )
}