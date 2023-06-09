import React from "react";
import {Card, ConfigProvider, Typography  } from 'antd';
import {EditButton, DeleteButton, PayButton} from "./CardsActions";
const { Meta } = Card;
const { Title } = Typography;

export default function (): React.ReactElement{
    const onDelete = () => {
    }
    const onPay = () => {
    }
    const onEdit = () => {
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
            title={<Title level={3} style={{ textAlign: 'center', color: 'green'}}>Energy Bill We need now to create dynamic cards</Title>}
            description="This is the description"
        />
        <Title level={4}>Current Bill: <span style={{color: 'green', fontWeight: 'bold'}}>$100</span></Title>
        <Title level={4}>Current Status: <span style={{color: 'yellow', fontWeight: 'bold'}}>Pendent</span></Title>
    </Card>
    </ConfigProvider>
    )
}