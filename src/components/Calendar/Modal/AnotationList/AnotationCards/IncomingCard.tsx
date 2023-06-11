import React from "react";
import {Card, ConfigProvider, Typography  } from 'antd';
import {EditButton, DeleteButton, PayButton} from "./CardsActions";
import type { IAnotation } from "../../../../../lib/types";
import EditAnotation from "../../AnotationForm/EditAnotation";
const { Meta } = Card;
const { Title } = Typography;

interface IncomingCardProps {
    anotation: IAnotation
}

export default function (props: IncomingCardProps): React.ReactElement{
    const [showEdit, setShowEdit] = React.useState(false);

    const onDelete = () => {
    }
    const onPay = () => {
    }

    const onEdit = () => {
        setShowEdit(!showEdit);
    }

    const displayEditForm = () => {
        return (showEdit ) ?
        <EditAnotation anotation={props.anotation} />
        : null;
    }

    return (
        <ConfigProvider
        theme={{
            token: {
                colorPrimary: 'green',
            },
        }}
    >
        <Card style={{ marginTop: 16, borderColor: 'green' }}
        
        actions={
        [    < EditButton onClick={onEdit}/>,
        <PayButton onClick={onPay}/>,
            <DeleteButton onClick={onDelete}/>,
        ]} >
        <Meta
            title={<Title level={3} style={{ textAlign: 'center', color: 'green'}}>{props.anotation.name}</Title>}
            description={props.anotation.description}
        />
        <Title level={4}>Current Bill: <span style={{color: 'green', fontWeight: 'bold'}}>${props.anotation.value}</span></Title>
        <Title level={4}>Current Status: <span style={{color: 'yellow', fontWeight: 'bold'}}>{props.anotation.status}</span></Title>
    </Card>
    {displayEditForm()}
    </ConfigProvider>
    )
}