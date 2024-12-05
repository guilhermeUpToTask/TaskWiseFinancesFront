import React from "react";
import { Card, ConfigProvider, Typography } from 'antd';
import { Annotation, UpdateAnnotation } from "../../../../client/models/annotationModel";
import { DeleteButton, EditButton } from "./CardsActions";
import AnnotationBttn from "../../../commun/UI/Annotation/AnnotationBttn";
import AnnotationStatus from "../../../commun/UI/Annotation/AnnotationStatus";
import { AnnotationStatus as AnnotationStatusType } from "../../../../lib/types";
import { useMutationWithMessage } from "../../../../hooks/useMutationWithMessage";
import AnnotationService, { TDataDeleteAnnotation, TDataUpdateAnnotation } from "../../../../client/services/annotationService";
import EditAnnotationForm from "../AnnotationForm/EditAnnotationForm";


const { Meta } = Card;
const { Title } = Typography;

interface IAnnotationCard {
    annotation: Annotation,
}

const AnnotationTypeToStatus:{[key: string]:AnnotationStatusType} = {
    'bill': 'payed',
    'payment': 'recived'
}
const AnnotationTypeToColor = {
    'bill': 'red',
    'payment': 'green'
}

export default function AnnotationCard(props: IAnnotationCard): React.ReactElement {
    const mainColor = AnnotationTypeToColor[props.annotation.type]

    const {mutate} = useMutationWithMessage<TDataDeleteAnnotation, Annotation>({
        serviceFunction:AnnotationService.deleteAnnotation,
    });
    const {mutate:confirmMutate, isLoading: onConfirmIsLoading} = useMutationWithMessage<TDataUpdateAnnotation, Annotation>({
        serviceFunction: AnnotationService.updateAnnotation,
    })


    const [showEdit, setShowEdit] = React.useState(false);

    const onDelete = () => {
       mutate({id:props.annotation.id})
    }

    const onConfirm = () =>{
        const status = AnnotationTypeToStatus[props.annotation.type]
        if (status) {
        const newAnnotation: UpdateAnnotation ={...props.annotation, status}
        confirmMutate({id:props.annotation.id,body:newAnnotation})
    }
    }

    const onEdit = () => {
        setShowEdit(!showEdit);
    }

    const displayEditForm = () => {
        return (showEdit) ?
               <EditAnnotationForm annotation={props.annotation} />
         : null;
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: mainColor,
                },
            }}
        >
            <Card style={{ marginTop: 16, borderColor: mainColor }}

                actions={
                    [< EditButton onClick={onEdit} />,
                    <AnnotationBttn
                        onClick={onConfirm}
                        type={props.annotation.type}
                        disabled={props.annotation.status === 'recived' || props.annotation.status === 'payed'}
                        isLoading={onConfirmIsLoading}
                    />,
                    <DeleteButton onClick={onDelete} />,
                    ]} >
                <Meta
                    title={<Title level={3} style={{ textAlign: 'center', color: mainColor }}>{props.annotation.name}</Title>}
                    description={props.annotation.description}
                />
                <Title level={4}>Current {props.annotation.type}: <span style={{ color: mainColor, fontWeight: 'bold' }}>${props.annotation.value}</span></Title>
                <Title level={4}>Current Status: <AnnotationStatus status={props.annotation.status} /></Title>
            </Card>

            {displayEditForm()}

        </ConfigProvider>
    )
}