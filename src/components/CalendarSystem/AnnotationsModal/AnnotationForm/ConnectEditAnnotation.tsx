import EditAnnotation from "./EditAnnotation";
import axiosInstance from "../../../../axiosInstance";
import { NewAnnotation, Annotation } from "../../../../lib/types";
import React from 'react';
import { useQuery } from "react-query";
import dayjs from "dayjs";
import fetchAnnotationsByMonth from "../../fetchAnnotationsByMonth";

interface IConnectCreateAnnotation {
    annotation: Annotation;
    toggleEditForm: () => void;
}

export default function ConnectEditAnnotation(props: IConnectCreateAnnotation): React.ReactElement {
    const [clearForm, setClearForm] = React.useState(false); // later we will implement it
    const year = dayjs(props.annotation.date).year();
    const month = dayjs(props.annotation.date).month() + 1;

//need to add the refetch to the operation
    const { refetch }
        = useQuery<Annotation[]>({
            queryKey: ['annotations', year, month],
            queryFn: () => fetchAnnotationsByMonth(year, month),
        });


    async function connect(updatedAnnotation: Annotation) {
        try {
            console.log("Annotation to be edited", updatedAnnotation);
            const { data: { error } } = await axiosInstance.put("/annotation/update", updatedAnnotation);
            if (error) throw new Error(error);
            console.log("Annotation edited");
            refetch();
            setClearForm(true);
            props.toggleEditForm();

        } catch (e) {
            console.error(e);

        }
    }

    return (
        <EditAnnotation annotation={props.annotation} connect={connect} />
    )
}
