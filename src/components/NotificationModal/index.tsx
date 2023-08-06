import React, { useEffect, useState } from 'react';
import { Typography, Modal, message, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';
import type { Annotation } from '../../lib/types';
import fetchWarnings from './fetchWarnings';
import WarningAnnotations from './WarningAnnotations';

const { Title } = Typography;

export default function NotificationModal(): React.ReactElement {
    const { data: warningList, isLoading, error } = useQuery<Annotation[]>('warnings', fetchWarnings);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(warningList, 'list');
        if (warningList && warningList.length > 0 && !open && !isLoading) {
            setOpen(true);
        }
    }, [isLoading]);

    const closeModal = () => {
        setOpen(false);
    }

    if (isLoading) {
        return <></>;
    }

    if (!warningList || warningList.length === 0) {

        return (
            <Modal
                title={
                    <Title level={2} style={{ textAlign: 'center' }}>
                        NO WARNINGS FOR NOW!
                    </Title>
                }
                open={open}
                onCancel={closeModal}
                width={1000}

            >
            </Modal>
        )
    }

    if (error) {
        console.error(error);

        return (
            <Modal
                title={
                    <Title level={2} style={{ textAlign: 'center' }}>
                        ERROR WHILE LOADING THE WARNINGS!
                    </Title>
                }
                open={open}
                onCancel={closeModal}
                onOk={closeModal}
                width={1000}
                footer={
                    <Button size='large' shape='round' onClick={closeModal} icon={<ArrowRightOutlined />}>
                        Skip
                    </Button>
                }
            >
            </Modal>)
    }



    return (
        <Modal
            title={
                <Title level={2} style={{ textAlign: 'center' }}>
                    WARNING!
                </Title>
            }
            open={open}
            onCancel={closeModal}
            onOk={closeModal}
            width={1000}
            footer={<Button size='large' shape='round' onClick={closeModal} icon={<ArrowRightOutlined />}>Skip</Button>}
        >
            <Title level={3} style={{ textAlign: 'center' }}>
                These Annotations require your attention!
            </Title>
            <WarningAnnotations warningList={(warningList) ? warningList : []} />
        </Modal>
    )
}