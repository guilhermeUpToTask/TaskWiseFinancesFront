import React, { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { calculateFutureMoney } from '../../services/annotations';
import useWarningsByDate from '../../hooks/useWarningsByPredDate';
import usePredictionDateQuery from '../../hooks/usePredictionDateQuery';
import useWalletQuery from '../../hooks/useWalletQuery';
import ChangeDateModal from './ChangeDateModal';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons'

export default function MoneyPrediction(): React.ReactElement {
    const { data: wallet, error: walletError } = useWalletQuery();
    const { data: predictionDate, error: predictionDateError } = usePredictionDateQuery();
    const { data: warnings, error: warningsError } = useWarningsByDate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const getCalculatedPrediction = useCallback((): number => {

        if (warnings && wallet && predictionDate) {
            return calculateFutureMoney(warnings, wallet, dayjs(predictionDate));
        }
        return 0;
    }, [warnings, wallet, predictionDate]);


    const closeModal = () => {
        setIsModalOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }

    return (
        <section>
            <span style={{ color: '#9148bf' }}>
                Prediction for {dayjs(predictionDate).format('DD/MM')}:
            </span>
            {
                (walletError || warningsError || predictionDateError) ? 'Error...' :
                    getCalculatedPrediction().toFixed(2)
            }
            <Button
                onClick={openModal}
                type="primary"
                shape="circle"
                size="large"
                icon={<SettingOutlined />}
            />
            <ChangeDateModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                predictionDate={predictionDate || dayjs().format('YYYY-MM-DD')}
            />
        </section>
    )
}