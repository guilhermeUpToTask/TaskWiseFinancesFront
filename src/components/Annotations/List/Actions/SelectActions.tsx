import { Button, Space } from 'antd';
import React from 'react';

interface ISelectActions{
    clearSelected: () => void;
    hasSelected: boolean;
    selectedRowKeys: React.Key[];
}

export default function SelectedActions(props: ISelectActions): React.ReactElement {

    return (
        <Space align="center" direction="vertical">
        <Button type="primary" onClick={props.clearSelected} disabled={!props.hasSelected}>
            Delete Selected
        </Button>
        <Button type="primary" onClick={props.clearSelected} disabled={!props.hasSelected}>
            Check Selected
        </Button>
        {props.hasSelected ? `Selected ${props.selectedRowKeys.length} items` : null}
    </Space>
    )
}