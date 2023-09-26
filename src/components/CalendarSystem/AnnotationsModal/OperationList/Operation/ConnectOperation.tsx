import React,{useState} from 'react';
import {WalletOperation } from '../../../../../lib/types';
import OperationCard from './OperationCard';
import { deleteWalletOperation } from '../../../../../services/operations';
import useOperationsByMonth from '../../../../../hooks/useOperationsByMonth';
import dayjs from 'dayjs';

interface IConnectOperationProps {
    operation: WalletOperation;
    messageFns: {
        onLoading: () => void;
        onSuccess: () => void;
        onError: () => void;
    }
}

export default function ConnectOperation(props: IConnectOperationProps): React.ReactElement {
    const {refetch: refetchOperations} = useOperationsByMonth(dayjs(props.operation.date));

    const [isLoading, setIsLoading] = useState(false);

    const onDelete = async (operation: WalletOperation) => {
        try { 
            setIsLoading(true);
            props.messageFns.onLoading();

            await deleteWalletOperation({
                operation_id: operation.id,
                value: operation.value,
                op_type: operation.operation_type,
            })

            refetchOperations();
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