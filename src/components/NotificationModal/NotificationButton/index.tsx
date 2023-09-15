import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import NotificationModal from '..';
import { BellOutlined } from '@ant-design/icons';

export default function NotificationButton(): React.ReactElement {
    const [openModal, setOpenModal] = useState(false);

    const onClickHandler = () => {
        setOpenModal(prev => !prev);
    }


    return (
        <>
            <Tooltip title="Open Notifications" color='rgb(72, 191, 145)'>
                <Button onClick={onClickHandler}
                    type="text"
                    shape="round"
                    size="large"
                    icon={<BellOutlined />}
                    style={{ fontWeight: '600', fontSize: '1.1rem' }}
                >
                    Notifications
                </Button>
            </Tooltip>
            <NotificationModal open={openModal} setOpen={setOpenModal} />
        </>

    )
}