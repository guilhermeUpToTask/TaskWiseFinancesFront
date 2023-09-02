import EditAnnotation from "./EditAnnotation";
import axiosInstance from "../../../../../axiosInstance";
import { Annotation } from "../../../../../lib/types";
import React from 'react';
import useAnnotationsByMonth from "../../../../../hooks/useAnnotationsByMonth";
import dayjs from "dayjs";

interface IConnectCreateAnnotation {
    annotation: Annotation;
    messageFns: {
        onLoading: () => void;
        onSuccess: () => void;
        onError: () => void;
    }
}

export default function ConnectEditAnnotation(props: IConnectCreateAnnotation): React.ReactElement {
    const [isLoading, setIsLoading] = React.useState(false);


    const { refetch }
        = useAnnotationsByMonth(dayjs(props.annotation.date));


    async function connect(updatedAnnotation: Annotation) {
        try {
            setIsLoading(true);
            props.messageFns.onLoading();

            const { data: { error } } = await axiosInstance.put("/annotation/update", updatedAnnotation);
            if (error) throw new Error(error);

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
        <EditAnnotation annotation={props.annotation} connect={connect} isLoading={isLoading} />
    )
}
