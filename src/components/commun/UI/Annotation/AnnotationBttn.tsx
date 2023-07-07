import React from 'react';
import { AnnotationType } from '../../../../lib/types';
import {ANN_TYPES_LIST } from '../../../../lib/constants/annotations';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

interface IAnnotationBttnProps  {
    type: AnnotationType,
    style?: React.CSSProperties,
    onClick?: () => void
}

export default function AnnotationBttn(props: IAnnotationBttnProps) :React.ReactElement {
    const BtnTypeMap = {
        [ANN_TYPES_LIST.BILL_TYPE]: 
        <Button type="primary" shape="round" size="large" style={props.style} onClick={props.onClick} icon={<CheckOutlined />}>Pay</Button>,
        [ANN_TYPES_LIST.PAYMENT_TYPE]: 
        <Button type="primary" shape="round" size="large" style={props.style} onClick={props.onClick} icon={'$'}>Recive</Button>,
    }


    return (
    <>
    {BtnTypeMap[props.type]	}
    </>)
}