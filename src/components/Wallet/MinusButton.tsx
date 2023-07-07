import React from 'react';
import { Button, Tooltip } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import { PresetColors } from 'antd/es/theme/internal';
const RED = 6;

interface MinusButtonProps {
    onClick: () => void;
}

export default function MinusButton(props: MinusButtonProps) : React.ReactElement {
 return (
    <Tooltip title="Create new Expanse" color='red' placement='bottom'>
     <Button type="primary" shape='circle' size='large' onClick={props.onClick} icon={<MinusOutlined style={{color:PresetColors[RED]}} />}/>
    </Tooltip> 
    )
}