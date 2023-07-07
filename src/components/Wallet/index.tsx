import React, { useState } from 'react';
import fetchWallet from './fetchWallet';
import { useQuery } from 'react-query';
import { Typography } from 'antd';
import { WalletOutlined } from '@ant-design/icons';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import WalletModal from './MovementModal';

const { Title } = Typography;


export default function Wallet(): React.ReactElement {
    const [showModal, setShowModal] = useState(false);
    const [movementType, setMovementType] = useState<'expense' | 'income'>('income');

    const { isLoading, error, data: wallet } = useQuery<number>('wallet', fetchWallet)

    const closeModal = () => {
        setShowModal(false);
    }
    const openModal = (movType: 'expense' | 'income') => {
        setMovementType(movType);
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
                <MinusButton onClick={() => openModal('expense')}/>

                <span>${(isLoading) ? 'Loading...' : wallet}</span>
                <PlusButton onClick={() => openModal('income')}/>
            </Title>
        </section>
        <WalletModal open={showModal} movementType= {movementType} closeModal={closeModal} />
        </>
    )
}

