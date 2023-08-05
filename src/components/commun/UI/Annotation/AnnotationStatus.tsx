import React from 'react';
import { AnnotationStatus } from '../../../../lib/types';
import * as ANN_CONSTANTS from '../../../../lib/constants/annotations';
import { YELLOW, RED, GREEN } from '../../../../lib/constants/colors';
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
            <span style={{fontWeight: 'bold', color: YELLOW}}><WarningOutlined /> Pendent</span>,
        [ANN_CONSTANTS.EXPIRED_STATUS]:
            <span style={{fontWeight: 'bold', color: RED}}><WarningFilled /> Expired</span>,
        [ANN_CONSTANTS.PAYED_STATUS]:
            <span style={{fontWeight: 'bold', color: GREEN}}><CheckCircleFilled /> Payed</span>,
        [ANN_CONSTANTS.RECIVED_STATUS]:
            <span style={{fontWeight: 'bold', color: GREEN}}><CheckCircleOutlined /> Recived</span>
    }


    return (
        <>
            {StatusTypeMap[props.status]}
        </>)
}