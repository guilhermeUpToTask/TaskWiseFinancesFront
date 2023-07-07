import React from 'react';
import { Modal, Typography, Collapse } from 'antd';
import CreateAnotation from './AnnotationForm/CreateAnnotation';
import AnotationList from './AnotationList';

import { Dayjs } from 'dayjs';
const { Panel } = Collapse;
const { Title } = Typography;

interface IAnnotationModalProps {
  open: boolean;
  closeModal: () => void;
  selectedDate: Dayjs;
}

export default function AnnotationModal (props: IAnnotationModalProps) : React.ReactElement{

  /*interface anotationsBlock {
    start: Date;
    end: Date;
  }*/

  return (
    <Modal
      title={
        <Title level={2} style={{ textAlign: 'center' }}>
          {`Anotations of Day - ${props.selectedDate.format('YYYY-MM-DD')}`}
        </Title>
      }
      open={props.open}
      onCancel={props.closeModal}
      onOk={props.closeModal}
      width={1000}
    >
      <AnotationList selectedDate={props.selectedDate}/>
      <Collapse  size="large">
        <Panel header="Create new Anotation for this Date" key="1">
          <CreateAnotation />
        </Panel>
      </Collapse>
    </Modal>
  )
}
