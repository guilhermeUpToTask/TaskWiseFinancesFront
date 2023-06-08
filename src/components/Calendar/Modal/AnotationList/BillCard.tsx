import React from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {Card, ConfigProvider, Button } from 'antd';
const { Meta } = Card;

export default function (): React.ReactElement{

    return (
        <ConfigProvider
        theme={{
            token: {
                colorPrimary: 'red',
            },
        }}
    >
        <Card style={{ marginTop: 16, borderColor: 'red' }}
            actions={[
               <div><DeleteOutlined key="delete" /> Delete</div> ,
               <Button type="primary">Pay</Button>,
               <div><EditOutlined key="edit" /> Edit</div>,
            ]}>
            <Meta
                title={<h3 style={{ textAlign: 'center', color: 'red' }}>Energy Bill Anotation</h3>}
                description="This is the description"
            />
        </Card>
    </ConfigProvider>
    )
}