import React from 'react';
import { Annotation } from '../../../lib/types';
import { Typography } from 'antd';
import { ConfigProvider } from 'antd';
import AnnotationBtn from '../../commun/UI/Annotation/AnnotationBttn';
import AnnotationStatus from '../../commun/UI/Annotation/AnnotationStatus';
import { COLORS_TABLE } from '../../../lib/constants/colors';
import dayjs from 'dayjs';
const { Title, Paragraph } = Typography;

interface IWarningAnnotation {
    annotation: Annotation,
    onConfirmStatus: () => void,
    isLoading: boolean
}

export default function WarningAnnotation(props: IWarningAnnotation): React.ReactElement {
    //we should fix the arrows behaver and the button on the carousel
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: COLORS_TABLE[props.annotation.annon_type],
                },
            }}
        >
            <article style={{
                border: '1px solid', borderColor: COLORS_TABLE[props.annotation.annon_type], padding: '10px',
            }}>
                <Title style={{ textAlign: 'center', color: COLORS_TABLE[props.annotation.annon_type] }} level={3} >{props.annotation.name}</Title>
                <Paragraph>{props.annotation.description}</Paragraph>
                <Title level={4} style={{ color: COLORS_TABLE[props.annotation.annon_type] }} >
                    Date: {dayjs(props.annotation.date).format('DD/MM/YYYY')}
                </Title>
                <Title level={4} style={{ color: COLORS_TABLE[props.annotation.annon_type] }} >
                    Status: <AnnotationStatus status={props.annotation.status} />
                </Title>
                <Title level={4} style={{ color: COLORS_TABLE[props.annotation.annon_type] }} >
                    Value: ${props.annotation.value}
                </Title>


                <section style={{ textAlign: 'center' }}>
                    <AnnotationBtn
                        isLoading={props.isLoading}
                        type={props.annotation.annon_type}
                        disabled={(props.annotation.status === 'recived' || props.annotation.status === 'payed')}
                        onClick={props.onConfirmStatus}
                    />
                </section>
            </article>
        </ConfigProvider>
    )
}

