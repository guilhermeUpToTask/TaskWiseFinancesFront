import React from 'react';
import { Typography } from 'antd';

const {Title} = Typography;

export default function CalendarHeader() : React.ReactElement {
    return (
        <article>
            <Title level={2}>Financial Management Calendar</Title>
            <section>{'<'} February 2024 {'>'}</section>
            <section>{'<'} Today: 24 February 2023 {'>'}</section>
        </article>
    )
}