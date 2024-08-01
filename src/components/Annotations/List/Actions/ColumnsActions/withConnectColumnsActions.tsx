import React from 'react';


/*
interface IConnectAnnotationCard {
    annotation: Annotation;
    messageFns: {
        onLoading: (key: 'confirm' | 'delete') => void;
        onSuccess: (key: 'confirm' | 'delete') => void;
        onError: (key: 'confirm' | 'delete') => void;
    };
}
 */

export default function ConnectAnnotationCard(): React.ReactElement {


/*
    const refetchAll = useRefetchAll(dayjs(props.annotation.date));
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
*/


    return (
        <></>
    );

}