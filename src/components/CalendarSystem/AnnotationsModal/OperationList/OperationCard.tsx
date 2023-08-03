import React from 'react';
import { Card, Typography } from 'antd';
import { WalletOperation } from '../../../../lib/types';
import { COLORS_TABLE } from '../../../../lib/constants/colors';
import dayjs from 'dayjs';

const { Meta } = Card;
const { Title } = Typography;

interface OperationCardProps {
    operation: WalletOperation;
}

export default function OperationCard(props: OperationCardProps): React.ReactElement {

    const color = COLORS_TABLE[props.operation.operation_type]
    return (
        <section>


            <Card style={{ marginTop: 16, borderColor: color }}>
                <Meta
                    title={<Title level={3} style={{ textAlign: 'center', color: color }}>
                        {`${props.operation.name} Wallet Operation`}
                    </Title>}
                    description={props.operation.description}
                />
                <Title level={4}>
                    Type : <span style={{ color: color }}>{props.operation.operation_type}</span>
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