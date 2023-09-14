import React from 'react';

import { Annotation } from '../../../lib/types';
import WarningAnnotation from '.';
import useWarningsQuery from '../../../hooks/useWarningsQuery';
import { confirmStatus } from '../../../services/annotations';

interface IConnectWarningAnnotation {
    annotation: Annotation;
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

            await confirmStatus(payload);

            warningsRefetch();

            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
        }
    }

    return (<WarningAnnotation
        annotation={props.annotation}
        onConfirmStatus={onConfirmStatusHandler}
        isLoading={isLoading}
    />);
}