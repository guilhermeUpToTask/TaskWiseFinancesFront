import React from 'react';
import axiosInstance from '../../../axiosInstance';
import { useQuery } from 'react-query';
import { Annotation } from '../../../lib/types';
import fetchWarnings from '../fetchWarnings';
import WarningAnnotation from '.';

interface IConnectWarningAnnotation {
    annotation: Annotation;
    prev: () => void;
    next: () => void;
}

export default function ConnectWarningAnnotation(props: IConnectWarningAnnotation): React.ReactElement {

    const { refetch: warningsRefetch }
        = useQuery<Annotation[]>({
            queryKey: ['warnings'],
            queryFn: fetchWarnings,
        });


    const onConfirmStatusHandler = async (): Promise<void> => {
        try {
            const payload = {
                id: props.annotation.id,
                name: props.annotation.name,
                status: props.annotation.status,
                value: props.annotation.value,
                annon_type: props.annotation.annon_type,
            };

            const { data: { data, error, message } } =
                await axiosInstance.put('/annotation/confirm_status', payload);
            if (error) throw new Error(message);

            console.log('Successful status confirmed: ', data, message);
            warningsRefetch();
            props.next();


        } catch (error) {
            console.log(error);
        }
    }

    return (<WarningAnnotation
        annotation={props.annotation}
        prev={props.prev}
        next={props.next}
        onConfirmStatus={onConfirmStatusHandler}
    />);
}