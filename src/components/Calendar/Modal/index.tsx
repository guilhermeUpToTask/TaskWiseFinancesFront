import React,{useState} from 'react';
import { Modal } from 'antd';



export default function (props:any) {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
  
  
  
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



    return(
        <Modal
        title={`Day - ${props.date.format('YYYY-MM-DD')}`}
        open={props.open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1000}
      >
        <p>{modalText}</p>
      </Modal>
    )
}
