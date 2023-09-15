import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import type { Annotation } from '../../lib/types';
import ConnectWarningAnnotation from './WarningAnnotation/ConnectWarningAnnotation';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';



interface IWarningAnnotations {
    warningList: Annotation[];
}

export default function WarningAnnotations(props: IWarningAnnotations): React.ReactElement {

    const carouselRef = useRef<CarouselRef | null>(null);

    const next = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };
    const prev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const carouselSectionStyle: React.CSSProperties = {
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.5rem',
        boxSizing: 'border-box',

    }
    
    return (
        <section style={carouselSectionStyle}>
            {}
            <Button onClick={prev} size='large' icon={<LeftOutlined />} shape='circle' />

            <section style={{ width: '90%' }}>
                <Carousel
                    ref={carouselRef}
                    dots={false}
                    autoplay={false}
                    className="warning-annotations"

                >
                    {props.warningList.map((annotation) => (
                        <ConnectWarningAnnotation
                            annotation={annotation}
                            key={annotation.id}
                        />
                    ))}
                </Carousel>
            </section>

            <Button onClick={next} size='large' icon={<RightOutlined />} shape='circle' />
        </section>

    );

}