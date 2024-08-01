import { Button, Space } from 'antd';
import React from 'react';

interface IClearActions {
    clearFilters: () => void;
    clearSorts: () => void;
    clearAll: () => void;
    clearSelected: () => void;
    hasSelected: boolean;
}

export default function ClearActions(props: IClearActions): React.ReactElement {

    return (
        <Space>
            <Button onClick={props.clearSelected} disabled={!props.hasSelected}>
                Clear Selected
            </Button>
            <Button onClick={props.clearFilters}>
                Clear Filters
            </Button>
            <Button onClick={props.clearSorts}>
                Clear Sorts
            </Button>
            <Button onClick={props.clearAll}>
                Clear All
            </Button>
        </Space>
    )
}