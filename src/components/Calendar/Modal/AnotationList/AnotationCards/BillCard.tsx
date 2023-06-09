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
                colorPrimary: 'red',
            },
        }}
    >
        <Card style={{ marginTop: 16, borderColor: 'red' }}
        
            actions={
            [    < EditButton onClick={onEdit}/>,
            <PayButton onClick={onPay}/>,
                <DeleteButton onClick={onDelete}/>,
            ]} >
            <Meta
                title={<Title level={3} style={{ textAlign: 'center', color: 'red'}}>Energy Bill Anotation</Title>}
                description="This is the description"
            />
            <Title level={4}>Current Bill: <span style={{color: 'red', fontWeight: 'bold'}}>$100</span></Title>
            <Title level={4}>Current Status: <span style={{color: 'red', fontWeight: 'bold'}}>Expired</span></Title>
        </Card>
    </ConfigProvider>
    )
}