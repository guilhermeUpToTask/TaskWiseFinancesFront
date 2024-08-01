import { Tag } from 'antd';
import { AnnotationWithKey } from '../../../lib/types';
import { ColumnsType } from 'antd/es/table';
import type { Sorts, Filters } from '.';
import ColumnsAction from './Actions/ColumnsActions';

type TableFilter = { text: string, value: string }


const statusFilter: TableFilter[] = [
    {
        text: 'Pendent',
        value: 'pendent',
    },
    {
        text: 'Expired',
        value: 'expired',
    },
    {
        text: 'Payed',
        value: 'payed',
    },
    {
        text: 'Recived',
        value: 'recived',
    },
]
const annonTypeFilter: TableFilter[] = [
    {
        text: 'Bill',
        value: 'bill',
    },
    {
        text: 'Payment',
        value: 'payment',
    },
]


const columnsFactory = (filteredInfo: Filters, sortedInfo: Sorts)
    : ColumnsType<AnnotationWithKey> => [
        {
            key: 'name',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: 'description',
            title: 'Description',
            dataIndex: 'description'
        },
        {
            key: 'value',
            title: 'Value',
            dataIndex: 'value',
            sorter: {
                compare: (a, b) => a.value - b.value,
                multiple: 0
            },
            sortOrder: sortedInfo.columnKey === 'value' ? sortedInfo.order : null
        },
        {
            key: 'annon_type',
            title: 'Type',
            dataIndex: 'annon_type',
            filteredValue: filteredInfo.annon_type || null,
            filters: annonTypeFilter,
            onFilter: (value, record) => record.annon_type === value,
            sorter: {
                compare: (a, b) => a.annon_type.length - b.annon_type.length,
                multiple: 1
            },
            sortOrder: sortedInfo.columnKey === 'annon_type' ? sortedInfo.order : null,
            render: (_: unknown, record: AnnotationWithKey) => {
                return (
                    <Tag color={'red'} key={record.annon_type}>
                        {record.annon_type.toUpperCase()}
                    </Tag>
                )
            }
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
            filteredValue: filteredInfo.status || null,
            filters: statusFilter,
            onFilter: (value, record) => record.status === value,
            sorter: {
                compare: (a, b) => a.status.length - b.status.length,
                multiple: 2
            },
            sortOrder: sortedInfo.columnKey === 'status' ? sortedInfo.order : null,
        },
        {
            key: 'date',
            title: 'Date',
            dataIndex: 'date'
        },
        {
            key: 'actions',
            title: 'Actions',
            render: ColumnsAction
        }
    ]
export default columnsFactory