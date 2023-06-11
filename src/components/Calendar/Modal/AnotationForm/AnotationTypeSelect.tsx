import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

interface IAnotationTypeSelectProps {
    value?: string;
}
export default function (props : IAnotationTypeSelectProps): React.ReactElement {

    return(
        <Select
        placeholder="Select wich type the Anotation is"
        allowClear
        value={(props.value) ? (props.value) : ''}
    >
        <Option value="incoming">Incoming</Option>
        <Option value="bills">Bill</Option>
    </Select>
    )
}