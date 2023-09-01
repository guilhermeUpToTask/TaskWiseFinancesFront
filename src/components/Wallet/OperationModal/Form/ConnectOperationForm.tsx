import React, { useState } from 'react';
import Form from './index';
import axiosInstance from '../../../../axiosInstance';
import { NewWalletOperation, OperationType } from '../../../../lib/types';
import useOperationsByMonth from '../../../../hooks/useOperationsByMonth';
import dayjs from 'dayjs';
import useWalletQuery from '../../../../hooks/useWalletQuery';


interface IConnectOperationFormProps {
    closeModal: () => void,
    operationType: OperationType,
    messageFns: {
        onLoading: () => void,
        onSuccess: () => void,
        onError: () => void
    }
}


export default function ConnectOperationForm(props: IConnectOperationFormProps): React.ReactElement {

    const { refetch: operationRefetch }
        = useOperationsByMonth(dayjs());
    const { refetch: walletRefetch }
        = useWalletQuery();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onConnectHandler = async (newOperation: NewWalletOperation): Promise<boolean> => {
        try {
            setIsLoading(true);
            props.messageFns.onLoading();
            const { data: { data, error, message } } =
                await axiosInstance.post('wallet_operation/create', newOperation);

            if (error) throw new Error(message);

            console.log('Sucessefully created Operation:', data, message);
            setIsLoading(false);
            props.messageFns.onSuccess();


            walletRefetch();
            operationRefetch();
            props.closeModal();

            return true;
        }

        catch (e) {
            props.messageFns.onError();
            console.error(e);
            return false;
        }
    }



    return (
        <>
            <Form
                onConnect={onConnectHandler}
                isLoading={isLoading}
                operationType={props.operationType}
            />
        </>
    )
}