import React from 'react';
import { AnnotationType } from '../../../../lib/types';
import * as ANN_CONSTANTS from '../../../../lib/constants/annotations'
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

interface IAnnotationBttnProps {
    type: AnnotationType,
    style?: React.CSSProperties,
    onClick?: () => void,
    disabled: boolean,
    isLoading?: boolean
}

export default function AnnotationBttn(props: IAnnotationBttnProps): React.ReactElement {
    const BtnTypeMap = {
        [ANN_CONSTANTS.BILL_TYPE]:
            <Button
                type="primary"
                shape="round"
                size="large"
                style={props.style}
                onClick={props.onClick}
                disabled={props.disabled} icon={<CheckOutlined />}>

                {props.disabled ? 'Payed' : 'Pay'}

            </Button>,
        [ANN_CONSTANTS.PAYMENT_TYPE]:
            <Button 
            type="primary" 
            shape="round" 
            size="large" 
            style={props.style} 
            onClick={props.onClick} 
            disabled={props.disabled}
            loading={props.isLoading}
            icon={'$'} >
                {props.disabled ? 'Recived' : 'Recive'}
            </Button>,
    }

    return (
        <>
            {BtnTypeMap[props.type]}
        </>)
}