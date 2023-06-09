import React from 'react';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface ActionProps {
    onClick: () => void;
}

export const DeleteButton = (props: ActionProps) => <div onClick={props.onClick} > <DeleteOutlined /> Delete</div>
export const PayButton = (props: ActionProps) => <Button type='primary' onClick={props.onClick} > Pay</Button>
export const EditButton = (props: ActionProps) => <div onClick={props.onClick} > <EditOutlined /> Edit</div>
