import React, { useState } from 'react';
import Form from './index';
import { NewWalletOperation, OperationType } from '../../../../lib/types';
import useOperationsByMonth from '../../../../hooks/useOperationsByMonth';
import { createWalletOperation } from '../../../../services/operations';
import useWalletQuery from '../../../../hooks/useWalletQuery';
import dayjs from 'dayjs';


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

            await createWalletOperation(newOperation);

            setIsLoading(false);
            props.messageFns.onSuccess();

            walletRefetch();
            operationRefetch();
            props.closeModal();

            return true;
        }

        catch (e) {
            props.messageFns.onError();
            setIsLoading(false);
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