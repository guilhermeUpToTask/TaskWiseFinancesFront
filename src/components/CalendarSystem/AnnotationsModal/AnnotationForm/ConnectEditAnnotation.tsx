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
    const [clearForm, setClearForm] = React.useState(false); // later we will implement it


    console.log(clearForm); //just to build

//need to add the refetch to the operation
    const { refetch }
        = useAnnotationsByMonth(dayjs(props.annotation.date));



    async function connect(updatedAnnotation: Annotation) {
        try {
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
