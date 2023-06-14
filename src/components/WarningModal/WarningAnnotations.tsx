import React, { useRef } from 'react';
import { Carousel, Typography, Button} from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import type { IAnotation } from '../../lib/types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;



interface IWarningAnnotations {
    warningList: IAnotation[];
}

export default function (props: IWarningAnnotations) {

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
        <Carousel ref={carouselRef} dots={false} arrows={false}>
            {props.warningList.map((annotation, index) => (
                <>
                    <article key={index} style={{ textAlign: 'center' }}>
                        <Title level={3} >{annotation.name}</Title>
                        <Paragraph>{annotation.description}</Paragraph>
                        <Title level={4} >{annotation.date.format('YYYY-MM-DD')}</Title>
                        <Title level={4} >{annotation.status}</Title>
                        <Title level={4} >{annotation.value}</Title>
                        <section>
                        <Button type="primary" >
                            Pay
                        </Button>
                        <Button type="primary">
                            Skip
                        </Button>
                        </section>
                    </article>
                    <section>
                        <LeftOutlined onClick={prev} /> <RightOutlined onClick={next} />
                    </section>
                </>
            ))}
        </Carousel>
    );

}