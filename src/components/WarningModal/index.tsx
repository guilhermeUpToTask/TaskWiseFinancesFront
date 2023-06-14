import React, { useEffect, useState } from 'react';
import { Typography, Modal, message } from 'antd';
import { useQuery } from 'react-query';
import type { IAnotation } from '../../lib/types';

const { Title } = Typography;
const fetchWarnings = async (): Promise<IAnotation[] > => {
 return [];
}

export default function (): React.ReactElement {
    const { data: warningList, isLoading, error } = useQuery<IAnotation[]>('warnings', fetchWarnings);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (warningList && warningList.length > 0 && !open) {
            setOpen(true);
        }
    }, []);

    const closeModal = () => {

    }

    if (isLoading) {
        return <></>;
    }
    if (error) {
        console.error(error);

        // we should return a message error
        return(
        <Modal
        title={
            <Title level={2} style={{ textAlign: 'center' }}>
                ERROR WHILE LOADING THE WARNINGS!
            </Title>
        }
        open={true}
        width={1000}
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
        >
                <Title level={3} style={{ textAlign: 'center' }}>
                    These Annotations require your attention!
                </Title>
        </Modal>
    )
}