import React from 'react';
import { Typography, Button, Space } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { MAIN_COLOR } from '../../lib/constants/colors';


const { Title } = Typography;

interface ICalendarHeaderProps {
    moveMonthBackward: () => void,
    moveMonthForward: () => void,
    currentMonth: Dayjs
}

const CalendarHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column'

}

const SelectedMonthStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem'
}

export default function CalendarHeader(props: ICalendarHeaderProps): React.ReactElement {
    return (
        <section style={CalendarHeaderStyle}>

            <Title level={2}>
                Financial Management Calendar -
                <span style={{ color: MAIN_COLOR }}>Today: {dayjs().format('DD/MM/YYYY')}</span>
            </Title>
            <Space style={SelectedMonthStyle}>
                <Button
                    onClick={props.moveMonthBackward}
                    icon={<LeftOutlined />}
                    size='large'
                    shape='circle'
                />
                <Title level={2} style={{ margin: 0 }}>
                    {props.currentMonth.format('MMMM')} of {props.currentMonth.year()}
                </Title>
                <Button
                    onClick={props.moveMonthForward}
                    icon={<RightOutlined />}
                    size='large'
                    shape='circle'
                />
            </Space >
        </section>
    )
}