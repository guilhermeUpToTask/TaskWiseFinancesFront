import React, { useState } from "react";
import {Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { Annotation, AnnotationWithKey } from "../../../lib/types";
import columnsFactory from "./columns";
import ClearActions from "./Actions/ClearActions";
import SelectedActions from "./Actions/SelectActions";


type OnChange = NonNullable<TableProps<AnnotationWithKey>['onChange']>;
type GetSingle<T> = T extends (infer U)[] ? U : never;
export type Filters = Parameters<OnChange>[1];
export type Sorts = GetSingle<Parameters<OnChange>[2]>;
type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface IListProps {
    annotations: Annotation[]
}

function addKeyProperty(annotations: Annotation[]): AnnotationWithKey[] {
    return annotations.map(annotation => ({
        ...annotation,
        key: annotation.id,
    }));
}

export default function List(props: IListProps): React.ReactElement {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

    const hasSelected = selectedRowKeys.length > 0;
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection: TableRowSelection<AnnotationWithKey> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };


    const handleChange: TableProps<AnnotationWithKey>['onChange'] = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearSorts = () => {
        setSortedInfo({});
    }
    const clearSelected = () => {
        setSelectedRowKeys([])
    }
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
        setSelectedRowKeys([])
    };


    return (
        <Space direction="vertical" align='center'>
            <SelectedActions
                clearSelected={clearSelected}
                hasSelected={hasSelected}
                selectedRowKeys={selectedRowKeys}
            />
            <ClearActions
                clearAll={clearAll}
                clearFilters={clearFilters}
                clearSorts={clearSorts}
                clearSelected={clearSelected}
                hasSelected={hasSelected}
            />
            <Table
                rowSelection={rowSelection}
                columns={columnsFactory(filteredInfo, sortedInfo)}
                dataSource={addKeyProperty(props.annotations)}
                onChange={handleChange}
            />
        </Space>
    )
}
