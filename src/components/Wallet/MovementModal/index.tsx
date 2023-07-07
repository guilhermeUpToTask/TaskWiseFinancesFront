import React from 'react';
import { Modal, Typography, Button, ConfigProvider } from 'antd';
import ConnectMovForm from './Form/ConnectedMovForm';

const { Title } = Typography;

interface IWalletModalProps {
    open: boolean;
    closeModal: () => void;
    movementType: 'expense' | 'income';
}

const colorMap = {
    ['expense']: 'red',
    ['income']: 'green'
}

export default function WalletModal(props: IWalletModalProps): React.ReactElement {

    const onOkhandler = () => {
        //create a new anotation here
        //NEED To create consts for expanse and income
        props.closeModal();

    }

    const onCancelHandler = () => {
        props.closeModal();
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: colorMap[props.movementType],
                },
            }}
        >
            <Modal
                title={
                    <Title level={2} style={{ textAlign: 'center' }}>
                        Create New {props.movementType}
                    </Title>
                }
                open={props.open}
                onCancel={onCancelHandler}
                onOk={onOkhandler}
                width={800}
                footer={<></>}
            >
                <ConnectMovForm movementType={props.movementType} />
            </Modal>

        </ConfigProvider>
    )
}