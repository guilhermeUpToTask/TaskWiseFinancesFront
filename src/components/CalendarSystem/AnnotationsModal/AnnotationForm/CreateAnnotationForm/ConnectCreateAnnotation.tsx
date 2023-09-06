import CreateAnnotation from "./CreateAnnotation";
import { NewAnnotation } from "../../../../../lib/types";
import React from 'react';
import { Dayjs } from "dayjs";
import useAnnotationsByMonth from "../../../../../hooks/useAnnotationsByMonth";
import { createAnnotation } from "../../../../../services/annotations";

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

    const { refetch }
        = useAnnotationsByMonth(props.selectedDate);


    async function connect(newAnnotation: NewAnnotation): Promise<boolean> {
        try {
            setIsLoading(true);
            props.messageFns.onLoading();

            await createAnnotation(newAnnotation);

            console.log("Annotation created");
            refetch();
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
        <CreateAnnotation selectedDate={props.selectedDate} connect={connect} isLoading={isLoading} />
    )
}
