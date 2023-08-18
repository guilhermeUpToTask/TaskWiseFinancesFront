import React from 'react';
import { Modal, Typography, ConfigProvider } from 'antd';
import ConnectedOperationForm from './Form/ConnectOperationForm';
import { OperationType } from '../../../lib/types';

const { Title } = Typography;

interface IWalletModalProps {
    open: boolean;
    closeModal: () => void;
    operationType: OperationType
}

const colorMap = {
    ['expanse']: 'red',
    ['income']: 'green'
}

export default function WalletModal(props: IWalletModalProps): React.ReactElement {


    const onCancelHandler = () => {
        props.closeModal();
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: colorMap[props.operationType],
                },
            }}
        >
            <Modal
                title={
                    <Title level={2} style={{ textAlign: 'center' }}>
                        Create New {props.operationType}
                    </Title>
                }
                open={props.open}
                onCancel={onCancelHandler}
                width={800}
                footer={<></>}
            >
                <ConnectedOperationForm operationType={props.operationType} closeModal= {onCancelHandler} />
            </Modal>

        </ConfigProvider>
    )
}