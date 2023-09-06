import React from 'react';
import { Annotation, AnnotationType } from '../../../../../lib/types';
import BillCard from './BillCard';
import PaymentCard from './PaymentCard';
import useAnnotationsByMonth from '../../../../../hooks/useAnnotationsByMonth';
import useOperationsByMonth from '../../../../../hooks/useOperationsByMonth';
import useWalletQuery from '../../../../../hooks/useWalletQuery';
import { confirmStatus, deleteAnnotation } from '../../../../../services/annotations';

import dayjs from 'dayjs';

interface IConnectAnnotationCard {
    annotation: Annotation;
    annon_type: AnnotationType;
    messageFns: {
        onLoading: (key: 'confirm' | 'delete') => void;
        onSuccess: (key: 'confirm' | 'delete') => void;
        onError: (key: 'confirm' | 'delete') => void;
    };
}

export default function ConnectAnnotationCard(props: IConnectAnnotationCard): React.ReactElement {

    const { refetch: AnnotationsRefetch }
        = useAnnotationsByMonth(dayjs(props.annotation.date));
    const { refetch: operationsRefetch }
        = useOperationsByMonth(dayjs(props.annotation.date));
    const { refetch: walletRefetch }
        = useWalletQuery();

    const [isLoading, setIsLoading] = React.useState(false);

    const refetchAll = (): void => {
        AnnotationsRefetch();
        operationsRefetch();
        walletRefetch();
    }

    const onConfirmStatusHandler = async (): Promise<void> => {
        try {
            const payload = {
                id: props.annotation.id,
                name: props.annotation.name,
                status: props.annotation.status,
                value: props.annotation.value,
                annon_type: props.annotation.annon_type,
            };

            setIsLoading(true);
            props.messageFns.onLoading('confirm');

            await confirmStatus(payload);

            refetchAll();
            props.messageFns.onSuccess('confirm');
            setIsLoading(false);

        } catch (error) {
            props.messageFns.onError('confirm');
            setIsLoading(false);
        }
    }

    const onDeleteAnnotationHandler = async (): Promise<void> => {
        try {
            props.messageFns.onLoading('delete');

            await deleteAnnotation(props.annotation.id);

            refetchAll();
            props.messageFns.onSuccess('delete');

        } catch (error) {
            props.messageFns.onError('delete');
        }
    }

    if (props.annon_type === 'bill') {
        return (<BillCard
            annotation={props.annotation}
            onPay={onConfirmStatusHandler}
            onDelete={onDeleteAnnotationHandler}
            isLoading={isLoading}
        />);
    }
    else {
        return (<PaymentCard
            annotation={props.annotation}
            onRecived={onConfirmStatusHandler}
            onDelete={onDeleteAnnotationHandler}
            isLoading={isLoading}
        />);
    }
}