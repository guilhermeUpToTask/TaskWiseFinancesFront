import React from "react";
import {Card, ConfigProvider, Typography  } from 'antd';
import {EditButton, DeleteButton} from "./CardsActions";
import AnnotationBttn from "../../../../commun/UI/Annotation/AnnotationBttn";
import AnnotationStatus from "../../../../commun/UI/Annotation/AnnotationStatus";
import type { Annotation } from "../../../../../lib/types";
import EditAnotation from "../../AnnotationForm/EditAnnotation";
const { Meta } = Card;
const { Title } = Typography;

interface IPaymentCardProps {
    annotation: Annotation
}

export default function PaymentCard(props: IPaymentCardProps): React.ReactElement{
    const [showEdit, setShowEdit] = React.useState(false);

    const onDelete = () => {
        console.log('delete', props.annotation.id);
    }
    const onPay = () => {
        console.log('payed', props.annotation.id);
    }

    const onEdit = () => {
        setShowEdit(!showEdit);
    }

    const displayEditForm = () => {
        return (showEdit ) ?
        <EditAnotation annotation={props.annotation} />
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
        [    < EditButton onClick={onEdit}/>,
        <AnnotationBttn onClick={onPay} type={props.annotation.type}/>,
            <DeleteButton onClick={onDelete}/>,
        ]} >
        <Meta
            title={<Title level={3} style={{ textAlign: 'center', color: 'green'}}>{props.annotation.name}</Title>}
            description={props.annotation.description}
        />
        <Title level={4}>Current Bill: <span style={{color: 'green', fontWeight: 'bold'}}>${props.annotation.value}</span></Title>
        <Title level={4}>Current Status: <AnnotationStatus status={props.annotation.status} /></Title>
    </Card>
    
    {displayEditForm()}

    </ConfigProvider>
    )
}