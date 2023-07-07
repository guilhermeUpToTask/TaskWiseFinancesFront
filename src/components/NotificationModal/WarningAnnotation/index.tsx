import React from 'react';
import type { IAnotation } from '../../../lib/types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { ConfigProvider } from 'antd';
import AnnotationBtn from '../../commun/UI/Annotation/AnnotationBttn';
import AnnotationStatus from '../../commun/UI/Annotation/AnnotationStatus';
const { Title, Paragraph } = Typography;

interface IWarningAnnotation {
    annotation: IAnotation;
    prev: () => void;
    next: () => void;
}

export default function WarningAnnotation(props: IWarningAnnotation): React.ReactElement {
    const arrowStyle = {
        margin: '0px 1rem',
    }

    //we should fix the arrows behaver and the button on the carousel
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: props.annotation.color,
                },
            }}
        >
            <article style={{
                border: '1px solid', borderColor: props.annotation.color, padding: '10px'
            }}>
                <Title style={{ textAlign: 'center', color: props.annotation.color }} level={3} >{props.annotation.name}</Title>
                <Paragraph>{props.annotation.description}</Paragraph>
                <Title level={4} style={{ color: props.annotation.color }} >
                    Date: {props.annotation.date.format('YYYY-MM-DD')}
                    </Title>
                <Title level={4} style={{ color: props.annotation.color }} >
                    Status: <AnnotationStatus status={props.annotation.status} />
                </Title>
                <Title level={4} style={{ color: props.annotation.color }} >
                    Value: ${props.annotation.value}
                    </Title>


                <section style={{ textAlign: 'center' }}>
                    <Button onClick={props.prev} size='large' icon={<LeftOutlined />} style={arrowStyle} shape='circle' />
                    <AnnotationBtn type={props.annotation.type} />
                    <Button onClick={props.next} size='large' icon={<RightOutlined />} style={arrowStyle} shape='circle' />
                </section>
            </article>
        </ConfigProvider>
    )
}

