import React from "react";
import { Card, ConfigProvider, Typography } from 'antd';
import { EditButton, DeleteButton } from "./CardsActions";
import AnnotationBttn from "../../../../commun/UI/Annotation/AnnotationBttn";
import AnnotationStatus from "../../../../commun/UI/Annotation/AnnotationStatus";
import type { Annotation } from "../../../../../lib/types";
import WithMsgEditAnn from "../../AnnotationForm/EditAnnotationForm/WithMsgEditAnn";

const { Meta } = Card;
const { Title } = Typography;

interface BillCardProps {
    annotation: Annotation,
    onPay: () => Promise<void>
    onDelete: () => Promise<void>
}

export default function BillCard(props: BillCardProps): React.ReactElement {
    const [showEdit, setShowEdit] = React.useState(false);


    const onDelete = () => {
        props.onDelete();
        console.log('delete', props.annotation.id);
    }
    const onPay = () => {
        props.onPay();
        console.log('payed', props.annotation.id);
    }

    //we should have a click off target to close the edit form
    //but we dont have time to implement it
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
                    colorPrimary: 'red',
                },
            }}
        >
            <Card style={{ marginTop: 16, borderColor: 'red' }}

                actions={
                    [< EditButton onClick={onEdit} />,
                    <AnnotationBttn onClick={onPay}
                        type={props.annotation.annon_type}
                        disabled={(props.annotation.status === 'payed')}
                    />,
                    <DeleteButton onClick={onDelete} />,
                    ]} >
                <Meta
                    title={<Title level={3} style={{ textAlign: 'center', color: 'red' }}>{props.annotation.name}</Title>}
                    description={props.annotation.description}
                />
                <Title level={4}>Current Bill: <span style={{ color: 'red', fontWeight: 'bold' }}>${props.annotation.value}</span></Title>
                <Title level={4}>Current Status: <AnnotationStatus status={props.annotation.status} /></Title>
            </Card>
            {displayEditForm()}
        </ConfigProvider>
    )
}