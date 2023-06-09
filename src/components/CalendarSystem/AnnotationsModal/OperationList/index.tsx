import React from 'react';
import type { WalletOperation } from '../../../../lib/types';
import { Dayjs } from 'dayjs';
import { useQuery } from 'react-query';
import OperationCard from './operationCard';
import { Typography } from 'antd';

const { Title } = Typography;

interface OperationListProps {
    seletectedDate: Dayjs;

}

export default function OperationList(props: OperationListProps): React.ReactElement {
    const { data: operations, isLoading, error } = useQuery<WalletOperation[]>('walletOperations');


    const displayOperations = () => {
        if (isLoading) return <div>Loading...</div>
        if (error) return <div>Error...</div>
        if (!operations || operations.length <= 0) return <div>No operations found</div>

        const filtheredOperations = operations.filter((operation) => {
            return operation.date.isSame(props.seletectedDate, 'day')
        })

        if (!filtheredOperations || filtheredOperations.length === 0) {
            return <div>No operations for this Day</div>
        }
        return filtheredOperations.map((operation) => {
            return (<OperationCard operation={operation} key={operation.id} />)
        })
    }

    return (
        <>
            <Title level={2}>Wallet Operations</Title>
            {displayOperations()}
        </>
    )
}