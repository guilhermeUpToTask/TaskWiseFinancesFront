import React from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PresetColors } from 'antd/es/theme/internal';
const GREEN = 3;

interface IPlusButtonProps {
    onClick: () => void;
}

export default function PlusButton(props: IPlusButtonProps) : React.ReactElement {
 return (
    <Tooltip title="Create new Incoming" color='green' placement='bottom'>
     <Button type="primary" shape='circle' size='large' onClick={props.onClick}  icon={<PlusOutlined style={{color:PresetColors[GREEN]}} />}/>
     </Tooltip>
     )
}