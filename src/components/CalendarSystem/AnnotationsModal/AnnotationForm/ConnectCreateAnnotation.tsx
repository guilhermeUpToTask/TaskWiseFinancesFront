import CreateAnnotation from "./CreateAnnotation";
import axiosInstance from "../../../../axiosInstance";
import { NewAnnotation, Annotation } from "../../../../lib/types";
import React from 'react';
import { Dayjs } from "dayjs";
import { useQuery } from "react-query";
import fetchAnnotationsByMonth from "../../fetchAnnotationsByMonth";

interface IConnectCreateAnnotation {
    selectedDate: Dayjs
}

export default function ConnectCreateAnnotation(props: IConnectCreateAnnotation): React.ReactElement {
    const [clearForm, setClearForm] = React.useState(false); // later we will implement it
    const year = props.selectedDate.year()
    const month = props.selectedDate.month() + 1;


    const { refetch }
        = useQuery<Annotation[]>({
            queryKey: ['annotations', year, month],
            queryFn: () => fetchAnnotationsByMonth(year, month),
        });


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
