import CreateAnnotation from "./CreateAnnotation";
import { NewAnnotation } from "../../../../../lib/types";
import React from 'react';
import { Dayjs } from "dayjs";
import useAnnotationsByMonth from "../../../../../hooks/useAnnotationsByMonth";
import { bulkCreateAnnotation, createAnnotation } from "../../../../../services/annotations";
import useWarningsByDate from "../../../../../hooks/useWarningsByPredDate";

interface IConnectCreateAnnotation {
    selectedDate: Dayjs,
    messageFns: {
        onLoading: () => void;
        onSuccess: () => void;
        onError: () => void;
    }
}

export default function ConnectCreateAnnotation(props: IConnectCreateAnnotation): React.ReactElement {
    const [isLoading, setIsLoading] = React.useState(false);

    const { refetch: annRefetch }
        = useAnnotationsByMonth(props.selectedDate);
    const { refetch: warningsRefetch }
        = useWarningsByDate();

    async function connectCreate(newAnnotation: NewAnnotation, quantity: number): Promise<boolean> {
        try {
            setIsLoading(true);
            props.messageFns.onLoading();

            (quantity <= 1) ?
                await createAnnotation(newAnnotation) : await bulkCreateAnnotation(newAnnotation, quantity);

            annRefetch();
            warningsRefetch();

            setIsLoading(false);
            props.messageFns.onSuccess();
            return true;

        } catch (e) {
            setIsLoading(false);
            props.messageFns.onError();
            return false;
        }
    }

    return (
        <CreateAnnotation selectedDate={props.selectedDate} connectCreate={connectCreate} isLoading={isLoading} />
    )
}
