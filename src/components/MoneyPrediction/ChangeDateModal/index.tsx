import React from 'react';
import { Modal, Space } from 'antd';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import { SettingOutlined } from '@ant-design/icons'

interface IChangeDateModalProps {
    closeModal: () => void;
    isOpen: boolean;
    predictionDate: string;
    confirmLoading: boolean;
    changePredictionDate: (newDate: string) => void;

}

export default function ChangeDateModal(props: IChangeDateModalProps): React.ReactElement {
    const [currentDate, setCurrentDate] = React.useState(props.predictionDate);


    const onChange: DatePickerProps['onChange'] = (_, dateString) => {
        setCurrentDate(dateString);
    };

    const handleConfirm = () => {
        props.changePredictionDate(currentDate);
    }

    return (
        <>
            <Modal
                title={
                    <Space>
                        <SettingOutlined />
                        Change Prediction Date
                    </Space>
                }
                open={props.isOpen}
                onCancel={props.closeModal}
                onOk={handleConfirm}
                confirmLoading={props.confirmLoading}
                destroyOnClose
            >
                <Space>
                    Current Date:
                    <DatePicker onChange={onChange} defaultValue={dayjs(props.predictionDate)} />
                </Space>
            </Modal>
        </>
    )
}