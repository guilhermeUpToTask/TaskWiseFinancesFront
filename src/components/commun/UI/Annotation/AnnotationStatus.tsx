import React from 'react';
import { AnnotationStatus } from '../../../../lib/types';
import { ANN_STATUS_LIST } from '../../../../lib/constants/annotations';
import { WarningOutlined, WarningFilled, CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import { Dayjs } from 'dayjs';

interface IAnnotationStatusProps {
    status: AnnotationStatus,
    checked_date?: Dayjs // for later implementations
}

export default function AnnotationStatus(props: IAnnotationStatusProps): React.ReactElement {
    const pendentStyle: React.CSSProperties = {
        fontWeight: 'bold',
        color: 'yellow',
    }



    const StatusTypeMap = {
        [ANN_STATUS_LIST.PENDENT_STATUS]:
            <span style={pendentStyle}><WarningOutlined /> Pendent</span>,
        [ANN_STATUS_LIST.EXPIRED_STATUS]:
            <span style={pendentStyle}><WarningFilled /> Expired</span>,
        [ANN_STATUS_LIST.PAYED_STATUS]:
            <span style={pendentStyle}><CheckCircleFilled /> Payed</span>,
        [ANN_STATUS_LIST.RECIVED_STATUS]:
            <span style={pendentStyle}><CheckCircleOutlined /> Recived</span>
    }


    return (
        <>
            {StatusTypeMap[props.status]}
        </>)
}