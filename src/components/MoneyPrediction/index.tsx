import React, { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { calculateFutureMoney } from '../../services/annotations';
import useWarningsByDate from '../../hooks/useWarningsByPredDate';
import usePredictionDateQuery from '../../hooks/usePredictionDateQuery';
import useWalletQuery from '../../hooks/useWalletQuery';
import WithMsgChangeDateModal from './ChangeDateModal/WithMsgChangeDateModal';
import { Button, Typography, Tooltip } from 'antd';
import { SettingOutlined, ClockCircleOutlined } from '@ant-design/icons'

const { Title } = Typography;

export default function MoneyPrediction(): React.ReactElement {
    const { data: wallet, error: walletError } = useWalletQuery();
    const { data: predictionDate, error: predictionDateError } = usePredictionDateQuery();
    const { data: warnings, error: warningsError } = useWarningsByDate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const getCalculatedPrediction = useCallback((): number => {
        if (warnings && wallet !== undefined && predictionDate) {
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
        <section style={{ display: 'flex', alignItems: 'center' }}>
            <Title level={4} style={{ margin: '0px' }}>
                <ClockCircleOutlined /> Prediction for {
                    (predictionDate) ? dayjs(predictionDate).format('DD/MM') : '00/00'
                }:{
                    (walletError || warningsError || predictionDateError) ? 'Error...' :
                        ` $${getCalculatedPrediction().toFixed(2)}`
                }
            </Title>

            <Tooltip title="Change Prediction Date" color='rgb(72, 191, 145)'>
                <Button
                    onClick={openModal}
                    type="text"
                    shape="circle"
                    size="large"
                    icon={<SettingOutlined />}
                />
            </Tooltip>


            <WithMsgChangeDateModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                predictionDate={predictionDate || dayjs().format('YYYY-MM-DD')}
            />
        </section>
    )
}