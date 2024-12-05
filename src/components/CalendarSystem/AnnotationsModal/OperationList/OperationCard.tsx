import React from 'react';
import { Button, Card, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { COLORS_TABLE } from '../../../../lib/constants/colors';
import dayjs from 'dayjs';
import { Operation } from '../../../../client/models/operationModel';
import { useMutationWithMessage } from '../../../../hooks/useMutationWithMessage';
import OperationService, { TDataDeleteOperation } from '../../../../client/services/operationService';

const { Meta } = Card;
const { Title } = Typography;

interface OperationCardProps {
    operation: Operation;
}

export default function OperationCard(props: OperationCardProps): React.ReactElement {
    const color = COLORS_TABLE[props.operation.type];
    const {mutate: mutateDelete, isLoading} = useMutationWithMessage<TDataDeleteOperation, Operation>({
        serviceFunction:OperationService.deleteOperation
})


    const onDeleteHandler = () => {
        console.log('delete operation');
        mutateDelete({id:props.operation.id})

    }


    return (
        <section>

            <Card style={{ marginTop: 16, borderColor: color }}
                title={<Title level={3} style={{ textAlign: 'center', color: color }}>
                    {`${props.operation.name} - Wallet Operation`}
                </Title>}
                extra={
                    <Button
                        type="text"
                        shape="circle"
                        size='large'
                        icon={<CloseOutlined />}
                        loading={isLoading}
                        onClick={onDeleteHandler}
                    
                    />
                }>
                <Meta
                    description={props.operation.description}
                />
                <Title level={4}>
                    Type : <span style={{ color: color }}>{props.operation.type}</span>
                </Title>
                <Title level={4} >
                    Value : <span style={{ color: color }}>{props.operation.value}</span>
                </Title>
                <Title level={4}>
                    Date : <span style={{ color: color }}>{dayjs(props.operation.date).format('YYYY-MM-DD')}</span>
                </Title>
            </Card>
        </section>
    )
}