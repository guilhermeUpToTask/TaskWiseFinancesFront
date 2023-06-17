import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface ActionProps {
    onClick: () => void;
}

export const DeleteButton = (props: ActionProps):React.ReactElement => 
    <div onClick={props.onClick} > <DeleteOutlined /> Delete</div>

export const EditButton = (props: ActionProps):React.ReactElement => 
    <div onClick={props.onClick} > <EditOutlined /> Edit</div>
