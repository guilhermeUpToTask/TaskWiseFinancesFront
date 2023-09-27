import React, { useState } from 'react';
import { WalletOperation } from '../../../../../lib/types';
import OperationCard from './OperationCard';
import { deleteWalletOperation } from '../../../../../services/operations';
import useOperationsByMonth from '../../../../../hooks/useOperationsByMonth';
import dayjs from 'dayjs';
import useWalletQuery from '../../../../../hooks/useWalletQuery';

interface IConnectOperationProps {
    operation: WalletOperation;
    messageFns: {
        onLoading: () => void;
        onSuccess: () => void;
        onError: () => void;
    }
}

export default function ConnectOperation(props: IConnectOperationProps): React.ReactElement {
    const { refetch: refetchOperations } = useOperationsByMonth(dayjs(props.operation.date));
    const {refetch: refetchWallet} = useWalletQuery();

    const [isLoading, setIsLoading] = useState(false);

    const onDelete = async (operation_id: number):Promise<void> => {
        try {
            setIsLoading(true);
            props.messageFns.onLoading();

            await deleteWalletOperation(operation_id)

            refetchOperations();
            refetchWallet();
            
            setIsLoading(false);
            props.messageFns.onSuccess();


        } catch (e) {
            setIsLoading(false);
            props.messageFns.onError();
        }
    }

    return (
        <OperationCard
            operation={props.operation}
            onDelete={onDelete}
            isLoading={isLoading}
        />
    )
}