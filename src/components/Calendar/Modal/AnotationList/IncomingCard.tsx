import React from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {Card, ConfigProvider } from 'antd';
const { Meta } = Card;

export default function (): React.ReactElement{

    return (
        <ConfigProvider
        theme={{
            token: {
                colorPrimary: 'green',
            },
        }}
    >
        <Card style={{ marginTop: 16, borderColor: 'green' }}
            actions={[
               <div><DeleteOutlined key="delete" /> Delete</div> ,
               <div>Recive</div>,
               <div><EditOutlined key="edit" /> Edit</div>,
            ]}>
            <Meta
                title={<h3 style={{ textAlign: 'center', color: 'green' }}>Incoming Bill Anotation</h3>}
                description="This is the description"
            />
        </Card>
    </ConfigProvider>
    )
}