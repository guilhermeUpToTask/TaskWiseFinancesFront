import React from 'react';
import WithMsgOperation from './Operation/WithMsgOperation';
import OperationCard from './OperationCard';
import { Typography } from 'antd';
import { Operations } from '../../../../client/models/operationModel';

const { Title } = Typography;

interface OperationListProps {
    operations: Operations
}

export default function OperationList(props: OperationListProps): React.ReactElement {


    const displayOperations = () => {

        return props.operations.map((operation) => {
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