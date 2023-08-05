import React, { useState } from 'react';
import Form from './index';
import axiosInstance from '../../../../axiosInstance';
import { NewWalletOperation, OperationType, WalletOperation } from '../../../../lib/types';
import { useQuery } from 'react-query';
import fetchWallet from '../../fetchWallet';
import fetchWalletOperationsByMonth from '../../../CalendarSystem/fetchWalletOperationsByMonth';
import dayjs from 'dayjs';

interface IConnectOperationFormProps {
    closeModal: () => void;
    operationType: OperationType
}

export default function ConnectOperationFormProps(props: IConnectOperationFormProps): React.ReactElement {
    const year = dayjs().year();
    const month = dayjs().month() + 1;
    const { refetch: operationRefetch }
        = useQuery<WalletOperation[]>({
            queryKey: ['operations', year, month],
            queryFn: () => fetchWalletOperationsByMonth(year, month),
        });
    const { refetch: walletRefetch }
        = useQuery<number>({
            queryKey: ['wallet'],
            queryFn: fetchWallet,
        });
    const [clearForm, setClearForm] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const onConnectHandler = async (newOperation: NewWalletOperation): Promise<void> => {
        try {
            const { data: { data, error, message } } =
                await axiosInstance.post('wallet_operation/create', newOperation);
            if (error) throw new Error(message);
            console.log('Sucessefully created Operation:', data, message);
            setClearForm(true);
            setIsLoading(false);
            walletRefetch();
            operationRefetch();
            props.closeModal();
        
        }

        catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <Form
                onConnect={onConnectHandler}
                clearForm={clearForm}
                setClearForm={setClearForm}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                operationType={props.operationType}
            />
        </>
    )
}