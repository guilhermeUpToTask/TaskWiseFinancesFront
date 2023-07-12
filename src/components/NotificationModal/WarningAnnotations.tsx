import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import type { Annotation } from '../../lib/types';
import WarningAnnotation from './WarningAnnotation';




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

    return (
        <>
        <Carousel ref={carouselRef}  dots={false} autoplay={false} className="warning-annotations">
            {props.warningList.map((annotation) => (
                <WarningAnnotation annotation={annotation} prev={prev} next={next} key={annotation.id} />
            ))}
        </Carousel>
        </>

    );

}