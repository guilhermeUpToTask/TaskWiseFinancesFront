import React, { useState } from 'react';
import { Typography } from 'antd';
import { WalletOutlined } from '@ant-design/icons';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import OperationModal from './OperationModal';
import { OperationType } from '../../lib/types';
import WalletService from '../../client/services/walletService';
import useDataQuery from '../../hooks/useDataQuery';

const { Title } = Typography;


export default function Wallet(): React.ReactElement {
    const [showModal, setShowModal] = useState(false);
    const [operationType, setOperationType] = useState<OperationType>('income');
    const {data:wallet, isLoading, error} = useDataQuery('wallet',WalletService.readWallet)

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

                    <span>${(isLoading) ? 'Loading...' : (wallet || 0).toFixed(2)}</span>
                    <PlusButton onClick={() => openModal('income')} />
                </Title>
            </section>
            <OperationModal open={showModal} operationType={operationType} closeModal={closeModal} />
        </>
    )
}

