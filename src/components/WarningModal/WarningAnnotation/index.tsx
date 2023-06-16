import React from 'react';
import type { IAnotation } from '../../../lib/types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { ConfigProvider } from 'antd';
import { BTN_TABLE } from '../../../lib/constants/annotations';

const { Title, Paragraph } = Typography;

interface IWarningAnnotation {
    annotation: IAnotation;
    prev: () => void;
    next: () => void;
}

export default function (props: IWarningAnnotation): React.ReactElement {
    const arrowStyle = {
        padding: '0px 1rem',
        color: props.annotation.color,
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
            <article style={{ border: '1px solid', borderColor: props.annotation.color, padding: '10px' }}>
                <Title style={{ textAlign: 'center', color: props.annotation.color }} level={3} >{props.annotation.name}</Title>
                <Paragraph>{props.annotation.description}</Paragraph>
                <Title level={4} style={{color: props.annotation.color}} >Date: {props.annotation.date.format('YYYY-MM-DD')}</Title>
                <Title level={4} style={{color: props.annotation.color}} >Status: {props.annotation.status}</Title>
                <Title level={4} style={{color: props.annotation.color}} >Value: ${props.annotation.value}</Title>
                
        
                <section style={{ textAlign: 'center' }}>
                    <LeftOutlined style={arrowStyle} onClick={props.prev} />
                    <Button type="primary" >
                        {BTN_TABLE[props.annotation.type]}
                    </Button>
                    <RightOutlined style={arrowStyle} onClick={props.next} />
                </section>
            </article>
        </ConfigProvider>
    )
}

