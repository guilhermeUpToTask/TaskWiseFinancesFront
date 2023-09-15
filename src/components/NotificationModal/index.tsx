import React, { useEffect } from 'react';
import { Typography, Modal, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import WarningAnnotations from './WarningAnnotations';
import useWarningsQuery from '../../hooks/useWarningsQuery';
import ConnectWarningAnnotation from './WarningAnnotation/ConnectWarningAnnotation';

const { Title } = Typography;

interface INotificationModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NotificationModal(props : INotificationModal): React.ReactElement {
    const { data: warningList, isLoading, error } = useWarningsQuery();


    //need to refactor this useEffect later
    useEffect(() => {
        if (warningList && warningList.length > 0 && !isLoading) {
            props.setOpen(true);
        }
    }, [isLoading, warningList]);

    const closeModal = () => {
        props.setOpen(false);
    }

    const displayWarningList = () => {
        if (warningList && warningList.length > 1) {
            return (
                <WarningAnnotations warningList={(warningList) ? warningList : []} />
            )
        } else if (warningList && warningList.length === 1 && warningList[0]) {
            return <ConnectWarningAnnotation annotation={warningList[0]} />
        }
    }


    if (isLoading) {
        return <></>;
    }

    if (!warningList || warningList.length === 0 && !warningList[0]) {

        return (
            <Modal
                title={
                    <Title level={2} style={{ textAlign: 'center' }}>
                        NO WARNINGS FOR NOW!
                    </Title>
                }
                open={props.open}
                onCancel={closeModal}
                onOk={closeModal}
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
                open={props.open}
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
            open={props.open}
            onCancel={closeModal}
            onOk={closeModal}
            width={1000}
            footer={<Button size='large' shape='round' onClick={closeModal} icon={<ArrowRightOutlined />}>Skip</Button>}
        >
            <Title level={3} style={{ textAlign: 'center' }}>
                These Annotations require your attention!
            </Title>
            {displayWarningList()}
        </Modal>
    )
}