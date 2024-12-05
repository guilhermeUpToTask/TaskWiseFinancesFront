import React from 'react';
import { Modal, Typography } from 'antd';
import AnnotationList from './AnnotationList';
import OperationList from './OperationList';
import { Dayjs } from 'dayjs';
import CreateAnnotationPanel from './CreateAnnotationPanel';
import { Annotations } from '../../../client/models/annotationModel';
import { Operations } from '../../../client/models/operationModel';

//rewrite the filename to calendarcelllmodal to better meaning

const { Title } = Typography;

interface IAnnotationModalProps {
  open: boolean;
  closeModal: () => void;
  selectedDate: Dayjs;
  annotationsFromDate: Annotations | undefined
  operationsFromDate: Operations | undefined
}

export default function AnnotationModal(props: IAnnotationModalProps): React.ReactElement {
  console.log('new way',props.annotationsFromDate)

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
      {props.annotationsFromDate ? <AnnotationList annotations={props.annotationsFromDate}/>: <>No Annotations</>}
      <CreateAnnotationPanel selectedDate={props?.selectedDate} />
      {props.operationsFromDate? <OperationList operations={props.operationsFromDate} /> : <>No Operations</>}


    </Modal>
  )
}
