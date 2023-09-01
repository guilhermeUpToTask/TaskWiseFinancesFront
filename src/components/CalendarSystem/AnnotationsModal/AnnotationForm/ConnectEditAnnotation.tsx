import EditAnnotation from "./EditAnnotation";
import axiosInstance from "../../../../axiosInstance";
import { Annotation } from "../../../../lib/types";
import React from 'react';
import useAnnotationsByMonth from "../../../../hooks/useAnnotationsByMonth";
import dayjs from "dayjs";

interface IConnectCreateAnnotation {
    annotation: Annotation;
    toggleEditForm: () => void;
}

export default function ConnectEditAnnotation(props: IConnectCreateAnnotation): React.ReactElement {
    const [isLoading, setIsLoading] = React.useState(false);

//need to add the refetch to the operation
    const { refetch }
        = useAnnotationsByMonth(dayjs(props.annotation.date));


    async function connect(updatedAnnotation: Annotation) {
        try {
            setIsLoading(true);

            const { data: { error } } = await axiosInstance.put("/annotation/update", updatedAnnotation);
            if (error) throw new Error(error);

            console.log("Annotation edited");
            refetch();
            setIsLoading(false);
            props.toggleEditForm();

        } catch (e) {
            console.error(e);
            setIsLoading(false);

        }
    }

    return (
        <EditAnnotation annotation={props.annotation} connect={connect} isLoading={isLoading}/>
    )
}
