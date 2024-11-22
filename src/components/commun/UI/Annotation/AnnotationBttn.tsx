import React from 'react';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

interface IAnnotationBttnProps {
    type: 'bill' | 'payment',
    style?: React.CSSProperties,
    onClick?: () => void,
    disabled: boolean,
    isLoading?: boolean
}

export default function AnnotationBttn(props: IAnnotationBttnProps) {
    const BtnTypeNameMap = {
        ['bill']:
            props.disabled ? 'Payed' : 'Pay',

        ['payment']:
            props.disabled ? 'Recived' : 'Recive'
    }

        return (
            <>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={props.style}
                    onClick={props.onClick}
                    disabled={props.disabled}
                    loading={props.isLoading}
                    icon={props.disabled ? <CheckOutlined /> : '$'} >
                    {BtnTypeNameMap[props.type]}
                </Button>
            </>)
}