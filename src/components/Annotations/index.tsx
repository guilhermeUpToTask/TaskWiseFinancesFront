import React from 'react';
//import dayjs from 'dayjs';
import List from './List';
import { Space } from 'antd';

//const currentDate = dayjs()
// Change the pagination fetching, we will do locally, fetch by month or by year the annotations


enum Pagination{
    PAGE=0,
    SIZE=20
}



export default function Annotations() : React.ReactElement {

    return (
        <Space direction='vertical' align='center'>
        Annotations Page
        <List page={Pagination.PAGE} size={Pagination.SIZE}/>
        </Space>
    )
}