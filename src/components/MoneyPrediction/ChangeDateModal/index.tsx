import React from 'react';
import { Modal } from 'antd';


interface IChangeDeteModal {
    closeModal: () => void;
    isOpen: boolean;
    predictionDate: string;

}

export default function ChangeDateModal(props: IChangeDeteModal): React.ReactElement {

    return (
        <>
            <Modal
                open={props.isOpen}
                onCancel={props.closeModal}
                onOk={props.closeModal}
            />
        </>
    )
}