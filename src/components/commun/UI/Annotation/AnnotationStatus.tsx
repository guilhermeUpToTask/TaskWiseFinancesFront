import React from 'react';
import { AnnotationStatus } from '../../../../lib/types';
import * as ANN_CONSTANTS from '../../../../lib/constants/annotations';
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
        [ANN_CONSTANTS.PENDENT_STATUS]:
            <span style={pendentStyle}><WarningOutlined /> Pendent</span>,
        [ANN_CONSTANTS.EXPIRED_STATUS]:
            <span style={pendentStyle}><WarningFilled /> Expired</span>,
        [ANN_CONSTANTS.PAYED_STATUS]:
            <span style={pendentStyle}><CheckCircleFilled /> Payed</span>,
        [ANN_CONSTANTS.RECIVED_STATUS]:
            <span style={pendentStyle}><CheckCircleOutlined /> Recived</span>
    }


    return (
        <>
            {StatusTypeMap[props.status]}
        </>)
}