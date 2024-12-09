import React from 'react';
//import dayjs from 'dayjs';
import List from './List';
import { Space } from 'antd';
import AnnotationService from '../../client/services/annotationService';
import useDataQuery from '../../hooks/useDataQuery';


//const currentDate = dayjs()
// Change the pagination fetching, we will do locally, fetch by month or by year the annotations


export default function Annotations(): React.ReactElement {

    const { data: annotations, isLoading }
    = useDataQuery(
      ['annotations'],
      () => AnnotationService.readAnnotations()
    )
    if (isLoading)
        return (
            <>
                Annotation List is Loading
            </>
        )
    return (
        <Space direction='vertical' align='center'>
            Annotations Page
            <List annotations={annotations ? annotations : []} />
        </Space>
    )
}