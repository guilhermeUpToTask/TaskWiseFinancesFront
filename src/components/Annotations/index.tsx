import React from 'react';
//import dayjs from 'dayjs';
import List from './List';
import { Space } from 'antd';
import useAllAnnotations from '../../hooks/useAllAnnotations';


//const currentDate = dayjs()
// Change the pagination fetching, we will do locally, fetch by month or by year the annotations


export default function Annotations(): React.ReactElement {
    const { data: annotationsData, isLoading: annonIsLoading }
        = useAllAnnotations();

    if (annonIsLoading)
        return (
            <>
                Annotation List is Loading
            </>
        )
    return (
        <Space direction='vertical' align='center'>
            Annotations Page
            <List annotations={annotationsData ? annotationsData : []} />
        </Space>
    )
}