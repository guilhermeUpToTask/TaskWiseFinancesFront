import React, { useState } from 'react';
import { Button } from 'antd';
import NotificationModal from '..';
import { BellOutlined } from '@ant-design/icons';

export default function NotificationButton(): React.ReactElement {
    const [openModal, setOpenModal] = useState(false);

    const onClickHandler = () => {
        setOpenModal(prev => !prev);
    }


    return (
        <>
                <Button onClick={onClickHandler}
                    type="text"
                    shape="round"
                    size="large"
                    icon={<BellOutlined />}
                    style={{fontWeight:'600', fontSize:'1.1rem'}}
                >
                    Notifications
                </Button>
                <NotificationModal open={openModal} setOpen={setOpenModal} />
        </>

    )
}