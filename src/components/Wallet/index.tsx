import React, { useState } from 'react';
import { Typography } from 'antd';
import { WalletOutlined } from '@ant-design/icons';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import OperationModal from './OperationModal';
import { OperationType } from '../../lib/types';
import useWalletQuery from '../../hooks/useWalletQuery';

const { Title } = Typography;


export default function Wallet(): React.ReactElement {
    const [showModal, setShowModal] = useState(false);
    const [operationType, setOperationType] = useState<OperationType>('income');

    const { isLoading, error, data: wallet } = useWalletQuery();

    const closeModal = () => {
        setShowModal(false);
    }
    const openModal = (opType: OperationType) => {
        setOperationType(opType);
        setShowModal(true);
    }

    if (error) {
        console.error(error);
        return (<section> Wallet : Error </section>)
    }


    return (
        <>
            <section style={{ display: 'flex', alignItems: 'center' }}>
                <Title level={4} style={{ margin: '0px' }}>
                    <WalletOutlined /> Wallet:
                    <MinusButton onClick={() => openModal('expanse')} />

                    <span>${(isLoading) ? 'Loading...' : wallet}</span>
                    <PlusButton onClick={() => openModal('income')} />
                </Title>
            </section>
            <OperationModal open={showModal} operationType={operationType} closeModal={closeModal} />
        </>
    )
}

