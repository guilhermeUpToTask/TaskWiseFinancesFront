import React, { useState } from 'react';
import { Modal, Typography } from 'antd';
import ModalForm from './AnotationForm/';

const { Title } = Typography;

export default function (props: any) {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Anotations should  be here');



  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);


    setTimeout(() => {
      props.closeModal();
      setConfirmLoading(false);
    }, 2000);

  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    props.closeModal();
  };



  return (
    <Modal
      title={
        <Title level={3} style={{textAlign:'center'}}>
        {`Anotations of Day - ${props.date.format('YYYY-MM-DD')}`}
        </Title>
      }
      open={props.open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={1000}
    >
      <p>{modalText}</p>
      <Title level={4} style={{textAlign:'center'}}>Create new Anotation</Title>
      <ModalForm />
    </Modal>
  )
}
