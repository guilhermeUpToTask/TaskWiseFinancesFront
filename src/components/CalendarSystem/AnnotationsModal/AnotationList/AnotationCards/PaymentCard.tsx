import React from "react";
import { Card, ConfigProvider, Typography } from 'antd';
import { EditButton, DeleteButton } from "./CardsActions";
import AnnotationBttn from "../../../../commun/UI/Annotation/AnnotationBttn";
import AnnotationStatus from "../../../../commun/UI/Annotation/AnnotationStatus";
import type { Annotation } from "../../../../../lib/types";
import WithMsgEditAnn from "../../AnnotationForm/EditAnnotationForm/WithMsgEditAnn";
const { Meta } = Card;
const { Title } = Typography;

interface IPaymentCardProps {
    annotation: Annotation,
    isLoading: boolean,
    onRecived: () => Promise<void>,
    onDelete: () => Promise<void>,
}

export default function PaymentCard(props: IPaymentCardProps): React.ReactElement {
    const [showEdit, setShowEdit] = React.useState(false);

    const onDelete = () => {
        props.onDelete();
        console.log('delete', props.annotation.id);
    }
    const onRecived = () => {
        props.onRecived();

        console.log('payed', props.annotation.id);
    }

    const onEdit = () => {
        setShowEdit(!showEdit);
    }

    const displayEditForm = () => {
        return (showEdit) ?
            <WithMsgEditAnn annotation={props.annotation} />
            : null;
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'green',
                },
            }}
        >
            <Card style={{ marginTop: 16, borderColor: 'green' }}

                actions={
                    [< EditButton onClick={onEdit} />,
                    <AnnotationBttn
                        onClick={onRecived}
                        type={props.annotation.annon_type}
                        disabled={(props.annotation.status === 'recived')}
                        isLoading={props.isLoading}
                    />,
                    <DeleteButton onClick={onDelete} />,
                    ]} >
                <Meta
                    title={<Title level={3} style={{ textAlign: 'center', color: 'green' }}>{props.annotation.name}</Title>}
                    description={props.annotation.description}
                />
                <Title level={4}>Current Bill: <span style={{ color: 'green', fontWeight: 'bold' }}>${props.annotation.value}</span></Title>
                <Title level={4}>Current Status: <AnnotationStatus status={props.annotation.status} /></Title>
            </Card>

            {displayEditForm()}

        </ConfigProvider>
    )
}