import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
export default function (): React.ReactElement {

    return(
        <Select
        placeholder="Select wich type the Anotation is"
        allowClear
    >
        <Option value="incoming">Incoming</Option>
        <Option value="bill">Bill</Option>
    </Select>
    )
}