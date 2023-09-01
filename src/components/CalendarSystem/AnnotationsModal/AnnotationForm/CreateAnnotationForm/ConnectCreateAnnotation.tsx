import CreateAnnotation from "./CreateAnnotation";
import axiosInstance from "../../../../../axiosInstance";
import { NewAnnotation } from "../../../../../lib/types";
import React from 'react';
import { Dayjs } from "dayjs";
import useAnnotationsByMonth from "../../../../../hooks/useAnnotationsByMonth";

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


    async function connect(newAnnotation: NewAnnotation) {
        try {
            setIsLoading(true);
            props.messageFns.onLoading();

            const { data: { error } } = await axiosInstance.post("/annotation/create", newAnnotation);

            if (error) throw new Error(error);

            console.log("Annotation created");
            refetch();
            setIsLoading(false);
            props.messageFns.onSuccess();



        } catch (e) {
            console.error(e);
            setIsLoading(false);
            props.messageFns.onError();

        }
    }

    return (
        <CreateAnnotation selectedDate={props.selectedDate} connect={connect} isLoading={isLoading} />
    )
}
