import React from 'react';
import axiosInstance from '../../../../../axiosInstance';
import { Annotation, AnnotationType } from '../../../../../lib/types';
import BillCard from './BillCard';
import PaymentCard from './PaymentCard';
import useAnnotationsByMonth from '../../../../../hooks/useAnnotationsByMonth';
import useOperationsByMonth from '../../../../../hooks/useOperationsByMonth';
import useWalletQuery from '../../../../../hooks/useWalletQuery';

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

            props.messageFns.onLoading('confirm');
            const { data: { data, error, message } } =
                await axiosInstance.put('/annotation/confirm_status', payload);
            if (error) throw new Error(message);

            console.log('Successful status confirmed: ', data, message);
            refetchAll();
            props.messageFns.onSuccess('confirm');


        } catch (error) {
            console.error(error);
            props.messageFns.onError('confirm');
        }
    }

    const onDeleteAnnotationHandler = async (): Promise<void> => {
        try {
            props.messageFns.onLoading('delete');

            const { data: { data, error, message } } =
                await axiosInstance.delete(`/annotation/delete?annotation_id=${props.annotation.id}`);
            if (error) throw new Error(message);

            console.log('Successful annotation deleted: ', data, message);
            refetchAll();
            props.messageFns.onSuccess('delete');

        } catch (error) {
            console.log(error);
            props.messageFns.onError('delete');
        }
    }

    if (props.annon_type === 'bill') {
        return (<BillCard
            annotation={props.annotation}
            onPay={onConfirmStatusHandler}
            onDelete={onDeleteAnnotationHandler}
        />);
    }
    else {
        return (<PaymentCard
            annotation={props.annotation}
            onRecived={onConfirmStatusHandler}
            onDelete={onDeleteAnnotationHandler}
        />);
    }
}