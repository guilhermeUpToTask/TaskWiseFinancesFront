import React from 'react';
import { Typography, Modal, Button, Spin } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AnnotationList from '../CalendarSystem/AnnotationsModal/AnnotationList';
import useDataQuery from '../../hooks/useDataQuery';
import AnnotationService from '../../client/services/annotationService';
import { WARNING_TIME_INTERVAL } from '../../lib/constants';

const { Title } = Typography;

interface INotificationModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NotificationModal(props: INotificationModal): React.ReactElement {
    //const { data: warningList, isLoading, error } = useWarningsQuery();
    const TdataWarnings = {time_interval:WARNING_TIME_INTERVAL}

    const {data: warningList, isLoading, error} = useDataQuery(
        ['warnings',TdataWarnings],
        () => AnnotationService.readWarnings(TdataWarnings))


    const closeModal = () => {
        props.setOpen(false);
    };

    const renderModalContent = () => {
        if (isLoading) {
            return (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Spin size="large" />
                </div>
            );
        }

        if (error) {
            console.error(error);
            return (
                <>
                    <Title level={3} style={{ textAlign: 'center' }}>
                        ERROR While Loading Warnings!
                    </Title>
                </>
            );
        }

        if (!warningList || warningList.length === 0) {
            return (
                <Title level={3} style={{ textAlign: 'center' }}>
                    No Warnings for now
                </Title>
            );
        }

        return (
            <>
                <Title level={3} style={{ textAlign: 'center' }}>
                    These Annotations require your attention!
                </Title>
                <AnnotationList annotations={warningList} />
            </>
        );
    };

    return (
        <Modal
            title={
                <Title level={2} style={{ textAlign: 'center' }}>
                    {isLoading
                        ? 'Loading...'
                        : error
                        ? 'ERROR!'
                        : !warningList || warningList.length === 0
                        ? 'No Warnings'
                        : 'WARNING!'}
                </Title>
            }
            open={props.open}
            onCancel={closeModal}
            onOk={closeModal}
            width={1000}
            footer={
                    <Button
                        size="large"
                        shape="round"
                        onClick={closeModal}
                        icon={<ArrowRightOutlined />}
                    >
                        Skip
                    </Button>
            }
        >
            {renderModalContent()}
        </Modal>
    );
}