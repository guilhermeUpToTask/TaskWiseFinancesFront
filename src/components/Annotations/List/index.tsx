import React, { useState } from "react";
//import useAnnotationsByPage from "../../../hooks/useAnnotationsByPage";
import { Button, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import fakeData from "../../../services/fakeAnotations";
import { Annotation, AnnotationWithKey } from "../../../lib/types";
import getColumns from "./columns";


type OnChange = NonNullable<TableProps<AnnotationWithKey>['onChange']>;
type GetSingle<T> = T extends (infer U)[] ? U : never;
export type Filters = Parameters<OnChange>[1];
export type Sorts = GetSingle<Parameters<OnChange>[2]>;
type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface IListProps {
    page: number,
    size: number
}

function addKeyProperty(annotations: Annotation[]): AnnotationWithKey[] {
    return annotations.map(annotation => ({
        ...annotation,
        key: annotation.id,
    }));
}
const annotationsDate = fakeData

export default function List(props: IListProps): React.ReactElement {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection: TableRowSelection<AnnotationWithKey> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const clearSelected = () => {
        setSelectedRowKeys([])
    }

    const handleChange: TableProps<AnnotationWithKey>['onChange'] = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
        setSelectedRowKeys([])
    };



    /* const { data: annotationsData, isLoading: annonIsLoading }
      //   = useAnnotationsByPage({page:props.page, size:props.size});
 
     if (annonIsLoading)
         return (
             <>
                 List is Loading
             </>
         )
     */

    return (
        <Space direction="vertical" align='center'>
            <Space align="center" direction="vertical">
                <Button type="primary" onClick={clearSelected} disabled={!hasSelected}>
                    Clear Selected
                </Button>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
            </Space>
            <Space>
                <Button onClick={clearFilters}>
                    Clear Filters
                </Button>
                <Button onClick={clearAll}>
                    Clear All
                </Button>
            </Space>
            <Table
                rowSelection={rowSelection}
                columns={getColumns(filteredInfo, sortedInfo)}
                dataSource={addKeyProperty(annotationsDate)}
                onChange={handleChange}
            />
        </Space>
    )
}
