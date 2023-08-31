import CreateAnnotation from "./CreateAnnotation";
import axiosInstance from "../../../../axiosInstance";
import { NewAnnotation } from "../../../../lib/types";
import React from 'react';
import { Dayjs } from "dayjs";
import useAnnotationsByMonth from "../../../../hooks/useAnnotationsByMonth";

interface IConnectCreateAnnotation {
    selectedDate: Dayjs
}

export default function ConnectCreateAnnotation(props: IConnectCreateAnnotation): React.ReactElement {
    const [clearForm, setClearForm] = React.useState(false); // later we will implement it

    console.log(clearForm); //just to build
    const { refetch }
        = useAnnotationsByMonth(props.selectedDate);


    async function connect(newAnnotation: NewAnnotation) {
        try {
            const { data: { error } } = await axiosInstance.post("/annotation/create", newAnnotation);
            if (error) throw new Error(error);
            console.log("Annotation created");
            refetch();
            setClearForm(true);

        } catch (e) {
            console.error(e);

        }
    }

    return (
        <CreateAnnotation selectedDate={props.selectedDate} connect={connect} />
    )
}
