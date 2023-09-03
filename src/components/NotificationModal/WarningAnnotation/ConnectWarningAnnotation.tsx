import React from 'react';
import axiosInstance from '../../../axiosInstance';
import { Annotation } from '../../../lib/types';
import WarningAnnotation from '.';
import useWarningsQuery from '../../../hooks/useWarningsQuery';

interface IConnectWarningAnnotation {
    annotation: Annotation;
    prev: () => void;
    next: () => void;
}

export default function ConnectWarningAnnotation(props: IConnectWarningAnnotation): React.ReactElement {

    const { refetch: warningsRefetch }
        = useWarningsQuery();


    const [isLoading, setIsLoading] = React.useState(false);

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
            const { data: { data, error, message } } =
                await axiosInstance.put('/annotation/confirm_status', payload);
            if (error) throw new Error(message);

            console.log('Successful status confirmed: ', data, message);
            warningsRefetch();
            props.next();

            setIsLoading(false);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    return (<WarningAnnotation
        annotation={props.annotation}
        prev={props.prev}
        next={props.next}
        onConfirmStatus={onConfirmStatusHandler}
        isLoading={isLoading}
    />);
}