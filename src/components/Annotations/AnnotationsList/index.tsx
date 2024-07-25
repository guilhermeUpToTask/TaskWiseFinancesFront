import React from "react";
import useAnnotationsByMonth from "../../../hooks/useAnnotationsByMonth";
import { Table } from "antd";
import { Dayjs } from "dayjs";


interface IAnnotationsListProps {
    currentDate: Dayjs
}

const columns = [
    {
        key: 'name',
        title: 'Name',
        dataIndex: 'name'
    },
    {
        key: 'title',
        title: 'Title',
        dataIndex: 'title'
    },
    {
        key: 'date',
        title: 'Date',
        dataIndex: 'date'
    },
]


export default function AnnotationsList(props: IAnnotationsListProps): React.ReactElement {

    const { data: annotationsData, isLoading: annonIsLoading }
        = useAnnotationsByMonth(props.currentDate);

    if (annonIsLoading)
        return (
            <>
                List is Loading
            </>
        )

    return (
        <>
            <Table dataSource={annotationsData} columns={columns}/>
        </>
    )
}
