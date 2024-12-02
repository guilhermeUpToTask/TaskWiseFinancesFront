import React from "react";
import { Card, ConfigProvider, Typography } from 'antd';
import { Annotation } from "../../../../client/models/annotationModel";
import { DeleteButton, EditButton } from "./AnotationCards/CardsActions";
import AnnotationBttn from "../../../commun/UI/Annotation/AnnotationBttn";
import AnnotationStatus from "../../../commun/UI/Annotation/AnnotationStatus";
import { useMutationWithMessage } from "../../../../hooks/useMutationWithMessage";
import AnnotationService, { TDataDeleteAnnotation } from "../../../../client/services/annotationService";
import EditAnnotationForm from "../AnnotationForm/EditAnnotationForm";


const { Meta } = Card;
const { Title } = Typography;

interface IAnnotationCard {
    annotation: Annotation,
}


export default function AnnotationCard(props: IAnnotationCard): React.ReactElement {
    const mainColor = props.annotation.type === 'bill' ? 'red' : 'green';

    const {mutate, isLoading} = useMutationWithMessage<TDataDeleteAnnotation, Annotation>({
        serviceFunction:AnnotationService.deleteAnnotation,
        queryKey:'annotations'
    });


    const [showEdit, setShowEdit] = React.useState(false);

    const onDelete = () => {
       mutate({id:props.annotation.id})
    }
    const onRecived = () => {
        //props.onRecived();

        console.log('payed', props.annotation.id);
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
                        onClick={onRecived}
                        type={props.annotation.type}
                        disabled={props.annotation.status === 'recived' || props.annotation.status === 'payed'}
                        isLoading={isLoading}
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