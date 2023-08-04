import React from 'react';
import { Modal, Typography } from 'antd';
import CreateAnnotation from './AnnotationForm/CreateAnnotation';
import AnotationList from './AnotationList';
import OperationList from './OperationList';
import { Dayjs } from 'dayjs';
import CreateAnnotationPanel from './CreateAnnotationPanel';

const { Title } = Typography;

interface IAnnotationModalProps {
  open: boolean;
  closeModal: () => void;
  selectedDate: Dayjs;
}

export default function AnnotationModal(props: IAnnotationModalProps): React.ReactElement {

  /*interface anotationsBlock {
    start: Date;
    end: Date;
  }*/

  return (
    <Modal
      title={
        <Title style={{ textAlign: 'center' }}>
          {`Events of Day - ${props?.selectedDate.format('YYYY-MM-DD')}`}
        </Title>
      }
      open={props.open}
      onCancel={props.closeModal}
      onOk={props.closeModal}
      width={1000}
    >
      <AnotationList selectedDate={props?.selectedDate} />
      <CreateAnnotationPanel selectedDate={props?.selectedDate} />
      <OperationList seletectedDate={props.selectedDate} />

    </Modal>
  )
}
