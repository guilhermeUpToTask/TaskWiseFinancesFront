import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

interface IAnnotationTypeSelectProps {
    value?: string;
}
export default function AnnotationTypeSelect (props : IAnnotationTypeSelectProps): React.ReactElement {

    return(
        <Select
        placeholder="Select wich type the Anotation is"
        allowClear
        value={(props.value) ? (props.value) : ''}
    >
        <Option value="payment">Payment</Option>
        <Option value="bills">Bill</Option>
    </Select>
    )
}